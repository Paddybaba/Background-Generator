var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradientCSS = document.querySelector('h3');
var myBG = document.querySelector("body");
var button = document.querySelector(".random")

myBG.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
gradientCSS.textContent = myBG.style.background + ";";
function addGradient()
{
    myBG.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
    gradientCSS.textContent = myBG.style.background + ";";
}

color1.addEventListener("input", addGradient);
color2,addEventListener("input",addGradient);
button.addEventListener("click", function()
{
    var randomNumber1 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    var randomNumber2 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    myBG.style.background = "linear-gradient(to right,"+ randomNumber1 + "," + randomNumber2 + ")";
    gradientCSS.textContent = myBG.style.background + ";";
    color1.value = randomNumber1;
    color2.value = randomNumber2;
})