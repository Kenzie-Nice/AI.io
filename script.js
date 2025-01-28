// Fancy Logging Function for Styling
function fancyLog(title, items) {
    console.log(`%c${title}`, 'color: white; background-color: #444; padding: 5px 10px; border-radius: 5px; font-weight: bold;');
    items.forEach(item => console.log(`%c• ${item}`, 'color: #444; padding: 2px;'));
}

// Favorite Websites
fancyLog("🌐 Favorite Websites", [
    "Wikipedia - Because knowledge is power.",
    "CodePen - The playground for the front-end web.",
    "Pixabay - A goldmine of free images."
]);

// Favorite Games
fancyLog("🎮 Favorite Games", [
    "Portal 2 - A masterclass in puzzle design.",
    "Hollow Knight - Beautifully crafted Metroidvania.",
    "Carcassonne - A timeless tile-laying board game."
]);

// Favorite Artists
fancyLog("🎨 Favorite Artists", [
    "Frida Kahlo - Her raw, emotive self-portraits are unforgettable.",
    "Hayao Miyazaki - For creating magical worlds that stay with us forever.",
    "Banksy - A modern enigma of thought-provoking street art."
]);

// Interactive Prompt
const answer = prompt("If you could have any superpower, what would it be?");
if (answer) {
    console.log(`Your chosen superpower is: ${answer}. Use it wisely!`);
} else {
    console.log("You decided not to pick a superpower. That's still a choice!");
}
