from flask import Flask

app = Flask(__name__)

@app.route('/predict', methods=['post'])
def predictOptimumCrop():
    return "hello"

if __name__ == "__main__":
    print("Starting Python Flask Server")
    app.run(debug=True, port=5001)