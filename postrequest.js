var request = require('request');

var inspect = require('util').inspect;

var options = {
    url:'http://localhost:4000',
    method:'post'

};

request.post(options, function(err,res,body){
    if(err){throw err;}

    console.log(inspect({
	err:err,
	res: {
	    StatusCode:res.statuscode
	    
	},
	body: JSON.parse(body)
    }))

});
