// code your solution here
function saturdayFun(string1='roller-skate'){
    return `This Saturday, I want to ${string1}!`
}
const mondayWork= function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*'){
    return function inner(str="special"){
        return `You are ${symbol}${str}${symbol}!`;
    }
}

