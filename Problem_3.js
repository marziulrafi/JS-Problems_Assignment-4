function electionResult(votes) {
    let mangoVotes = 0
    let bananaVotes = 0

    if (!Array.isArray(votes)) {
        return "Invalid"
    }

    for (let i=0; i<votes.length; i++) {
        const vote = votes[i]

        if (vote==="mango") {
            mangoVotes++
        } else if (vote==="banana") {
            bananaVotes++
        }
    }

    if (mangoVotes>bananaVotes) {
        return "Mango"
    } else if (bananaVotes>mangoVotes) {
        return "Banana"
    } else {
        return "Draw"
    }
}


let test = ["banana", "banana", "age e valo chilam" , "no"]
let result = electionResult(test)
console.log(result)