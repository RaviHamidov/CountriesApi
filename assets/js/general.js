let themeBtn = document.querySelector('.theme-icon-btn');

const getDefaultTheme = function() {
    document.documentElement.dataset.theme = localStorage.getItem('theme');
}

// dark mode handler
themeBtn.addEventListener('click', function () {
    if (document.documentElement.dataset.theme == "dark") {
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
});

getDefaultTheme();