let Wuerfel = 0
input.onButtonPressed(Button.A, () => {
    Wuerfel = Math.random(6)
    Wuerfel += 1
    if (Wuerfel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (Wuerfel == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    }
    if (Wuerfel == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    }
    if (Wuerfel == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    if (Wuerfel == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (Wuerfel == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
