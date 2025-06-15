function changeLanguage(lang) {
    const texts = {
        en: {
            welcome: "Welcome to My Portfolio",
            intro: "I am a frontend developer skilled in HTML, CSS, JavaScript & React.",
            projects: "My Projects",
            project1desc: "Search & filter game using REST API",
            project2desc: "Check live weather with OpenWeather API",
            about: "About Me",
            aboutdesc: "I’m Behruz, a 14-year-old frontend developer from Uzbekistan. I specialize in building modern and responsive web applications using HTML, CSS, JavaScript, and React. I love learning and creating useful digital products.",
            contact: "Contact Me",
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message"
        },
        uz: {
            welcome: "Portfolio Saytimga Xush Kelibsiz",
            intro: "Men HTML, CSS, JavaScript va React bilan ishlay oladigan frontend dasturchiman.",
            projects: "Mening Loyihalarim",
            project1desc: "REST API orqali o'yinlarni qidirish va filterlash",
            project2desc: "OpenWeather API bilan real ob-havoni ko'rish",
            about: "Men Haqimda",
            aboutdesc: "Men Behruz, O'zbekistondan 14 yoshli frontend dasturchiman. HTML, CSS, JavaScript va React yordamida zamonaviy va responsiv saytlar yasayman.",
            contact: "Aloqa uchun",
            name: "Ismingiz",
            email: "Email manzilingiz",
            message: "Xabaringiz",
            send: "Yuborish"
        }
    };
    const t = texts[lang];
    document.getElementById("welcome").innerText = t.welcome;
    document.getElementById("intro").innerText = t.intro;
    document.getElementById("projects-title").innerText = t.projects;
    document.getElementById("p1desc").innerText = t.project1desc;
    document.getElementById("p2desc").innerText = t.project2desc;
    document.getElementById("about-title").innerText = t.about;
    document.getElementById("about-desc").innerText = t.aboutdesc;
    document.getElementById("contact-title").innerText = t.contact;
    document.getElementById("name").placeholder = t.name;
    document.getElementById("email").placeholder = t.email;
    document.getElementById("message").placeholder = t.message;
    document.getElementById("send").innerText = t.send;
}