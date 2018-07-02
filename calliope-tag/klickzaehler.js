let sprünge = 0
input.onButtonPressed(Button.A, () => {
    sprünge += 1
})
input.onButtonPressed(Button.B, () => {
    sprünge += 0
})
sprünge = 0
basic.forever(() => {
    basic.showNumber(sprünge)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})