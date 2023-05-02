/* ======================
BGM
========================= 

const backgroundMusic = document.getElementById("background-music")
backgroundMusic.play()
//pause audio when user navigates away from page
window.onbeforeunload = function() {
    backgroundMusic.pause()
}
*/

console.log('it works!')
/* ======================
CACHED DOM NODES
========================= */

const body = document.querySelector("body")
const carousel = document.querySelector(".carousel")
const carouselImg = document.querySelector(".carousel img")
const next = document.querySelector(".carousel .next")
const previous = document.querySelector(".carousel .previous")
const select = document.querySelector(".carousel .select")
const modal = document.querySelector(".modal-game-over")

const narutoAttack = document.querySelector(".naruto-attack")
const narutoClone = document.querySelector(".naruto-clone")
const narutoRasengan = document.querySelector(".naruto-rasengan")
const narutoTails = document.querySelector(".naruto-9Tail")
const sasukeAttack = document.querySelector(".sasuke-attack")
const sasukeFire = document.querySelector(".sasuke-fire")
const sasukeChidori = document.querySelector(".sasuke-chidori")
const sasukeSusanoo = document.querySelector(".sasuke-susanoo")

const playAgain = document.querySelector(".play-again")

/* ======================
CREATE AVATARS
========================= */
class Avatar {
    constructor(name, charHealth = 100, charChakra = 100) {
        this.name = name
        this.charHealth = charHealth
        this.charChakra = charChakra
    }

    attack(target) {
        if (this.charChakra >= 5) {
            const damage = Math.floor(Math.random() * 10) + 1
            target.charHealth -= damage
            this.charChakra -= 5
            this.updateStatsOnNarutoDOM()
            target.updateStatsOnSasukeDOM()
        } else {
            body.innerHTML = `
                <h3>Not enough Chakra! Wait to recover!</h3>
            `
        }
    }

    updateStatsOnNarutoDOM() {
        const container = document.querySelector(".naruto-stats")
        container.innerHTML = `
                <img src="https://i.imgur.com/G9Jnqgq.png" alt="Naruto" />
                <div class="naruto-health">Health: <span>${this.charHealth}</span></div>
                <div class="naruto-chakra">Chakra: <span>${this.charChakra}</span></div>
                `
    }
    updateStatsOnSasukeDOM() {
        const container = document.querySelector(".sasuke-stats")
        container.innerHTML = `
                <img src="https://i.imgur.com/WtMofm8.png" alt="Sasuke" />
                <div class="sasuke-health">Health: <span>${this.charHealth}</span></div>
                <div class="sasuke-chakra">Chakra: <span>${this.charChakra}</span></div>
                `
    }
}

class narutoClass extends Avatar {
    constructor() {
        super()
        this.image = {
            narutoImgSolo: "https://p7.hiclipart.com/preview/171/107/717/naruto-ultimate-ninja-3-naruto-shippuden-ultimate-ninja-storm-2-naruto-shippuden-ultimate-ninja-storm-generations-naruto-ultimate-ninja-storm-naruto-uzumaki-naruto-png-picture-thumbnail.jpg",
            narutoImgClone: "https://www.vhv.rs/dpng/d/406-4069972_naruto-png-image-file-naruto-doing-shadow-clone.png",
            narutoImgRasengan: "https://p7.hiclipart.com/preview/462/369/315/5bbc3c2eef4d5-thumbnail.jpg",
            narutoImg9Tail: "https://e7.pngegg.com/pngimages/766/820/png-clipart-naruto-uzumaki-nine-tailed-fox-kurama-tailed-beasts-naruto-giraffe-cartoon.png"
        }
    }
    

evolveNaruto () {
    
}

clone(target) {
    if (this.charChakra >= 10) {
        const damage = Math.floor(Math.random() * 6) + 10
        target.charHealth -= damage
        this.charChakra -= 10
        updateStatsOnDOM()
    } else {
        body.innerHTML = `
                <h3>Not enough Chakra! Wait to recover!</h3>
            `
    }
}

rasengan(target) {
    if (this.charChakra >= 40) {
        const damage = Math.floor(Math.random() * 6) + 25
        target.charHealth -= damage
        this.charChakra -= 40
        updateStatsOnDOM()
    } else {
        body.innerHTML = `
                <h3>Not enough Chakra!</h3>
            `
    }
}

nineTails(target) {
    if (this.charChakra >= 70) {
        const damage = Math.floor(Math.random() * 11) + 40
        target.charHealth -= damage
        this.charChakra -= 70
        updateStatsOnDOM()
    } else {
        body.innerHTML = `
                <h3>Not enough Chakra! Can't transform!</h3>
            `
    }
}



    /*
    recoverEveryRound() {
        setInterval(() => {
            this.charChakra += 10
            this.updateStatsOnDOM()
        }, 10000)
    }
    */
}

class sasukeClass extends Avatar {
    constructor() {
        super()
        this.image = {
            sasukeImgSolo: "https://e7.pngegg.com/pngimages/571/918/png-clipart-sasuke-uchiha-naruto-uzumaki-shikamaru-nara-naruto-shippuden-ultimate-ninja-storm-4-itachi-uchiha-naruto-purple-black-hair.png",
            sasukeImgFire: "https://www.pngitem.com/pimgs/m/407-4072625_sasuke-shippuden-fire-ball-jutsu-hd-png-download.png",
            sasukeImgChidori: "https://e7.pngegg.com/pngimages/425/854/png-clipart-sasuke-uchiha-itachi-uchiha-chidori-anime-anime-photography-computer-wallpaper.png",
            sasukeImgSusanoo: "https://e7.pngegg.com/pngimages/1013/267/png-clipart-sasuke-uchiha-itachi-uchiha-naruto-uchiha-clan-susanoo-no-mikoto-skeleton-watching-tv.png"
    } 
}

fireball(target) {
    if (this.charChakra >= 10) {
        const damage = Math.floor(Math.random() * 6) + 10
        target.charHealth -= damage
        this.charChakra -= 10
        updateStatsOnDOM()
    } else {
        body.innerHTML = `
                <h3>Not enough Chakra! Wait to recover!</h3>
            `
    }
}

chidori(target) {
    if (this.charChakra >= 40) {
        const damage = Math.floor(Math.random() * 6) + 25
        target.charHealth -= damage
        this.charChakra -= 40
        updateStatsOnDOM()
    } else {
        body.innerHTML = `
                <h3>Not enough Chakra!</h3>
            `
    }
}

susanoo(target) {
    if (this.charChakra >= 70) {
        const damage = Math.floor(Math.random() * 11) + 40
        target.charHealth -= damage
        this.charChakra -= 70
        updateStatsOnDOM()
    } else {
        body.innerHTML = `
                <h3>Not enough Chakra! Can't summon!</h3>
            `
    }
}

}

const naruto = new narutoClass("Naruto")
const sasuke = new sasukeClass("Sasuke")

/* ======================
GLOBAL VARS
========================= */

const backgroundImage = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb474a69-cf12-4a80-9735-703239dca1fd/dc0c07g-cabdc08e-9326-49ba-9d2e-dd3634bb23af.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViNDc0YTY5LWNmMTItNGE4MC05NzM1LTcwMzIzOWRjYTFmZFwvZGMwYzA3Zy1jYWJkYzA4ZS05MzI2LTQ5YmEtOWQyZS1kZDM2MzRiYjIzYWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GndPI9s9TjxH6-7bnnfhJInR6vtinkapEHz36yPiZ_E",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddlnx85-af0e161c-6071-4157-b021-b28a58ef275a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRsbng4NS1hZjBlMTYxYy02MDcxLTQxNTctYjAyMS1iMjhhNThlZjI3NWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eqnsSOdDUvvii_OgzaTYrXRW-Ax0_WDSp9dwhXVdB3Y",
    "https://static.wikia.nocookie.net/naruto/images/5/5a/Kumogakure.png/revision/latest?cb=20160129210622",
    "https://static.wikia.nocookie.net/naruto/images/f/f8/Kaguya%27s_Core_Dimension.png/revision/latest/scale-to-width-down/1000?cb=20160901114351"
]

let currentBackground = 0

/* =============================
FUNCTIONS BACKGROUND
============================= */
function toggleModal() { modal.classList.toggle("open") }

function changeBg(direction) {
    if (direction === "next") {
        if (currentBackground < backgroundImage.length - 1) {
            currentBackground++
        } else {
            currentBackground = 0
        }
    } else if (direction === "previous") {
        if (currentBackground > 0) {
            currentBackground--
        } else {
            currentBackground = backgroundImage.length - 1
        }
    }
    carouselImg.setAttribute("src", backgroundImage[currentBackground])
}

function openCarousel() {
    carousel.classList.add("open")
    carouselImg.setAttribute("src", backgroundImage[currentBackground])
    toggleModel()
}

function selectBackground() {
    carousel.classList.remove("open")
    body.style.backgroundImage = `url(${backgroundImage[currentBackground]})`
}

/* =============================
FUNCTIONS NARUTO/SASUKE ATTACKS
============================= */

function naruAttack (target) {
    naruto.attack(target)
    console.log(naruAttack(sasuke))
}


/* =============================
EVENT LISTENERS
============================= */

setTimeout(openCarousel, 500)
next.addEventListener("click", () => changeBg("next"))
previous.addEventListener("click", () => changeBg("previous"))
select.addEventListener("click",selectBackground)

narutoAttack.addEventListener("click",naruto.attack(sasuke))