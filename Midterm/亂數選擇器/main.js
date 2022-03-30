window.onload = function(){
    //document.write("Hello JavaScript");
};

$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        randomChildNumber = randomChildNumber + 1;
        let RandomImg = randomChildNumber.toString();
        $("img").attr("src", "imgs/"+RandomImg+".jpg");
    });
});