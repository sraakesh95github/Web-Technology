    let mylist = document.getElementById("mylist");
let mybutton = document.getElementById("mybutton");
let buttonIcon = document.getElementById("buttonIcon");
// console.log("This function has been invoked");
    mybutton.onclick = function() {
        console.log(mylist.classList[1])
        if(mylist.classList[1] == undefined) {
            console.log("No class present")
            mylist.classList.add("fade-in");
        }
        else if (mylist.classList[1] == "fade-in") {
            console.log("Entered fade-in...");
            mylist.classList.replace("fade-in", "fade-out");
            buttonIcon.classList.replace("fa-caret-up", "fa-caret-down");
            // mylist.setAttribute('hidden', true);
            // setTimeout(function () {
            //     mylist.setAttribute('hidden', true);
            // }, 300)
        }
        else {
            
            console.log("Entered fade-out...");
            mylist.classList.replace("fade-out", "fade-in");
            buttonIcon.classList.replace("fa-caret-down", "fa-caret-up");
            // mylist.removeAttribute('hidden');
            // mylist.setAttribute('hidden', false);
        }
        // console.log(mybutton.childNodes[2]);
    }