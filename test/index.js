import test from 'ava';
import path from 'path';
import fs from 'fs-extra';
import readDirNames from 'read-dir-names';

import gitCloneRepo from '../lib';

test('GIT CLONE REPO | clone a github repo, with a URL', (t) => {
  const cwd = process.cwd();

  const valueCloned = gitCloneRepo('www.github.com/aichbauer/test-public');

  const valueClonedDir = readDirNames(cwd);

  fs.removeSync(path.join(cwd, 'test-public'));

  t.true(valueCloned);
  t.true(valueClonedDir.includes('test-public'));
});

test('GIT CLONE REPO | clone a github repo, with "username/reponame", and destination', (t) => {
  const cwd = process.cwd();

  const valueCloned = gitCloneRepo('aichbauer/test-public', { destination: 'test/test-public' });

  const valueClonedDir = readDirNames(path.join(cwd, 'test'));

  fs.removeSync(path.join(cwd, 'test', 'test-public'));

  t.true(valueCloned);
  t.true(valueClonedDir.includes('test-public'));
});

test('GIT CLONE REPO | clone a bitbucket repo, with "username/reponame", and host + destination', (t) => {
  const cwd = process.cwd();

  const valueCloned = gitCloneRepo('Mr_LA/test-public', { host: 'bitbucket.com', destination: 'test/test-public' });

  const valueClonedDir = readDirNames(path.join(cwd, 'test'));

  fs.removeSync(path.join(cwd, 'test', 'test-public'));

  t.true(valueCloned);
  t.true(valueClonedDir.includes('test-public'));
});

test('GIT CLONE REPO | clone a bitbucket repo, with "username/reponame", and host + absolute destination', (t) => {
  const cwd = process.cwd();
  const destination = path.join(cwd, 'test', 'test-public');

  const valueCloned = gitCloneRepo('Mr_LA/test-public', { host: 'bitbucket.com', destination });

  const valueClonedDir = readDirNames(path.join(cwd, 'test'));

  fs.removeSync(path.join(cwd, 'test', 'test-public'));

  t.true(valueCloned);
  t.true(valueClonedDir.includes('test-public'));
});

test('GIT CLONE REPO | not a repo', (t) => {
  const valueCloned = gitCloneRepo('aichbauer/this-repo-not-exists', { destination: 'test/test-public' });

  t.false(valueCloned);
});

test('GIT CLONE REPO | not a repo', (t) => {
  const valueCloned = gitCloneRepo('aichbauer', { destination: 'test/test-public' });

  t.false(valueCloned);
});
