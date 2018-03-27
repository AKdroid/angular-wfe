from flask import Flask, jsonify
from data import employees, locations, positions

app = Flask(__name__)

def fetchData(d, key):
    if key in d:
        return d[key]
    else:
        return {}

@app.route('/employee/<employeeName>')
def get_employee(employeeName):
    return jsonify(fetchData(employees, employeeName))

@app.route('/position/<positionId>')
def get_position(positionId):
    return jsonify(fetchData(positions, positionId))

@app.route('/location/<locationId>')
def get_location(locationId):
    return jsonify(fetchData(locations, locationId))


