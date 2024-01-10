// задание 1

const num = [1,2,3,4,5,6,7,8,9,10];
let even = []
let odd = []

for (let i = 0; i < num.length; i++)
{
	if (num[i] % 2 === 0){
 
    even.push(num[i])

    }
    else{
        odd.push(num[i])
        
    }
                     
}  
console.log(even);
console.log(odd);






// 2 задание 


let arr = []

for(let i = 0; i < Infinity; i++){
    let word = prompt('Введите слово')

    const result = word.split(', ')

if (result[0] == 'add'    ) {
    arr.push(result[1])
    
}
if (result[0] == 'del' ){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == result[1]){
            arr.splice(i,1)
        }
    }
}
if(result[0] == 'stop' ){
    break
}


console.log(arr);
}







 
    
