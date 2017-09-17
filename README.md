# git-clone-repo

> Clone a git repository

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
