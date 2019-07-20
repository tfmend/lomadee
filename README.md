# Lomadee API

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/tfmend/lomadee/master/LICENSE)
[![npm version](https://badge.fury.io/js/lomadee-api.svg)](https://badge.fury.io/js/lomadee)

Lomadee NodeJs API client

## Install

```bash
$ npm install lomadee
```

## Get Token and SourceID

* SourceID - http://developer.buscape.com.br/portal/developer/tutoriais/gerando-seu-source-id.html
* API Token - http://developer.buscape.com.br/portal/developer/tutoriais/criando-seu-app-token.html

## Usage

```js
"use strict";

const lomadee = new Lomadee.Lomadee('{token}', '{sourceId}')

const offer = lomadee.offer()
offer.bestSellers()
    .then(response => console.log(response))
```

## License

  MIT

  Copyright (C) 2016 André Ferreira

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
