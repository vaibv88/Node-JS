function helloWorld(req, res) {

    if(req) {console.log('request has arrived');}
    res.end("Hello world we are in node connect middleware");
};

module.exports = helloWorld;
