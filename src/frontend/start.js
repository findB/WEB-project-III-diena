import multiplication from './functions/multiplication';

export default function () {

    // Nuo čia galima keisti
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    document.getElementById('multiplication').innerHTML = `Skaičių ${a} ir ${b} sandauga yra ${multiplication(a, b)}`;


    //    $("#btn1").click(function () {
    //        alert("Veikia1");
    //    });
    //    
    //    $("#btn1").on("click", function () {
    //        alert("Veikia2");
    //    });
    //    
    //    $("#btn1").on("mouseover", function () {
    //        $(this).text("Next");
    //    });
    //    
    //    $("div").on("mouseover", function (e) {
    //        e.stopPropagation();
    //        $("div").css("border", "none");
    //        $(this).css("border", "3px solid grey");
    //    });
    //    
    //    $("#btn2").on("click", function () {
    //        $("#btn1").click();
    //    });
    //    
    //    
    //    var subHeader = $("<p></p>");
    //    subHeader.text("subHeader");
    //    console.log(subHeader);
    //    subHeader.addClass("h5");
    //    subHeader.appendTo( $("h1"));
    //    
    //    // pakeisti pgr antrastes teksta
    //    
    //    
    //    $("#btn3").on("click", function () {
    //        $(".h5").css("border", "2px dotted grey").text("Keičiu!");
    //    });

    $("#btn4").on("click", function () {
        let name = $("#nameInput").val();
        alert(`Jūsų vardas ${name}`);
    });







    // Toliau nekeisti

}
