module.exports = async function (context, myTimer) {
    const letters = ["W", "I", "N", "R"];
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    context.log("Random letter selected:", randomLetter);
    
    // Save the random letter (e.g., in a file or environment variable)
    process.env.CURRENT_LETTER = randomLetter; // Temporary storage for the demo

    context.log("Random letter saved successfully");
};
