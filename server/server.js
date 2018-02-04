var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var csv = require('csv');
var fs = require('fs');


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json 
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post("/upload_data", function (req, res) { // REST Endpoint to upload the data from CSV file to database.
    var values = [];
    //var i = 1;
    var body = req.body;
    for (var i = 1; i < body.length; i++) {
        values[i - 1] = [body[i][1], body[i][2], body[i][3], body[i][4], body[i][5], body[i][6], body[i][7], body[i][0]];
    }
    console.log(values);

    // connection.query('INSERT INTO example_data VALUES ?', [values], function(err, rows, fields) { //Inserting values in bulk.

    //   if (!err) {
    //     console.log('\nSuccessfully updated database: ', rows);
    //     res.sendStatus(200);
    //   } else {
    //     console.log('\nError while performing Query: ', err);
    //     res.sendStatus(500);
    //   }

    res.sendStatus(200);
});
function MyCSV(Fone, Ftwo, Fthree) {
    this.FieldOne = Fone;
    this.FieldTwo = Ftwo;
    this.FieldThree = Fthree;

};
app.post('/upload_csv', upload.single('file'), (req, res) => {
    console.log(req.file);

    var MyData = [];
    csv().from.path('uploads/' + req.file.filename).to.array(function (data) {
        for (var index = 0; index < data.length; index++) {
            MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
        }
        console.log(MyData);
    });
    // var parser = csv.parse();
    // var transformer = csv.transform(function(data){
    //   return data.map(function(value){return value.toUpperCase()});
    // });

    // csv.transform.stream(fs.createReadStream('uploads/' + req.file.filename))
    //     .transform(function (row) {
    //         //row.unshift(row.pop());
    //         return row;
    //     })
    //     .on('record', function (row, index) {
    //         console.log('#' + index + ' ' + JSON.stringify(row));
    //     })
    //     .on('end', function (count) {
    //         console.log('Number of lines: ' + count);
    //     })
    //     .on('error', function (error) {
    //         console.log(error.message);
    //     });

    res.sendStatus(200);
})
app.listen(8000, () => {
    console.log('server start');
});