let winkel = 0
let rollen = 0
basic.forever(() => {
    rollen = input.rotation(Rotation.Roll)
    winkel = input.rotation(Rotation.Pitch)
    if (Math.abs(winkel) < 10 && Math.abs(rollen) > 170) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})

