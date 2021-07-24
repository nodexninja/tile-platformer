canvas = document.getElementById("canvas")

// setting canvas dimensions
canvas.width = window.innerWidth
canvas.height = window.innerHeight
centerX = canvas.width/2
centerY = canvas.height/2

// colors
color = {
  blue: "#0064ff",
  red: "#ff0032",
  yellow: "#ffc800",
  green: "#00b428",
  sunset: "#ff8661",
  black: "#000000",
  white: "#ffffff",
}

// context
ctx = canvas.getContext("2d")
ctx.fillStyle = color.sunset
ctx.fillRect(0, 0, canvas.width, canvas.height)

// map
ground = [[0, 0, 100, 100], [100, 0, 100, 100], ]
spikes = [[], [], ]

// camera
cam = {
  x: 0,
  y: 0,
}

function setup() {
  // initialising the game
  update()
}

function update() {
  draw(ground)
  window.requestAnimationFrame(update)
}

function draw(tiles) {
  for (i=0; i<tiles.length; i++) {
    tile = tiles[i]
    ctx.fillStyle = color.black
    ctx.fillRect(tile[0] - tile[2]/2 - cam.x + centerX, tile[1] - tile[3]/2 - cam.y + centerY, tile[2], tile[3])
    //console.log(tile)
  }
}

setup()