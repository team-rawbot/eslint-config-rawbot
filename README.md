[![npm version](https://badge.fury.io/js/eslint-config-rawbot.svg)](https://badge.fury.io/js/eslint-config-rawbot)
[![Build Status](https://travis-ci.org/team-rawbot/eslint-config-rawbot.svg?branch=master)](https://travis-ci.org/team-rawbot/eslint-config-rawbot)

# eslint-config-rawbot

Rawbot EsLint common configuration (i.e. JavaScript styleguide).

## Usage

Install the package first.

```
npm install --save-dev eslint-config-rawbot
```

Set your EsLint configuration (.eslintrc.json) to use it:

```
"extends": "rawbot"
```

If you don’t have an EsLint config yet, you can generate one using `eslint --init`.

## Rules and style summarized

* ES2018
* 2 spaces
* CamelCase
* Single quotes
* With semi-colons
* Don’t group variables declarations
* Comma at the end of the line, space after only, dangle when multiline
* Prefer `const` then `let`, no `var`
* Prefer template strings over strings concatenation
* Prefer spread to fill arrays and objects
* Prefer arrow function for callbacks
* No console, no eval, no functions in loops
* Type-safe equality operators (===, !==)
* A couple of other spacing/styling/readability rules

All the rules are defined in [index.js](https://github.com/team-rawbot/eslint-config-rawbot/blob/master/index.js).

### Code example

```javascript
/**
 * A block comment when you have to talk a lot
 */

import module from 'module';

export default class MyClass {
  constructor(options) {
    this.people = ['john', 'vanessa', 'gina'];
    this.options = {
      display: true,
      layout: 'basic',
      ...options,
    };

    this.addEventListeners();
    this.createPeopleCards();
  }

  addEventListeners() {
    const link = document.querySelector('.link');
    const el = document.querySelector('.element');

    link.addEventListener('click', this.open.bind(this));
    el.addEventListener('click', this.toggle.bind(this));
  }

  createPeopleCards() {
    this.peopleCards = this.people.map(people => {
      return `<div class="people">${people.name}</div>`
    });
  }

  open(e) {
    const parentNode = e.currentTarget.parentElement;
    let result;

    // Small comment for whatever you like
    switch (parentNode.type) {
      case 'text':
        result = `Lorem ipsum ${parentNode.value} dolor sit amet`;
        break;
      case 'textarea':
        result = parentNode.value;
        break;
      default:
        result = 42;
    }

    return result;
  }

  toggle(e) {
    e.preventDefault();

    if (e.target) {
      this.people.push(e.target.name);
      module.foo();
    } else if (e.name === 'john') {
      module.hereItIs();
    } else {
      module.bar();
    }
  }
}

```
