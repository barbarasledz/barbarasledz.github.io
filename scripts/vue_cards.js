Vue.component("card-item", {
    template: `
    <div class="card">
        <h2>{{name}}</h2>
        <h3>{{type}}, {{date}}</h3>
        <p v-for="par in desc">{{par}}</p>
        <br v-if="image.length>0">
        <img v-if="image.length>0" class="card_img" :src="image" :alt="alt_text">
    </div>
    `,
    props: ["name", "desc", "image", "date", "type", "alt_text"]
})

new Vue({
    el: "#card_container_vue", 
    template: `
    <main class="card_container"> 
    <card-item v-for="card_info in cards_info" :key="card_info.name" :name="card_info.name" :desc="card_info.desc" :image="card_info.image" :type="card_info.type" :date="card_info.date" :alt_text="card_info.alt_text"></card-item>
    </main>
    `,
    data: {
        cards_info: cards_info
    }
})