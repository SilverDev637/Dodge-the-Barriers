// Módulo de Eliminar obstáculos
function doDeleteLine1 () {
    if (score <= 25) {
        speed = randint(350, 450)
    } else if (score > 25 && score < 60) {
        speed = randint(250, 349)
    } else if (score >= 60) {
        speed = randint(150, 249)
    }
    E01.delete()
    E02.delete()
    E03.delete()
    E04.delete()
    E05.delete()
}
function doDefineFreeSlotsLvL2 () {
    if (PLa.get(LedSpriteProperty.X) == 0) {
        Hiding = randint(1, 6)
        if (Hiding == 1) {
            E04.delete()
            E05.delete()
        }
        if (Hiding == 2) {
            E03.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E03.delete()
            E04.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E05.delete()
        }
        if (Hiding == 5) {
            E02.delete()
            E04.delete()
        }
        if (Hiding == 6) {
            E02.delete()
            E03.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 1) {
        Hiding = randint(1, 6)
        if (Hiding == 1) {
            E04.delete()
            E05.delete()
        }
        if (Hiding == 2) {
            E03.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E03.delete()
            E04.delete()
        }
        if (Hiding == 4) {
            E01.delete()
            E05.delete()
        }
        if (Hiding == 5) {
            E01.delete()
            E04.delete()
        }
        if (Hiding == 6) {
            E01.delete()
            E03.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 2) {
        Hiding = randint(1, 6)
        if (Hiding == 1) {
            E04.delete()
            E05.delete()
        }
        if (Hiding == 2) {
            E01.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E01.delete()
            E04.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E05.delete()
        }
        if (Hiding == 5) {
            E01.delete()
            E04.delete()
        }
        if (Hiding == 6) {
            E01.delete()
            E02.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 3) {
        Hiding = randint(1, 6)
        if (Hiding == 1) {
            E01.delete()
            E05.delete()
        }
        if (Hiding == 2) {
            E01.delete()
            E02.delete()
        }
        if (Hiding == 3) {
            E03.delete()
            E05.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E05.delete()
        }
        if (Hiding == 5) {
            E02.delete()
            E03.delete()
        }
        if (Hiding == 6) {
            E01.delete()
            E03.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 4) {
        Hiding = randint(1, 6)
        if (Hiding == 1) {
            E03.delete()
            E04.delete()
        }
        if (Hiding == 2) {
            E02.delete()
            E04.delete()
        }
        if (Hiding == 3) {
            E02.delete()
            E03.delete()
        }
        if (Hiding == 4) {
            E01.delete()
            E04.delete()
        }
        if (Hiding == 5) {
            E01.delete()
            E03.delete()
        }
        if (Hiding == 6) {
            E01.delete()
            E02.delete()
        }
    }
}
function doDefineFreeSlotsLvL3 () {
    if (PLa.get(LedSpriteProperty.X) == 0) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E02.delete()
        }
        if (Hiding == 2) {
            E03.delete()
        }
        if (Hiding == 3) {
            E04.delete()
        }
        if (Hiding == 4) {
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 1) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
        }
        if (Hiding == 2) {
            E03.delete()
        }
        if (Hiding == 3) {
            E04.delete()
        }
        if (Hiding == 4) {
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 2) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
        }
        if (Hiding == 2) {
            E02.delete()
        }
        if (Hiding == 3) {
            E04.delete()
        }
        if (Hiding == 4) {
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 3) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
        }
        if (Hiding == 2) {
            E02.delete()
        }
        if (Hiding == 3) {
            E03.delete()
        }
        if (Hiding == 4) {
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 4) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
        }
        if (Hiding == 2) {
            E02.delete()
        }
        if (Hiding == 3) {
            E03.delete()
        }
        if (Hiding == 4) {
            E04.delete()
        }
    }
}
// Módulo de Inicio 2
function doMakeLine1 () {
    E01 = game.createSprite(0, 0)
    E02 = game.createSprite(1, 0)
    E03 = game.createSprite(2, 0)
    E04 = game.createSprite(3, 0)
    E05 = game.createSprite(4, 0)
}
// Módulo de Movimiento
input.onButtonPressed(Button.A, function () {
    if (MissingLife == 0) {
        if (started == 1) {
            if (!(game.isPaused())) {
                if (PLa.get(LedSpriteProperty.X) == 0) {
                    PLa.set(LedSpriteProperty.X, 4)
                } else {
                    PLa.move(-1)
                }
            }
        }
    }
})
// Módulo de Obstáculos
function doDefineFreeSlotsLvL1 () {
    if (PLa.get(LedSpriteProperty.X) == 0) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E03.delete()
            E04.delete()
            E05.delete()
        }
        if (Hiding == 2) {
            E02.delete()
            E04.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E02.delete()
            E03.delete()
            E05.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E03.delete()
            E04.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 1) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
            E03.delete()
            E04.delete()
        }
        if (Hiding == 2) {
            E01.delete()
            E04.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E01.delete()
            E03.delete()
            E05.delete()
        }
        if (Hiding == 4) {
            E03.delete()
            E04.delete()
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 2) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
            E02.delete()
            E04.delete()
        }
        if (Hiding == 2) {
            E01.delete()
            E02.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E01.delete()
            E04.delete()
            E05.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E04.delete()
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 3) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
            E02.delete()
            E03.delete()
        }
        if (Hiding == 2) {
            E01.delete()
            E02.delete()
            E05.delete()
        }
        if (Hiding == 3) {
            E01.delete()
            E03.delete()
            E05.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E03.delete()
            E05.delete()
        }
    }
    if (PLa.get(LedSpriteProperty.X) == 4) {
        Hiding = randint(1, 4)
        if (Hiding == 1) {
            E01.delete()
            E02.delete()
            E03.delete()
        }
        if (Hiding == 2) {
            E01.delete()
            E02.delete()
            E04.delete()
        }
        if (Hiding == 3) {
            E01.delete()
            E03.delete()
            E04.delete()
        }
        if (Hiding == 4) {
            E02.delete()
            E03.delete()
            E04.delete()
        }
    }
}
// Módulo de Perder Vida
function doLoseLife () {
    score += -1
    if (score < 0) {
        score = 0
    }
    lifes += -1
    game.removeLife(1)
}
function doDefineSlot () {
    if (FS == 3) {
        doDefineFreeSlotsLvL1()
    } else if (FS == 2) {
        doDefineFreeSlotsLvL2()
    } else if (FS == 1) {
        doDefineFreeSlotsLvL3()
    }
}
// Módulo de Victoria
function doBeatGame () {
    game.pause()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showString("You got " + score + " Points")
}
function doStartUp () {
    doMakeLine1()
    doDefineSlot()
}
// Módulo de Movimientos de Obstáculos
function doMoveLine1 () {
    if (game.score() < 99) {
        if (E01.get(LedSpriteProperty.Y) >= 4 || (E02.get(LedSpriteProperty.Y) >= 4 || (E03.get(LedSpriteProperty.Y) >= 4 || (E04.get(LedSpriteProperty.Y) >= 4 || E05.get(LedSpriteProperty.Y) >= 4)))) {
            score += 1
            doDeleteLine1()
            Hiding = 0
            basic.pause(100)
            E01.set(LedSpriteProperty.Y, 0)
            E02.set(LedSpriteProperty.Y, 0)
            E03.set(LedSpriteProperty.Y, 0)
            E04.set(LedSpriteProperty.Y, 0)
            E05.set(LedSpriteProperty.Y, 0)
            doStartUp()
        } else {
            if (game.isRunning()) {
                E01.change(LedSpriteProperty.Y, 1)
                E02.change(LedSpriteProperty.Y, 1)
                E03.change(LedSpriteProperty.Y, 1)
                E04.change(LedSpriteProperty.Y, 1)
                E05.change(LedSpriteProperty.Y, 1)
            }
        }
    }
}
// Módulo de Movimiento
input.onButtonPressed(Button.B, function () {
    if (MissingLife == 0) {
        if (started == 1) {
            if (!(game.isPaused())) {
                if (PLa.get(LedSpriteProperty.X) == 4) {
                    PLa.set(LedSpriteProperty.X, 0)
                } else {
                    PLa.move(1)
                }
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
    if (DeveloperVersion == 1) {
        basic.showString("v8.0")
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showString("" + (lifes))
    }
    game.resume()
})
let fs3 = 0
let fs2 = 0
let Hiding = 0
let lifes = 0
let FS = 0
let DeveloperVersion = 0
let MissingLife = 0
let started = 0
let score = 0
let speed = 0
let PLa: game.LedSprite = null
let E01: game.LedSprite = null
let E02: game.LedSprite = null
let E03: game.LedSprite = null
let E04: game.LedSprite = null
let E05: game.LedSprite = null
game.setScore(0)
speed = 500
score = 0
started = 0
basic.showNumber(3)
basic.pause(500)
basic.showNumber(2)
basic.pause(500)
basic.showNumber(1)
basic.pause(500)
basic.showNumber(0)
basic.clearScreen()
basic.pause(100)
MissingLife = 0
DeveloperVersion = 0
PLa = game.createSprite(2, 4)
let Round = 1
FS = 3
doStartUp()
game.setLife(3)
lifes = 3
started = 1
// Módulo de cambio de Obstáculos
basic.forever(function () {
    if (score == 25 && fs2 != 1) {
        game.pause()
        FS = 2
        doDefineFreeSlotsLvL1()
        fs2 = 1
        game.resume()
    }
    if (score == 60 && fs3 != 1) {
        game.pause()
        FS = 1
        doDefineFreeSlotsLvL1()
        fs3 = 1
        game.resume()
    }
})
// Módulo de Brillo
basic.forever(function () {
    E01.setBrightness(175)
E02.setBrightness(175)
E03.setBrightness(175)
E04.setBrightness(175)
E05.setBrightness(175)
PLa.setBrightness(215)
})
basic.forever(function () {
    if (started == 1) {
        if (!(game.isGameOver())) {
            if (input.buttonIsPressed(Button.AB)) {
                game.pause()
                basic.showString("" + (score))
                WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
                game.resume()
                basic.pause(200)
            }
        }
    }
})
/**
 * Change Log:
 * 
 * v4.0: Now Game Over is available. You only have three lives.
 * 
 * v4.1: Fixed bugs with lives.
 * 
 * v4.2: Now in code: Hight Score. Beat your highest score. (when game over or game over, just press "A+B" to start again).
 * 
 * v4.3: This feature is only available for developers: Shake the micro:bit to see the version of the game.
 * 
 * v4.4: If you are not a developer of the game, by shaking the micro:bit, you will see your high score.
 * 
 * v5.0: Added new barrier patterns at level 2 – now that level has 8 different patterns.
 * 
 * v5.1: Added new barrier patterns at level 1 - now that level has 10 different patterns.
 * 
 * v5.2: Before starting, you have three times to prepare yourself.
 * 
 * v5.3: Fixed error [989]. Previously, pressing "A" or "B" when starting the game crashes; When pausing, if you shake, the corresponding function is activated and the game resumed.
 * 
 * v5.4: Fixed: When going to lose, it was possible to lose double life, by pressing 2 times to the same side.
 * 
 * v6.0: Removed Best Record: It was impossible to keep track of your best record; The countdown now doesn't take as long.
 * 
 * v6.1: Improved Speed ​​Formula; Harder to win; Shaking then pausing was causing errors.
 * 
 * v6.2: Upon reaching level 90, the speed stops increasing and remains at 200ms.
 * 
 * v6.3: Upgraded the v6.2 updates.
 * 
 * v6.4: Better game quality. Don't show the "new point" effect on winning a new point.
 * 
 * v7.0: Random speeds according to the level.
 * 
 * v7.1: Solved a big bug; on missing life, the score was reseted.
 * 
 * v7.2: Added a function: On beat game press "A+B" to reset.
 * 
 * v7.3: Fixed minnor bugs.
 * 
 * v8.0: Added more difficulty: The patterns change according to your position. Fixed minnor bugs.
 */
// Módulo de Derrota
basic.forever(function () {
    if (PLa.isTouching(E01)) {
        E01.delete()
        doLoseLife()
        MissingLife = 1
        basic.pause(speed)
        MissingLife = 0
    } else if (PLa.isTouching(E02)) {
        E02.delete()
        doLoseLife()
        MissingLife = 1
        basic.pause(speed)
        MissingLife = 0
    } else if (PLa.isTouching(E03)) {
        E03.delete()
        doLoseLife()
        MissingLife = 1
        basic.pause(speed)
        MissingLife = 0
    } else if (PLa.isTouching(E04)) {
        E04.delete()
        doLoseLife()
        MissingLife = 1
        basic.pause(speed)
        MissingLife = 0
    } else if (PLa.isTouching(E05)) {
        E05.delete()
        doLoseLife()
        MissingLife = 1
        basic.pause(speed)
        MissingLife = 0
    }
})
basic.forever(function () {
    if (game.isGameOver()) {
        game.setScore(score)
    }
})
// Modo de Victoria
basic.forever(function () {
    if (score >= 99) {
        if (input.buttonIsPressed(Button.AB)) {
            score = 0
            game.setScore(score)
            doStartUp()
        }
    }
})
// Módulo de Dificultad
basic.forever(function () {
    basic.pause(speed)
    doMoveLine1()
})
// Modo de Victoria
basic.forever(function () {
    if (score >= 99) {
        game.pause()
        game.setScore(score)
        doBeatGame()
    }
})
