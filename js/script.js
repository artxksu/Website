$(document).ready(function () {

    $('#plus1').click(function () {
        $('.infofirst').css('display', 'block');
        $('.oneroom').css('top', '5.20vw')
    });
    $('.plus2').click(function () {
        $('.infosecond').css('display', 'block');
        $('.tworoom').css('top', '5.20vw')
    });
    $('.plus3').click(function () {
        $('.infothird').css('display', 'block');
        $('.threeroom').css('top', '5.20vw')
    });
    $('.plus4').click(function () {
        $('.infofourth').css('display', 'block');
        $('.fourroom').css('top', '5.20vw')
    });
    $('.plus5').click(function () {
        $('.infofifth').css('display', 'block');
        $('.fiveroom').css('top', '5.20vw')
    });
    $(".item1").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item5.png")
            $(this).attr("src", "img/item5js.png");
        else if ($(this).attr("src") === "img/item5js.png")
            $(this).attr("src", "img/item5.png");
    });

    $(".item2").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item2.png")
            $(this).attr("src", "img/item2js.png");
        else if ($(this).attr("src") === "img/item2js.png")
            $(this).attr("src", "img/item2.png");
    });

    $(".item3").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item3.png")
            $(this).attr("src", "img/item3js.png");
        else if ($(this).attr("src") === "img/item3js.png")
            $(this).attr("src", "img/item3.png");
    });
    $(".item4").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item4.png")
            $(this).attr("src", "img/item4js.png");
        else if ($(this).attr("src") === "img/item4js.png")
            $(this).attr("src", "img/item4.png");
    });
    $(".item5").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item1.png")
            $(this).attr("src", "img/item1js.png");
        else if ($(this).attr("src") === "img/item1js.png")
            $(this).attr("src", "img/item1.png");
    });
    $(".item6").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item6.png")
            $(this).attr("src", "img/item6js.png");
        else if ($(this).attr("src") === "img/item6js.png")
            $(this).attr("src", "img/item6.png");
    });
    $(".item7").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item7.png")
            $(this).attr("src", "img/item7js.png");
        else if ($(this).attr("src") === "img/item7js.png")
            $(this).attr("src", "img/item7.png");
    });
    $(".item8").hover(function () {
        console.log('ddd');
        if ($(this).attr("src") === "img/item8.png")
            $(this).attr("src", "img/item8js.png");
        else if ($(this).attr("src") === "img/item8js.png")
            $(this).attr("src", "img/item8.png");
    });

    $('.links a').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            var scrollTo = $(this).attr('href');
            var whitespace = scrollTo == '' ? 110 : 30;
            $('html,body').animate({
                scrollTop: $(scrollTo).offset().top - whitespace
            }, 1000);
        });
    });
    $('.link a').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            var scrollTo = $(this).attr('href');
            var whitespace = scrollTo == '' ? 110 : 30;
            $('html,body').animate({
                scrollTop: $(scrollTo).offset().top - whitespace
            }, 1000);
        });
    });
    $('.reserve').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('.thanks').click(function () {
        $('.thanks').css('display', 'none');
    });
    $('#button1').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button2').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button3').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button4').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button5').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button6').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button7').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button8').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button9').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button10').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button11').click(function () {
        $('.thanks').css('display', 'block');
    });
    $('#button12').click(function () {
        $('.thanks').css('display', 'block');
    });



});








