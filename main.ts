input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . # . . #
            # # # # #
            `)
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
