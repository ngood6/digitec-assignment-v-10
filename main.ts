info.onCountdownEnd(function () {
    sprites.destroy(Player_1)
    sprites.destroy(Enemy_1)
    sprites.destroy(Road_spikes)
    tiles.setCurrentTilemap(tilemap`level2`)
    Player_1 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . 
        . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        2 c 2 e e e e e e e b c 4 2 2 
        2 2 e b b e b b b e e b 4 2 2 
        2 e b b b e b b b b e 2 2 2 2 
        e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        e e e e e e f e e e f e 2 d d 
        e e e e e e f e e f e e e 2 d 
        e e e e e e f f f e e e e e e 
        e f f f f e e e e f f f e e e 
        . f f f f f e e f f f f f e . 
        . . f f f . . . . f f f f . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(Player_1)
    Enemy_1 = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . 8 8 f 8 8 f 8 8 . . . . 
        . . 8 9 9 f 8 8 f 9 c 8 . . . 
        . 8 c 9 9 f 2 2 f 9 c c 8 . . 
        8 c c 9 9 f 2 2 f 9 c c 9 8 d 
        8 c 8 8 8 8 8 8 8 8 b c 9 9 8 
        8 8 8 b b 8 b b b 8 8 b 9 9 8 
        8 9 b b b 8 b b b b 8 8 8 9 8 
        8 9 9 9 9 8 9 9 9 9 9 9 9 8 8 
        8 9 9 9 8 8 8 8 9 9 9 9 8 d d 
        8 9 9 9 9 8 9 9 9 9 9 9 9 8 d 
        8 8 8 8 8 8 9 9 9 8 8 8 9 9 8 
        8 f f f 8 8 8 8 8 f f f 8 8 8 
        . f f f f f 8 8 f f f f f 8 . 
        . . f f f . . . . f f f f . . 
        `, SpriteKind.Enemy)
    Enemy_1.follow(Player_1, 75)
    Enemy_1.setBounceOnWall(true)
    Enemy_1.setStayInScreen(true)
    tiles.placeOnTile(Player_1, tiles.getTileLocation(3, 3))
    tiles.placeOnTile(Enemy_1, tiles.getTileLocation(60, 60))
})
let Road_spikes: Sprite = null
let Enemy_1: Sprite = null
let Player_1: Sprite = null
scene.setBackgroundColor(12)
info.setLife(3)
game.splash("Car Chase Ultimate", "Avoid Police or you lose")
game.showLongText("Road Spikes and Oil Spills will cause you to lose 1 life", DialogLayout.Bottom)
info.startCountdown(60)
Player_1 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . 
    . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    2 c 2 e e e e e e e b c 4 2 2 
    2 2 e b b e b b b e e b 4 2 2 
    2 e b b b e b b b b e 2 2 2 2 
    e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    e e e e e e f e e e f e 2 d d 
    e e e e e e f e e f e e e 2 d 
    e e e e e e f f f e e e e e e 
    e f f f f e e e e f f f e e e 
    . f f f f f e e f f f f f e . 
    . . f f f . . . . f f f f . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Player_1)
Enemy_1 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . 8 8 f 8 8 f 8 8 . . . . 
    . . 8 9 9 f 8 8 f 9 c 8 . . . 
    . 8 c 9 9 f 2 2 f 9 c c 8 . . 
    8 c c 9 9 f 2 2 f 9 c c 9 8 d 
    8 c 8 8 8 8 8 8 8 8 b c 9 9 8 
    8 8 8 b b 8 b b b 8 8 b 9 9 8 
    8 9 b b b 8 b b b b 8 8 8 9 8 
    8 9 9 9 9 8 9 9 9 9 9 9 9 8 8 
    8 9 9 9 8 8 8 8 9 9 9 9 8 d d 
    8 9 9 9 9 8 9 9 9 9 9 9 9 8 d 
    8 8 8 8 8 8 9 9 9 8 8 8 9 9 8 
    8 f f f 8 8 8 8 8 f f f 8 8 8 
    . f f f f f 8 8 f f f f f 8 . 
    . . f f f . . . . f f f f . . 
    `, SpriteKind.Enemy)
Enemy_1.follow(Player_1, 75)
Enemy_1.setBounceOnWall(true)
Enemy_1.setStayInScreen(true)
Road_spikes = sprites.create(assets.image`Roadspikes`, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(Player_1, tiles.getTileLocation(2, 1))
tiles.placeOnTile(Enemy_1, tiles.getTileLocation(2, 17))
tiles.placeOnTile(Road_spikes, tiles.getTileLocation(26, 40))
forever(function () {
    if (controller.up.isPressed()) {
        Player_1.y += -2
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        Player_1.y += 2
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        Player_1.x += -2
    }
})
forever(function () {
    if (controller.right.isPressed()) {
        Player_1.x += 2
    }
})
forever(function () {
    if (controller.up.isPressed()) {
    	
    }
})
forever(function () {
    if (controller.down.isPressed()) {
    	
    }
})
forever(function () {
    if (Player_1.overlapsWith(Road_spikes)) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
    	
    }
})
forever(function () {
    if (controller.right.isPressed()) {
    	
    }
})
forever(function () {
    if (Player_1.overlapsWith(Road_spikes)) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Player_1.overlapsWith(Enemy_1)) {
        game.gameOver(false)
        game.setGameOverEffect(false, effects.melt)
    }
})
forever(function () {
    while (Road_spikes.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight2)) {
        sprites.destroy(Road_spikes)
    }
})
game.onUpdateInterval(10000, function () {
    Road_spikes = sprites.create(assets.image`Roadspikes`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Road_spikes, sprites.vehicle.roadVertical)
})
