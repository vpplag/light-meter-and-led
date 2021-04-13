basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.map(input.lightLevel(), 0, 255, 0, 1023))
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    basic.pause(100)
})
