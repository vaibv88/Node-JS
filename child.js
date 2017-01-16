var foo = require('child_process').exec;

foo('cat filewright.js', function(err, stdout, stderr){
    if(err){console.error(err);}
    console.log(stdout);
});
