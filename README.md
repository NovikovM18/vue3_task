# vue3_task

Part 1
Task 1 - String sort
Write a function that sorts string. Each word in the string will contain some digit.
This number will mean the position that the word will take as a result. Numbers can be from 1 to 9. 1 will be the first word (not 0). If the tape is empty - return the empty tape. Words in the input stream will contain only valid values.
Tests:
sortString(‘g5et ski3lls on6 use1 your2 to4 7top’)
Output: ‘use1 your2 ski3lls to4 g5et on6 7top’

sortString(‘’)
Output: ‘’

sortString(‘practic3 h4rder yo1u 2hould’)
Output: ‘yo1u 2hould practic3 h4rder’

Task 2 - Queue at the supermarket
There is a certain queue in a supermarket with the possibility of self-service.
Task: write a function that calculates the total time required to serve all people.
The function takes two arguments:
1- Customers, an array of positive numbers representing the number of people in line. Every number indicates the amount of time required to serve one customer.
	2-The number of cash registers, a positive number.

The function should return a number, how much time is required in total.
There is only one queue.
The queue order never changes.
We assume that the first person approaches the cash register as soon as it is freed.

Explanation:
queueTime([5,3,4], 1)
3 customers that require 5, 3 and 4 minutes respectively and 1 checkout
Output: 12 (5 + 3 + 4)

queueTime([10, 2, 3, 3], 2)
4 customers that require 10, 2, 3 and 3 minutes respectively and 2 checkout
Output: 10

queueTime([], 1); - no customers, 1 каса
Output: 0

Tests:
queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1) // 418

queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4) // 162

queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5) // 65


Task 3 - Next bigger number

Function that accepts a positive number and returns it the next larger number formed from the same digits.

Tests:
biggerNumber(23) // 32;
biggerNumber(624) // 642;
biggerNumber(2018) // 8210;
If there is no greater number, return -1
biggerNumber(9) = -1;
biggerNumber(111) = -1;
biggerNumber(531) = -1;
Part 2

Application overview
Personal expenses management web client application (static files) that allows users to track how much money they have spent. Application must be written on VUE.js, the latest version that you can.

MAJOR Requirements
As a result of the test problem solution you should provide a web application where users can enter a command and see the results of its execution. List of supported commands:
add 2017-04-25 12 USD Jogurt — adds expense entry to the list of user expenses. Expenses for various dates could be added in any order. Command accepts following parameters:
2017-04-25 — is the date when expense occurred
12 — is an amount of money spent
USD — the currency in which expense occurred
Jogurt — is the name of product purchased
 list — shows the list of all expenses sorted by date
 clear 2017-04-25 — removes all expenses for specified date, where:
2017-04-25 — is the date for which all expenses should be removed
 total PLN — this command should take a list of exchange rates from http://fixer.io
calculate the total amount of money spent and present it to user in specified currency, where:
PLN — is the currency in which total amount of expenses should be presented

MINOR Requirements
In order to get extra points for test problem solutions you might cover your source code with unit tests.
Use material.ui or other components framework

Application usage example
Here is an example of normal application usage flow, for each command a
corresponding output is shown:
> add 2017-04-25 2 USD Jogurt
2017-04-25 
Jogurt 2 USD

> add 2017-04-25 3 EUR “French fries”
2017-04-25 
Jogurt 2 USD 
French Fries 3 EUR

> add 2017-04-27 4.75 EUR Beer
2017-04-25 
Jogurt 2 USD
French Fries 3 EUR
2017-04-27 
Beer 4.75 EUR

> add 2017-04-26 2.5 PLN Sweets
 	2017-04-25 
Jogurt 2 USD
French Fries 3 EUR
2017-04-26
 Sweets 2.5 PLN
2017-04-27 
Beer 4.75 EUR


> list
2017-04-25 
Jogurt 2 USD
French Fries 3 EUR
2017-04-26
 Sweets 2.5 PLN
2017-04-27 
Beer 4.75 EUR

> clear 2017-04-27
 	2017-04-25 
Jogurt 2 USD
French Fries 3 EUR
2017-04-26
 Sweets 2.5 PLN

> total EUR
5.42 EUR
Deliverables
Application should be delivered via link to a Github repository. Repository should contain a README.md file with instructions on how to build and run an application.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
