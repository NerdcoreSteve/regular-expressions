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
/*
prints
[ 'a', 'a' ]
*/

console.log('I\'m Batman!'.match(/[aeiou]/gi))
/*
prints
[ 'I', 'a', 'a' ]
*/

console.log('I\'m Batman!'.match(/[aeiou]/i))
/*
[ 'I', index: 0, input: 'I\'m Batman!' ]
*/

console.log(
    'Read or the owl will eat you.'
        .match(/[aeiou]+/g))
/*
prints
[ 'ea', 'o', 'e', 'o', 'i', 'ea', 'ou' ]
*/

console.log('111918829332911819238'.match(/1+/g))
/*
prints
[ '111', '1', '11', '1' ]
*/

console.log(
    'I am a banana, you are a bananana, everybody is a bananananana'
        .match(/b(an)+a/g))
/*
prints
[ 'banana', 'bananana', 'bananananana' ]
*/

console.log(
    'Why is 6 afraid of 7? Because 789!'
        .match(/[0-9]+/g))
/*
prints
[ '6', '7', '789' ]
*/

console.log(
    'We\'ll match 234, but not 190'
        .match(/[2-5]+/g))
/*
prints
[ '234' ]
*/

console.log(
    'And we can match characters!'
        .match(/[a-z]+/gi))
/*
prints
[ 'And', 'we', 'can', 'match', 'characters' ]
*/

console.log(  
    'We can also match characters and numbers! 1, 2, 3, 45'
        .match(/[a-z0-9]+/gi))
/*
prints
[ 'We',
  'can',
  'also',
  'match',
  'characters',
  'and',
  'numbers',
  '1',
  '2',
  '3',
  '45' ]
*/

console.log('[1, 2, 1 + 2]'.match(/[\[\+]+/g))
/*
prints
[ '[', '+' ]
*/

console.log('\\'.match(/\\/))
/*
prints
[ '\\', index: 0, input: '\\' ]
*/

console.log(
    'Potatoes are my friends, potatoes are my family.'
        .match(/^potatoes/gi))
/*
prints
[ 'Potatoes' ]
*/

console.log(
    'Family Ties is a good show, but I prefer All In the Family.'
        .match(/family.$/gi))
/*
prints
[ 'Family.' ]
*/

console.log(
    'The Magic School Bus was a great show, but they really should have asked that kid\'s parents before driving through his digestive system'
        .match(/bu/gi))
/*
prints

*/

console.log(
    'The Magic School Bus was a great show, but they really should have asked that kid\'s parents before driving through his digestive system'
        .match(/^bu$/gi))
/*
prints

*/

console.log(
    'A baker\'s dozen is 13. Why is that?'
        .match(/\d+/g))
/*
prints

*/

console.log(
    'It was the best of times. It was the worst of times'
        .match(/(best|worst)/g))
/*
prints

*/

console.log(
    'Twas bryllyg, and ye slythy toves Did gyre and gymble in ye wabe'
        .match(/(bryllyg|slythy|toves|gyre)/g))
/*
prints

*/

console.log(
    'I get a banana. You get a kiwi. Your mom is a potato'
        .match(/get a (\w+)/))
/*
prints

*/

console.log(
    'I get a banana. You get a kiwi. Your mom is a potato'
        .match(/get a (\w+)/g))
/*
prints

*/

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
/*
prints

*/

console.log(
    "name: Clark Kent, occupation: Reporter"
        .replace(/name: (\w+ \w+), occupation: (\w+)/, '$1 is a $2'))
/*
prints

*/

console.log(
    'spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".'
        .replace(
            /(spinalCase\("([\w\s]+)"\) should return "([\w\s\-]+)".)/,
            '    it(\'$1\',\n        () => expect(\'$2\').toEqual(\'$3\'))'))
/*
prints

*/

console.log(
    '1. potatoes are my friends 2. You are a potato 3. You are my friend 4. Now and always you are my potato friend'
        .split(/\d+\./))
/*
prints

*/

console.log(
    'Princess Peach rules the Mushroom Kingdom'
        .replace(
            /(Princess (?:Peach|Toadstool)) rules the (\w+) Kingdom/,
            'Monarch: $1, Kingdom: $2'))
/*
prints

*/

console.log(
    'Banana, bananas, banana, potato, banana. Aren\'t you glad bananas?'
        .match(/banana./gi))
/*
prints

*/
