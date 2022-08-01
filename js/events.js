$(function () {


    $(".bottom-button").click(function () { 
        $(".lock").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $(".bottom-button-m").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".lock").delay(200).fadeIn(200);
    });

    $("#rehber").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".rehber").delay(200).fadeIn(200);
        
    });

    $(".bottom-button-r").click(function () { 
        $(".rehber").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $(".add").click(function () { 
        $(".rehber").fadeOut(200);
        
        $(".addRehber").delay(200).fadeIn(200);
        
    });

    $(".addback").click(function () { 
        $(".addRehber").fadeOut(200);
        
        $(".rehber").delay(200).fadeIn(200);
        
    });

    $(".personback").click(function () { 
        $(".Person").fadeOut(200);
        
        $(".rehber").delay(200).fadeIn(200);
    });

    $(".user").click(function () { 
        $(".rehber").fadeOut(200);
        
        $(".Person").delay(200).fadeIn(200);
    });

    $(".bottom-button-k").click(function () { 
        $(".keypad").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $(".bottom-button-d").click(function () { 
        $(".darkchat").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $("#darkchatb").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".darkchat").delay(200).fadeIn(200);
    });

    $("#telefon").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".keypad").delay(200).fadeIn(200);
    });

    $(".bottom-button-t").click(function () { 
        $(".twitterapp").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $("#twitter").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".twitterapp").delay(200).fadeIn(200);
    });

    $(".bottom-button-msg").click(function () { 
        $(".messageapp").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $("#message").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".messageapp").delay(200).fadeIn(200);
    });

    $(".bottom-button-msgs").click(function () { 
        $(".mesajgonderapp").fadeOut(200);
        
        $(".messageapp").delay(200).fadeIn(200);
    });


    $(".mesaj").click(function () { 
        $(".messageapp").fadeOut(200);
        
        $(".mesajgonderapp").delay(200).fadeIn(200);
    });

    $(".bottom-button-banka").click(function () { 
        $(".bankapp").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $("#banka").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".bankapp").delay(200).fadeIn(200);
    });

    $(".bottom-button-set").click(function () { 
        $(".settingsapp").fadeOut(200);
        
        $(".menu").delay(200).fadeIn(200);
    });

    $("#ayarlar").click(function () { 
        $(".menu").fadeOut(200);
        
        $(".settingsapp").delay(200).fadeIn(200);
    });



    $("#1,#2,#3,#4,#5,#6,#7,#8,#9").click(function(){
        var v = $(this).html();
        var old = $(".inputkey").val();
        $(".inputkey").val(old+v);
    });
});