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
            jsonify(
                {
                    "message": "Login riuscito!",
                    "token": "fake-jwt-token",
                    "user": {
                        "id": user["id_user"],
                        "name": user["name_user"],
                        "surname": user["surname_user"],
                        "email": user["email_user"],
                        "id_city": user["id_city"],
                    },
                }
            ),
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

    if not name or not surname or not email or not password:
        return jsonify({"error": "Campi obbligatori mancanti."}), 400

    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO user (name_user, surname_user, email_user, password_user, id_city) VALUES (%s, %s, %s, %s, %s)",
            (name, surname, email, password, 0),
        )
        user_id = cursor.lastrowid
    connection.commit()
    connection.close()

    return (
        jsonify(
            {
                "message": "Registrazione riuscita!",
                "new-user": {
                    "id": user_id,
                    "name": name,
                    "surname": surname,
                    "email": email,
                    "id_city": 0,
                },
            }
        ),
        201,
    )


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
