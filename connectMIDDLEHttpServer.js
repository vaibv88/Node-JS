function replyIN(text){
   return function (req, res) {
      res.end(text);
    };

};

module.exports = replyIN;
