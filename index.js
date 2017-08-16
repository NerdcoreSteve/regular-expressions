console.log('a'.match(/a/))
//prints [ 'a', index: 0, input: 'a' ]

console.log('don\'t eat boogers'.match(/boogers/))
/*
prints
[ 'boogers', index: 10, input: 'don\'t eat boogers' ]
*/

console.log(
    'Hello my honey, hello my baby, hello my ragtime gal!'
        .match(/Hello my honey, hello my baby, hello my ragtime gal!/))
/*
prints
[ 'Hello my honey, hello my baby, hello my ragtime gal!',
  index: 0,
  input: 'Hello my honey, hello my baby, hello my ragtime gal!' ]
*/

console.log(
    'Hello my honey, hello my baby, hello my ragtime gal!'
        .match(/my/))
/*
prints
[ 'my',
  index: 6,
  input: 'Hello my honey, hello my baby, hello my ragtime gal!' ]
*/

console.log('doo doo doo doowah!'.match(/doo/g))
/*
prints
[ 'doo', 'doo', 'doo', 'doo' ]
*/

console.log('I\'m Batman!'.match(/[aeiou]/g))

console.log('I\'m Batman!'.match(/[aeiou]/gi))

console.log('I\'m Batman!'.match(/[aeiou]/i))

console.log(
    'Read or the owl will eat you.'
        .match(/[aeiou]+/g))

console.log('111918829332911819238'.match(/1+/g))

console.log(
    'I am a banana, you are a bananana, everybody is a bananananana'
        .match(/b(an)+a/g))

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

console.log('\\'.match(/\\/))

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

console.log(
    "name: Clark Kent, occupation: Reporter"
        .replace(/name: (\w+ \w+), occupation: (\w+)/, '$1 is a $2'))

console.log(
    'spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".'
        .replace(
            /(spinalCase\("([\w\s]+)"\) should return "([\w\s\-]+)".)/,
            '    it(\'$1\',\n        () => expect(\'$2\').toEqual(\'$3\'))'))

console.log(
    '1. potatoes are my friends 2. You are a potato 3. You are my friend 4. Now and always you are my potato friend'
        .split(/\d+\./))

console.log(
    'Princess Peach rules the Mushroom Kingdom'
        .replace(
            /(Princess (?:Peach|Toadstool)) rules the (\w+) Kingdom/,
            'Monarch: $1, Kingdom: $2'))

console.log(
    'Banana, bananas, banana, potato, banana. Aren\'t you glad bananas?'
        .match(/banana./gi))

