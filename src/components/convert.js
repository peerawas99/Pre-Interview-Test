    import { useState } from 'react';

    export default function Convert() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    var arr = text.split("");
    const convert = 
    {   A: 1,a: 1,
        B: 5,b: 5,
        Z: 10,z: 10,
        L: 50,l: 50,
        C: 100,c: 100,
        D: 500,d: 500,
        R: 1000,r: 1000
    }

    function checkDuplicateNumber(str) {
        const dup = []
        for(let i=0; i<str.length; ++i) {
          dup.push(str[i])
          if(dup.length >= 4) {
            if(dup[i] === dup[i - 3] && dup[i] === dup[i - 2] && dup[i] === dup[i - 1]) return false
          }
        }
      
        return true
      }

    const str = text.split("").map(e => {return convert[e]})
    var result = 0;


    for(var r=0;r<arr.length;r++){
        if(str[r] < str[r+1]){

            if((str[r] + '')[0] === '5' || str[r + 1] / str[r] > 10) {
                 result = 'Error: number format is invalid'
                 break;
              }

            result += str[r+1] - str[r];
            r++;
        }else { 
            result += str[r];
        }
        console.log(result)
    }

    
    if(!checkDuplicateNumber(str))  result = 'Error: found duplicate number more than 3' 
    return (
        <>
        <h1>{result}</h1>
        <input onChange={handleChange} />
        </>
    );
    }
