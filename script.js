canvas = document.getElementById("canvas")

// setting canvas dimensions
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// colors
color = {
  blue: "#0064ff",
  red: "#ff0032",
  yellow: "#ffc800",
  green: "#00b428",
  sunset: "#ff8661",
}

// context
ctx = canvas.getContext("2d")
ctx.fillStyle = color.sunset
ctx.fillRect(0, 0, canvas.width, canvas.height)

