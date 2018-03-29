from flask import Flask, jsonify
from data import employees, locations, positions
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type' 

def fetchData(d, key):
    if key in d:
        return d[key]
    else:
        return {}

@app.route('/employee/<employeeName>')
@cross_origin()
def get_employee(employeeName):
    return jsonify(fetchData(employees, employeeName))

@app.route('/position/<positionId>')
@cross_origin()
def get_position(positionId):
    return jsonify(fetchData(positions, positionId))

@app.route('/location/<locationId>')
@cross_origin()
def get_location(locationId):
    return jsonify(fetchData(locations, locationId))


