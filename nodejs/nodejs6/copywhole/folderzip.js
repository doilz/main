const zl = require("zip-lib");

zl.archiveFolder("./source", "target/target.zip").then(function () {
    console.log("done");
}, function (err) {
    console.log(err);
});

