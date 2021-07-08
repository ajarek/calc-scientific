const buttons = document.querySelectorAll('button.operation')
const numberBtn = document.querySelectorAll('button.operation')
const formula = document.querySelector('.formula')
const score = document.querySelector('.score')
const result = document.querySelector('button.result')
const deleteAll = document.querySelector('button.delete')
const clean = document.querySelector('button.clean')
const forms = document.querySelectorAll('button.form')
let arrOperation = []
let arrFormula = []
let potegaArr = []

function display(e) {
    arrOperation.push(e.target.innerText)
    formula.innerHTML = arrOperation.join('')
}
buttons.forEach(btn => {
    btn.addEventListener('click', display)
})
result.addEventListener('click', calcResult)

function calcResult() {
    score.innerHTML = eval(arrOperation.join(''))
    arrFormula = []
    arrOperation = []
}

deleteAll.addEventListener('click', () => {
    score.innerHTML = '0'
    formula.innerHTML = ''
    arrOperation = []
    arrFormula = []
    potegaArr = []
    result.addEventListener('click', calcResult)
})
clean.addEventListener('click', () => {
    arrOperation.pop()
    score.innerHTML = '0'
    formula.innerHTML = arrOperation.join('')
})

function funFormula(e) {
    if (arrOperation.length != 0) {
        arrFormula.push(e.target.dataset.form);
        let newArr = arrFormula[0].replace('$', arrOperation.join(''))
        arrOperation.splice(0, arrOperation.length, newArr)
        formula.innerHTML = arrOperation
        arrFormula = []
    } else {
        formula.innerHTML = `<span style="color:red">😒wrong formula</span>`
    }
}
forms.forEach(fo => {
    fo.addEventListener('click', funFormula)
})

function silnia() {
    let $ = arrOperation.join('')
    var i = 1;
    var s = 1;
    while (i <= $) s *= i++;
    arrFormula.push(s)
    formula.innerHTML = arrOperation.join('') + '!'
    arrOperation.splice(0, arrOperation.length, arrFormula)
    score.innerHTML = arrOperation
    arrFormula = []
}

function potega() {
    potegaArr.push(arrOperation.join(''))
    arrOperation = []
    let x = potegaArr[0]
    let y = potegaArr[1]

    if (potegaArr.length == 2) {
        formula.innerHTML = `Math.pow(${x},${y})`
        arrOperation.push(Math.pow(x, y))
        score.innerHTML = eval(arrOperation.join(''))
        arrOperation = []
        result.removeEventListener('click', calcResult)
    }
}