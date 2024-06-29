// Himal Gole
// Typing practice....
// vanilla javascript
// Fine coding

var paragraph = localStorage.getItem("paragraph")
var alertText = ""
function despatch() {
    paragraph = document.getElementById("textbox").value
    window.localStorage.setItem("paragraph", paragraph)
    if (localStorage.getItem("paragraph") == "") {
        alertText = "Please, enter a paragraph!"
        document.querySelector(".container").innerHTML = '<p>' + alertText + '</p>' + '<br>' + '<a href = "setup.html">Go Back</a>'
    }
    else if (localStorage.getItem("paragraph").length < 12) {
        alertText = "Please, enter a longer paragraph!"
        document.querySelector(".container").innerHTML = '<p>' + alertText + '</p>' + '<br>' + '<a href = "setup.html">Go Back</a>'
    }
    else {
        alertText = "Get started!"
        document.querySelector(".container").innerHTML = '<a href = "typing.html">' + alertText + '</a>'

    }
}

for (var i = 0; i < paragraph.length; i++) {
    document.getElementById("paragraph-container").innerHTML += '<span class = "letter">' + paragraph[i] + '</span>'
}
var audio1 = new Audio('../audio/s1.mp3')
var audio2 = new Audio('../audio/s2.mp3')

var list = document.querySelectorAll('.letter')
var counter = 1
var negativaity = 0
var consecutive = 0
var word = 0
var timer = 0
var st = 0
var stop = 0


list[counter - 1].classList.add("indicator")
window.addEventListener("keypress", function (e) {
    if (st == 0) {
        st = 1
        setInterval(() => {
            if (stop == 1) {
                this.stop()
            }
            timer++
            document.getElementById("timer").innerHTML = timer + " sec"


        }, 1000);
    }

    if (counter != list.length) {


        if (paragraph[counter - 1] == e.key) {
            audio2.play()
            // list[counter - 2].classList.add("correct")
            for (var i = 0; i < list.length; ++i) {
                list[i].classList.remove('indicator')
            }
            counter = counter + 1
            list[counter - 1].classList.add("indicator")
            if (e.key == ' ' || e.key == '.') {
                ++consecutive
                console.log("pressed")
                if (negativaity == 0) {
                    if (consecutive == 2) {
                        --word
                        consecutive = 0
                    }
                    ++word
                    console.log("word: " + word)
                }
                negativaity = 0
            }
            else {
                consecutive = 0
            }
            // console.log("hey")
        }
        else {
            audio1.play()
            list[counter - 1].classList.add("wrong")
            negativaity++
        }


    }
    else {
        word = word + 1
        var speed = word / (timer / 60)
        stop = 1
        speed = speed.toFixed(0)
        if (speed < 12) {
            document.getElementById("paragraph-container").innerHTML = '<p>Poor Typing!</p><br><p>Your typing speed is ' + speed + 'wpm.,<a href = "typing.html">Try again</a></p>'
        }
        else if (speed >= 12 && speed < 25) {
            document.getElementById("paragraph-container").innerHTML = '<p>Beginner Typing!</p><br><p>Your typing speed is ' + speed + 'wpm.,<a href = "typing.html">Try again</a></p>'

        }
        else {
            document.getElementById("paragraph-container").innerHTML = '<p>Amazing!</p><br><p>Your typing speed is ' + speed + 'wpm.,<a href = "typing.html">Try again</a></p>'

        }
    }


})

function generate() {
    alert("Yet to be built!")
}

