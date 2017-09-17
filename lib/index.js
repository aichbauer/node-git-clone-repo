import execa from 'execa';
import path from 'path';
import inputIs from 'input-is';
import pathIsAbsolute from 'path-is-absolute';

const gitCloneRepo = (URL, { host, destination } = {}) => {
  const cwd = process.cwd();

  let thisURL = URL;
  const thisHost = host || 'github.com';
  let thisDestination = '';

  if (destination) {
    const isAbsolute = pathIsAbsolute(destination);
    const absolutePath = path.join(cwd, destination);

    thisDestination = isAbsolute ? destination : absolutePath;
  }

  if (inputIs.url(thisURL) && !inputIs.valid(thisURL, /https:\/\//)) {
    thisURL = `https://${thisURL}`;
  } else if (!inputIs.url(thisURL) && inputIs.valid(thisURL, /.\/./)) {
    thisURL = `https://www.${thisHost}/${thisURL}`;
  }

  try {
    execa.shellSync(`git clone ${thisURL} ${thisDestination}`);

    return true;
  } catch (e) {
    return false;
  }
};

export default gitCloneRepo;
