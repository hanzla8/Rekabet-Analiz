// When You click side bar, then the same button active
// $(".sidebar ul li").on('click' , function(){
//     $(".sidebar ul li.active").removeClass('active');
//     $(this).addClass('active');
// });

// $("#navb .nav-link").on('click' , function(){
//     $("#navb .nav-link.active").removeClass('active');
//     $(this).addClass('active');
// });

// main btn hover
$(".main-head ul li").on('click' , function(){
    $(".main-head ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function(){
    $('.sidebar').addClass('active');
});

$('.close-btn').on('click', function(){
    $('.sidebar').removeClass('active');
});


// Now This is range ratipus

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".custom-range");
    const rateDisplays = document.querySelectorAll(".rate-display");

    sliders.forEach((slider, index) => {
        slider.addEventListener("input", () => {
            const value = slider.value;
            rateDisplays[index].querySelector("#rate" + (index + 1)).textContent = `$${value}`;
        });
    });
});




