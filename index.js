var fs = require('fs'),
    os = require('os');
// var StatMode = require('stat-mode');
// var colors = require('colors');

fs.readdir('../Node-File-System','utf-8', function(err, files) {
    fs.open('./save.txt', 'a', 666, function( e, id ) {
        var data = files.join(os.EOL);
        fs.write( id, data, null, 'utf8', function(){
            fs.close(id, function(){
                console.log('Files names saved to save.txt');
            });
        });
    });
});


//TEORIA Z MODUŁU
// fs.stat('./cat.jpeg', function(err, stats) {
//     console.log(stats);
//     // console.log(err); sprawdzałem co wyskoczy => null
// });
//
// fs.stat('./cat.jpeg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

// fs.readFile('./tekst.txt', function(err, data) {
//     console.log(data);
// });
// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });