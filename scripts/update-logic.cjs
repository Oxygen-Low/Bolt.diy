const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

async function checkForUpdatesAsync() {
  try {
    console.log('Checking for updates...');
    await execAsync('git fetch');
    const { stdout: local } = await execAsync('git rev-parse HEAD');
    const { stdout: remote } = await execAsync('git rev-parse @{u}');

    if (local.trim() !== remote.trim()) {
      console.log('New version found. Pulling changes...');
      await execAsync('git pull');
      const { stdout: log } = await execAsync('git log -1 --pretty=%B');
      console.log(`Successfully updated to the latest version:\n${log.trim()}`);
      console.log('Installing dependencies...');
      await execAsync('pnpm install');
      console.log('Dependencies installed.');
      return true;
    } else {
      console.log('Already up to date.');
      return false;
    }
  } catch (error) {
    console.error('Failed to check for updates. Please run "git pull" manually to fix any issues.', error);
    return false;
  }
}

module.exports = { checkForUpdatesAsync };
