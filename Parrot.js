
class Parrot{
    constructor(data){
        Object.assign(this,data)

    }


    likeParrot(){
        this.hasBeenLiked  = true
        this.hasBeenSwiped  = true
        document.getElementById("liked-rejected-icon").innerHTML = `
        <img src="images/badge-like.png">
        `
        console.log(`${this.name} is liked`)
    }
    rejectParrot(){
        this.hasBeenSwiped = true
        document.getElementById("liked-rejected-icon").innerHTML = `
        <img src="images/badge-nope.png">
        `
        console.log(`${this.name} is rejected`)

    
}

    getParrotHtml(){
        const {name, age, avatar, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
            <img class="pet-img" src="${avatar}">
            <div class="name-age-bio">
                <h1 id="nameAge" class="nameAge">${name}, ${age}</h1> 
                <h2 id="bio" class="bio">${bio}</h2>
            </div>
        `
    }

}

export default Parrot



