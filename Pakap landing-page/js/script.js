$(".secren-short-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 6000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 15,
    time: 2000,
  });
});
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  loop: true,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$(".branding-logo-slide").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Click Event
$(".go-top").on("click", function () {
  $("html, body").animate({ scrollTop: "0" }, 500);
});

// footer-from-input-valication//

const footerinput = document.querySelector("#footer-input");

const footerfromsend_button = document.querySelector(".send-btn");

const footer_from_eroor_show = document.querySelector(".footer-from-erorr");

function footer_from_valicator() {
  if (footerinput.value == "") {
    footer_from_eroor_show.innerHTML = "Please enter email correctly";
  } else {
    footer_from_eroor_show.innerHTML = "Thank you for subscribing!";
    footerinput.value = "";
  }
}

AOS.init();

// navbar animation /

const header = document.querySelector(".header");

const mobileheadre = document.querySelector(".mobile-header");

const scrollto_top = document.querySelector(".go-top");

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset >= 200) {
    header.classList.add("header_active");
    scrollto_top.classList.add("active");
    mobileheadre.classList.add("active");
  } else {
    header.classList.remove("header_active");
    scrollto_top.classList.remove("active");
    mobileheadre.classList.remove("active");
  }
});

// pricing-tabs changes funcation

const pricing_chnages_btnwrapper = document.querySelector(".pricing-chane-btn");

const pricing_chnages_btn =
  pricing_chnages_btnwrapper.querySelectorAll("button");

const pricing_tab_element = document.querySelectorAll(".col-lg-8 .pricing-tab");

for (let i = 0; i < pricing_chnages_btn.length; i++) {
  pricing_chnages_btn[i].addEventListener("click", function () {
    document
      .querySelector(".pricong-btn-active")
      .classList.remove("pricong-btn-active");
    pricing_chnages_btn[i].classList.add("pricong-btn-active");
    document
      .querySelector(".pricing-tab-active")
      .classList.remove("pricing-tab-active");
    pricing_tab_element[i].classList.add("pricing-tab-active");
  });
}

console.log(pricing_tab_element);

// watch-video-popup-show//

let video_popup = document.querySelector(".overly-vodeo-popup");

function video_popup_active() {
  video_popup.classList.add("video-popup-active");
}

function video_popup_close() {
  video_popup.classList.remove("video-popup-active");
}

// mobile-menu function//

const mobile_menu = document.querySelector("#mobile-menu");

function mobile_nav_bar_open() {
  mobile_menu.classList.add("mobile_nav_menu_active");
}

function mobile_nav_bar_close() {
  mobile_menu.classList.remove("mobile_nav_menu_active");
}

// drop-down- //

const dropdownbtn = document.querySelectorAll(".drop-down-btn");
const mobile_drop_down_menu = document.querySelectorAll(".mobile-drop-down-menu")

const submenubtn = document.querySelectorAll("#sub-mobile-drop-down-menu-btn");

const sub_menu = document.querySelectorAll("#sub-mobile-drop-down-menu")




for (let y = 0; y < dropdownbtn.length; y++) {
  dropdownbtn[y].addEventListener("click", function () {
    document.querySelector('.nav-link-active').classList.remove('nav-link-active');
    dropdownbtn[y].classList.add("nav-link-active");
    mobile_drop_down_menu[y].classList.toggle('mobile_drop_down_menu_active');
    
  });
}

 function submenuh(){
  sub_menu.classList.toggle("submenu-active")

 }