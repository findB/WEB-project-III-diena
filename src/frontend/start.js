import multiplication from './functions/multiplication';

export default function () {

    // Nuo čia galima keisti
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    document.getElementById('multiplication').innerHTML = `Skaičių ${a} ir ${b} sandauga yra ${multiplication(a, b)}`;


    $("#btn1").click(function () {
        alert("Veikia1");
    });
    
    $("#btn1").on("click", function () {
        alert("Veikia2");
    });
    
    $("#btn1").on("mouseover", function () {
        $(this).text("Next");
    });
    
    $("div").on("mouseover", function (e) {
        e.stopPropagation();
        $("div").css("border", "none");
        $(this).css("border", "3px solid grey");
    });
    
    $("#btn2").on("click", function () {
        $("#btn1").click();
    });
    
    
    var subHeader = $("<p></p>");
    subHeader.text("subHeader");
    console.log(subHeader);
    subHeader.addClass("h5");
    subHeader.appendTo( $("h1"));
    
    
    
    
    
    
    
    

    // Toliau nekeisti

}
