# Nodejs Overview

> Node 16 is the LTS version since 2021-10-26, while Node 17 became the Current version from 2021-10-19. The next LTS version, v18 is planned to take over on 2022-10-25.

In this article below, you’ll find changelogs and download / [update](https://blog.risingstack.com/how-to-check-node-version/) information regarding Node.js!

### Node.js LTS & Current Download for macOS: <a href="#nodejsltscurrentdownloadformacos" id="nodejsltscurrentdownloadformacos"></a>

* [16.14.0 LTS macOS](https://nodejs.org/dist/v16.14.0/node-v16.14.0.pkg)
* [17.6.0 Current macOS](https://nodejs.org/dist/v17.6.0/node-v17.6.0.pkg)

### Node.js LTS & Current Download for Windows: <a href="#nodejsltscurrentdownloadforwindows" id="nodejsltscurrentdownloadforwindows"></a>

* [16.14.0 LTS Windows 32-bit](https://nodejs.org/dist/v16.14.0/node-v16.14.0-x86.msi)
* [16.14.0 LTS Windows 64-bit](https://nodejs.org/dist/v16.14.0/node-v16.14.0-x64.msi)
* [17.6.0 Current Windows 32-bit](https://nodejs.org/dist/v17.6.0/node-v17.6.0-x86.msi)
* [17.6.0 Current Windows 64-bit](https://nodejs.org/dist/v17.6.0/node-v17.6.0-x64.msi)

_For other downloads like Linux libraries, source codes, Docker images, etc.. please visit_ [_https://nodejs.org/en/download/_](https://nodejs.org/en/download/)\


### Node.js Release Schedule:

![Releases](https://raw.githubusercontent.com/nodejs/Release/master/schedule.svg?sanitize=true)

### Node.js v17 is the Current version!

**OpenSSL 3.0**

Node.js now includes OpenSSL 3.0, specifically [quictls/openssl](https://github.com/quictls/openssl) which provides QUIC support. With OpenSSL 3.0 FIPS support is again available using the new FIPS module. For details about how to build Node.js with FIPS support please see [BUILDING.md](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-with-fips-compliant-openssl).

While OpenSSL 3.0 APIs should be mostly compatible with those provided by OpenSSL 1.1.1, we do anticipate some ecosystem impact due to tightened restrictions on the allowed algorithms and key sizes.

If you hit an `ERR_OSSL_EVP_UNSUPPORTED` error in your application with Node.js 17, it’s likely that your application or a module you’re using is attempting to use an algorithm or key size which is no longer allowed by default with OpenSSL 3.0. A command-line option, `--openssl-legacy-provider`, has been added to revert to the legacy provider as a temporary workaround for these tightened restrictions.

**V8 9.5**

The V8 JavaScript engine is updated to V8 9.5. This release comes with additional supported types for the `Intl.DisplayNames` API and Extended `timeZoneName` options in the `Intl.DateTimeFormat` API.

**Readline Promise API**

The `readline` module provides an interface for reading data from a Readable stream (such as `process.stdin`) one line at a time.

The following simple example illustrates the basic use of the `readline` module:

```
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
```

### Node.js CURRENT v17 Changelogs

#### Changelog for Node Version 17.6.0 (Current)

* doc: deprecate notice for process methods
* stream: revert `map` spec compliance
* build: remove broken x32 arch support
* esm: support https remotely and http locally under flag
* fs: support copy of relative links with cp and cpSync
* lib: add FormData global when fetch is enabled
* readline: bind keystroke `ctrl+6` to redo

#### Changelog for Node Version 17.5.0 (Current)

**Add fetch API:** Adds experimental support to the fetch API. This adds a `--experimental-fetch` flag that installs the `fetch`, `Request`, `Reponse` and `Headers` globals.

**Add stream methods:**

* add iterator helper find
* add toArray
* add forEach method
* support some and every

Other Notable Changes:

* node-api: add node\_api\_symbol\_for()
* module: unflag esm json modules
* deps: upgrade npm to 8.4.1

#### Changelog for Node Version 17.4.0 (Current)

* child\_process: add support for URL to `cp.fork`&#x20;
* crypto: alias webcrypto.subtle and webcrypto.getRandomValues on crypto
* doc: add Mesteery to collaborators
* events: graduate capturerejections to supported
* events: add EventEmitterAsyncResource to core
* loader: return package format from defaultResolve if known
* perf\_hooks: multiple fixes for Histogram
* stream: add filter method to readable
* stream: add isReadable helper
* stream: add map method to Readable

#### Changelog for Node Version 17.3.1 (Current)

This is a security release.

**Improper handling of URI Subject Alternative Names**

Accepting arbitrary Subject Alternative Name (SAN) types, unless a PKI is specifically defined to use a particular SAN type, can result in bypassing name-constrained intermediates. Node.js was accepting URI SAN types, which PKIs are often not defined to use. Additionally, when a protocol allows URI SANs, Node.js did not match the URI correctly.

Versions of Node.js with the fix for this disable the URI SAN type when checking a certificate against a hostname. This behavior can be reverted through the `--security-revert` command-line option.

**Certificate Verification Bypass via String Injection**

Node.js converts SANs (Subject Alternative Names) to a string format. It uses this string to check peer certificates against hostnames when validating connections. The string format was subject to an injection vulnerability when name constraints were used within a certificate chain, allowing the bypass of these name constraints.

Versions of Node.js with the fix for this escape SANs containing the problematic characters in order to prevent the injection. This behavior can be reverted through the `--security-revert` command-line option.

**Incorrect handling of certificate subject and issuer fields**

Node.js did not handle multi-value Relative Distinguished Names correctly. Attackers could craft certificate subjects containing a single-value Relative Distinguished Name that would be interpreted as a multi-value Relative Distinguished Name, for example, in order to inject a Common Name that would allow bypassing the certificate subject verification.

Affected versions of Node.js do not accept multi-value Relative Distinguished Names and are thus not vulnerable to such attacks themselves. However, third-party code that uses node’s ambiguous presentation of certificate subjects may be vulnerable.

**Prototype pollution via `console.table` properties**

Due to the formatting logic of the `console.table()` function it was not safe to allow user controlled input to be passed to the `properties` parameter while simultaneously passing a plain object with at least one property as the first parameter, which could be `__proto__`. The prototype pollution has very limited control, in that it only allows an empty string to be assigned numerical keys of the object prototype.

Versions of Node.js with the fix for this use a null protoype for the object these properties are being assigned to.

#### Changelog for Node Version 17.3.0 (Current)

**OpenSSL-3.0.1**: OpenSSL-3.0.1 contains a fix for CVE-2021-4044: Invalid handling of X509\_verify\_cert() internal errors in libssl (Moderate). This is a vulnerability in OpenSSL that may be exploited through Node.js.

**Other Notable Changes:**

* lib: make AbortSignal cloneable/transferable
* deps: upgrade npm to 8.3.0
* doc: add @bnb as a collaborator
* process: add `getActiveResourcesInfo()`
* timers: add experimental scheduler api

#### Changelog for Node Version 17.2.0 (Current)

* async\_hooks: expose async\_wrap providers
* deps: update V8 to 9.6.180.14
* lib: add reason to AbortSignal
* src: add x509.fingerprint512 to crypto module
* stream: deprecate thenable support
* stream: fix finished regression when working with legacy Stream

#### Changelog for Node Version 17.1.0 (Current)

* doc: add VoltrexMaster to collaborators
* esm: add support for JSON import assertion
* lib: add unsubscribe method to non-active DC channels
* lib: add return value for DC channel.unsubscribe
* v8: multi-tenant promise hook api

#### Changelog for Node Version 17.0.1 (Current)

**Fixed distribution for native addon builds**

This release fixes an issue introduced in Node.js v17.0.0, where some V8 headers were missing from the distributed tarball, making it impossible to build native addons. These headers are now included.

**Fixed stream issues**

* Fixed a regression in `stream.promises.pipeline`, which was introduced in version 16.10.0, is fixed. It is now possible again to pass an array of streams to the function.
* Fixed a bug in `stream.Duplex.from`, which didn’t work properly when an async generator function was passed to it.

### Node.js v16 became the next LTS! <a href="#nodejsv16isthecurrentversion" id="nodejsv16isthecurrentversion"></a>

Node.js 16 got promoted to Long-term Support (LTS) in October 2021. Sneak peak from the [announcement:](https://medium.com/the-node-js-collection/node-js-16-available-now-7f5099a97e70)\


**V8 upgraded to V8 9.0**

As always a new version of the V8 JavaScript engine brings performance tweaks and improvements as well as keeping Node.js up to date with JavaScript language features. In Node.js v16.0.0, the V8 engine is updated to V8 9.0 — up from V8 8.6 in Node.js 15.\


**Stable Timers Promises API**

The Timers Promises API provides an alternative set of timer functions that return Promise objects, removing the need to use util.promisify().\


**Some of the recently released features in Node.js 15, which will also be available in Node.js 16, include:**

* Experimental implementation of the standard Web Crypto API
* npm 7 (v7.10.0 in Node.js v16.0.0)
* Node-API version 8
* Stable AbortController implementation based on the AbortController Web API
* Stable Source Maps v3
* Web platform atob (buffer.atob(data)) and btoa (buffer.btoa(data)) implementations for compatibility with legacy web platform APIs

### Node.js v16 Changelogs <a href="#nodejscurrentv16changelogs" id="nodejscurrentv16changelogs"></a>

#### Changelog for Node Version 16.14.0

**Importing JSON modules now requires experimental import assertions syntax**: This release adds experimental support for the import assertions stage 3 proposal.

To keep Node.js ESM implementation as compatible as possible with the HTML spec, import assertions are now required to import JSON modules (still behind the `--experimental-json-modules` CLI flag):

`import info from './package.json' assert { type: 'json' };`

Or use dynamic import:

`const info = await import('./package.json', { assert: { type: 'json' } });`

**Other notable changes:**

* **async\_hooks**:
  * expose async\_wrap providers
* **child\_process**:
  * add support for URL to `cp.fork`&#x20;
* **esm**:
  * graduate capturerejections to supported
  * add EventEmitterAsyncResource to core
* **events**:
  * propagate weak option for kNewListener
* **fs**:
  * accept URL as argument for `fs.rm` and `fs.rmSync`&#x20;
* **lib**:
  * make AbortSignal cloneable/transferable
  * add AbortSignal.timeout
  * add reason to AbortSignal
  * add unsubscribe method to non-active DC channels
  * add return value for DC channel.unsubscribe
* **loader**:
  * return package format from defaultResolve if known
* **perf\_hooks**:
  * multiple fixes for Histogram
* **process**:
  * add `getActiveResourcesInfo()`&#x20;
* **src**:
  * add x509.fingerprint512 to crypto module
  * add flags for controlling process behavior
* **stream**:
  * add filter method to readable
  * add isReadable helper
  * add map method to Readable
  * deprecate thenable support
* **util**:
  * pass through the inspect function to custom inspect functions
  * add numericSeparator to util.inspect
  * always visualize cause property in errors during inspection **timers**:
* **timers:**
  * add experimental scheduler api
* **v8**:
  * multi-tenant promise hook api

#### Changelog for Node Version 16.13.2

This is a security release.

See changes at 17.3.1 (Current).

#### Changelog for Node Version 16.13.1

* deps: upgrade npm to 8.1.2.
* deps: update c-ares to 1.18.1. This release contains a c-ares update to fix a regression introduced in Node.js v16.6.2 resolving CNAME records containing underscores.
* doc: add VoltrexMaster to collaborators.
* lib: fix regular expression to detect \`/\` and \`\\\`.

#### Changelog for Node Version 16.13.0

This release marks the transition of Node.js 16.x into Long Term Support (LTS) with the codename ‘Gallium’. The 16.x release line now moves into “Active LTS” and will remain so until October 2022. After that time, it will move into “Maintenance” until end of life in April 2024.

#### Changelog for Node Version 16.12.0

Experimental ESM Loader Hooks API:

Node.js ESM Loader hooks have been consolidated to represent the steps involved needed to facilitate future loader chaining:

1. `resolve`: `resolve` \[+ `getFormat`]
2. `load`: `getFormat` + `getSource` + `transformSource`

For consistency, `getGlobalPreloadCode` has been renamed to `globalPreload`.

A loader exporting obsolete hook(s) will trigger a single deprecation warning (per loader) listing the errant hooks.

#### Changelog for Node Version 16.11.1

This is a security release. Notable changes:

* CVE-2021-22959: HTTP Request Smuggling due to spaced in headers (Medium): The http parser accepts requests with a space (SP) right after the header name before the colon. This can lead to HTTP Request Smuggling (HRS).
* CVE-2021-22960: HTTP Request Smuggling when parsing the body (Medium): The parse ignores chunk extensions when parsing the body of chunked requests. This leads to HTTP Request Smuggling (HRS) under certain conditions.

#### Changelog for Node Version 16.11.0

* crypto: update root certificates
* deps: upgrade npm to 8.0.0, update nghttp2 to v1.45.1, update V8 to 9.4.146.19
* tools: update certdata.txt

#### Changelog for Node Version 16.10.0

* crypto: add rsa-pss keygen parameters
* deps: upgrade npm to 7.24.0
* deps: update Acorn to v8.5.0
* doc: add Ayase-252 to collaborators
* fs: make open and close stream override optional when unused
* http: limit requests per connection
  * The maximum number of requests a socket can handle before closing keep alive connection can be set with server.maxRequestsPerSocket.
* src: add –no-global-search-paths cli option
  * Adds the –no-global-search-paths command-line option to not search modules from global paths like $HOME/.node\_modules and $NODE\_PATH.
* src: make napi\_create\_reference accept symbol
* stream: add signal support to pipeline generators

#### Changelog for Node Version 16.9.1

This release fixes a regression introduced by the V8 9.3 update in Node.js 16.9.0.\


#### Changelog for Node Version 16.9.0

**Corepack**

Node.js now includes Corepack, a script that acts as a bridge between Node.js projects and the package managers they are intended to be used with during development. In practical terms, **Corepack will let you use Yarn and pnpm without having to install them** – just like what currently happens with npm, which is shipped in Node.js by default.

**V8 9.3**

V8 is updated to version [9.3](https://v8.dev/blog/v8-release-93), which includes performance improvements and new JavaScript features.

**`Object.hasOwn`**

`Object.hasOwn` is a static alias for `Object.prototype.hasOwnProperty.call`:

```
Object.hasOwn({ value: 42 }, 'value'); // Returns `true`.
```

**Error cause**

Errors can now be optionally constructed with a `cause` option, pointing to another error. This adds a `cause` property on the new error:

```
const error1 = new Error('Error one');
const error2 = new Error('Error two', { cause: error1 });
// error2.cause === error1
```

**Other Notable Changes**

* crypto: add RSA-PSS params to asymmetricKeyDetails
* module: support pattern trailers
* stream: add stream.compose



#### Changelog for Node Version 16.8.0

* doc: deprecate type coercion for `dns.lookup` options
* stream: add `stream.Duplex.from` utility
* stream: add `isDisturbed` helper
* util: expose `toUSVString` \


#### Changelog for Node Version 16.7.0 <a href="#changelogfornodeversion1670current" id="changelogfornodeversion1670current"></a>

* fs, experimental: add recursive cp method

#### Changelog for Node Version 16.6.2 <a href="#changelogfornodeversion1662current" id="changelogfornodeversion1662current"></a>

This is a security release. Notable Changes:

* CVE-2021-3672/CVE-2021-22931: Improper handling of untypical characters in domain names: Node.js was vulnerable to Remote Code Execution, XSS, application crashes due to missing input validation of hostnames returned by Domain Name Servers in the Node.js DNS library which can lead to the output of wrong hostnames (leading to Domain Hijacking) and injection vulnerabilities in applications using the library.\

* CVE-2021-22930: Use after free on close http2 on stream canceling: Node.js was vulnerable to a use after free attack where an attacker might be able to exploit memory corruption to change process behavior. This release includes a follow-up fix for CVE-2021-22930 as the issue was not completely resolved by the previous fix.\

* CVE-2021-22939: Incomplete validation of rejectUnauthorized parameter: If the Node.js HTTPS API was used incorrectly and “undefined” was in passed for the “rejectUnauthorized” parameter, no error was returned and connections to servers with an expired certificate would have been accepted.\


#### Changelog for Node Version 16.6.0 <a href="#changelogfornodeversion1660current" id="changelogfornodeversion1660current"></a>

This is a security release. Notable Changes:

**The V8 engine is updated to version 9.2.230.21.:**

It notably introduces the new Array.prototype.at method (also on Typed Arrays and strings):

```
const array = [1, 2, 3];

console.log(array.at(-1));
// Prints: 3
```

**Other notable changes:**

* CVE-2021-22930: Use after free on close http2 on stream canceling:\
  Node.js is vulnerable to a use after free attack where an attacker might be able to exploit the memory corruption, to change process behavior.
* inspector: mark as stable
* punycode: add pending deprecation
* repl: enable –experimental-repl-await /w opt-out\


#### Changelog for Node Version 16.5.0 <a href="#changelogfornodeversion1650current" id="changelogfornodeversion1650current"></a>

**Experimental Web Streams API: Node.js now exposes an experimental implementation of the Web Streams API.**

While it is experimental, the API is not exposed on the global object and is only accessible using the new `stream/web` core module:

`import { ReadableStream, WritableStream } from 'stream/web'; // Or from 'node:stream/web'`

Importing the module will emit a single experimental warning per process.

The raw API is implemented and we are now working on its integration with various existing core APIs.

**Other notable changes:**

* fs: allow empty string for temp directory prefix
* deps: upgrade npm to 7.19.1\


#### Changelog for Node Version 16.4.2 <a href="#changelogfornodeversion1642current" id="changelogfornodeversion1642current"></a>

Node.js 16.4.1 introduced a regression in the Windows installer on non-English locales that is being fixed in this release. There is no need to download this release if you are not using the Windows installer.\


#### Changelog for Node Version 16.4.1 <a href="#changelogfornodeversion1641current" id="changelogfornodeversion1641current"></a>

This is a security release. Vulnerabilities fixed:

* CVE-2021-22918: libuv upgrade – Out of bounds read (Medium): Node.js is vulnerable to out-of-bounds read in libuv’s uv\_\_idna\_toascii() function which is used to convert strings to ASCII. This is called by Node’s dns module’s lookup() function and can lead to information disclosures or crashes.\

* CVE-2021-22921: Windows installer – Node Installer Local Privilege Escalation (Medium): Node.js is vulnerable to local privilege escalation attacks under certain conditions on Windows platforms. More specifically, improper configuration of permissions in the installation directory allows an attacker to perform two different escalation attacks: PATH and DLL hijacking.\


#### Changelog for Node Version 16.4.0 <a href="#changelogfornodeversion1640current" id="changelogfornodeversion1640current"></a>

* async\_hooks: stabilize part of AsyncLocalStorage
* deps: upgrade npm to 7.18.1, update V8 to 9.1.269.36
* dns: allow `--dns-result-order` to change default dns verbatim\


#### Changelog for Node Version 16.3.0 <a href="#changelogfornodeversion1630current" id="changelogfornodeversion1630current"></a>

* cli: add -C alias for –conditions flag
* deps: add workspaces support to npm install commands\


#### Changelog for Node Version 16.2.0 <a href="#changelogfornodeversion1620current" id="changelogfornodeversion1620current"></a>

* async\_hooks: use new v8::Context PromiseHook API
* lib: support setting process.env.TZ on windows
* module: add support for URL to import.meta.resolve
* process: add ‘worker’ event
* util: add util.types.isKeyObject and util.types.isCryptoKey\


#### Changelog for Node Version 16.1.0 <a href="#changelogfornodeversion1610current" id="changelogfornodeversion1610current"></a>

fs: allow no-params fsPromises fileHandle read\


#### Changelog for Node Version 16.0.0 <a href="#changelogfornodeversion1600current" id="changelogfornodeversion1600current"></a>

* Stable Timers Promises API: The Timers Promises API provides an alternative set of timer functions that return Promise objects. Added in Node.js v15.0.0, in this release they graduate from experimental status to stable.\

* Toolchain and Compiler Upgrades: Node.js v16.0.0 will be the first release where we ship prebuilt binaries for Apple Silicon. While we’ll be providing separate tarballs for the Intel (darwin-x64) and ARM (darwin-arm64) architectures the macOS installer (.pkg) will be shipped as a ‘fat’ (multi-architecture) binary.\

* V8 9.0: The V8 JavaScript engine is updated to V8 9.0, including performance tweaks and improvements. This update also brings the ECMAScript RegExp Match Indices, which provide the start and end indices of the captured string. The indices array is available via the .indices property on match objects when the regular expression has the /d flag.\

* **Other Notable Changes:**
  * assert: graduate assert.match and assert.doesNotMatch
  * buffer: expose btoa and atob as globals
  * deps: bump minimum ICU version to 68
  * deps: update ICU to 69.1
  * deps: update llhttp to 6.0.0
  * deps: upgrade npm to 7.10.0
  * http: add http.ClientRequest.getRawHeaderNames()
  * lib,src: update cluster to use Parent
  * module: add support for node:‑prefixed require(…) calls
  * perf\_hooks: add histogram option to timerify
  * repl: add auto‑completion for node:‑prefixed require(…) calls
  * util: add getSystemErrorMap() impl\


### Learn More Node.js from RisingStack <a href="#learnmorenodejsfromrisingstack" id="learnmorenodejsfromrisingstack"></a>

At RisingStack we’ve been writing JavaScript / Node tutorials for the community in the past 5 years. If you’re beginner to Node.js, we recommend checking out our **Node Hero** tutorial series! The goal of this series is to help you get started with Node.js and make sure you understand how to write an application using it.

See all chapters of the Node Hero tutorial series:

1. [Getting Started with Node.js](https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/)
2. [Using NPM](https://blog.risingstack.com/node-hero-npm-tutorial/)
3. [Understanding async programming](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)
4. [Your first Node.js HTTP server](https://blog.risingstack.com/your-first-node-js-http-server/)
5. [Node.js database tutorial](https://blog.risingstack.com/node-js-database-tutorial/)
6. [Node.js request module tutorial](https://blog.risingstack.com/node-hero-node-js-request-module-tutorial/)
7. [Node.js project structure tutorial](https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/)
8. [Node.js authentication using Passport.js](https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/)
9. [Node.js unit testing tutorial](https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/)
10. [Debugging Node.js applications](https://blog.risingstack.com/node-hero-node-js-debugging-tutorial/)
11. [Node.js Security Tutorial](https://blog.risingstack.com/node-hero-node-js-security-tutorial/)
12. [How to Deploy Node.js Applications](https://blog.risingstack.com/node-hero-deploy-node-js-heroku-docker/)
13. [Monitoring Node.js Applications](https://blog.risingstack.com/node-hero-monitoring-node-js-applications/)

As a sequel to Node Hero, we have completed another series called Node.js at Scale – which focuses on advanced Node / JavaScript topics. Take a look!\
