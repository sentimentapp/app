
let prompts = ["How Was Your Day?", "What is One Word to Describe Your day?", "Write Down the First 10 Things that Come to Your mind", "What was the Best Part of your Day? What was the Worst Part?"];

export function pickPrompt() {
    var x = Math.floor(Math.random() * prompts.length);  
    return prompts[x]
}