const {TrikiNumbers} = require('../maps/Triki.js')

var Triki = (notes = '',destination) => {
    let outputArray = [];
    if(notes === ''){
        return ''
    }
    notes.split(',').forEach((element) =>{
        let subOutput = [];
        element.split('-').forEach((subel)=>{
            let number = subel
            let direction = 'Close'
            if(subel.substr(0,1) === '+'){
                number = subel.substr(1)
                direction = 'Open'
            }
            
            note = TrikiNumbers.getNote(parseInt(number),direction);
            subOutput.push(
                note
            )
        })
        outputArray.push(subOutput.join('-'))
        
    })
    return outputArray.join(',');
}

module.exports = Triki