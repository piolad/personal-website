text_whoIam = null
phrasesWhoIam = [ "tech enthusiast", "game creator", "machine learning enthusiast", "Computer Science student","programmer"]

//string.includes polyfill - for older browser users
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';
      if (typeof start !== 'number') {
        start = 0;
      }
  
      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

window.onload = () => {

    text_whoIam = document.getElementById("headline").getElementsByTagName("span")[0]



    
    undefindeErrorBugfix()


    loop_txt()

}

function undefindeErrorBugfix(){
    setInterval(function(){
        if (text_whoIam.innerHTML.includes("undefined")){
            text_whoIam.innerHTML = phrasesWhoIam[0]
        }
    },7000)
}


async function loop_txt(){
    await delay(5000)

    txt_counter = 0
    while(true){
        txt = phrasesWhoIam[txt_counter]
        prev_txt_len = text_whoIam.innerHTML.length
        remove_letters(text_whoIam, 150)
        await delay(prev_txt_len*150+150)
        
        add_letters(text_whoIam, txt, 150)
        await delay(txt.length*300+5000)
        txt_counter+=1
        txt_counter= txt_counter%phrasesWhoIam.length
    }
}


function remove_letters(toBeRemoved, ms){
    var timer = setInterval(function(){
        var length = toBeRemoved.innerHTML.length;

        if(length==0) clearInterval(timer)

        toBeRemoved.innerHTML = toBeRemoved.innerHTML.substring(0, toBeRemoved.innerHTML.length-1)
    },ms)
}

function add_letters(toBeIncreased, phrase, ms){
    var timer = setInterval(function(){
        var length = toBeIncreased.innerHTML.length;


        if(length==phrase.length) clearInterval(timer)
        else if(phrase[length]= undefined) clearInterval(timer)
        else toBeIncreased.innerHTML += phrase[length]
    },ms)
}


