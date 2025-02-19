function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoVotes = 0;
    let bananaVotes = 0;

    for (let i = 0; i < votes.length; i++) {
        const vote = votes[i]

        if (vote === "mango") {
            mangoVotes++;
        } else if (vote === "banana") {
            bananaVotes++;
        }
    }

    if (mangoVotes > bananaVotes) {
        return "Mango";
    } else if (bananaVotes > mangoVotes) {
        return "Banana";
    } else {
        return "Draw";
    }
}

console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));