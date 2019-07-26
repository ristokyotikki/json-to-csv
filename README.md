# CSV TO JSON

## Install dependencies (fs, yargs)
* NPM: npm install
* YARN: yarn

## Execute program
* ```Bash
    node csv_to_json.js --file={filename}
  ```

## JSON format is expected as follows
* Each file_dump will create a new file
* row_1 will be used to generate column keys for the file 

```JSON
{
  "file_dump_1": {
    "row_1": {
      "column_1": "value",
      "column_2": "value"
    },
    "row_2": { "..." },
  },
  "file_dump_2": { 
    "row_1": {
      "column_1": "value",
    }
  },
  "file_dump_3": { "..." },
}
```