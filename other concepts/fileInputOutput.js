"use strict";
// File Input/Output (I/O) means reading from or writing to files.
Object.defineProperty(exports, "__esModule", { value: true });
/*Step 1: Import the fs Module
Node.js provides the fs (File System) module to handle file operations.

*/
var fs = require("fs");
// Write text to a file
fs.writeFileSync("example.txt", "Hello, File I/O!");
// Confirm success
console.log("File written successfully.");
var data = fs.readFileSync("example.txt", "utf-8");
// Display the file content
console.log("File content:", data);
/*File I/O Functions

Function	                   Purpose
fs.writeFileSync	          Writes data to a file.
fs.readFileSync               Reads data from a file.
fs.appendFileSync	          Appends data to a file.
fs.existsSync	              Checks if a file exists.
fs.unlinkSync	              Deletes a file.

*/
