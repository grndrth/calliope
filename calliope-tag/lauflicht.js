basic.forever(() => {
    for (let Index = 0; Index <= 4; Index++) {
        led.plot(Index, 0)
        basic.pause(100)
        led.unplot(Index, 0)
    }
})