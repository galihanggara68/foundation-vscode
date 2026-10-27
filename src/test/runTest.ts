import { run } from './suite';

async function main() {
  try {
    await run();
    console.log('All tests passed successfully!');
  } catch (err) {
    console.error('Failed to run tests:', err);
    process.exit(1);
  }
}

main();
