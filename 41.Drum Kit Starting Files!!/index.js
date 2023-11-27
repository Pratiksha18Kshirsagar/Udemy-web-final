var noButtons = document.querySelectorAll(".drum");

for (let i = 0; i < noButtons.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        console.log(this);
        var key = this.innerHTML;
        switch (key) {
            case "w":
                var music = new Audio("./sounds/tom-1.mp3");
                music.play();
                break;
            case "a":
                var music1 = new Audio("./sounds/tom-2.mp3");
                music1.play();
                break;
            case "s":
                var music2 = new Audio("./sounds/tom-3.mp3");
                music2.play();
                break;
            case "d":
                var music3 = new Audio("./sounds/tom-4.mp3");
                music3.play();
                break;
            case "j":
                var music4 = new Audio("./sounds/crash.mp3");
                music4.play();
                break;
            case "k":
                var music5 = new Audio("./sounds/kick-bass.mp3");
                music5.play();
                break;
            case "l":
                var music6 = new Audio("./sounds/snare.mp3");
                music6.play();
                break;

            default: console.log(key);
                break;
        }



    });
}

