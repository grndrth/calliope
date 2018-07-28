let Pause = 0
input.onButtonPressed(Button.AB, () => {
    basic.setLedColor(Colors.Red)
    basic.pause(Pause)
    basic.setLedColor(Colors.Yellow)
    basic.pause(Pause)
    basic.setLedColor(Colors.Green)
    basic.pause(Pause)
    basic.setLedColor(Colors.Blue)
    basic.pause(Pause)
    basic.setLedColor(Colors.Purple)
    basic.pause(Pause)
    basic.setLedColor(basic.rgbw(
    0,
    0,
    0,
    0
    ))
})
input.onGesture(Gesture.Shake, () => {
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, () => {
    basic.showString("Hallo!")
})
input.onPinPressed(TouchPin.P0, () => {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.Heart)
})
basic.forever(() => {
    Pause = 400
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})

