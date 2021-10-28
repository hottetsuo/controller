radio.setGroup(1)
radio.sendValue("モード", 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (pins.analogReadPin(AnalogPin.P0) > 560) {
        radio.sendValue("ハンドル", 20)
    } else if (pins.analogReadPin(AnalogPin.P0) < 420) {
        radio.sendValue("ハンドル", -20)
    } else {
        radio.sendValue("ハンドル", 0)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
})
