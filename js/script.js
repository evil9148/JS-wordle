document.addEventListener(`DOMContentLoaded`, () => {
  fnInit()
})

document.querySelector(`.btn-again`).addEventListener(`click`,()=>{
  fnInit()
  document.querySelector(`.over`).style.display = 'none'
})

document.querySelector(`.btn-choice`).addEventListener(`click`,()=>{
  fnPrintWordsBtns()
  fnChoiceBtnHandler()
  document.querySelector(`.words`).style.display='flex'
})

document.querySelector(`.btn-cancle`).addEventListener(`click`,()=>{
  document.querySelector(`.words`).style.display='none'
})

// document.querySelectorAll(`.words .output button`).forEach(c=>{
//   c.addEventListener(`click`,()=>{
//     document.querySelector(`.words`).style.display='none'
//   })
// }) 동작안함 버튼이 생기기전 만든 이벤트라