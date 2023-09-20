# @92green/possum-regexes

A bunch of entertaining regex to validate your strings against.

## Installation

```
npm i @92green/possum-regexes
```

```
yarn add @92green/possum-regexes
```

## Usage example

```js
import {HEX_COLOUR_CODE_REGEX} from '@92green/possum-regexes';
const isHexValid = HEX_COLOUR_CODE_REGEX.test("#f2f2f2")
```

## Important - Commit guidelines

Commit style adheres to commitlint and is integrated closely with `release-it`
meaning 

- `feat!:` results in a breaking change and major version bump
- `feat:`  results in the minor being automatically bumped
- `fix:` results in the patch version being automatically bumped

Please be mindful of your commit messages as **they will show up** in auto-generated CHANGELOG.md

## Automatic releases

Automatic releases have been configured in github workflows, and as such;

- Pushes to `release/*` branch will trigger an automated package prerelease (eg. 1.0.0-0 -> 1.0.0-1)
- Pushes to `auto-release` branch will trigger a package release (eg. 1.0.0 -> 1.1.0)