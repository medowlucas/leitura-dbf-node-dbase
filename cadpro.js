"use strict";
exports.__esModule = true;
var arrayTeste =[];
var dbf_reader_1 = require("dbf-reader");
var fs = require("fs");
var buffer = fs.readFileSync('venpro.dbf');
var datatable = dbf_reader_1.Dbf.read(buffer);
if (datatable) {
    var timeInMs = Date.now()/1000;
    datatable.rows.forEach(function (row) {
        // arrayTeste.push(row);
        datatable.columns.forEach(function (col) {
            arrayTeste.push(row[col.name]);
        });
    });
    var timeFinal = Date.now()/1000;
    console.log(arrayTeste);
    console.log(timeFinal-timeInMs);
}
