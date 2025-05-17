const fs = require('node:fs');
const header = /(\d)+_/
var map = new Map();

fs.readFile('../../tolkien.txt', 'utf-8', (err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    // console.log(data);
    var splitArr = data.split('\n');
    splitArr = splitArr.filter((word)=> word.length>0);
    console.log(splitArr);
    var date = "";
    for(const el of splitArr){
        if(el.match(header)){
            date = el;
            map.set(date,);
            continue;
        }else{
            let arr = map.get(date);
            arr.append(el);
            map.set(date,arr);
        }
    }
    json = Object.fromEntries(map);
    final = JSON.stringify(json);
    fs.writeFile('tolkien.json',final,(err,data)=>{
        if(err){
            console.error(err);
        }else{
            console.log('SUCCESS!!!');
        }
    });
})