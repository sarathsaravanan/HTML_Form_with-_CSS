// Simple console logging to confirm script attachment
console.log("Form script loaded successfully.");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        console.log("Form submitted");
    });
});