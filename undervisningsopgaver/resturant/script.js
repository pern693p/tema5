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
        alleRetter.forEach(enkeltRet => {
                if (filter == "alle" || filter == enkeltRet.kategori) {
                    let template =

                        <
                        div class = "retter" >
                        <
                        h2 > $ {
                            enkeltRet.navn
                        } < /h2> <
                        img src = "mad/${enkeltRet.billede}.jpg" >
                        <
                        p > Pris: $ {
                            enkeltRet.pris
                        },
                        - < /p>


                        <
                        /div>



                }
            }
        })

    document.querySelectorAll(".filter").forEach(elm => {
        elm.addEventlistener("click", filtering);
    })


    document.querySelector("#luk button").addEventListener("click", () => {
        document.querySelector("#popup").style.display = "none";


    })

    getJson()

}
