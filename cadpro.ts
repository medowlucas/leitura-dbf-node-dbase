import { Dbf } from 'dbf-reader';
import { DataTable } from 'dbf-reader/models/dbf-file';
import * as fs from "fs";

let buffer:Buffer=fs.readFileSync('cadproxx.dbf')
let datatable:DataTable = Dbf.read(buffer);
let arrayTeste:Array<any>;
if (datatable) {
    datatable.rows.forEach((row: any) => {
        arrayTeste.push(row);
        datatable.columns.forEach((col: Column) => {
            console.log(row[col.name]);
        });
    });
}