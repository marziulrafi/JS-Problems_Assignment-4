function isBestFriend(f1, f2) {
    if (typeof (f1) === 'object' && typeof (f2) === 'object') {
        if (((f1['bestFriend']) === (f2['roll'])) && ((f1['roll']) === (f2['bestFriend']))) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Invalid'
    }

}


let result = isBestFriend({name:"hashem", roll: 1, bestFriend: 2},
    { name:"kashem", roll: 2, bestFriend: 1});

console.log(result)