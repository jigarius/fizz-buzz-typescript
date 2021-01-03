# Fizz Buzz: TypeScript

A small command-line application demonstrating TypeScript syntax.

## What is Fizz Buzz?

**Fizz buzz** is a group word game for children to teach them about division.
Players take turns to count incrementally, replacing any number divisible by
three with the word *fizz*, and any number divisible by five with the word
*buzz*.

## Usage

  * Clone this repository and `cd` into the directory.
  * Run `npm install` to install node packages.
  * Run `tsc` to generate `dist/*.js` files.
  * Run `npm start` with a numeric argument; `npm start 15`.

### Lando

If you do not wish to install `node` and `npm` on your computer and run this
example in a Docker container instead, you can do so with Lando.

  * Install Lando.
  * Clone this repository and `cd` into the directory.
  * Run `lando start`.
  * Run `lando fizzbuzz` with a numeric argument; `lando fizzbuzz 15`.
