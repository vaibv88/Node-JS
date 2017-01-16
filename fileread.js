var file = require('fs');

file.stat('/home/durga/strings.js', function(err,stats) {

    if(err){throw err;}
    console.log(stats);
});
