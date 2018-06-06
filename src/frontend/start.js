import multiplication from './functions/multiplication';

export default function () {

    // Nuo čia galima keisti
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    document.getElementById('multiplication').innerHTML = `Skaičių ${a} ir ${b} sandauga yra ${multiplication(a, b)}`;


    $("#btn1").click(function () {
        alert("Veikia");
    });
    
    $("#btn1").on("click", function () {
        alert("Veikia");
    });
    
    $("#btn1").on("mouseover", function () {
        $(this).text("Next");
    });
    
    $("div").on("mouseover", function (e) {
        e.stopPropagation();
        $(this).css("border", "3px solid grey");
    });

    // Toliau nekeisti

}
