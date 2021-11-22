var fstream = require('fstream');
var tar = require('tar');
var zlib = require('zlib');

fstream.Reader({'path': './source/', 'type': 'Directory'})
    .pipe(tar.Pack())
    .pipe(zlib.Gzip())
    .pipe(fstream.Writer({'path': './target/1.tar.gz'}));

