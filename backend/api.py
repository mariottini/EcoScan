from flask import Flask, request, jsonify

app = Flask(__name__)

# Using a fake db until real db is not ready
fake_db = [
    {"email": "user1@example.com", "password": "1234"},
    {"email": "user2@example.com", "password": "5678"},
]
tokens = {}


@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Campi obbligatori mancanti."}), 400

    # Check if user exists in fake db
    # next() returns the first user with correct email and password
    user = next(
        (u for u in fake_db if u["email"] == email and u["password"] == password), None
    )

    if user:
        token = f"fake-token-{email}"
        tokens[token] = email
        return jsonify({"message": "Login riuscito!", "token": token}), 200
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

    # Check if user already exists in fake db
    if any(u["email"] == email for u in fake_db):
        return jsonify({"error": "L'utente esiste già."}), 409

    # Add user in fake db
    fake_db.append(
        {"name": name, "surname": surname, "email": email, "password": password}
    )

    return jsonify({"message": "Registrazione riuscita!"}), 201


@app.route("/profile", methods=["GET"])
def profile():
    token = request.headers.get("Authorization")

    if not token or token not in tokens:
        return jsonify({"error": "Accesso negato, token mancante o non valido."}), 401

    email = tokens[token]
    user = next((u for u in fake_db if u["email"] == email), None)

    if not user:
        return jsonify({"error": "Utente non trovato"}), 404

    return (
        jsonify(
            {"name": user["name"], "surname": user["surname"], "email": user["email"]}
        ),
        200,
    )


if __name__ == "__main__":
    app.run(debug=True)
