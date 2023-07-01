window.wordArr
window.desc
window.row = 0
window.cnt = 0
window.point = 0

fnInitVar = () => {
  row = 0
  cnt = 0
  point = 0
  document.querySelector(`.board`).innerHTML = ''
}

fnInit = (n = null) => {
  fnInitVar()
  fnChoiceWord(n)
  fnInputSpawn()
  fnInputHandler()
}

fnChoiceWord = (n = null) => {
  if (!n && n !== 0) { // 0값이 false이기에 추가로 기재한다.
    const ranN = Math.floor(Math.random() * wordsArr.length)
    desc = wordsArr[ranN].desc
    wordArr = wordsArr[ranN].word.toUpperCase().split('')
  } else {
    wordArr = wordsArr[n].word.toUpperCase().split('')
    desc = wordsArr[n].desc
  }
  document.querySelector(`.desc`).innerHTML = desc
}

fnInputSpawn = () => {
  row++; point = 0; cnt = 0;
  const div = document.createElement(`div`)
  div.classList.add(`div${row}`)
  for (let i = 0; i <= 4; i++) {
    const span = document.createElement(`span`)
    span.innerHTML = `<input maxlength="1" data-idx="${i}">`
    div.append(span)
  }
  document.querySelector(`.board`).append(div)
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
  try { el.parentElement.nextElementSibling.children[0].focus() } catch { }//배열 마지막순 넘어가는 에러 예외처리문 조건문도 되지만 간편하기에 사용
  const idx = parseInt(el.dataset['idx'])

  if (char === wordArr[idx]) {//wardArr.indexOf(char) === idx는 중복이 안됨, 처음에 걸리면 종료.
    point++
    console.log(point);
    el.classList.add(`green`)
  } else if (wordArr.includes(char)) {
    el.classList.add(`yellow`)
  } else {
    el.classList.add(`gray`)
  }
  cnt++
  if (point === 5) {
    document.querySelector(`.over`).style.display = 'flex'
    document.querySelector(`.over em`).innerHTML = `시도횟수 : ${row}번`
  } else if (cnt === 5) {
    fnInputSpawn()
    fnInputHandler()
  }
}

fnPrintWordsBtns = () => {
  document.querySelector(`.words .output`).innerHTML = ''
  wordsArr.forEach((c, i) => {
    document.querySelector(`.words .output`).insertAdjacentHTML('beforeend', `
    <p><button value="${i}">${c.desc}</button></p>
    `)
  })
}

fnChoiceBtnHandler = () => {
  document.querySelectorAll(`.words .output button`).forEach(c => {
    c.addEventListener(`click`, e => {
      fnInit(parseInt(e.target.value))
      document.querySelector(`.words`).style.display = 'none'
    })
  })
}