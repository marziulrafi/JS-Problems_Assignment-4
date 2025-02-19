function cashOut(money) {
    let charge = (money*1.75)/100

    if(typeof(money) !== 'number' || money < 0){
        return 'Invalid';
    } else {
        return charge;
    }
}

let result = cashOut("101")
console.log(result)
