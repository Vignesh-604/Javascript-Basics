# JS Projects

[Project Link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### Project 1: Color Changer
``` javascript
let buttons = document.querySelectorAll(".button")
let body = document.querySelector("body")

buttons.forEach(button => {
  button.addEventListener("click", function(e) {
    body.style.backgroundColor = e.target.id
  })
})
```

### Project 2: BMI calculator
```javascript
let form = document.querySelector("form")
let results = document.querySelector("#results")

form.addEventListener("submit", function(e){
  e.preventDefault()
  let h = parseInt(document.querySelector("#height").value)
  let w = parseInt(document.querySelector("#weight").value)
  if (!h || isNaN(h)) results.innerHTML="Invalid Height"
  else if (!w || isNaN(w)) results.innerHTML="Invalid Weight"
  else {
    let hM = h/100
    let bmi = (w/(hM**2)).toFixed(2)
    //console.log(bmi)
    if (bmi<18.6) results.innerHTML=`${bmi}: Underweight`
    else if (bmi<24.9) results.innerHTML=`${bmi}: Normal`
    else results.innerHTML=`${bmi}: Overweight`
  }
})
```

### Project 3: Clock
```javascript
let clock = document.querySelector("#clock")
setInterval(function(){
  let date = new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)
```

### Project 4: Number Guessing
```javascript
let ran = Math.round(Math.random()*100+1)
console.log(ran)
let form = document.querySelector(".form")
let guessField = document.querySelector(".guessField")
let submit = document.querySelector("#subt")
let div = document.querySelector(".resultParas")
let guesses = document.querySelector(".guesses")
let remGuess = document.querySelector(".lastResult")
let answer = document.querySelector(".lowOrHi")

let guessArray = []
let guessLeft = 10

let playable = true

function validate(){
  let guess = parseInt(guessField.value)
  console.log(guess)
  guessField.value=""
  if(!guess || isNaN(guess)) answer.innerHTML="Please enter a valid number."
  else if(guess > 100 || guess < 1) answer.innerHTML="Enter a value between 1-100"
  else {
    check(guess)
  }
}

function check(guess){
  if (guess === ran) {
    answer.innerHTML = "<h1>Correct</h1>"
    endgame()
  }
  else {
    if  (guess > ran) answer.innerHTML="Lower"
    else answer.innerHTML="Higher"
    guessArray.push(guess)
    guessLeft--
  }
  guesses.innerHTML = guessArray
  remGuess.innerHTML = guessLeft
  if (guessLeft===0) {
    answer.innerHTML = `<h1>Out of guesses. Correct answer ${ran}</h1>`
    endgame()
  }
}

function endgame(){
  guessField.setAttribute("disabled","")
  submit.setAttribute("value","Play Again")
  playable = false
}

function playAgain(){
  ran = Math.round(Math.random()*100+1)
  console.log(ran)
  guessField.removeAttribute("disabled","")
  submit.setAttribute("value","Submit guess")
  answer.innerHTML=""
  guessArray=[]
  guessLeft=100
  remGuess.innerHTML = guessLeft
  guesses.innerHTML = guessArray
  playable=true
}

form.addEventListener("submit", function(e){
  e.preventDefault()
  if (playable) validate()
  else playAgain()
})
```

### Project 5: Keyboard key values
```javascript
let insert = document.querySelector("#insert")

window.addEventListener("keydown",function(e){
  insert.innerHTML=`
    <table>
      <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === " "? "Space": e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </table
  `
})

```

### Project 6: Random background color generator
```javascript
let start = document.getElementById("start")
let stop = document.getElementById("stop")

let randomColor = function() {
  let hex = "0123456789ABCDEF"
  let code= "#"
  for(let i=0; i<6; i++){
    code+=hex[Math.round(Math.random()*15)]
  }
  console.log(code)
  document.querySelector("body").style.backgroundColor=code
}
let ranColor;
start.addEventListener("click",()=>{
  if (!ranColor) ranColor = setInterval(randomColor,500)
})
stop.addEventListener("click",()=> {
  clearInterval(ranColor)
  ranColor=null             // clears current values
})

```