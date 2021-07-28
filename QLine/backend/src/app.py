from datetime import datetime
from flask import Flask
from tinydb.queries import where
from werkzeug.utils import append_slash_redirect
from flask_cors import CORS
from flask import request
from tinydb import TinyDB, Query
from tinydb.operations import add
from time import gmtime

import time
import json
import datetime

app = Flask(__name__)
db = TinyDB("../db/db.json")
CORS(app)

START = time.strptime("26 Jul 21", "%d %b %y")

def formatted_task(task_data):
    ret = list()
    gmt_now  = gmtime(time.time())
    completed = {gmtime(c).tm_yday for c in task_data}
    days = 0
    print(completed)
    for x in range(START.tm_yday, gmt_now.tm_yday+1):
        if x in completed:
            ret.append(1)
        else:
            ret.append(0)
        days += 1
    ret += [-1]*(7-len(ret))
    return ret

def calc_score(task_prog):
    score = 0
    chain = 0
    print(task_prog)
    for x in task_prog:
        if x == 1:
            if chain == 0:
                chain = 5
            else:
                chain *= 2
        else:
            chain = 0
        score += chain
    return score
                



@app.route("/")
def root():
    return "QLine Application\n"

@app.route("/get_progress", methods=["POST"])
def get_progress():
    
    global db
    name = request.json["name"]
    task = request.json["task"]
    
    User = Query()
    
    user_db = db.get(User.name == name)
    if not user_db:
        new_user = {
            "name": name,
            task : []
        }
        # new user
        db.insert(new_user)
        user_db = new_user
    else:
        # user exists, but check task
        if user_db.get(task) is None:
            db.update({task : []}, where('name') == name)

    ret = dict()
    for person in db:
        task_dat = person.get(task, None)
        
        if task_dat is not None:
            ret[person["name"]] = formatted_task(task_dat)
        
    return ret

@app.route("/get_scores", methods=["POST"])
def get_score():
    global db
    name = request.json["name"]
    task = request.json["task"]

    scores = dict()
    for person in db:
        print(person)
        task_dat = person.get(task, None)
        if task_dat is not None:
            scores[person["name"]] = calc_score(formatted_task(task_dat))

    return scores


@app.route("/update_task", methods=["POST"])
def update_tasks():
    global db
    name = request.json["name"]
    task = request.json["task"]

    User = Query()

    user_db = db.get(User.name == name)
    if user_db:
        if user_db.get(task) and len(user_db[task]) >= 1:
            gmt = gmtime(user_db[task][-1])
            gmt_now  = gmtime(time.time())

            if gmt_now.tm_yday > gmt.tm_yday:
                db.update(add(task, [time.time()]), where('name') == name)
        else:
            db.upsert({task: [time.time()]}, where('name') == name)
    else:
        # new user
        db.insert({
            "name": name,
            task : [time.time()]
        })
    return {name: formatted_task(db.get(User.name == name)[task])}

@app.route("/insert_dummy", methods=["POST"])
def insert_dummy():
    global db
    name = request.form["name"]
    task = request.form["task"]
    date = request.form["date"]

    t = time.strptime(date, "%d %b %y")
    t = time.mktime(t)
    db.update(add(task, [t]), where('name') == name)

    return {
        "added": t
    }

@app.route("/delete", methods=["POST"])
def delete():
    pass

