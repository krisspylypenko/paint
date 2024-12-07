let cvs = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let lw = 10
let myColor= 'black'
let isMouseDown = false
let colorPicker = document.getElementById('color')
let lineW = document.getElementById('lineW')
let lineWeightValue =document.getElementById('lineWeightValue')
setInterval(() => lineWeightValue.innerHTML = lineW.value, 0)
colorPicker.addEventListener("change", function(){
    myColor =colorPicker.value
})
cvs.addEventListener('mousedown', function(){
    isMouseDown =true
})
cvs.addEventListener('mouseup', function(){
    isMouseDown =false
    ctx.beginPath()
})
cvs.addEventListener('mousemove',function(event){
    if(isMouseDown){
    ctx.fillStyle = myColor
    ctx.strokeStyle = myColor
    ctx.lineTo(event.clientX,event.clientY)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(event.clientX,event.clientY,lw/2, 0, Math.PI*2)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(event.clientX,event.clientY)
}
})
ctx.lineWidth= lw
lineW.addEventListener("change", function(){
    lw =lineW.value
    ctx.lineWidth= lw
})
cvs.width = window.innerWidth
cvs.height = window.innerHeight
function fillbtn(){
ctx.fillStyle = myColor
ctx.fillRect(0,0, cvs.width, cvs.height)
}
function clearbtn(){
    ctx.clearRect(0,0, cvs.width, cvs.height)
}
ctx.lineWidth =5
ctx.beginPath()
ctx.closePath()
ctx.fill()