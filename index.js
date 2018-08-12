const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
var program = require('commander');



const github = require('./lib/github');
const repo = require('./lib/repo');
const files = require('./lib/files');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Ginit', { horizontalLayout: 'full' })
    )
);

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


let log = console.log
    // ES2015 template literal 
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);



if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a git repository!'));
    process.exit();
}


// process.stdin.on('data', function(chunk) {
//     process.stdout.write('data: ' + chunk);
// });

// process.stdin.on('end', function() {
//     process.stdout.write('end');
// });


const questions = [{
        type: 'input',
        name: 'firstname',
        message: 'Enter firstname ..'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter lastname ..'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter phone number ..'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address ..'
    }

];
// inquirer.prompt(questions);

function test() {
    console.log('test')
    return false;
}

function con() {
    console.log(222222)
}

function func() {
    console.log(444)
    return 2;
}

const run = async() => {
    let token = test();
    if (!token) {
        await con();
        token = await func();
    }
    console.log(token);
}
run();


program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);