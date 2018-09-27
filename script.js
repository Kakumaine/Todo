$(document).ready(function(){
    console.log()

    $(".content").show();
    $(".welcome").hide();

    $(".loginbutton").click(function(){
        $(".content").hide();
        $(".welcome").show();
        $(".mail").hide();
        $(".password").hide();
        $(".loginbutton").hide();
        $(".p1").hide();
        $(".p2").hide();
        $(".welcome").text("Välkommen "+$("input").val());
    });
});