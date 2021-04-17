from flask import Flask, request, jsonify

# Initialze flask app
app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    user_data = request.get_json()
    items_bought = user_data['bought']
    items_sold = user_data['sold']

    return jsonify({'bought':items_bought, 'sold':items_sold})

if __name__ == "__main__":
    app.run(debug=True)