# Fizz Buzz: TypeScript

A neat command-line application to demonstrate TypeScript syntax.

## What is Fizz Buzz?

**Fizz buzz** is a group word game for children to teach them about division.
Players take turns to count incrementally, with the following rules:

* For numbers divisible by `3`, say `fizz`.
* For numbers divisible by `5`, say `buzz`.
* For numbers is divisible by both, say `fizzbuzz`.
* For other numbers, say the number.

## Example

```
1
2
fizz
4
buzz
fizz
7
8
fizz
10
11
fizz
13
14
fizzbuzz
```

## Usage

* Clone the repository and `cd` into the directory.
* Run `npm install` to install node packages.
* Run `tsc` to generate `dist/*.js` files.
* Run `npm fizzbuzz` with a numeric argument; `npm fizzbuzz 15`.

### Lando

If you use Lando, you can run this project in a Docker container instead.

* Clone this repository and `cd` into the directory.
* Run `lando start`.
* Run `lando fizzbuzz` with a numeric argument; `lando fizzbuzz 15`.
