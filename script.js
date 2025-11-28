// script.js
// 小互動：點按卡片會有可愛音效與輕微跳動
document.querySelectorAll('.cmd-card').forEach(card => {
card.addEventListener('click', () => {
card.classList.add('pop')
setTimeout(()=>card.classList.remove('pop'),220)
// 小提示浮窗
const title = card.querySelector('h3').innerText
const tip = document.createElement('div')
tip.className = 'toast'
tip.innerText = `${title} 已複習完畢！加油 💪`;
document.body.appendChild(tip)
setTimeout(()=>{tip.classList.add('show')},10)
setTimeout(()=>{tip.classList.remove('show'); setTimeout(()=>tip.remove(),300)},1600)
})
})


// 建立簡單的 toast 樣式（動態插入，避免修改 CSS）
const style = document.createElement('style')
style.innerHTML = `
.toast{position:fixed;left:50%;transform:translateX(-50%) translateY(20px);bottom:20px;padding:10px 16px;border-radius:12px;background:#333;color:#fff;opacity:0;transition:all .25s ease}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.cmd-card.pop{transform:scale(1.03) translateY(-6px)}
`
;document.head.appendChild(style)