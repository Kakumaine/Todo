$(document).ready(function(){
    $(".return").hide();
    $(".forget").hide();
    if (sessionStorage.mittLogin!="inloggad"){
        $("#main").show();
        $(".kontakt").show();
        $(".content").hide();
        $(".welcome").hide();
        $(".logout").hide();
        sessionStorage.mittLogin="utloggad";
        console.log(sessionStorage.mittLogin);
        $(".loginbutton").click(function(){
            $(".usernameinput").val();
            $(".passwordinput").val();
            $(".usernameinput").empty();
            $(".passwordinput").empty();
            if ($(".usernameinput").val()=="test", $(".passwordinput").val()=="password"){
                sessionStorage.mittLogin="inloggad";
                $(".welcome").text("Välkommen "+$("input").val());
                $(".welcome").show();
                $("#main").hide();
                $(".content").hide();
                $(".login").hide();
            } else if ($(".usernameinput").val()!="test", $(".passwordinput").val()!="password"){
                $(".forget").show();
                $("#main").hide();
                $(".kontakt").hide();
                $(".content").hide();
                $(".welcome").hide();
                $(".logout").hide();
            };
        });
    } else if (sessionStorage.mittLogin=="inloggad") {
        console.log(sessionStorage.mittLogin);
        $("#main").hide();
        $(".content").show();
        $(".welcome").hide();
        $(".login").hide();
        $(".logoutbutton").click(function(){
            $(".return").show();
            $("#main").hide();
            $(".content").hide();
            $(".welcome").hide();
            $(".logout").hide();
            sessionStorage.mittLogin="utloggad";
        });
    }
});