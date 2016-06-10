# Ping Pong

#### Creates a list of numbers wherein each multiple of 3 is replaced by "ping" and each multiple of 5 by "pong". June 10, 2016

#### By Callan McNulty

## Description

Given an input number by the user, it will create a list of integers from zero to the input number, and replace in that list multiples of 3 with "ping", multiples of 5 with "pong", and multiples of both 3 and 5 with "pingpong".

## Setup/Installation Requirements

* Open in a jQuery and Bootstrap compatible browser

## Specs

* Given a positive integer input, count up to that integer making no substitutions
  Example Input: 2
  Example Output [1, 2]

* Given a negative integer input, count down to that integer making no substitutions
  Example Input: -2
  Example Output [-1, -2]

* Substitute "ping" for multiples of 3 in output
  Example Input: 6
  Example Output [1, 2, "ping", 4, 5, "ping"]

* Substitute "pong" for multiples of 5 in output
  Example Input: 6
  Example Output [1, 2, "ping", 4, "pong", "ping"]

* Substitute "pingpong" for multiples of 5 and 3 in output
  Example Input: 16
  Example Output [1, 2, "ping", ..., 13, 14, "pingpong", 16]

* Given 0, output "pingpong"
  Example Input: 0
  Example Output: "pingpong"

## Support and contact details

I can be contacted for support at jabberwocky222@gmail.com

## Technologies Used

* Javascript
* jQuery Library
* HTML
* CSS
* Bootstrap Framework

### License

Copyright (c) 2016 Callan McNulty
