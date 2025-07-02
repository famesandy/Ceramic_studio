import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

// import Swiper and modules styl
// 
// es
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/src/sass/style.scss'

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
    menu.classList.add("header__menu_active");
    document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
    menu.classList.remove("header__menu_active");
    document.body.style.overflow = "";
});

try {
    // init Swiper:
    new Swiper('.works__slider', {
        slidesPerView: 1,
        // configure Swiper to use modules

        loop: true,

        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1920: {
                spaceBetween: 35,
            },
        },
        modules: [Navigation, Pagination],
    });
}
catch (e) {

}

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
}
catch (e) {

}

try {
    const validatorTouch = new JustValidate(".touch__form");
    // , { submitFormAutomatically: true });

    validatorTouch
        .addField("#name",
            [
                {
                    rule: 'required',
                    errorMessage: "Please fill the name"
                },
                {
                    rule: 'minLength',
                    value: 2,
                    errorMessage: "Min 2 char"
                },
            ]
        )
        .addField("#email",
            [
                {
                    rule: 'required',
                },
                {
                    rule: 'email',
                },
            ]
        )
        .addField("#question",
            [
                {
                    rule: 'required',
                },
                {
                    rule: 'minLength',
                    value: 5
                },
            ]
        )
        .addField("#agree",
            [
                {
                    rule: 'required',
                },
            ],
            {
                errorsContainer: ".checkbox-error-message",
            }
        )
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch("https://httpbin.org/post",
                {
                    method: "POST",
                    body: formData
                }
            ).then(res => res.json()).then(data => {
                console.log(data);
                form.reset();
            });
        });
}
catch (e) {

}

try {
    const validatorFooter = new JustValidate(".footer__form");
    // , { submitFormAutomatically: true });

    validatorFooter
        .addField("#footer_email",
            [
                {
                    rule: 'required',
                    errorMessage: "Please fill the email"
                },
                {
                    rule: 'minLength',
                    value: 2,
                    errorMessage: "Min 2 char"
                },
                {
                    rule: 'email',
                    errorMessage: "Incorrect email field"
                },
            ]
            ,
            {
                errorsContainer: ".footer_email_error",
            }
        )
        .addField("#footer_agree",
            [
                {
                    rule: 'required',
                },
            ]
        )
}
catch (e) {

}

