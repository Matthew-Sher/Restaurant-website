const aboutSectionTextCont = document.querySelector('#about-section-text-container');
const arrowSwitch = document.querySelector('.dsk');

async function createAboutSectionPost (state) {
    // let content = await fetch('./about-section-text.json');
    // let contentJSON = content.json();

    //---------this block for test only---------- 
    let contentJSON = {
        "first": {
            "pic": "../assets/gallery/gallery_about.png",
            "title": "О нас",
            "content": [
                    "Ресторан «Эклектика» — это место, где сочетаются утонченный вкус и теплая атмосфера. Наши шеф-повара тщательно подбирают ингредиенты и создают блюда с любовью к каждому клиенту.",
                    "«Эклектика» предлагает уютные залы для семейных ужинов, романтических свиданий и деловых обедов. Мы ценим ваше время и комфорт, поэтому обеспечиваем высокий уровень сервиса.",
                    "Добро пожаловать в мир великолепных вкусов и неповторимых воспоминаний."
                ] 
        },
        "second": {
            "pic": "../assets/gallery/gallery_values.png",
            "title": "Наши ценности",
            "content": [
                "«Эклектика» — это уютное место, где каждый гость становится частью нашей семьи. Мы гордимся тем, что создали атмосферу, в которой сочетается элегантность и теплота, а меню предлагает богатство вкусов, подчеркивая лучшие кулинарные традиции мира.",
                "Ресторан «Эклектика» — это не просто еще одно место для обеда. Это место, где сливаются воедино стиль, вкус и теплота, создавая неповторимый опыт для тех, кто ценит настоящую гастрономию."
            ]
        } 
    }
    //-------------------------------------------
    aboutSectionTextCont.innerHTML = `<h2>${contentJSON[state].title}</h2>`;
    let aboutSectionInnerText = "";
    for (let elemet of contentJSON[state].content) {
        aboutSectionInnerText += elemet + "<br/><br/>";
    }
    aboutSectionTextCont.insertAdjacentHTML('beforeend', `<p>${aboutSectionInnerText}</p>`);
};

let state = "first";
createAboutSectionPost(state);
console.log(arrowSwitch);

arrowSwitch.addEventListener('click', (event) => {
    if (event.target.classList.contains('left-arrow') && state !== "first") {
        state = "first";
        createAboutSectionPost(state);
        console.log(event.target);
    }
    if (event.target.classList.contains('right-arrow') && state !=="second") {
        state = "second";
        createAboutSectionPost(state);
        console.log(event.target);
    }
});
