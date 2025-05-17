const fs = require('node:fs');
const header = /(\d)+_/
var final = new Map();

fs.readFile('../tolkien.txt', 'utf-8', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    // console.log(data)
    return data;
}).then((data)=>{
    var splitArr = data.split('\n');
    // var capturing = false;
    var date = "";
    for(const el of splitArr){
        if(el.match(header)){
            date = el;
            continue;
        }else{
            final.set(date, el);
        }
    }
    
})