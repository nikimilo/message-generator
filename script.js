const phrases = ["Believe in yourself!", "You can do it!", "The sky’s the limit!"];
const actions = ["Take a deep breath.", "Make a bold move.", "Stay strong!"];
const endings = ["Great things await.", "Success is near.", "Keep pushing forward."];

function generateMessage() {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];
    return `${phrase} ${action} ${ending}`;    
}

console.log(generateMessage());