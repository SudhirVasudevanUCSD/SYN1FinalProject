
    var message = document.getElementById("button");
    var cliked = false
    message.onclick = function() {
        if (!cliked) {
            cliked = true;
            alert("dfhksjdfh")
            document.getElementById("status").innerText = "wow";
        }
    };

