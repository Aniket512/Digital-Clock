setInterval(function () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = (h >= 12) ? "PM" : "AM";

    h = (h > 12) ? (h - 12) : h;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $("#hours").html(h + "<br><span>Hours</span>");
    $("#minutes").html(m + "<br><span>Minutes</span>");
    $("#seconds").html(s + "<br><span>Seconds</span>");
    $("#ampm").html(ap);

    $("#hh").css({strokeDashoffset: 440 - (440 * h) / 12});
    $("#mm").css({strokeDashoffset: 440 - (440 * m) / 60});
    $("#ss").css({strokeDashoffset: 440 - (440 * s) / 60});

    $(".hr_dot").css("transform","rotate(" + h*30 + "deg)");
    $(".min_dot").css("transform","rotate(" + m*6 + "deg)");
    $(".sec_dot").css("transform","rotate(" + s*6 + "deg)");
});
