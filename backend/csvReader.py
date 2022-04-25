import csv
import os
import json

print(os.getcwd())
with open('ereaderfinalsprint/backend/Targetwords.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';')
    data = {}
    line = 0
    repaired_rows = []
    for row in spamreader:
        line += 1
        row.pop(-1)
        if len(row) == 4:
            defn = row.pop(3)
            tmp = row.pop(1)
            row[1] = tmp + "," + row[1]
            row.append(defn)
            repaired_rows.append(row)
        if len(row) == 5:
            tmp = row.pop(3)
            tmp2 = row.pop(2)
            row[1] = row[1] + "," + tmp2 + "," + tmp
            repaired_rows.append(row)
        if len(row) == 6:
            tmp = row.pop(4)
            tmp2 = row.pop(3)
            tmp3 = row.pop(2)
            row[1] = row[1] + "," + tmp3 + "," + tmp2 + "," + tmp
            repaired_rows.append(row)
        if len(row) == 7:
            tmp = row.pop(5)
            tmp2 = row.pop(4)
            tmp3 = row.pop(3)
            tmp4 = row.pop(2)
            row[1] = row[1] + "," + tmp4 + "," + tmp3 + "," + tmp2 + "," + tmp
            repaired_rows.append(row)
        #if len(row) > 3:
            #raise Exception("there's at least 1 extra semi-colon in this line (line " + str(line) + ") ...must be exactly 3 in each line\nnumber of delimiters: " + str(len(row)))
        print(row)
        data[row[0]] = [row[1], row[2]]
    for row in repaired_rows:
        print("repaired row " + str(row))
    print("number of rows repaired: " + str(len(repaired_rows)))
with open('ereaderfinalsprint/src/Targetwords.json','w') as outfile:
    json.dump(data,outfile)

with open('ereaderfinalsprint/backend/Sightwords.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    data = {}
    for row in spamreader:
        row.pop(3)
        print(row)
        data[row[0]] = [row[1], row[2]]
    print(data)
with open('ereaderfinalsprint/src/Sightwords.json','w') as outfile:
    json.dump(data,outfile)

with open('ereaderfinalsprint/backend/Names.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';')
    data = {}
    for row in spamreader:
        row.pop(3)
        print(row)
        data[row[0]] = [row[1], row[2]]
    print(data)
with open('ereaderfinalsprint/src/Names.json','w') as outfile:
    json.dump(data,outfile)