import {greet} from './greet.js'
import {yo} from './yo.js'
import chalk from 'chalk';
import figlet from 'figlet';
import cowsay from 'cowsay';




const styledMessage = chalk.bgYellow.green.bold.italic.underline(greet('Lucky'));
console.log(styledMessage)
// call the function & print the result on the screen
// console.log(greet('Lucky'))
console.log(yo("Thabo"))
console.log(greet('Lucky'));



figlet('Lucky!', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk.bgCyanBright.underline(data));
  });


// console.log(chalk.bgBlue.underline.cowsay.say({
//     text: "Hello World!"
// }));

const cowMessage = cowsay.say({
    text: "Hello World!"
});

console.log(chalk.bgBlue.underline(cowMessage));