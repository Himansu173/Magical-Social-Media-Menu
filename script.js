let calculate = true;

function menu() {
    if (calculate == true) {
        document.getElementById("menu").style.cssText = `transform: translate(-50%, -50%) rotateZ(360deg);
        border-color: black;
        box-shadow: 0 0 20px white;`;
        document.getElementById("whatsapp").style.cssText = `height: 4rem; width: 4rem; top: 18%; left: 19%; transition: 0.05s ease-in-out;`;
        document.getElementById("twitter").style.cssText = `height: 4rem; width: 4rem; top: 5.5%; left: 50%; transition: 0.1s ease-in-out;`;
        document.getElementById("reddit").style.cssText = `height: 4rem; width: 4rem; top: 18%; left: 81%; transition: 0.15s ease-in-out;`;
        document.getElementById("linkedin").style.cssText = `height: 4rem; width: 4rem; top: 50%; left: 94.5%; transition: 0.2s ease-in-out;`;
        document.getElementById("insta").style.cssText = `height: 4rem; width: 4rem; top: 82%; left: 81%; transition: 0.25s ease-in-out;`;
        document.getElementById("github").style.cssText = `height: 4rem; width: 4rem; top: 94.5%; left: 50%; transition: 0.3s ease-in-out;`;
        document.getElementById("youtube").style.cssText = `height: 4rem; width: 4rem; top: 82%; left: 19%; transition: 0.35s ease-in-out;`;
        document.getElementById("facebook").style.cssText = `height: 4rem; width: 4rem; top: 50%; left: 5.5%; transition: 0.4s ease-in-out;`;

        calculate = false;
    }
    else {
        document.getElementById("menu").style.cssText = `transition:0.4s ease-in-out;`;
        document.getElementById("whatsapp").style.cssText = `transition:0.4s ease-in-out;`;
        document.getElementById("twitter").style.cssText = `transition:0.35s ease-in-out;`;
        document.getElementById("reddit").style.cssText = `transition:0.3s ease-in-out;`;
        document.getElementById("linkedin").style.cssText = `transition:0.25s ease-in-out`;
        document.getElementById("insta").style.cssText = `transition:0.2s ease-in-out;`;
        document.getElementById("github").style.cssText = `transition:0.15s ease-in-out;`;
        document.getElementById("youtube").style.cssText = `transition:0.1s ease-in-out;`;
        document.getElementById("facebook").style.cssText = `transition:0.05s ease-in-out`;
        calculate = true;
    }
}
