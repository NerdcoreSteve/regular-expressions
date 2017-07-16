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
