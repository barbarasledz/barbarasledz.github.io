/* I'm using javascript for this for the sake of convenience; I hate having to write 5 bajillion paragraph tags around stuff */
const life_story = [
    {
        time: "Early Childhood",
        text: [
            "Upon meeting me, some people may be surprised to learn that English is not my first language. In fact, I wasn't born in the US, either.",
            "I was born in a small and dreary town in Southern Poland. I spent much of my early childhood in the town my parents are from, going to preschool and seeing my family often and just being a kid. My mom took care of me most of the time, since my dad was often away.",
            "The move to the US was sudden and surprising. My family applied for the green card lottery \"because why not\" and unexpectedly got selected. A few months later, we were on a plane and headed to the US.",
            "Back then, six-year-old me didn't know how much everything would change."
        ],
        image: "images/poland_map.png",
        image_alt: "A map of Poland with a marker on the southern portion, north of Tarnow, indicating the approximate location of where my family is from.",
        image_caption: "The approximate location of my hometown in Poland. Image from Free Vector Maps, modified. <a href=\"https://freevectormaps.com/poland/PL-EPS-01-0002?ref=atr\">Attribution</a>."
    },
    {
        time: "Starting in the US",
        text: [
            "The first few years in the US were difficult. My parents and I knew barely any English -- I had learned my first two words in English on the plane to the US, and one of them was \"hello\".",
            "We ended up in Chicago. Barely a few days later, I was enrolled in the local public elementary school for kindergarten.",
            "The next few years of my life were rough. School was difficult, and I could not rely on my parents being able to help me with reading or history homework in English.",
            "But, despite the odds, things were starting to improve for me in school eventually.",
            "Then, sudden change -- my family bought a house in a different part of the city. It was our first ever house in the US and full of problems, but it was ours. Unfortunately, this also meant me needing to go to a new school. Back to square one.",
            "Somehow, I managed. I ended up making new friends, some of whom are still among my best friends to this day.",
            "I started doing better academically around the time of middle school. Then, during eighth grade, I not only earned good grades but also got accepted into one of the top selective enrollment schools in the city -- Northside College Prep."
        ],
        image: "",
        image_alt: "",
        image_caption: ""
    },
    {
        time: "High School and Life Goals",
        text: [
            "As a selective enrollment school, Northside College Prep was full of people who were also the best from their elementary and middle schools. Some people also came from so-called \"academic centers\", where they already got a taste of the high school life. Once again, I was an underdog.",
            "It was by chance that I ended up taking an introductory computer science (CS) course during my freshman year of high school. When I discovered I enjoyed it, I proceeded to take as many CS classes as I could throughout high school. I also joined several CS-related clubs and ended up becoming heavily involved in (and eventually the student leader of) the school's Tech Crew.",
            "I greatly enjoyed the CS classes I'd been taking thus far, but I was also an outsider in those classes. In my AP CS class, I was one of three girls in a class of 32; the situation didn't improve much in other CS classes, either. Every high school student experiences the pressure of wanting to \"fit in\" with their peers, and I was no exception.",
            "But over time, I learned not to focus on that as much. I stopped worrying that I was a minority and instead focused on improving myself to be better, to be the best. And that hard work did pay off -- in my senior year, I was named the recepient of the 2018 Excellence in Computer Science award; a plaque with the award and my name still hangs in the main hallway of my high school."
        ],
        image: "images/ncp_googlemaps.png",
        image_alt: "Google Streetview photo of Northside Colleg Prep, the high school I went to.",
        image_caption: "A photo of Northside College Prep, the high school I attended. Sourced from Google Maps."
    }, 
    {
        time: "College",
        text: [
            "For college, I ended up attending Northwestern University. I applied there on a whim, not really expecting anything to come out of it. As you can imagine, not even I expected to get back a response of \"YES!\"",
            "The transition to college was tough but not bad. I made new friends and met amazing professors and TAs, some of whom inspired me to apply to be a peer mentor and help other students. The work in my courses was difficult but rewarding. Overall, it was like a dream come true.",
            "Then came the unexpected trial that no one expected: the COVID-19 pandemic. Classes went online, half the country went into lockdown, and everything felt like it was falling apart.",
            "I wish I could say I recovered quickly and turned the hardships of the pandemic into opportunity. The pandemic had hit me hard, coming at an already difficult time in my personal life. School didn't offer much escape from this, either. Online classes felt soulless; lectures felt bland, few of my classmates participated in online discussions, and everyone was to some degree distrated with thinking about the virus. All in all, half of my sophomore year and the entirety of my junior year felt like it had gone to waste.",
            "Except not completely.",
            "Peer mentoring ended up being the silver lining of my undergraduate experience during the pandemic -- it gave me something to focus on. I wanted students to get a good experience out of their first and potentially only CS course. Though online leading tutorials was difficult and sometimes felt like I was talking to a void of names on a screen, my efforts were rewarded in the end.",
            "I continued peer mentoring throughout the rest of my time at Northwestern, often working with students who had never written a single line of code in their life before and helping them learn a valuable life skill.",
            "Eventually, in-person classes began to resume to some degree by Fall 2021, at the start of my senior year. I went through my final undergraduate classes with a greater appreciation for everything and everyone around me, trying to make the best of the opportunity I was given to reconnect with my peers in-person before graduation. I felt revitalized by the greater challenges instructors were willing to give during in-person class sessions and the increased energy that everyone seemed to have. Despite the pandemic still lingering in the background, it felt like we finally claimed back the experiences that had been taken from us."
        ],
        image: "",
        image_alt: "",
        image_caption: ""
    }, 
    {
        time: "The Present and the Future",
        text: [
            "Graduating from Northwestern was a whirlwind of activity, but eventually, it was over, and a new chapter began.",
            "After graduation, I took a small break and went on a trip to Europe to visit my family in Poland. I wanted to thank my family for how much they had backed me over the years.",
            "Then, upon returning home, I began to work on some of my personal projects -- and on job applications.",
            "And that leads us to today.",
            "Who knows what's next? I sure don't, but I'm determined to find out and make the future the best that it can be."
        ],
        image: "",
        image_alt: "",
        image_caption: ""
    }
];


Vue.component("life-story-part", {
    template: `
    <div>
        <h2>{{time}}</h2>
        <div class="image_cap_container" v-if="image.length>0" >
            <img :src="image" :alt="alt_text" class="img_in_container">
            <p v-html="img_caption" class=img_caption_in_container></p>
        </div>
        <p v-for="par in text">{{par}}</p>
    </div>
    `, // add <div style="clear: both;"></div> maybe?
    props: ["time", "text", "image", "img_caption", "alt_text"]
})

new Vue({
    el: "#content_container", 
    template: `
    <main> 
        <h1>My Life: The Long Story</h1>
        <life-story-part v-for="life_part in life_story" :key="life_part.time" :time="life_part.time" :text="life_part.text" :image="life_part.image" :img_caption="life_part.image_caption" :alt_text="life_part.image_alt">
        </life-story-part>
    </main>
    `,
    data: {
        life_story: life_story
    }
})