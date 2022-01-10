var Btnnumber = document.querySelectorAll('#Btnnumber');
var screen = document.querySelector('#screen');
var btnopt = document.querySelectorAll('#btnOpt');

var optstate = false;
var opt = "";
var final = 0;


//Ekrana butonları bastırma

Btnnumber.forEach(number => {
    number.addEventListener('click', ShowNumber);

    function ShowNumber() {
        this.style.fontSize = "28px";
        if (screen.textContent == "0" || optstate) {
            screen.textContent = "";
        }
        screen.textContent += this.textContent;
        optstate = false;
        setTimeout(() => {
            this.style.fontSize = "15px";
        }, 500);

    }
});
btnopt.forEach(element => {
    element.onclick = function () {
        optstate = true;
        var newOpt = this.textContent;

        switch (opt) {
            case "+":
                screen.textContent = final + Number(screen.textContent);
                break;
            case "-":
                screen.textContent = final - Number(screen.textContent);
                break;
            case "*":
                screen.textContent = final * Number(screen.textContent);
                break;
            case "/":
                screen.textContent = final / Number(screen.textContent);
                break;
            case "=":

                final = Number(screen.textContent);
                break;
            case "CE":
                screen.textContent = "";
                break;

            
            
            


        }
        final = Number(screen.textContent);
        opt = newOpt;
    };
});