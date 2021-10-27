radio.setGroup(1)
radio.sendValue("モード", 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    radio.sendValue("ハンドル", Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, -100, 100))
    pins.digitalWritePin(DigitalPin.P2, 1)
    radio.sendValue("アクセル", Math.map(pins.analogReadPin(AnalogPin.P1), 0, 1023, -1, 1))
})
