from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
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
            return jsonify({'success': False}), 400

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

        return jsonify({'success' : True , 'prediction' : prediction})

    else:
        return jsonify({'success' : False}), 404

if __name__ == "__main__":
    print("Starting Python Flask Server")
    app.run()