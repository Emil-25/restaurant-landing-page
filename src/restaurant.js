"use strict";
let scrollHeight = scrollY;
window.displayTab = (n) => {
    $(".tab-content").removeClass("default");
    $(".tab-content").css("opacity", "0.2");
    if (n !== 3) {
        $(".tab-content").eq(n).addClass("default");
    }
    else {
        $(".tab-content").addClass("default");
    }
    $(".tab-content").animate({ opacity: "1" }, "slow");
}
$(".menu-tabs").children().on("click", function () {
    $($(".menu-tabs").find("a").removeClass("chosen"));
    $(this).children().addClass("chosen");
});
window.addEventListener("scroll", function () {
    if (scrollHeight < scrollY) {
        $(".navbar")[0].style.top = "-120px";
        scrollHeight = scrollY;
    }
    else {
        $(".navbar")[0].style.top = "0";
        scrollHeight = scrollY;
    }
});
//# sourceMappingURL=restaurant.js.map