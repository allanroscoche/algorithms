const { exec } = require("child_process");
const args = process.argv.slice(2);
const fs = require('fs');

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(`${command}`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          reject();
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          reject();
      }
      resolve(stdout);
    });
  });
}

function generateCommand(type, language) {
  let command = null;
  let input = null;
  if(language === 'js') {
    command = 'node javascript';
  }
  return `${command}/${type} < ../data/${type}/input.txt`;
}
(async () => {
  const type = args[0];
  const language = args[1];

  const output = fs.readFileSync(`../data/${type}/output.txt`, 'utf-8');
  const cmd = generateCommand(type, language);
  const response = await executeCommand(cmd);
  if (output.trim() == response.trim()) {
    console.log('Passed');
  } else { 
    console.log('Reproved');
  }
})();
