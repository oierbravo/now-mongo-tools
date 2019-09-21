module.exports = (req, res) => {
    const { numbers = '' } = req.query
    console.log(numbers);
    if(numbers === ''){
      return res.status(200).json([]);
    }
    res.status(200).json({
        query:req.query,
        body:req.body
    })
  }