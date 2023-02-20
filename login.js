var obj = [
    {
        usernam: "janidu",
        passwor: "123"

    },
    {
        usernam: "jana",
        passwor: "234"
    }
]


function log() {
    var username = document.getElementById("unn").value;
    var password = document.getElementById("pwd").value;
    var bls = "";

    for (i = 0; i < obj.length; i++) {

        if (username == obj[i].usernam && password == obj[i].passwor) {
            bls = "go";
            break
       
        } else {
            bls = "no";
        }
    }

    if (bls == "go") {
        window.location.assign("home.html");
        alert("Login successfully!");
    } else {
        alert("Login failed!");
    }



}