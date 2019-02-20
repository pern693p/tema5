let helMenu = [];
document.addEventListener("DOMContentLoaded", start);
let dest = document.querySelector("#liste");
let filter = "alle";

function start() {

    async function getJson() {
        let jsonData = await fetch("mad.json");
        helMenu = await jsonData.json();
        visRetter();

    }

    function visRetter() {
        dest.innerHTML = "";
        helMenu.forEach(enkelRet) => {
            if (filter == "alle" || filter == enkeltRet.kategori) {
                let template =

            }

        }
