const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const promises = [];

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

questions.forEach(question =>{
  const promise = () =>{
    return new Promise((resolve, reject) => {
    return rl.question(question, (answer) => {
      answers.push(answer);
      return resolve();
      });
    });
  }

  promises.push(promise);
});

const main = async() => {

  for (let i = 0; i < promises.length; i++) {
    await promises[i]();
  }

  console.log(`My name is ${answers[0]}. I like doing ${answers[1]}. I love doing it while listening to ${answers[2]}. My favorite meal is ${answers[3]}. And I love eating ${answers[4]}. My absoulte favorite sport is ${answers[5]} and I am amazing at ${answers[6]}.`)

  rl.close()

}

main();