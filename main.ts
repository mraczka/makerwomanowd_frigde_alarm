function czyJasno2Min () {
    if (input.lightLevel() > 0) {
        lampka += 1
    } else {
        lampka = 0
    }
    if (lampka > jakSzybkoPiszczy) {
        music.playTone(587, music.beat(BeatFraction.Sixteenth))
        basic.showString("Drzwi są otwarte od" + lampka + "sekund!!! ")
    }
}
function czyLodówkaJestRozmrożona () {
    if (input.temperature() > temperaturaProgowa) {
        ciepło += 1
    } else {
        ciepło = 0
    }
    if (ciepło > czasRozmrażania) {
        rozmrożona += 1
    }
    if (rozmrożona) {
        if (lampka > 0) {
            music.playMelody("B G B G B G B G ", 120)
            basic.showString("Rozmrożona" + rozmrożona + "razy po więcej niż 10 minut.")
        }
    }
}
let rozmrożona = 0
let ciepło = 0
let lampka = 0
let czasRozmrażania = 0
let temperaturaProgowa = 0
let jakSzybkoPiszczy = 0
jakSzybkoPiszczy = 120
temperaturaProgowa = 10
czasRozmrażania = 600
basic.forever(function () {
    czyJasno2Min()
    czyLodówkaJestRozmrożona()
    basic.pause(1000)
})
