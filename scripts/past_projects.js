const projects = [
    {
        name: "",
        image: "",
        desc: [""]
    },
    {
        name: "",
        image: "",
        desc: [""]
    },
    {
        name: "",
        image: "",
        desc: [""]
    },
    {
        name: "",
        image: "",
        desc: [""]
    },
    {
        name: "",
        image: "",
        desc: [""]
    },
    {
        name: "The DAVL (Fall 2018)",
        image: "images/davl-poster.png",
        desc: [
            "The DAVL, or \"Daily Accessory for Vibrant Lifestyles\", is a product designed for patients with Heartware LVAD devices who are looking for a more suitable carrying method for their device.", 
            "This project was created as part of Northwestern's Design, Thinking, and Communication (DTC) class alongside other students."
        ]
    }
]


Vue.component("card-item", {
    template: `
    <div class="card">
        <img class="card_img" :src="image">
        <h2>{{name}}</h2>
        <p v-for="par in desc">{{par}}</p>
    </div>
    `,
    props: ["name", "desc", "image"]
})

new Vue({
    el: "#card_container_vue", 
    template: `
    <main class="card_container"> 
    <card-item v-for="project in projects" :key="project.name" :name="project.name" :desc="project.desc" :image="project.image"></card-item>
    </main>
    `,
    data: {
        projects: projects
    }
})