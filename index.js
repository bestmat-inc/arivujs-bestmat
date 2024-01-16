// ©️2024 - ArivuJS - BestMat, Inc. - All rights reserved.
var fs = require("fs");
var _a = require("consola"), consola = _a.consola, createConsola = _a.createConsola;
var file = "./main.arivu";
fs.readFile(file, "UTF-8", function (err, code) {
    consola.success("Running Arivu.JS.");
    code = code.replaceAll("print", "console.log");
    code = code.replaceAll("int", "var");
    code = code.replaceAll("str", "var");
    code = code.replaceAll("bool", "var");
    code = code.replaceAll("float", "var");
    eval(code);
});
