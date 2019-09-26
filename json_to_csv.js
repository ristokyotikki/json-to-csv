#!/usr/bin/node

'strict'
const fs = require('fs');
const args = require('yargs').argv;

if (args['file']) {
  fs.readFile(args['file'], 'utf-8', (error, data) => {
    if (error) {
      throw error;
    }
    const json = JSON.parse(data);

    function getColumnValue(value, i, length) {
      return `"${decodeURI(value)}"${i !== length -1 ? ',' : '\n'}`
    }

    console.log(`creating ${Object.keys(json).length} csv file(s) from firebase_dump.json`);
    Object.keys(json).forEach(dump => {
      const keys = Object.keys(json[dump][Object.keys(json[dump])[0]]);
      let csv = '';

      for (let i = 0; i < keys.length; i++) {
        csv += getColumnValue([keys[i]], i, keys.length);
      }

      Object.keys(json[dump]).map(log => {
        for (let i = 0; i < keys.length; i++) {
          csv += getColumnValue(json[dump][log][keys[i]], i, keys.length);
        }
      });

      fs.writeFile(`./${dump}.csv`, csv, 'utf-8', error => {
        error ? console.error(error) : console.log(`File ${dump}.csv saved successfully!`);
      });
    });
  });
} else {
  console.log('This script creates csv file(s) from JSON, please provide the JSON-filename as an argument. \n\nnode json_to_csv.js --file={filename}');
}
