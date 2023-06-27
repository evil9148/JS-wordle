window.wordArr
window.desc
window.row = 0
window.cnt = 0
window.point = 0

fnInitVar = () => {
  row = 0
  cnt = 0
  point = 0
}

fnInit = () => {
  fnInitVar()
  fnChoiceWord()
  fnInputSpawn()
}

fnChoiceWord = (n = null) => {
  if (!n) {
    const ranN = Math.floor(Math.random() * wordsArr.length)
    desc = wordsArr[ranN].desc
    wordArr = wordsArr[ranN].word.split('')
  } else {
    wordArr = wordsArr[n].word.split('')
    desc = wordsArr[n].desc
  }
  document.querySelector(`.desc`).innerHTML = desc
}

fnInputSpawn = () => {
  row++
  const div = document.createElement(`div`)
  div.classList.add(`div${row}`)
  for (let i = 0; i <= 4; i++) {
    const span = document.createElement(`span`)
    span.innerHTML = `<input maxlength="1" data-idx="${i}">`
    div.append(span)
  }
  document.querySelector(`.board`).append(div)
  fnInputHandler()
}

fnInputHandler = () => {
  document.querySelector(`.div${row} span:first-child input`).focus()
  document.querySelectorAll(`.div${row} input`).forEach(c => (
    c.addEventListener(`input`, (e) => {
      const char = e.target.value.toUpperCase()
      if (/[A-Z]/.test(char)) {//regExp 정규식 검사 /[ㅁ-ㅋ]/
        fnCheckSpell(e.target, char)
      } else {
        e.target.value = ''
        alert('알파벳으로만 입력이 가능합니다.')
      }
    })
  ))
}

fnCheckSpell = (el, char) => {
  el.readOnly = true
  try { el.parentElement.nextElementSibling.children[0].focus() } catch { }//예외처리문
  console.log(el.dataset['idx']);
  // if(){

  // }else if(){

  // }else{

  // }
}

document.addEventListener(`DOMContentLoaded`, () => {
  fnInit()
})
