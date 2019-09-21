const Triki = require('../lib/triki.js')

module.exports = (req, res) => {

    if (!req.query.source) {
        return res.status(400).send('source is missing from query parameters')
      }
      if (!req.query.destination) {
        return res.status(400).send('destination is missing from query parameters')
      }
      let output;
      switch(req.query.source){
          case 'triki':
            output = Triki(req.query.notes,req.query.destination);
            break
      }



    res.status(200).json({
        query:req.query,
        source:req.query.source,
        destination:req.query.destination,
        output: output
    })
  }