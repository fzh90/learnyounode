var mymodule = require('./exercise_6_module.js')

var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir, filter, function (err, list) {
  if (err)
    return console.error('There was an error: ', err);
  
  list.forEach(function (file) {
    console.log(file);
  })
});

//fs.readdir(dir, function (err, list) {
////  console.log(filter);
//  for (var i = 0; i < list.length; i++) {
//    if (path.extname(list[i]) === filter) {
//      console.log(list[i]);  
//    }    
//  }  
//});