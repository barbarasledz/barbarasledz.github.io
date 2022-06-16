primary_nav_values = [
    {
        "text": "About",
        "url": ""
    },
    {
        "text": "Past Projects",
        "url": ""
    },
    {
        "text": "Current Work",
        "url": ""
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
            <a class="nav_link" href="${url}">
            <div class="nav_div active_nav">${text}</div>
            </a>
            `
    } else {
        template = 
            `
            <a class="nav_link" href="${url}">
            <div class="nav_div">${text}</div>
            </a>
            `
    }
    return template;
}

init();