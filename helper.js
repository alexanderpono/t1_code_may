process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
    stdin_input += input;  // get the input
});
process.stdin.on("end", function () {
   main(stdin_input);
});
function main(input) {
    // do something
    process.stdout.write(input); // print response to stdout
}