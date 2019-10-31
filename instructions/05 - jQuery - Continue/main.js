/// <reference path="jquery-3.4.1.js" />

function testJQuery() {
    
    $("div").text("Hi");
    $("div").text(Math.random());

    $("div").each(function(){
        $(this).text(Math.random());
    });

    $("div").hide(1000).show(1000).slideUp(1000).slideDown(1000).fadeOut(1000).fadeIn(1000);
    
    $("div").slideToggle(1000);
    $("div").fadeToggle(1000);
    $("div").toggle(1000);
    
    $("div:first-of-type").css("background-color", "green");
    $("div:first-of-type").next().css("background-color", "green");
    $("div:first-of-type").prev().css("background-color", "green");
    $("div:first-of-type").parent().css("background-color", "green");
    $("div:first-of-type").siblings().css("background-color", "green");
    $("div:first-of-type").siblings("div").css("background-color", "green");
    
    $("div").html("Hi");
    $("div").append("Bye");
    $("div").prepend("Bye");
    $("div").append("<input type='text'>");

    
}

