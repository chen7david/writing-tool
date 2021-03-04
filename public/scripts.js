const ui = {
    btn: {
        spellcheck: document.querySelector('#spellcheck'),
        start: document.querySelector('#start'),
        clear: document.querySelector('#clear'),
        textarea: document.querySelector('.textarea'),
    },
    input:{
        duration: document.querySelector('#duration'),
    },
    display: {
        timer: document.querySelector('#timer'),
        wordcount: document.querySelector('#wordcount'),
    }
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

ui.btn.textarea.addEventListener('keyup', () => {
    const getwordcount = (text) => {
        const array = text.innerHTML.match(/\S+/g)
        return array == null ? 0 : array.length
    }
    ui.display.wordcount.innerHTML = getwordcount(ui.btn.textarea)
})

function countdown(minute = 20, display){
    minute--
    let sec = 60
    const timer = setInterval(() => {
        display.innerHTML = pad(minute, 2) + " : " + pad(sec, 2)
        sec--;
        if (sec == 00) {
            minute --;
            sec = 60;
            if (minute == 0) {
            minute;
            }
        }
    }, 1000)
    return timer
}

function toggleSpellCheck(element){
    state = !state
    let text = element.innerHTML
    if(state){
        element.setAttribute('spellcheck', true)
    }else {
        element.setAttribute('spellcheck', false)
    }
    element.innerHTML = text
}


ui.btn.start.addEventListener('click', () => { 
    const timer = countdown(ui.input.duration.value, ui.display.timer)
})



let state = false
ui.btn.spellcheck.addEventListener('click', () => {
    toggleSpellCheck(ui.btn.textarea)
})
