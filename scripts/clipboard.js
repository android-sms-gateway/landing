// Clipboard functionality for code examples
function copyCode(element) {
    const code = element.previousElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => {
        const button = element;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// Export function for global access
window.copyCode = copyCode;

