def on_forever():
    basic.show_number(Math.round(sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.CENTIMETERS)))
    basic.pause(1000)
basic.forever(on_forever)
