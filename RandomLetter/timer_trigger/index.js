let lastLetter = null;

module.exports = async function (context, myTimer) {
    const letters = ["W", "I", "N", "R"];
    let randomLetter;

    do {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
    } while (randomLetter === lastLetter); // Ensure the letter is not the same as the last one

    lastLetter = randomLetter; // Update the last letter

    context.log("Random letter selected:", randomLetter);

    // Save the random letter (e.g., in a file or environment variable)
    process.env.CURRENT_LETTER = randomLetter; // Temporary storage for the demo

    context.log("Random letter saved successfully");
};
