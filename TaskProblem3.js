let enterStr = "There are 14 people in the room, we all are ready to learn the new things, sometimes our moral get down, but we are still in hustling for learning. After 2 months, there will be change in our way of coding."

// the symbol is already added in the comparison, symbol used here is , comma

function toConvert(enter){
    if (!enter)
    {
        return [];
    }
    let result =[];
    // let empty= [];
    let currentwords='';

    for (let i=0; i< enter.length;i++)
    {
        if (enter[i] === ',')
        {
            result.push(currentwords);
            currentwords='';
        }else{
            
            currentwords = currentwords+enter[i];
        }
    }
    result.push(currentwords);
    return result;
}

console.log(toConvert(enterStr));