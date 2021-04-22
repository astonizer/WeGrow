from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
import numpy as np
import pandas as pd
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import pickle

# Loading Optimum Crop Prediction Model
model_path = 'Crop-Prediction.pkl'
optimum_crop = pickle.load(open(model_path, 'rb'))

# Flask App
app = Flask(__name__)

CORS(app)

# Render optimum crop prediction page
@app.route("/predict", methods=["POST"])
@cross_origin()
def predictOptimumCrop():
    json_data = request.get_json()
    if request.method == 'POST':
        if not json_data:
            return jsonify({'mess' : 'missing JSON'}), 400

        print(json_data)

        N = int(json_data.get('nitrogen'))
        P = int(json_data.get('phosphorus'))
        K = int(json_data.get('potassium'))
        temperature = float(json_data.get('temperature'))
        humidity = float(json_data.get('humidity'))
        ph = float(json_data.get('ph'))
        rainfall = float(json_data.get('rainfall'))
    
        feather_input = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
        model_prediction = optimum_crop.predict(feather_input)
        prediction = model_prediction[0]

        return jsonify({'message' : "crop prediction", 'prediction' : prediction})

    else:
        return jsonify({prediction: null})

if __name__ == "__main__":
    print("Starting Python Flask Server")
    app.run(debug=True, port=5001)