<div align="center">

[![npm latest package][npm-latest-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![License][license-image]][license-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![Follow on Twitter][twitter-image]][twitter-url]

</div>

## Inverter / NPM package Template

Bun + Npm + Typescript + Standard Version + Flat Config Linting + Husky + Commit / Release Pipeline

## Summary

This package contains the API SDK for [Breadcrumb.cash](https://github.com/quantidexyz/oven-sdk).

Check out the [Changelog](./CHANGELOG.md) to see what changed in the last releases.

## Install

```bash
bun add @quantidexyz/oven-sdk
```

Install Bun ( bun is the default package manager for this project ( its optional ) ):

```bash
# Supported on macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash
# Upgrade Bun every once in a while
bun upgrage
```

### Use the SDK

Here's an example of how to use the SDK to fetch a public user:

```typescript
import { client, user_user } from '@quantidexyz/oven-sdk'

// Set the config for the client with the Base URL and API key
client.setConfig({
  // Base URL is optional, by default it's https://www.breadcrumb.cash/api
  baseUrl: 'https://www.breadcrumb.cash/api',
  // Replace with your cookie connect.sid / if you have one
  headers: {
    Cookie: `connect.sid=<connect.sid>`,
  },
})

// Use the internal method to call the API
const response = await user_user({
  path: {
    x_user_id: '1941253809302593536',
  },
  query: {
    include_smart_followers: 'false',
    include_smart_follower_history: 'false',
  },
})

// Log the response
console.log('API response data:', response.data)
```

## Developing

Install Dependencies:

```bash
bun i
```

Watching TS Problems:

```bash
bun watch
```

## How to make a release

**For the Maintainer**: Add `NPM_TOKEN` to the GitHub Secrets.

1. PR with changes
2. Merge PR into main
3. Checkout main
4. `git pull`
5. `bun release: '' | alpha | beta` optionally add `-- --release-as minor | major | 0.0.1`
6. Make sure everything looks good (e.g. in CHANGELOG.md)
7. Lastly run `bun release:pub`
8. Done

## License

This package is licensed - see the [LICENSE](./LICENSE) file for details.

[ci-image]: https://badgen.net/github/checks/quantidexyz/oven-sdk/main?label=ci
[ci-url]: https://github.com/quantidexyz/oven-sdk/actions/workflows/ci.yaml
[npm-url]: https://npmjs.org/package/@quantidexyz/oven-sdk
[twitter-url]: https://twitter.com/breadcrumbcash
[twitter-image]: https://img.shields.io/twitter/follow/breadcrumbcash.svg?label=follow+Breadcrumb.cash
[license-image]: https://img.shields.io/badge/License-LGPL%20v3-blue
[license-url]: ./LICENSE
[npm-latest-image]: https://img.shields.io/npm/v/@quantidexyz/oven-sdk/latest.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/@quantidexyz/oven-sdk.svg
