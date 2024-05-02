input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 99; index++) {
        music.play(music.stringPlayable("C E C F C D C F ", 240), music.PlaybackMode.InBackground)
        sphero.setRawMotors(
        sphero.RawMotorModes.forward,
        255,
        sphero.RawMotorModes.backward,
        255
        )
        basic.pause(1000)
        sphero.drive(50, randint(0, 360))
        sphero.setRawMotors(
        sphero.RawMotorModes.backward,
        255,
        sphero.RawMotorModes.forward,
        255
        )
        basic.pause(1000)
        sphero.drive(50, randint(0, 360))
        sphero.setRawMotors(
        sphero.RawMotorModes.forward,
        255,
        sphero.RawMotorModes.backward,
        255
        )
        basic.pause(1000)
        sphero.drive(50, randint(0, 360))
        sphero.setRawMotors(
        sphero.RawMotorModes.backward,
        255,
        sphero.RawMotorModes.forward,
        255
        )
    }
})
