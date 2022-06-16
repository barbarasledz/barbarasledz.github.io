primary_nav_values = [
    {
        "text": "About",
        "url": "about.html"
    },
    {
        "text": "Past Projects",
        "url": "pastprojects.html"
    },
    {
        "text": "Current Work",
        "url": "currentwork.html"
    }
]

const init = () => {
    let primary_nav = document.querySelector("#primary_nav");
    //console.log(primary_nav)
    nav_template = ""
    if (primary_nav) {
        current_page = primary_nav.dataset.current;
        for (const val of primary_nav_values) {
            nav_template += make_nav_entry(val.text, val.url, val.text === current_page)
        }
        primary_nav.innerHTML += nav_template;
    } else {
        console.log("Something has gone wrong, cannot display navigation")
    }
}

const make_nav_entry = (text, url, is_active = False) => {
    if (is_active) {
        template =
            `
            <a href="${url}">
            <div class="active_nav">${text}</div>
            </a>
            `
    } else {
        template = 
            `
            <a href="${url}">
            <div>${text}</div>
            </a>
            `
    }
    return template;
}

init();