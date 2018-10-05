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

    if (sessionStorage.mittLogin!="inloggad"){
        $("#main").show();
        $(".kontakt").show();
        $(".listbutton").hide();
        $(".content").hide();
        $(".welcome").hide();
        $(".logout").hide();
        sessionStorage.mittLogin="utloggad";

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
        console.log(localStorage.minToDo);
        $("#main").hide();
        $(".content").show();
        $(".welcome").hide();
        $(".login").hide();
        $(".listbutton").show();

        $.each(toDo, function(i, val){
            $(".ulbox").append("<li>"+val+"<i class='fas fa-check'></i></li>")
        });

        $(function(){
            $("i").hover(function(){//inte klar, hover över checkbox
                $("i").addClass("fas fa-check-square");
                    }, function(){
                    $("i").removeClass("fas fa-check-square");
                    $("i").addClass("fas");
            })
        });

        var add=$(".addinput").val();
        $(".addbutton").click(function(){//inte klar, lägg till i listan
            $(toDo).add($(add));
            console.log("add");
        });

        $("i").click(function(vem){ //inte klar, ta bort ur listan
            $(toDo).splice(vem,1);
            console.log("click")
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