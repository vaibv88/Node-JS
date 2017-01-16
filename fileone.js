var file = require('fs');

file.stat('/home/durga/JS-Practice/arraycount.html',function(err, stat)
	  {
	      if (err){throw err;}
	      console.log(stat);
	  });
