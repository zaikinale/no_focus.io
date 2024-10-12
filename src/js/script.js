document.getElementById('themeToggleWhite').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'white-theme') {
        document.body.className = 'black-theme';
    }
});
document.getElementById('themeToggleBlack').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'black-theme') {
        document.body.className = 'white-theme';
    }
});