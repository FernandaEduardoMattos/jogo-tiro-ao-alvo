input.onPinPressed(TouchPin.P0, function () {
    Score += 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    basic.showNumber(Score)
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    Score = 0
    basic.showNumber(Score)
})
let Score = 0
Score = 0
basic.showNumber(Score)
