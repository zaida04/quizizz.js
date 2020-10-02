<div align="center">
    <br />
    <p>
        <img src="https://raw.githubusercontent.com/zaida04/Quizizz.js/master/logo.png" align="center" width="546" alt="logo.png" />
        <p>A minimal dependency <code>Node.js Wrapper</code> for the <code>Quizizz.com</code> Internal API. Written in TypeScript and includes typings.</p>
    </p> 
    <br />
    <p>
        <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
        <a href="https://github.com/zaida04/Quizizz.js/issues"><img src="https://img.shields.io/github/issues-raw/zaida04/Quizizz.js.svg?maxAge=25000" alt="Issues"></a>
        <a href="https://github.com/zaida04/Quizizz.js/pulls"><img src="https://img.shields.io/github/issues-pr/zaida04/Quizizz.js.svg?style=flat" alt="GitHub pull requests"></a>
        <a href="https://deepscan.io/dashboard#view=project&tid=7103&pid=13963&bid=248819"><img src="https://deepscan.io/api/teams/7103/projects/13963/branches/248819/badge/grade.svg" alt="DeepScan grade"></a>
        <img src="https://github.com/zaida04/Quizizz.js/workflows/Linting/badge.svg" alt="Linting">
        <img src="https://github.com/zaida04/Quizizz.js/workflows/TypeScript/badge.svg" alt="TypeScript">
        <br>
        <a href="https://npmjs.org/package/quizizz.js"><img src="https://nodei.co/npm/quizizz.js.png" alt="NPM"></a>
    </p>
</div>

## Getting Started
- [Be sure to read this disclaimer before you continue](https://github.com/zaida04/Quizizz.js#disclaimer)
- `npm install Quizizz.js`

```js
    const QAPI = require("Quizizz.js");
    const client = new QAPI.QuizizzClient();

    (async () => {
        const Quiz = await client.fetchQuiz("quizID");
        console.log(Quiz);
    })();

```

## Documentation
You can find the documentation [here](http://quizizz.js.org)

## Contributing
We welcome any and all contributions that follow our [contribution guide](https://github.com/zaida04/Quizizz.js/blob/master/.github/CONTRIBUTING.md)

## Disclaimer
> Quizizz does not provide a public API, this is an internal user API that isn't secured, allowing it to be accessed by anyone. Use this at your own discretion, we are not responsible for what you do with this data and you are subject to the TOS of Quizizz along with the responsibility of ethically using the data you are receiving. Typings may not be fully accurate, feel free to PR.

### LICENSING
Created ~9/20/2020

**Quizizz.js** © [zaida04](https://github.com/zaida04), Released under the [MIT](https://github.com/zaida04/Quizizz.js/blob/master/LICENSE) License.  
Authored and maintained by zaida04.

> GitHub [@zaida04](https://github.com/zaida04) 
