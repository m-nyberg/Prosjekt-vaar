
//Footer, tømme epostadressefelt
function tømInput() {
    inputnyhetEl = document.getElementById("nyhetsbrev")
    inputnyhetEl.value = ""
}

//Side topplisten, bokser som dukker opp
const topEl = document.querySelector(".overskriftTop2")
let antKlikk = 0
topEl.addEventListener("click", hei)
const containerElm = document.querySelector(".container")
const pilEl = document.querySelector(".pil")


function hei() {
    if (antKlikk == 0) {
        let timer = setInterval(leggTilDiv, 250)
        let count = 0

        const listeByer = ["Hallstatt, Østerrike", "Annecysjøen, Frankrike", "Hraunfossar, Island", "Koh Chang, Thailand", "Gardasjøen, Italia", "Ahr-dalen, Tyskland", "Djerba, Tunisia", "Karakol, Kyrgyzstan", "La Paz, Bolivia", "Palau", "Korfu, Hellas", "Lofoten, Norge",]
        const listeLand = ["Østerrike", "Frankrike", "Island", "Thailand", "Italia", "Tyskland", "Tunisia", "Kyrgyzstan", "Bolivia", "", "Hellas", "Norge",]
        const listeByerLiten = ["hallstatt", "annecy", "hraunfossar", "koh", "garda", "ahr", "djerba", "karakol", "lapaz", "palau", "korfu", "lofoten",]
        const listeFarger = ["Bisque", "MistyRose", "PowderBlue", "Thistle", "WhiteSmoke", "Bisque", "MistyRose", "PowderBlue", "Thistle", "WhiteSmoke", "Bisque", "MistyRose", "PowderBlue", "Thistle", "WhiteSmoke"]

        function leggTilDiv() {
            containerElm.classList.remove("none")
            const link = document.createElement("a")
            link.href = listeByerLiten[count] + ".html"
            link.innerHTML = listeByer[count]
            //link.style.backgroundColor = listeFarger[count]
            link.style.backgroundImage = "url(bilder/" + listeByerLiten[count] + ".jpg)"

            containerElm.appendChild(link)

            count = count + 1

            if (count >= 12) {
                clearInterval(timer)
            }

        }

       

    } else if (antKlikk % 2 == 0) {
        containerElm.classList.remove("none")
    } else {
        containerElm.classList.add("none")

    }

    if (pilEl.classList.contains("fa-sort-down")) {
        pilEl.classList.remove("fa-sort-down")
        pilEl.classList.add("fa-sort-up")
    } else {
        pilEl.classList.remove("fa-sort-up")
        pilEl.classList.add("fa-sort-down")
    }

    antKlikk++

}