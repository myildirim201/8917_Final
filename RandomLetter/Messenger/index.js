module.exports = async function (context, req) {
    const currentLetter = process.env.CURRENT_LETTER || "No letter set yet.";
    
    context.log("Current letter being served:", currentLetter);
    
    context.res = {
        status: 200,
        body: `The current letter is: ${currentLetter}`,
    };
};
