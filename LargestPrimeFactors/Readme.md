## Problem

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

https://projecteuler.net/problem=3

https://www.enjoymathematics.com/blog/how-to-find-prime-numbers-in-a-range

## Brainstorming

1. Create a list of all prime numbers in range of target (1-target)
    1. Use the Sieve of Eratosthenes method to reduce time complexity
        1. Create boolean array, init val = true, with length of target + 1
            1. set first item in array to False (1 is not a prime)
        2. get the square root of target
            1. If the number is a decimal round up to whole number
        3. create loop (index start = 2), index <= square root of target, i++
            1. check if index is a prime number
                a. set all multiples of the number to false where the multiple is <= target

                    {P^2,...,P^i}  
                    P = Prime Number  
                    i = square root of target

        4. loop through boolean array
            1. append index to new array of prime numbers
    2. loop through new prime numbers array
        1. if target % prime number == 0
            1. add prime number to new prime factorial array
            2. if divided number is in prime number array stop, else set current target to divided number and continue
                1. return prime factorial array if loop breaks

## Solution

Used trial division solution at https://www.calculatorsoup.com/calculators/math/prime-factors.php

## How To Run

1. `node index.js`
2. testing
    1. `npm install`
    2. `npm test`

