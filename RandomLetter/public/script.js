let scratchCount = 0;

// Canvas setup for scratch effect
const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");
let isDrawing = false;

// Initialize the canvas with a scratchable layer
function initializeCanvas() {
    ctx.fillStyle = "#999"; // Gray overlay
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "source-over"; // Reset composite operation
}

// Scratch effect logic
function scratch(e) {
    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Reveal the base layer by scratching off the gray overlay
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
}

// Event listeners for scratch interactions
canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    scratchCount++;
    console.log(`Scratch Count: ${scratchCount}`);
});

canvas.addEventListener("mousemove", scratch);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseleave", () => (isDrawing = false));

// Add Retrieve Progress button (Optional, can be removed if not needed)
document.addEventListener("DOMContentLoaded", () => {
    // Initialize scratchable canvas
    initializeCanvas();
});
