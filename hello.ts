import * as minimist from 'minimist';
import {ParsedArgs} from 'minimist';

type Args = { username: string, password: string }

const argv = process.argv.slice(2);

const cliArgs = minimist<ParsedArgs & Args>(argv, {
    string: ['username', 'password'],
    alias: {
        username: 'u',
        password: 'p'
    },
    unknown: () => true,
});

console.log(`Hello, you name is ${cliArgs.username}, password is ${cliArgs.password}, other: ${cliArgs._}`);
