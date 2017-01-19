function square(num)  {
    return function(req,res) {
	res.end(num);
    };

};

module.exports = square;
