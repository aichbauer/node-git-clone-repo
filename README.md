# git-clone-repo

> Clone a git repository

[![Build Status](https://travis-ci.org/aichbauer/node-git-clone-repo.svg?branch=master)](https://travis-ci.org/aichbauer/node-git-clone-repo)
[![Build status](https://ci.appveyor.com/api/projects/status/yk51yh1t7c2sworc?svg=true)](https://ci.appveyor.com/project/aichbauer/node-git-clone-repo)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/node-git-clone-repo/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/node-git-clone-repo?branch=master)

## Installation

```sh
$ npm i git-clone-repo --save
```

or

```sh
$ yarn add git-clone-repo
```

## Usage

```js
const gitCloneRepo = require('git-clone-repo'); // import gitCloneRepo from 'git-clone-repo'

// clones the repo to your current working dir
gitCloneRepo('www.github.com/username/repo-that-exists'); // => true

// clones the repo to your current working dir
gitCloneRepo('https://www.github.com/username/repo-that-exists'); // => true

// clones the repo to your current working dir
gitCloneRepo('username/repo-that-exists', { host: 'bitbucket.com' }); // => true

// clones the repo to your current working dir + 'your/destination/path'
gitCloneRepo('username/repo-that-exists', { 
  host: 'bitbucket.com', 
  destination: 'your/destination/path' 
}); // => true

// automatically checks github if no host is provided
gitCloneRepo('username/repo-that-not-exists'); // => false
```

## LICENSE

MIT © Lukas Aichbauer
