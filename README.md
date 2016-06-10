# Ping Pong

#### Creates a list of numbers wherein each multiple of 3 is replaced by "ping" and each multiple of 5 by "pong". June 10, 2016

#### By Callan McNulty, Logo created with FlamingText.com

## Description

Ping Pong will count up to the number entered into the main form field when the 'Ping-Pong It!' button is clicked and then display the list of resulting values. The program will also substitute words for certain values depending upon their divisibility. Values divisible by multiple divisors will join the specified words in the order in which the substitution rules were written and display the result. By default, the program will substitute 'ping' for numbers divisible by three and 'pong' for numbers divisible by five. These settings can be changed in the settings menu, which can be opened by clicking on the 'cog' icon. Here new rules for word substitution can be entered, or existing ones can be deleted.

## Setup/Installation Requirements

* Open in a jQuery and Bootstrap compatible browser
* To change settings, open the settings window by clicking the button with the cog icon, edit the fields there and click 'Save Changes' when finished
* More details can be found by clicking the 'About' button on the page

## Specs

* Given a positive integer input, count up to that integer making no substitutions
  * Example Input: 2
  * Example Output [1, 2]

* Given a negative integer input, count down to that integer making no substitutions
  * Example Input: -2
  * Example Output [-1, -2]

* Substitute "ping" for multiples of 3 in output
  * Example Input: 6
  * Example Output [1, 2, "ping", 4, 5, "ping"]

* Substitute "pong" for multiples of 5 in output
  * Example Input: 6
  * Example Output [1, 2, "ping", 4, "pong", "ping"]

* Substitute "pingpong" for multiples of 5 and 3 in output
  * Example Input: 16
  * Example Output [1, 2, "ping", ..., 13, 14, "pingpong", 16]

* Given 0, output "pingpong"
  * Example Input: 0
  * Example Output: "pingpong"

* Take a custom word and a custom divisor from the user and substitute that word for multiples of that divisor in output according to the same rules as "ping" and "pong"
  * Example Input: number: 12, custom word: "pang", custom divisor: 4
  * Example Output: [1, 2, "ping", "pang", "pong", "ping", 7, "pang", 9, "pong", 11, "pingpang"]

* Take an arbitrary sized set of custom word-divisor pairs from the user and replace the default set with the user supplied set, then follow the same rules with these pairs as with "ping" and "pong"
  * Example Input: number: 12, custom pairs: 2-"mic", 5-"mac", 7-"paddywack"
  * Example Output: [1, "mic", 3, "mic", "mac", "mic", "paddywack", "mic", 9, "micmac"]

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
