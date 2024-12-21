// Global variable to keep track of the last three letters
let lastThreeLetters = [];

module.exports = async function (context, req) {
    const currentLetter = process.env.CURRENT_LETTER || "No letter set yet.";

    if (currentLetter !== "No letter set yet.") {
        lastThreeLetters.push(currentLetter);

        // Keep only the last three letters
        if (lastThreeLetters.length > 3) {
            lastThreeLetters.shift();
        }
    }

    context.log("Last three letters:", lastThreeLetters);

    context.res = {
        status: 200,
        body: {
            message: "Last three letters tracked successfully.",
            lastThreeLetters: lastThreeLetters
        }
    };
};
