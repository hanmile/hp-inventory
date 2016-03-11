var stockRepository = require('./mongoStockRepository');
var app = require('./app.js')(stockRepository);




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
