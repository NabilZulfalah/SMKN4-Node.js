// import seblak from "os";

// console.log(seblak.cpus());

import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question(`What is ur name?`, name => {
    console.log(`Hi ${name}!`);
    console.log(`kamu pasti wibu ya ${name}`);
    input.close();
});