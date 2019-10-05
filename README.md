# credit-card-generator

## generate fake nz credit cards for testing purposes

In order to smash through a million e2e tests a day, we need a pile of valid credit card numbers

This code will only generate Visa & Mastercard credit card numbers for ANZ & Kiwibank - not necessarily credit
card numbers that exist, just valid numbers.

Adapted from [this article](https://medium.com/cyberdoggo/luhn-algorithm-in-javascript-python-clojure-part-1-c4ea3079d0f7)... thanks friend! ᕕ( ᐛ )ᕗ

Expanding on [this gist](https://gist.github.com/julia-mareike/200e34dacef83d1933d57d1caac9ea86)



## ...  wait what

a checksum is the final digit in a credit card, and is calculated using the rest of the card number...
this is what is used to _validate_ a credit card number
    
Every second digit of the card number needs to be doubled...
if the result is 10 or more, subtract 9
so that the result is only ever 1 digit long
    
then, add all those resulting numbers together - 
if that result is divisible by 10 with no remainder, it's a valid credit card...
if it's not a valid credit card, you will get the remainder digit (ie 3)
    
to calculate the checksum, subtract the remainder from 10 ( 10 - 3 )
and you will get your checksum, 7
    
add this to the end of your invalid (partial) credit card number :D
and wait for all your e2e tests to pass
