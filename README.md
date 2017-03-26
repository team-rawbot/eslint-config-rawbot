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