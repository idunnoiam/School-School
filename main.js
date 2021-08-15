var kids = [];

function Submit() {
    var name1 = document.getElementById("kid1").value;
    var name2 = document.getElementById("kid2").value;
    var name3 = document.getElementById("kid3").value;
    var name4 = document.getElementById("kid4").value;


    kids.push(name1);
    kids.push(name2);
    kids.push(name3);
    kids.push(name4);
    console.log(kids);


    document.getElementById("display_names").innerHTML = kids;
    document.getElementById("submit").style.display = "none";
    document.getElementById("SO").style.display = "inline-block";
}

function sorting() {
    kids.sort();
    console.log(kids);
    document.getElementById("display_names").innerHTML = kids;
}