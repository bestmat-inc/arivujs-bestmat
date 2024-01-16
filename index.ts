// ©️2024 - ArivuJS - BestMat, Inc. - All rights reserved.
const fs = require("fs");
const { consola, createConsola } = require("consola");

const file: string = "./main.arivu";

fs.readFile(file, "UTF-8", (err, code) => {
    consola.success("Running Arivu.JS.");
    code = code.replaceAll("print", "console.log");
    code = code.replaceAll("int", "var");
    code = code.replaceAll("str", "var");
    code = code.replaceAll("bool", "var");
    code = code.replaceAll("float", "var");

    eval(code);
});