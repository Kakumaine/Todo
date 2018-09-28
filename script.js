$(document).ready(function(){
    $(".return").hide();
    $(".forget").hide();
    $(".dateh3").text(Date);
    $(".listbutton").hide();

    var toDo=[
        "Klipp håret",
        "Skala bananer",
        "Köp disk",
        "Spika isär saker",
        "Stryka gurkrock"
    ];
    console.log(toDo)

    if (sessionStorage.mittLogin!="inloggad"){
        $("#main").show();
        $(".kontakt").show();
        $(".listbutton").hide();
        $(".content").hide();
        $(".welcome").hide();
        $(".logout").hide();
        sessionStorage.mittLogin="utloggad";
        console.log(sessionStorage.mittLogin);

        $(".loginbutton").click(function(){
            $(".usernameinput").val();
            $(".passwordinput").val();
            
            if ($(".usernameinput").val()=="test", $(".passwordinput").val()=="password"){
                sessionStorage.mittLogin="inloggad";
                localStorage.minToDo="minLista";
                $(".welcome").text("Välkommen "+$("input").val());
                $(".welcome").show();
                $("#main").hide();
                $(".content").hide();
                $(".login").hide();
                $(".forget").hide();
                $(".logout").show();
                $(".listbutton").show();
                $(".kontakt").hide();

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
        console.log(localStorage.minToDo);
        $("#main").hide();
        $(".content").show();
        $(".welcome").hide();
        $(".login").hide();
        $(".listbutton").show();

        $.each(toDo, function(i, val){
            $(".ulbox").append("<li>"+val+"<input type='checkbox'></li>")
        });

        $(".addbutton").click(function(){
            $(toDo).push($(".addinput").val());
            console.log()
        });
        
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