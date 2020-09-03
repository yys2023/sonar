let distance = 0
let strip: neopixel.Strip = null
basic.forever(function () {
    basic.showNumber(Math.round(sonar.ping(
    DigitalPin.P13,
    DigitalPin.P13,
    PingUnit.Centimeters
    )))
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    if (distance > 6 && distance < 30) {
        music.playTone(698, music.beat(BeatFraction.Double))
    } else if (distance > 1 && distance < 6) {
        music.playTone(262, music.beat(BeatFraction.Double))
    } else {
        strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip.setBrightness(11)
        for (let index = 0; index < 4; index++) {
            basic.pause(1000)
            strip.showRainbow(20, 300)
            strip.shift(33)
            strip.show()
            strip.clear()
        }
    }
})
