import pymysql
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_db_connection():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="ecoscan",
        cursorclass=pymysql.cursors.DictCursor,
    )


@app.route("/get-user/<int:id_user>", methods=["GET"])
def get_user(id_user):
    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM user WHERE id_user = %s", (id_user))
        user = cursor.fetchone()
    connection.close()

    if user:
        return jsonify(user), 200
    else:
        return jsonify({"error": "Utente non trovato"}), 404


@app.route("/get-user", methods=["GET"])
def get_users():
    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM user")
        users = cursor.fetchall()
    connection.close()

    if users:
        return jsonify(users), 200
    else:
        return jsonify({"error": "Utenti non trovati"}), 404


@app.route("/get-trash", methods=["GET"])
def get_trash_all():
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM trash")
        trash = cursor.fetchall()
    connection.close()

    if trash:
        return jsonify(trash), 200
    else:
        return jsonify({"error": "Rifiuto non trovato"}), 404


@app.route("/get-trash/<string:query>", methods=["GET"])
def get_trash(query):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT trash.* FROM trash "
            "JOIN category ON trash.id_category = category.id_category "
            "WHERE trash.name LIKE %s OR category.name LIKE %s",
            (f"%{query}%", f"%{query}%"),
        )
        trash = cursor.fetchall()
    connection.close()

    if trash:
        return jsonify(trash), 200
    else:
        return jsonify({"error": "Rifiuto non trovato"}), 404


@app.route("/get-advice", methods=["GET"])
def get_advices():
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM advice")
        advices = cursor.fetchall()
    connection.close()

    if advices:
        return jsonify(advices), 200
    else:
        return jsonify({"error": "Consigli non disponibili"}), 404


@app.route("/get-advice/<int:id_trash>", methods=["GET"])
def get_advice(id_trash):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM advice WHERE id_trash = %s", (id_trash))
        advices = cursor.fetchall()
    connection.close()

    if advices:
        return jsonify(advices), 200
    else:
        return jsonify({"error": "Consigli non disponibili"}), 404


@app.route("/get-city", methods=["GET"])
def get_cities():
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM city")
        cities = cursor.fetchall()
    connection.close()

    if cities:
        return jsonify(cities), 200
    else:
        return jsonify({"error": "Città non trovate"}), 404


@app.route("/get-city/<int:id_city>", methods=["GET"])
def get_city(id_city):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM city WHERE id_city = %s", (id_city))
        city = cursor.fetchone()
    connection.close()

    if city:
        return jsonify(city), 200
    else:
        return jsonify({"error": "Città non trovata"}), 404


@app.route("/get-category", methods=["GET"])
def get_categories():
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM category")
        categories = cursor.fetchall()
    connection.close()

    if categories:
        return jsonify(categories), 200
    else:
        return jsonify({"error": "Categorie non trovate"}), 404


@app.route("/get-category/<int:id_category>", methods=["GET"])
def get_category(id_category):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM category WHERE id_category = %s", (id_category))
        category = cursor.fetchone()
    connection.close()

    if category:
        return jsonify(category), 200
    else:
        return jsonify({"error": "Categorie non trovata"}), 404


@app.route("/get-week", methods=["GET"])
def get_weeks():
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM week")
        weeks = cursor.fetchall()
    connection.close()

    if weeks:
        return jsonify(weeks), 200
    else:
        return jsonify({"error": "Settimane non disponibili"}), 404


@app.route("/get-week/<int:id_week>", methods=["GET"])
def get_week(id_week):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM week WHERE id_week = %s", (id_week))
        week = cursor.fetchone()
    connection.close()

    if week:
        return jsonify(week), 200
    else:
        return jsonify({"error": "Settimana non trovata"}), 404


@app.route("/get-calendar", methods=["GET"])
def get_calendar_all():
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM calendar")
        calendar = cursor.fetchall()
    connection.close()

    if calendar:
        return jsonify(calendar), 200
    else:
        return jsonify({"error": "Impossibile ottenere calendario"}), 404


@app.route("/get-calendar/<int:id_city>", methods=["GET"])
def get_calendar(id_city):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM calendar WHERE id_city = %s", (id_city))
        calendar = cursor.fetchall()
    connection.close()

    if calendar:
        return jsonify(calendar), 200
    else:
        return jsonify({"error": "Calendario non trovato"}), 404


@app.route("/get-filedata/<int:id_filedata>", methods=["GET"])
def get_filedata(id_filedata):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM filedata WHERE id_filedata = %s", (id_filedata))
        file = cursor.fetchone()
    connection.close()

    if file:
        return jsonify(file), 200
    else:
        return jsonify({"error": "File dati non trovato"}), 404


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
            "SELECT * FROM user WHERE email = %s AND password = %s", (email, password)
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
            "INSERT INTO user (name, surname, email, password, id_city) VALUES (%s, %s, %s, %s, %s)",
            (name, surname, email, password, id_city),
        )
        id_user = cursor.lastrowid
    connection.commit()
    connection.close()

    return (
        jsonify(
            {
                "message": "Registrazione riuscita!",
                "user": {
                    "id_user": id_user,
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


@app.route("/insert-user_trash", methods=["POST"])
def insert_user_trash():
    data = request.json
    id_user = data.get("id_user")
    id_trash = data.get("id_trash")

    if not id_user:
        return jsonify({"error": "id_user mancante."}), 400

    if not id_trash:
        return jsonify({"error": "id_user mancante."}), 400

    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute(
            "INSERT INTO user_trash (id_user, id_trash) VALUES (%s, %s)",
            (id_user, id_trash),
        )
        connection.commit()
    connection.close()

    return (
        jsonify(
            {
                "message": f"Rifiuto {id_trash} scannerizzato da utente {id_user}!",
                "user_trash": {"id_user": id_user, "id_trash": id_trash},
            }
        ),
        201,
    )


@app.route("/get-user_trash-count/<int:id_user>", methods=["GET"])
def get_user_trash_count(id_user):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT COUNT(*) AS 'count_rifiuti' FROM user_trash WHERE id_user = %s",
            (id_user),
        )
        count = cursor.fetchone()
    connection.close()

    if count:
        return jsonify(count), 200
    else:
        return jsonify({"error": "Impossibile contare rifiuti scannerizzati"}), 404


@app.route("/get-user_trash-filter/<int:id_user>", methods=["GET"])
def get_user_trash_filter(id_user):
    connection = get_db_connection()

    with connection.cursor() as cursor:
        cursor.execute(
            "SELECT id_trash FROM user_trash WHERE id_user = %s",
            (id_user),
        )
        trash = cursor.fetchall()
    connection.close()

    if trash:
        return jsonify(trash), 200
    else:
        return (
            jsonify(
                {
                    "error": f"Impossibile ottenere i rifiuti scannerizzati dall'utente {id_user}"
                }
            ),
            404,
        )


if __name__ == "__main__":
    app.run(debug=True)
