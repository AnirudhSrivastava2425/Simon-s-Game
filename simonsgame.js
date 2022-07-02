var arrin = "";
var arrout = "";
var level = 0;
//mouse

const v = document.querySelectorAll(".btn").length;
for (let i = 0; i < v; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", play);

}
function play() {
    let tune = new Audio('click.mp3');
    tune.play();
    var t = this;
    this.style.opacity = "50%";
    setTimeout(() => {
        t.style.opacity = "100%";
    }, 100);
    if (t.innerHTML == 1) {

        arrout = arrout + "1";
    }
    else if (t.innerHTML == 2) {
        arrout = arrout + "2";
        
    }
    else if (t.innerHTML == 3) {
        arrout = arrout + "3";
        
    }
    else if (t.innerHTML == 4) {
        arrout = arrout + "4";
        
    }
    check12(arrout.length-1)

}

//keyboard

document.addEventListener('keypress', function (event) {
    var k = event.key;
    if (event.key > 0 && event.key < 5) {
        let tune = new Audio('click.mp3');
        tune.play();
        if (event.key == 1) {

            document.querySelector("#one").style.opacity = "50%";
            setTimeout(() => {
                document.querySelector("#one").style.opacity = "100%";
            }, 100);
            arrout = arrout + "1";
        }
        else if (k == 2) {
            document.querySelector("#two").style.opacity = "50%";
            setTimeout(() => {
                document.querySelector("#two").style.opacity = "100%";
            }, 100);
            arrout = arrout + "2";

        }
        else if (k == 3) {
            document.querySelector("#three").style.opacity = "50%";
            setTimeout(() => {
                document.querySelector("#three").style.opacity = "100%";
            }, 100);
            arrout = arrout + "3";

        }
        else if (k == 4) {
            document.querySelector("#four").style.opacity = "50%";
            setTimeout(() => {
                document.querySelector("#four").style.opacity = "100%";
            }, 100);
            arrout = arrout + "4";

        }
    }
    check12(arrout.length-1);

})

document.querySelector("#play").addEventListener("click", itsagame);

//main game function

function itsagame() {
    arrout="";
    level++;
    document.querySelector("h1").innerHTML = "Level - " + level;

    let v1 = Math.floor(Math.random() * 4 + 1);
    if (v1 == 1) {
        document.querySelector("#one").style.opacity = "50%";
        setTimeout(() => {
            document.querySelector("#one").style.opacity = "100%";
        }, 200);
        arrin = arrin + "1";

    }
    if (v1 == 2) {
        document.querySelector("#two").style.opacity = "50%";
        setTimeout(() => {
            document.querySelector("#two").style.opacity = "100%";
        }, 200);
        arrin = arrin + "2";

    }
    if (v1 == 3) {
        document.querySelector("#three").style.opacity = "50%";
        setTimeout(() => {
            document.querySelector("#three").style.opacity = "100%";
        }, 200);
        arrin = arrin + "3";

    }
    if (v1 == 4) {
        document.querySelector("#four").style.opacity = "50%";
        setTimeout(() => {
            document.querySelector("#four").style.opacity = "100%";
        }, 200);
        arrin = arrin + "4";

    }
}

function check12(lvl) {
    
    if (arrin[lvl] != arrout[lvl] ) {
        level = 0;
        arrin="";
        alert("Aww you Lose! Lets start from level 1.");
        itsagame();
    }
    if (arrin == arrout) {
        setTimeout(itsagame, 500);
    }
}