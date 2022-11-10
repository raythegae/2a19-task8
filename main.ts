input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
        music.playMelody("A F E F D G E F ", 120)
    }
})
basic.forever(function () {
	
})
