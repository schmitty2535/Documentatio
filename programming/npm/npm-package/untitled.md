# A Simple Guide to Publishing an npm Package

In this guide, I will walk you through the process of building and publishing a simple package to the npm registry.

I tried to make this guide as simple yet as complete as possible but humans do make mistakes, so suggestions and comments are most welcome and appreciated.

### **Assumptions** <a id="39cf"></a>

This guide assumes that you are using [Git](https://git-scm.com/) as a version control system and [GitHub](https://github.com/) for hosting your code.

> TL;DR
>
> This guide explains how to initialize and publish a simple package to npm. It also covers many of the things you need to do before publishing a package to npm such as setting up linting, testing, managing package version, code coverage, continuous integration and other topics.
>
> You can use this [CLI utility](https://www.npmjs.com/package/spongepoop) to generate the template created in this guide.

## 1. Getting Started <a id="8bea"></a>

### What is npm? <a id="a9f7"></a>

[npm](https://npmjs.org/) is the default package manager for [Node.js](https://nodejs.org/en/) and it is the world’s largest software registry. Open-source developers use npm to share software. It consists of a command line client \(installed automatically with Node.js\) and an online database of public and paid-for private package, called the npm registery.

### Update Node and npm <a id="e5af"></a>

First, make sure you have a recent version of [Node.js](https://nodejs.org/en/download/) and npm. Open a terminal window and make sure npm version is updated:

```text
~ $ npm i -g npm@latest
```

### Create an npm account <a id="c4cf"></a>

In order to publish an npm package, you will need an [npm](http://npmjs.org/signup) account, which makes sense. If you do not have one, go ahead and [create an account](http://npmjs.org/signup).

### Login to npm <a id="b52d"></a>

Once you have created your account, login using your account credentials:

```text
~ $ npm login
```

You should get a message similar to this:

```text
~ $ npm login
Username: <your-username>
Password:
Email: (this IS public) <your-email>
Logged in as <your-username> on https://registry.npmjs.org/.
```

Needless to say that `<your-username>` and `<your-email>` will be your own username and email address.

## 2. Initialize The Package <a id="c09d"></a>

Now that you are logged in, create a new directory for your package.

For no obvious reason, I will call my package ‘_spongepoop_’. However, you can choose any other name you want for your package.

![](https://miro.medium.com/max/60/1*aeN7Sh2oGFSn_rv5ASpo4A.jpeg?q=20)

```text
~ $ mkdir spongepoop
```

Inside your package directory, run the initialization command:

```text
~ $ cd spongepoop
spongepoop $ npm init
```

You will be asked a couple of questions about the name of your package, version, description and so. Enter whatever you want, you can always change things later.

### Package.json file <a id="58b1"></a>

Once you are done, you will see a new [_package.json_ file](https://docs.npmjs.com/files/package.json) created in the package root directory. All npm packages contain such a file. This file is used to describe your package and allows npm to handle the package’s dependencies.

### **Package scope** <a id="ba9d"></a>

There are lots of packages on npm. The name you have chosen might have already been chosen by someone else. In this case, you can create a [scoped package](https://docs.npmjs.com/misc/scope).

A scoped package has a username \(or an organization name\) added onto the beginning of the package name and looks something like:

> @somescope/somepackagename

You might have already seen this naming pattern in packages like _@babel/cli_, @_emotion/core_ or _@storybook/addons_.

For this sample package, I will stick with ‘_spongepoop_’.

Check [npm scopes](https://docs.npmjs.com/misc/scope) for more information.

### Package version <a id="7888"></a>

Each npm package needs a version number. This helps developers know if it’s safe to update to a certain version of your package without breaking their code.

The versioning system npm uses is [SemVer](https://semver.org/) \(Semantic Versioning\). Basically, the version number consists of three parts:

> MAJOR.MINOR.PATCH

For a version number 10.12.5, the major number is 10, the minor number is 12 and the patch number is 5.

Version number parts should be incremented in the following manner:

_**MAJOR**_ version is increased when you make incompatible API changes.

_**MINOR**_ version is increased when you add backwards-compatible functionality.

**PATCH** version is increased when you make backwards-compatible bug fixes.

You shouldn’t have to worry about managing the version number manually. There is an npm command for bumping those numbers up:

```text
$ npm version patch     # 0.1.0 -> 0.1.1
$ npm version minor     # 0.2.6 -> 0.3.0
$ npm version major     # 2.1.4 -> 3.0.0
```

Start with version number 0.1.0 then use the `npm version` command as you progress with the development.

Note that your working directory must be clean \(no uncommitted changes\) to use the `npm version` command.

Check [SemVer](https://semver.org/) and [npm version](https://docs.npmjs.com/cli/version.html) for more information.

## 3. Publish Now <a id="adf9"></a>

What you have now is sufficient to publish your package. Go ahead and try:

```text
spongepoop $ npm publish
```

Scoped packages are private by default. If you have created a scoped package, you may need to add an access flag to make your package public:

```text
spongepoop $ npm publish --access=public
```

A bunch of lines will appear then finally a line that looks like this:

```text
+ spongepoop@0.1.0
```

This means that your package has been successfully published on npm with version number 0.1.0 and you can install it in any project just like any other npm package:

```text
another-project $ npm i spongepoop
```

![](https://miro.medium.com/max/60/1*WwPAwUL7XiVANyi8doyRbA.jpeg?q=20)

Congrats! You’re now on npm

## 4. Create a Repository <a id="4e1d"></a>

Your package will most likely contain code, and this code should be hosted somewhere. Now would be a good time to initialize a repository.

```text
spongepoop $ git init
```

Next, create a repo on GitHub. I chose MIT license but you can choose any license you want.

Once you have created the repo on GitHub, add the remote URL to your local repo:

```text
spongepoop $ git remote add origin <your-repo-url>
spongepoop $ git pull origin master
```

You should get three new files in the package directory: _LICENSE_, _.gitignore_ and _README.md_. Now it’s time to write some code.

## 5. Create an EditorConfig File <a id="f5ac"></a>

An [editor config file](http://editorconfig.org/) helps define consistent coding styles between different editors and IDEs and it is readable by all popular code editors including Sublime Text, Atom and VSCode.

Create a _.editorconfig_ file inside your package directory:

```text
root = true# General settings for whole project
[*]
indent_style = space
end_of_line = lf
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true# Format specific overrides
[*.md]
max_line_length = 0
trim_trailing_whitespace = false
```

You can read more on how to configure your _.editorconfig_ and what each line does from [here](https://editorconfig.org/) or you can use this [example file](https://editorconfig.org/#example-file) as your starting point.

## 6. Start Writing Code <a id="b78f"></a>

Create a _src/index.js_ file inside your package directory and start writing some code:

```text
/**
* Adds two numbers and returns the result in poop emoji.
* @param {Number} a First number
* @param {Number} b Second number
*/module.exports = function(a, b) {
  return Array.apply(null, Array(a + b)).map(
    function() {
      return '💩';
    }
  ).join('');
};
```

You can structure your code any way you want. I personally like placing all source code files inside a _src_ directory.

The ‘_main’_ file is the entry point to your program. You may need to edit _package.json_ and change the main file to _src/index.js_

```text
{
  ...
  "main": "src/index.js",
  ...
}
```

Now, let’s test our little function:

```text
spongepoop $ node  # start node REPL in the package directory
> var pooper = require('.'); // the dot resolves to the main file
> pooper(1,2); // logs three poop emojis
'💩💩💩'
```

Check [npm docs](https://docs.npmjs.com/files/package.json#main) for more information on _package.json_ file.

## 7. Use Modern JavaScript <a id="78c7"></a>

The JavaScript language has received a significant update which provides an immense amount of useful features. It’s 2019 and you should already be familiar with most of the new features by now, but if you’re not, then you can check this [great post](https://medium.freecodecamp.org/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e) by [Flavio Copes](https://medium.freecodecamp.org/@flaviocopes).

This step is optional and you can still write your code in plain old ES5 but it is highly recommended that you start using the new syntax.

Start by re-writing the code:

```text
/**
* Adds two numbers and returns the result in poop emoji.
* @param {Number} a First number
* @param {Number} b Second number
*/export const spongepoop = (a, b) => '💩'.repeat(a + b);
```

Let’s test our function again:

```text
spongepoop $ node
> var pooper = require('.');
.../spongepoop/src/index.js:7
export const spongepoop = (a, b) => '💩'.repeat(a + b);
^^^^^^SyntaxError: Unexpected token export
```

Now we get a Syntax Error. This is because Node.js doesn’t fully support all the new features yet. To fix this problem, we can use a tool to convert code to plain ES5 syntax which is supported by all Node.js versions. The tool we are looking for is called [Babel](https://babeljs.io/).

### Transpile the code <a id="1037"></a>

Inside the package directory, install the following dependencies:

```text
spongepoop $ npm i -D @babel/core @babel/cli @babel/preset-env
```

`@babel/core` Contains the core functionality of Babel.  
`@babel/cli` Allows using Babel from the terminal.  
`@babel/preset-env` A preset that includes all plugins to support modern JS.

You can configure Babel in many different ways, one of them is using a [_.babelrc_ file](https://babeljs.io/docs/usage/babelrc/).

Create the _.babelrc_ file in the root of the package and modify its content to match the following:

```text
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Next, create a script to transpile the code to normal ES5 syntax using [Babel CLI](https://babeljs.io/docs/en/usage#cli-tool). Add a build script to _package.json_ file:

```text
{
  ...
  "scripts": {
    ...
   "build:commonjs": "babel src --out-dir lib",
    ...
  },
  ...
}
```

Running this script `npm run build:commonjs` will create a _lib_ directory with the transpiled code inside. [Commonjs](https://en.wikipedia.org/wiki/CommonJS) is the standard module specification that Node.js uses.

Finally, change the main file in _package.json_ to refer to _lib/index.js_ instead of _src/index.js._ This will point projects using your package to `import` or `require` from _lib_ directory where the normal ES5 code exists, not from _src_.

```text
{
  ...
  "main": "lib/index.js",
  ...
}
```

Now, run `npm run build:commonjs` inside the package directory to build \(transpile\) the code then test the package again:

```text
spongepoop $ node
> var pooper = require('.');
> pooper(2,1); // successfully poops 3 times
'💩💩💩'
```

### Create a UMD version <a id="d4f4"></a>

[UMD](https://github.com/umdjs/umd) stands for Universal Module Definition. Simply, it means bundling all your code and all of its dependencies into a single file. You can achieve this using a module bundler called [Webpack](https://webpack.js.org/).

Add the following development dependencies to your package:

```text
spongepoop $ npm i -D webpack webpack-cli cross-env
```

[Cross-env](https://github.com/kentcdodds/cross-env) is a package that allows setting environment variables properly across different platforms.

Create the configuration file _webpack.config.js_ for Webpack in the root of the package. Contents of _webpack.config.js_ should be:

```text
const path = require('path');
const { NODE_ENV, FILE_NAME } = process.env;
const filename = `${FILE_NAME}${NODE_ENV === 'production' ? '.min' : ''}.js`;module.exports = {
  mode: NODE_ENV || 'development',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    libraryTarget: 'umd',
  },
};
```

Next, add the following build scripts to _package.json_:

```text
...
"scripts": {
 ...
 "build:umd": "cross-env FILE_NAME=spongepoop webpack",
 "build:umd:min": "cross-env NODE_ENV=production npm run build:umd",
 ...
},
...
```

Running commands `npm run build:umd` and `npm run build:umd:min` inside the package directory will create a new folder named _dist_ that contains two files: _spongepoop.js_ and _spongepoop.min.js_, respectively_._

### Clean before building <a id="449d"></a>

Just to be on the safe side, make sure to delete both _lib_ and _dist_ directories before building.

Add [rimraf](https://www.npmjs.com/package/rimraf) as a development dependency:

```text
spongepoop $ npm i -D rimraf
```

Then add a clean script:

```text
...
"scripts": {
 ...
 "clean": "rimraf lib dist",
 ...
},
...
```

Finally, add a build script that does all of the above:

```text
...
"scripts": {
 ...
 "build": "npm run clean && npm run build:commonjs && npm run build:umd && npm run build:umd:min",
 ...
},
...
```

## 8. Use a Style Guide <a id="1145"></a>

A style guide is a set of standards that outline how code should be written and organized. In order to enforce a style guide, you would need a code linter.  
A code linter is a program that helps save time and write clean and maintainable code by analyzing your code for potential errors.

![](https://miro.medium.com/max/60/1*DnZd6G2FMRslz2hG7-8qAw.jpeg?q=20)

Don’t leave trails of bad code

[ESLint](https://eslint.org/) is the most popular JavaScript linting tool out there and it has plugins for many popular editors like [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Sublime Text](http://cheng.logdown.com/posts/2015/09/15/linting-react-jsx-and-es6-javascript-with-eslint) and [Atom](https://atom.io/packages/eslint) to provide realtime code linting.

### Install ESLint <a id="b98d"></a>

Install [ESLint](https://www.npmjs.com/package/eslint) as a development dependency:

```text
spongepoop $ npm i -D eslint
```

### Configure ESLint <a id="c50b"></a>

ESLint can be [configured](https://eslint.org/docs/user-guide/configuring) using a configuration .[_eslintrc_](https://eslint.org/docs/4.0.0/user-guide/configuring#configuration-file-formats) file. Create this file in the root of the package and modify its contents so it looks like this:

```text
{
  "env": {
    "browser": true,
    "node": true
  }
}
```

The `env` configuration key basically tells ESLint which [environments](https://eslint.org/docs/user-guide/configuring#specifying-environments) our script is designed to run in. Each environment brings with it a certain set of predefined global variables.

### AirBnB’s Style Guide <a id="f53b"></a>

If you do not already have a style guide to follow, then you should definitely adopt [AirBnB’s](http://airbnb.io/) [style guide](https://github.com/airbnb/javascript). It is a very comprehensive set of coding standards and it is one of the most popular style guides on the internet.

Install [it](https://www.npmjs.com/package/eslint-config-airbnb) from npm as a development dependency:

```text
spongepoop $ npm i -D eslint-config-airbnb
```

AirBnB’s style guide [requires](https://www.npmjs.com/package/eslint-config-airbnb#eslint-config-airbnb-1) other packages to be installed, so let us add them as well:

```text
spongepoop $ npm i -D eslint-plugin-import
spongepoop $ npm i -D eslint-plugin-jsx-a11y
spongepoop $ npm i -D eslint-plugin-react
```

Now, you need to declare that you will use the style guide in the _.eslintrc_ file:

```text
{
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  }
}
```

### Linting non-standard ECMAScript syntax <a id="81e1"></a>

New ECMAScript features such as class properties are really useful but they might not be part of the standards yet and ESLint will throw a Parsing Error if you use them. To get around this, we will use [babel-eslint](https://github.com/babel/babel-eslint) as an ESLint parser.

Install the [babel-eslint](https://www.npmjs.com/package/babel-eslint) as a development dependency:

```text
spongepoop $ npm i -D babel-eslint
```

Then use it in the _.eslintrc_ file:

```text
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  }
}
```

### Add a script for linting <a id="d9c0"></a>

Create a ‘lint’ script in _package.json_ file:

```text
{
  ...
  "scripts": {
    ...
    "lint": "eslint src --ext .js,.jsx",
    ...
  },
  ...
}
```

Now you can lint your code by running the following command:

```text
spongepoop $ npm run lint
```

Running the command above gives one error: ‘Prefer default export’. You can always modify eslint rules to fit your needs. Let’s fix this error:

```text
/**
* Adds two numbers and returns the result in poop emoji.
* @param {Number} a First number
* @param {Number} b Second number
*/const spongepoop = (a, b) => '💩'.repeat(a + b);export default spongepoop;
```

## 9. Test Your Code <a id="4557"></a>

You can’t just assume that your code works. You need to be able to prove it by writing tests. For that, we will use [Jest](https://jestjs.io/).

Jest is a fast and complete testing framework for JavaScript. It’s an open source project maintained by Facebook, and it’s especially well suited for \(but not limited to\) React code testing.

Add Jest as a development dependency:

```text
spongepoop $ npm i -D jest babel-jest
```

[Babel Jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) is required for using Babel in your tests.

### Add a test script <a id="cf71"></a>

Edit _package.json_ and change the test script to use Jest:

```text
{
  ...
  "test": "jest",
  ...
}
```

Create a directory _tests_ in the root of the package and add a sample test file _index.test.js:_

```text
import pooper from '../src';describe('Test', () => {
  it('should poop 3 times', () => {
    expect(pooper(1, 2)).toBe('💩💩💩');
  });
});
```

You may get a few linting errors in the test file because `describe`, `it` and `expect` functions are not defined. This can be easily fixed by enabling Jest environment.

Edit file _.eslintrc_ to enable Jest:

```text
{
  ...
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  ...
}
```

Now run `npm test` and the test should pass with no problems.

## 10. Symlink Your Package <a id="950a"></a>

It makes sense to test your package in a dummy project as if it was installed from npm and see if it is working properly. But it would not make sense to `npm publish` your package then `npm install` it every time you need to test it.

There is a handy way of _linking_ your package locally in two steps:

### First Step <a id="de40"></a>

You need to run`npm link` in the package directory. This will create a symlink in the global _node\_modules_ folder that links to the package where the `npm link`command was executed.

```text
spongepoop $ npm link
```

### Second Step <a id="d0ea"></a>

Next, in some other location where you want to test your package, run the command `npm link <package-name>` and you should be able to `import` or `require` the package as if it was an installed dependency.

Note that `<package-name>` is taken from _package.json_, not from the directory name.

Assuming you have created another test app or package called _my-test-app_:

```text
my-test-app $ npm link spongepoop
```

This will create a symbolic link from your globally-installed package to the _node\_modules_ of the current folder.

You can unlink at any time by running the following command in the package directory:

```text
spongepoop $ npm unlink
```

## 11. Use Continuous Integration <a id="d3a1"></a>

[Travis CI](https://travis-ci.org/) is a continuous integration and delivery platform that runs your tests each time you make a commit or merge a pull request on your GitHub repo.

Travis CI is free for open source projects, so head over to their website and [signup](https://travis-ci.com/signin) using your GitHub account.

Accept the Authorization of Travis CI then you’ll be redirected to GitHub.

Click the green _Activate_ button, and select the repositories you want to use with Travis CI.

![](https://miro.medium.com/max/60/1*o9aU8o8-0c0vcAHzIIGf8A.png?q=20)

Create a `.travis.yml` file in the root of your package directory to tell Travis CI what to do. The file contents should be similar to the following:

```text
language: node_jsnode_js:
  - node
```

Commit your code and push then check the build on [Travis website](https://travis-ci.org/) , it should pass.

You can learn more about travis configuration for Node.js [here](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/).

## 12. Add Code Coverage Statistics <a id="42f1"></a>

Code coverage is a term that is used to describe how much application code is exercised when an application is running. Jest can generate code coverage by adding the flag `--coverage`.

Try running this command inside the package directory:

```text
spongepoop $ npx jest --coverage
```

You will get a nice breakdown of how much code is covered. Let’s add a script for that in _package.json_:

```text
{
  ...
  "test": "jest",
  "coverage": "npm test -- --coverage",
  ...
}
```

You can show that to people using a tool called [Coveralls](https://coveralls.io/).

Coveralls is a hosted analysis tool that can be integrated with Travis CI to provide statistics about your code coverage. Coveralls is free for open source projects, so go ahead and [signup](https://coveralls.io/sign-up) with your GitHub account.

Once you’ve signed up, we will need to integrate Coveralls and Travis CI. Install the [coveralls package](https://github.com/nickmerwin/node-coveralls) as a development dependency:

```text
spongepoop $ npm i -D coveralls
```

Then update _.travis.yml_ file with the following:

```text
language: node_jsnode_js:
  - nodescript:
  - npm run coverage -- --coverageReporters=text-lcov | coveralls
```

This will send the coverage report to Coveralls after each build.

The last step to do is go to [https://coveralls.io/](https://coveralls.io/) and click the ‘Add Repos’ link from the menu:

Then enable the toggle switch for the repository:

Commit your code and push to GitHub. Travis CI should pick up the push and start a new build. After the build is complete, check your repo on Coveralls and you should find an updated report.

## 13. Add Badges <a id="f747"></a>

Let’s add some badges to the _readme_ file. You _will_ write a _readme_ file, right?  
Head over to [shields.io](https://shields.io/) and choose some badges. I picked a few:

## 14. Be Careful <a id="418c"></a>

To avoid publishing mistakes, let’s make sure we test, lint and build before running `npm publish`. Modify _package.json_ to add the following scripts:

```text
{
  ...
  "lint": "eslint src --ext .js,.jsx",
  "test": "jest",
  "coverage": "npm test -- --coverage",
  "posttest": "npm run lint",
  "prepublishOnly": "npm test && npm run build",
  ...
}
```

Script `prepublishOnly` will run automatically before `npm publish` runs and `posttest` will run automatically after `npm test` runs.

So, whenever you run `npm publish` command, the following scripts will run sequentially:  
`npm test` then `npm run lint` then `npm run build` and finally `npm publish`.

## Done <a id="af9a"></a>

Now, let’s try to publish again but first let’s update the package version:

```text
spongepoop $ npm version minor
v0.2.0
spongepoop $ npm publish
...
+ spongepoop@0.2.0
```

All done, congratulations! 🎉

## CLI Tool <a id="31ab"></a>

Personally, I would not do all of the above every time I start working on a new npm package, and neither should you. For that reason I have created a simple [CLI tool](https://www.npmjs.com/package/spongepoop) that generates this template in seconds.

First install it globally:

```text
$ npm i -g spongepoop
```

Then use it anywhere you want:

```text
$ poop my-new-project
```

## Conclusion <a id="2139"></a>

In this guide we’ve covered many of the things you need to do before you publish a package to npm such as setting up linting, testing, managing package version, code coverage, continuous integration and other topics. All that is left for you to do now is write some code and help solve problems. Happy hacking!

Thanks for making it to the end of this guide.

