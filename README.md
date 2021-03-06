# JSON to CSV

## Install dependencies with yarn or npm
```console
yarn
```
```console
npm install
```

## Execute program
```console
yarn convert --file={filename}
```
```console
npm run convert -- --file={filename}
```

## JSON format is expected as follows
```json
{
  "file_dump_1": {
    "row_1": {
      "date": "11-07-2019",
      "amount": "1"
    },
    "row_2": {
    "date": "12-07-2019",
    "amount": "95"
    }
  },
  "file_dump_2": { 
    "row_1": {
      "column_1": "value"
    }
  }
}
```
## Expected output
### Keys from the .json-file will each create a new .csv-file of the same name.
file_dump_1.csv, file_dump_2.csv

### Keys from the file_dump will be used to generate column keys for the output .csv-file
file_dump_1.csv:
```csv
"date", "amount"
"11-07-2019", "1"
"12-07-2019", "95"
```
file_dump_2.csv:
```csv
"column_1"
"value"
```
