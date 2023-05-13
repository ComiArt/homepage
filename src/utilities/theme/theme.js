const userTheme = localStorage.getItem("acad_theme")

function getTheme(){
    var theme = ""

    if(userTheme === "light" || userTheme === "dark") {
        theme = userTheme
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = "dark"
    } 
    else {
        theme = "light"
    }

    return theme
}

export {
    getTheme
}