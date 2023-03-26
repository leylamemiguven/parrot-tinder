
import Parrot from './Parrot.js'
import parrots from './data.js'

let currentParrotIndex = 0

let parrotsData = parrots

function clearStatus(){
    document.getElementById("liked-rejected-icon").innerHTML = ""
}

function getParrotObject(){
    for (let parrot in parrotsData){
        if (parseInt(parrot) === currentParrotIndex){
            let parrotObject = new Parrot(parrots[parrot])
            return parrotObject
        }
    }

}



document.addEventListener("click", function(e) {
    if (e.target.id === "like-btn"){
        setTimeout(getParrotObject, 1500 )
        getParrotObject().likeParrot()
        console.log(getParrotObject())
        setTimeout(getNewParrot, 1500 ) 
        

    } else if (e.target.id === "reject-btn"){
        setTimeout(getParrotObject, 1500 )
        getParrotObject().rejectParrot()
        console.log(getParrotObject())
        setTimeout(getNewParrot, 1500 ) 
        

    }
    
    
  })

function getNewParrot(){
    if (currentParrotIndex === parrotsData.length -1){
        document.getElementById("pet").innerHTML = `<h1 class="love-struck-txt">🦜 No more swiping you love struck parrot🦜 </h1>`
        document.getElementById("choice-btns").innerHTML = ``

    }
    else{
        const newParrot = new Parrot(parrotsData[currentParrotIndex+1])
        document.getElementById("pet").innerHTML = newParrot.getParrotHtml()



    }
    currentParrotIndex += 1
    clearStatus()
    console.log(`current parrot index = ${currentParrotIndex}`)
    
}


function render(){
    let firstParrot = new Parrot(parrotsData[0])
    document.getElementById("pet").innerHTML = firstParrot.getParrotHtml()
   

}

render()
