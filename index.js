console.log('a'.match(/a/))

console.log('don\'t eat boogers'.match(/boogers/))

console.log(
    'Hello my honey, hello my baby, hello my ragtime gal!'
        .match(/Hello my honey, hello my baby, hello my ragtime gal!/))

console.log(
    'Hello my honey, hello my baby, hello my ragtime gal!'
        .match(/my/))

console.log('doo doo doo doowah!'.match(/doo/g))

console.log('I\'m Batman!'.match(/[aeiou]/g))

console.log('I\'m Batman!'.match(/[aeiou]/gi))

console.log('I\'m Batman!'.match(/[aeiou]/i))

console.log(
    'Read or the owl will eat you.'
        .match(/[aeiou]+/g))

console.log('111918829332911819238'.match(/1+/g))

console.log(
    'Why is 6 afraid of 7? Because 789!'
        .match(/[0-9]+/g))

console.log(
    'We\'ll match 234, but not 190'
        .match(/[2-5]+/g))
console.log(
    'And we can match characters!'
        .match(/[a-z]+/gi))

console.log('[1, 2, 1 + 2]'.match(/[\[\+]+/g))

console.log(
    'Potatoes are my friends, potatoes are my family.'
        .match(/^potatoes/gi))
console.log(
    'Family Ties is a good show, but I prefer All In the Family.'
        .match(/family.$/gi))
console.log(
    'The Magic School Bus was a great show, but they really should have asked that kid\'s parents before driving through his digestive system'
        .match(/bu/gi))
console.log(
    'The Magic School Bus was a great show, but they really should have asked that kid\'s parents before driving through his digestive system'
        .match(/^bu$/gi))

console.log(
    'A baker\'s dozen is 13. Why is that?'
        .match(/\d+/g))

console.log(
    'It was the best of times. It was the worst of times'
        .match(/(best|worst)/g))

console.log(
    'Twas bryllyg, and ye slythy toves Did gyre and gymble in ye wabe'
        .match(/(bryllyg|slythy|toves|gyre)/g))

console.log(
    'I get a banana. You get a kiwi. Your mom is a potato'
        .match(/get a (\w+)/))

console.log(
    'I get a banana. You get a kiwi. Your mom is a potato'
        .match(/get a (\w+)/g))

const regexGlobalGroupCapture = (regex, input) => {
    var matches, output = []
    while (matches = regex.exec(input)) {
        output.push(matches[1])
    }
    return output
}

console.log(
    regexGlobalGroupCapture(
        /get a (\w+)/g,
        "I get a banana. You get a kiwi. Your mom is a potato"))
