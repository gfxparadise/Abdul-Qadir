let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});

// typing animation
var typed = new Typed(".typing", {
    strings: ["", "Graphic Designer", "Youtuber", "Video Editor", "Front End Developer"],
    typespeed: 100,
    backspeed: 60,
    loop: true
})


// DarkMode 
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Disable Right Click
window.oncontextmenu = function () {
    alert("This operation is not allowed");
    return false;
}

// Skill Bar Animation
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

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
    // Set variables
    var slider = $(".box-containe");
    var sliderItems = slider.find(".bo");
    var sliderNext = $(".slider-btn-next");
    var sliderDots = $(".slider-dots");
    var dot = sliderDots.find(".slider-dot");

    // Set initial values
    var currentSlide = 0;
    var slideCount = sliderItems.length;

    // Hide all slides except the first three
    sliderItems.slice(2).hide();
    sliderItems.eq(currentSlide).show();
    dot.eq(currentSlide).addClass("active");

    // Handle next button click event
    function showNextSlide() {
        currentSlide++;
        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }

        // Hide all slides except the current and the next one
        sliderItems.hide();
        var nextSlide = currentSlide + 1;
        if (nextSlide >= slideCount) {
            nextSlide = 0;
        }
        sliderItems.eq(currentSlide).show();
        sliderItems.eq(nextSlide).show();

        dot.removeClass("active");
        dot.eq(currentSlide).addClass("active");
    }

    // Handle slider dots click event
    dot.click(function () {
        currentSlide = $(this).index();
        sliderItems.hide();
        sliderItems.slice(currentSlide, currentSlide + 2).show();
        dot.removeClass("active");
        dot.eq(currentSlide).addClass("active");
    });

    // Handle automatic slide change every 4 seconds
    var interval = setInterval(showNextSlide, 4000);

    // Handle next button click event
    sliderNext.click(function () {
        showNextSlide();
    });

    // Handle responsive behavior
    $(window).on("load resize", function() {
        if ($(window).width() < 768) {
            // Set initial values
            currentSlide = 0;
            slideCount = sliderItems.length;
    
            // Hide all slides except the current one
            sliderItems.slice(1).hide();
            sliderItems.eq(currentSlide).show();
            dot.eq(currentSlide).addClass("active");
    
            // Handle next button click event
            function showNextSlideMobile() {
                currentSlide++;
                if (currentSlide >= slideCount) {
                    currentSlide = 0;
                }
    
                // Hide all slides except the next one
                sliderItems.hide();
                sliderItems.eq(currentSlide).show();
    
                dot.removeClass("active");
                dot.eq(currentSlide).addClass("active");
            }
    
            // Handle slider dots click event
            dot.click(function () {
                currentSlide = $(this).index();
                sliderItems.hide();
                sliderItems.eq(currentSlide).show();
                dot.removeClass("active");
                dot.eq(currentSlide).addClass("active");
            });
    
            // Handle automatic slide change every 4 seconds
            clearInterval(interval);
            interval = setInterval(showNextSlideMobile, 4000);
    
            // Handle next button click event
            sliderNext.off("click").on("click", function () {
                showNextSlideMobile();
            });
        } else {
            // Clear interval if in desktop view
            clearInterval(interval);
        }
    });
});


  
  



// Email validation
function validate() {
    let form = document.getElementById('my-form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Your Email Adderss is Valid.";
        text.style.color = "#4caf50";
    }
    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#f44336";
    }
    if (email == "") {
        form.classList.remove('valid')
        form.classList.remove('invalid');
        text.innerHTML = "";
    }
}


// Hire Me Modal 
const trigger = document.querySelector('#trigger');
const modalgfx = document.querySelector('.modal_gfx');
const closeBtn = document.querySelector('.x');

trigger.addEventListener('click', function () {
    modalgfx.classList.add('activity')

});

closeBtn.addEventListener('click', function () {
    modalgfx.classList.remove('activity');
});

modalgfx.addEventListener('click', function (e) {
    if (e.target !== this) return;
    modalgfx.classList.remove('activity');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modalgfx.classList.remove('activity');
    }
});



// Load More Functionality by JQuery
$(document).ready(function () {
    $(".img-area").slice(6, 15).hide();
    if ($(".img-area:hidden").length != 0) {
        $("#load-more").show();
    }
    $("#load-more").on("click", function (e) {
        e.preventDefault();
        $(".img-area:hidden").slice(0, 3).slideDown();
        if ($(".img-area:hidden").length == 0) {
            $("#load-more").text("No More to view");
        }
    });
});