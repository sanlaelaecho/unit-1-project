/* ======================
BGM
========================= 
Need to figure out how to link online audio

const backgroundMusic = document.getElementById("background-music")
backgroundMusic.play()
//pause audio when user navigates away from page
window.onbeforeunload = function() {
    backgroundMusic.pause()
}
*/

/* ======================
CACHED DOM NODES
========================= */

const body = document.querySelector("body")
const carousel = document.querySelector(".carousel")
const carouselImg = document.querySelector(".carousel img")
const next = document.querySelector(".carousel .next")
const previous = document.querySelector(".carousel .previous")
const select = document.querySelector(".carousel .select")
const modalNoti = document.querySelector(".modal-noti")
const modal = document.querySelector(".modal-game-over")

const narutoAvatar = document.querySelector(".naruto-avatar img")
const narutoBtns = document.querySelectorAll(".naruto-buttons button")
const narutoAttack = document.querySelector(".naruto-attack")
const narutoClone = document.querySelector(".naruto-clone")
const narutoRasengan = document.querySelector(".naruto-rasengan")
const narutoTails = document.querySelector(".naruto-9Tail")
const narutoSpell = document.querySelector(".blue-ball")

const sasukeAvatar = document.querySelector(".sasuke-avatar img")
const sasukeBtns = document.querySelectorAll(".sasuke-buttons button")
const sasukeAttack = document.querySelector(".sasuke-attack")
const sasukeFire = document.querySelector(".sasuke-fire")
const sasukeChidori = document.querySelector(".sasuke-chidori")
const sasukeSusanoo = document.querySelector(".sasuke-susanoo")
const sasukeSpell = document.querySelector(".fire-ball")

const h3 = document.querySelector("#sasuWin")
const h2 = document.querySelector("#naruWin")
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
            if(turn === 1) {
                narutoAvatar.setAttribute("src",this.image.narutoFight)
            } else {
                sasukeAvatar.setAttribute("src",this.image.sasukeFight)
            }
            const damage = Math.floor(Math.random() * 10) + 1
            target.charHealth -= damage
            this.charChakra -= 5
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                <h4>Not enough Chakra! Wait to recover!</h4>
            `
            closeNotiModal()
        } renderMessage()
    }


}

class narutoClass extends Avatar {
    constructor() {
        super()
        this.image = {
            narutoImgSolo: "https://i.imgur.com/lW04Z6n.png",
            narutoFight: "https://i.imgur.com/JIqI59s.png",
            narutoImgClone: "https://i.imgur.com/N1RqSgK.png",
            narutoImgRasengan: "https://i.imgur.com/DOv8zJG.png",
            narutoImg9Tail: "https://i.imgur.com/pluZtzL.png"
        }
    }

    birth() {
        narutoAvatar.setAttribute("src",this.image.narutoImgSolo)
        const shadow = document.createElement('div')
        shadow.classList.add("shadow")
        narutoAvatar.appendChild(shadow)
    }

    clone(target) {
        if (this.charChakra >= 10) {
            narutoAvatar.setAttribute("src",this.image.narutoImgClone)
            const damage = Math.floor(Math.random() * 6) + 10
            target.charHealth -= damage
            this.charChakra -= 10
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                <h4>Not enough Chakra! Wait to recover!</h4>
            `
            closeNotiModal()
        } renderMessage()

    }

    rasengan(target) {
        if (this.charChakra >= 40) {
            narutoAvatar.setAttribute("src",this.image.narutoImgRasengan)
            narutoSpell.setAttribute("src",narutoSpellAnimations[0])
            const damage = Math.floor(Math.random() * 6) + 25
            target.charHealth -= damage
            this.charChakra -= 40
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                    <h4>Not enough Chakra!</h4>
                `
            closeNotiModal()
        } renderMessage()
    }

    nineTails(target) {
        if (this.charChakra >= 70) {
            narutoAvatar.setAttribute("src",this.image.narutoImg9Tail)
            const damage = Math.floor(Math.random() * 11) + 50
            target.charHealth -= damage
            this.charChakra -= 70
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                    <h4>Not enough Chakra! Can't transform!</h4>
                `
            closeNotiModal()
        } renderMessage()
    }
}

class sasukeClass extends Avatar {
    constructor() {
        super()
        this.image = {
            sasukeImgSolo: "https://i.imgur.com/X5eoTol.png",
            sasukeFight: "https://i.imgur.com/DmEIp5U.png",
            sasukeImgFire: "https://i.imgur.com/0Gx42jX.png",
            sasukeImgChidori: "https://i.imgur.com/omg1Cyd.png",
            sasukeImgSusanoo: "https://i.imgur.com/mTpuBNc.png"
        }
    }

    birth() {
        sasukeAvatar.setAttribute("src",this.image.sasukeImgSolo)
        const shadow = document.createElement('div')
        shadow.classList.add("shadow")
        sasukeAvatar.appendChild(shadow)
    }

    fireball(target) {
        if (this.charChakra >= 10) {
            sasukeAvatar.setAttribute("src",this.image.sasukeImgFire)
            sasukeSpell.setAttribute("src",sasukeSpellAnimations[0])
            const damage = Math.floor(Math.random() * 6) + 10
            target.charHealth -= damage
            this.charChakra -= 10
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                <h4>Not enough Chakra! Wait to recover!</h4>
            `
            closeNotiModal()
        } renderMessage()
    }

    chidori(target) {
        if (this.charChakra >= 40) {
            sasukeAvatar.setAttribute("src",this.image.sasukeImgChidori)
            const damage = Math.floor(Math.random() * 6) + 25
            target.charHealth -= damage
            this.charChakra -= 40
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                <h4>Not enough Chakra!</h4>
            `
            closeNotiModal()
        } renderMessage()
    }

    susanoo(target) {
        if (this.charChakra >= 70) {
            sasukeAvatar.setAttribute("src",this.image.sasukeImgSusanoo)
            const damage = Math.floor(Math.random() * 11) + 50
            target.charHealth -= damage
            this.charChakra -= 70
            updateStatsOnDOM(naruto, sasuke)
            turn *= -1
            turnBasedBtns()
        } else {
            toggleNotiModal()
            modalNoti.innerHTML = `
                <h4>Not enough Chakra! Can't summon!</h4>
            `
            closeNotiModal()
        } renderMessage()
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
    "https://wallpaperaccess.com/full/3948996.jpg",
    "https://images.start.gg/images/tournament/289797/image-c5c752996c1d06b48c8a90d5dfdacc6a.png?ehk=SqBiJLOchN4v6%2BH%2FTdfVr6eDrBMc3NctYO3YOALgd4o%3D&ehkOptimized=3dT5tdfKHCjhm%2BUOXjWF6xuBAivhlnE62rsqfzU0qRE%3D",
    "https://static.wikia.nocookie.net/narutofanon/images/f/fc/Ryuhone_Desert.png/revision/latest/scale-to-width-down/1000?cb=20141002162139",
    "https://static.wikia.nocookie.net/naruto/images/f/f8/Kaguya%27s_Core_Dimension.png/revision/latest/scale-to-width-down/1000?cb=20160901114351"
]

let currentBackground = 0

let stopRecovery

let turn

const narutoSpellAnimations = [
    "https://i.imgur.com/TMmbIhp.png"
]

const sasukeSpellAnimations = [
    "https://i.imgur.com/Uwt5Btj.png"
]

/* ======================
PLAYERS ALTERNATING TURNS
========================= */

function chooseTurn() {
    turn = Math.floor(Math.random() * 3) - 1

    while (turn === 0) {
        turn = Math.floor(Math.random() * 3) - 1
    }
}

function turnBasedBtns() {
    if (turn === 1) {
        sasukeBtns.forEach(button => {
            button.disabled = true
            narutoBtns.forEach(button => {
                button.disabled = false
            })
        })
    } else if (turn === -1) {
        narutoBtns.forEach(button => {
            button.disabled = true
            sasukeBtns.forEach(button => {
                button.disabled = false
            })
        })
    } console.log(turn)
}


/* =============================
FUNCTIONS IN BACKGROUND
============================= */
function toggleNotiModal() { modalNoti.classList.toggle("open") }
function closeNotiModal() {
    setTimeout(() => {
        modalNoti.classList.remove("open")
    }, 1000)
}

function togglePlayAgainModal() { modal.classList.toggle("open") }

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
}

function selectBackground() {
    carousel.classList.remove("open")
    body.style.backgroundImage = `url(${backgroundImage[currentBackground]})`
    stopRecovery = recoverChakra(naruto, sasuke)
    chooseTurn()
    turnBasedBtns()
    naruto.birth()
    sasuke.birth()
}

function recoverChakra(player1, player2) {
    let interval
    interval = setInterval(() => {
        player1.charChakra += 10
        player2.charChakra += 10
        updateStatsOnDOM(player1, player2)
    }, 3000, player1, player2)
    return function () {
        if (naruto.charHealth <= 0 || sasuke.charHealth <= 0) {
            clearInterval(interval)
        }
    }
}

function renderMessage() {
    if (naruto.charHealth <= 0) {
        togglePlayAgainModal()
        stopRecovery()
        h3.innerHTML = "Sasuke WINS!!!"
        h2.innerHTML = ""
    } else if (sasuke.charHealth <= 0) {
        togglePlayAgainModal()
        stopRecovery()
        h2.innerHTML = "Naruto WINS!!!"
        h3.innerHTML = ""
    }
}

function renderReset(player1, player2) {
    player1.charHealth = 100
    player1.charChakra = 100
    player2.charHealth = 100
    player2.charChakra = 100
    updateStatsOnDOM(player1, player2)
    stopRecovery = recoverChakra(naruto, sasuke)
}



/* =============================
GLOBAL PLAYER FUNCTIONS 
============================= */

function updateStatsOnDOM(player1, player2) {
    const player1Container = document.querySelector(".naruto-stats")
    player1Container.innerHTML = `
            <div class="naruto-health">Health: <span>${player1.charHealth}</span></div>
            <div class="naruto-chakra">Chakra: <span>${player1.charChakra}</span></div>
            `
    const player2Container = document.querySelector(".sasuke-stats")
    player2Container.innerHTML = `
            <div class="sasuke-health">Health: <span>${player2.charHealth}</span></div>
            <div class="sasuke-chakra">Chakra: <span>${player2.charChakra}</span></div>
            `
}

function naruAttack(target) { naruto.attack(target) }
function naruClone(target) { naruto.clone(target) }
function naruRasengan(target) { naruto.rasengan(target) }
function naru9Tails(target) { naruto.nineTails(target) }
function sasuAttack(target) { sasuke.attack(target) }
function sasuFire(target) { sasuke.fireball(target) }
function sasuChidori(target) { sasuke.chidori(target) }
function sasuSusanoo(target) { sasuke.susanoo(target) }


/* =============================
EVENT LISTENERS
============================= */

setTimeout(openCarousel, 500)
next.addEventListener("click", () => changeBg("next"))
previous.addEventListener("click", () => changeBg("previous"))
select.addEventListener("click", selectBackground)

narutoAttack.addEventListener("click", function () { naruAttack(sasuke) })
narutoClone.addEventListener("click", function () { naruClone(sasuke) })
narutoRasengan.addEventListener("click", function () { naruRasengan(sasuke) })
narutoTails.addEventListener("click", function () { naru9Tails(sasuke) })
sasukeAttack.addEventListener("click", function () { sasuAttack(naruto) })
sasukeFire.addEventListener("click", function () { sasuFire(naruto) })
sasukeChidori.addEventListener("click", function () { sasuChidori(naruto) })
sasukeSusanoo.addEventListener("click", function () { sasuSusanoo(naruto) })

playAgain.addEventListener("click", function () {
    renderReset(naruto, sasuke)
    chooseTurn()
    console.log(turn)
    modal.classList.remove("open")
    turnBasedBtns()
})
