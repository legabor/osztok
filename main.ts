input.onButtonPressed(Button.A, function () {
    x = randint(2, 50)
    basic.showNumber(x)
})
input.onButtonPressed(Button.B, function () {
    if (x != 0) {
        for (let index = 0; index <= x - 1; index++) {
            if (x % (index + 1) == 0) {
                basic.showNumber(index + 1)
                basic.pause(1000)
            }
        }
    } else {
        basic.showString("Nem nyomtal \"A\" gombot")
    }
})
let x = 0
x = 0
