import BbEb from './BbEb'
const defaultTune = 'BbEb'

const maps = {
    BbEb: BbEb
}
export const TrikiNumbers = {
    getMap: (tune =defaultTune) =>maps[tune].getMap(),
    getAlternative: (note,tune =defaultTune) => maps[tune].getAlternative(note),
    getNote: (number,direction,tune =defaultTune) => maps[tune].getNote(number,direction),
    getNumbers: (note,tune =defaultTune) => maps[tune].getNumbers(note)
}
export default TrikiNumbers