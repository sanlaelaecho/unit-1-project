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
const playAgain = document.querySelector(".play-again")

/* ======================
CREATE Avatar
========================= */
class Avatar {
    constructor(name, charHealth = 100, charChakra = 100) {
        this.name = name
        this.charHealth = charHealth
        this.charChakra = charChakra
    }
    
    attack(target) {
        const damage = Math.floor(Math.random() * 10) + 1 
        target.charHealth -= damage
    }
}

class Naruto extends Avatar {
    this.image = {
        narutoImgSolo: "https://p7.hiclipart.com/preview/171/107/717/naruto-ultimate-ninja-3-naruto-shippuden-ultimate-ninja-storm-2-naruto-shippuden-ultimate-ninja-storm-generations-naruto-ultimate-ninja-storm-naruto-uzumaki-naruto-png-picture-thumbnail.jpg",
        narutoImgClone: "https://www.vhv.rs/dpng/d/406-4069972_naruto-png-image-file-naruto-doing-shadow-clone.png",
        narutoImgRasengan: "https://p7.hiclipart.com/preview/462/369/315/5bbc3c2eef4d5-thumbnail.jpg",
        narutoImg9Tail: "https://e7.pngegg.com/pngimages/766/820/png-clipart-naruto-uzumaki-nine-tailed-fox-kurama-tailed-beasts-naruto-giraffe-cartoon.png",
    }

    startFight() {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class='naruto-container'>
                
            </div>    
        `
    }

    cloneAttack(target) {
        
    }

    updateNaruto(jitsu) {
        const container = document.
    }
}

class Sasuke extends Avatar {
    this.image = {
        sasukeImgSolo: "https://e7.pngegg.com/pngimages/571/918/png-clipart-sasuke-uchiha-naruto-uzumaki-shikamaru-nara-naruto-shippuden-ultimate-ninja-storm-4-itachi-uchiha-naruto-purple-black-hair.png",
        sasukeImgFire: "https://www.pngitem.com/pimgs/m/407-4072625_sasuke-shippuden-fire-ball-jutsu-hd-png-download.png",
        sasukeImgChidori: "https://e7.pngegg.com/pngimages/425/854/png-clipart-sasuke-uchiha-itachi-uchiha-chidori-anime-anime-photography-computer-wallpaper.png",
        sasukeImgSusanoo: "https://e7.pngegg.com/pngimages/1013/267/png-clipart-sasuke-uchiha-itachi-uchiha-naruto-uchiha-clan-susanoo-no-mikoto-skeleton-watching-tv.png",
    }
}

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
FUNCTIONS
============================= */

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
    carouselImg.setAttribute("src",backgroundImage[currentBackground])
}

function openCarousel() {
    carousel.classList
}

function toggleModel() {modal.classList.toggle("open")}

/* =============================
EVENT LISTENERS
============================= */

