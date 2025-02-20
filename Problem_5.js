function  calculateWatchTime(times){
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid"
        }
    }
    
    let totalSeconds = 0
    for (let i=0; i<times.length; i++) {
        totalSeconds+=times[i]
    }

    let hour = Math.floor(totalSeconds/3600)
    let minute = Math.floor((totalSeconds%3600)/60)
    let second = totalSeconds%60
    
    let result = `hour: ${hour}  minute: ${minute}  second: ${second}`
    return result;

}

let second = [100, 99, 119, 300]
let output = calculateWatchTime(second);
console.log(output)