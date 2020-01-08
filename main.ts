let juan = sprites.create(img`
f f f f 1 1 1 1 1 1 1 f f f f f 
f f f 1 1 1 f f f f 1 1 f f f f 
f f 1 f f f f f f f f f 1 f f f 
f f 1 f f 5 f f f 5 f f 1 f f f 
f f 1 f f f f f f f f f 1 f f f 
f f 1 f f f f f f f f f 1 f f f 
f f 1 1 f 5 f f f 5 f 1 1 f f f 
f f 1 1 f 5 5 5 5 5 f 1 1 f f f 
f f 1 1 f f 5 5 f f f 1 1 f f f 
f f 1 1 f f f f f f f 1 1 f f f 
f f 1 1 1 f f f f f 1 1 1 f f f 
f f 1 1 1 1 1 1 1 1 1 1 1 f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
scene.setBackgroundColor(14)
// Stairs are going down
//
//
// GOAL 1: stairs that also go up
//
//
// GOAL 2: make second character. make it go in
// opposite direction of first staircase
for (let index = 0; index < 9; index++) {
    pause(100)
    juan.y += 4
    pause(100)
    juan.x += 4
}
