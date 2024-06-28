const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('name');
  const greeting = `Hello, ${nameToGreet}!`;
  console.log(greeting);
  core.setOutput('greetingMessage', greeting);
} catch (error) {
  core.setFailed(error.message);
}
