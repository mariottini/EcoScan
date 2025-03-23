import pymysql
from flask import Flask, request, jsonify

app = Flask(__name__)


def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="ecoscan",
        cursorclass=pymysql.cursors.DictCursor,
    )


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Campi obbligatori mancanti."}), 400

    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT * FROM user WHERE email_user = %s AND password_user = %s",
            (email, password),
        )
        user = cursor.fetchone()
    connection.close()

    if user:
        return (
            jsonify({"message": "Login riuscito!", "user": user}),
            200,
        )
    else:
        return jsonify({"error": "Credenziali non valide"}), 401


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    surname = data.get("surname")
    email = data.get("email")
    password = data.get("password")
    id_city = 1

    if not name or not surname or not email or not password:
        return jsonify({"error": "Campi obbligatori mancanti."}), 400

    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO user (name_user, surname_user, email_user, password_user, id_city) VALUES (%s, %s, %s, %s, %s)",
            (name, surname, email, password, id_city),
        )
        user_id = cursor.lastrowid
    connection.commit()
    connection.close()

    return (
        jsonify(
            {
                "message": "Registrazione riuscita!",
                "user": {
                    "id_user": user_id,
                    "name_user": name,
                    "surname_user": surname,
                    "email_user": email,
                    "password_user": password,
                    "id_city": id_city,
                },
            }
        ),
        201,
    )


@app.route("/update-city", methods=["PUT"])
def set_city():
    data = request.json
    id_user = data.get("id_user")
    id_city = data.get("id_city")

    if not id_user:
        return jsonify({"error": "id_user mancante."}), 400

    if not id_city:
        return jsonify({"error": "id_city mancante."}), 400

    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute(
            "UPDATE user SET id_city = %s WHERE id_user = %s",
            (id_city, id_user),
        )
        connection.commit()
    connection.close()

    return jsonify({"message": "Città aggiornata con successo!"}), 200


@app.route("/get-user/<int:id_user>", methods=["GET"])
def get_user(id_user):
    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM user WHERE id_user = %s", (id_user,))
        user = cursor.fetchone()
    connection.close()

    if user:
        return jsonify(user), 200
    else:
        return jsonify({"error": "Utente non trovato"}), 404


@app.route("/get-trash/<int:id_trash>", methods=["GET"])
def get_trash(id_trash):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM trash WHERE id_trash = %s", (id_trash,))
        trash = cursor.fetchone()
    connection.close()

    if trash:
        return jsonify(trash), 200
    else:
        return jsonify({"error": "Rifiuto non trovato"}), 404


if __name__ == "__main__":
    app.run(debug=True)
