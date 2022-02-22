import csv
import os
import json

print(os.getcwd())
with open('backend/Targetwords.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';')
    data = {}
    for row in spamreader:
        row.pop(3)
        print(row)
        data[row[0]] = [row[1], row[2]]
with open('src/Targetwords.json','w') as outfile:
    json.dump(data,outfile)

with open('backend/Sightwords.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    data = {}
    for row in spamreader:
        row.pop(3)
        print(row)
        data[row[0]] = [row[1], row[2]]
    print(data)
with open('src/Sightwords.json','w') as outfile:
    json.dump(data,outfile)