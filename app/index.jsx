import { useEffect, useState } from "react";
import { Text, View, ScrollView, useWindowDimensions } from "react-native";
// import RenderHTML from "react-native-render-html";
// import DOMParser from 'react-native-html-parser';
import cheerio from "react-native-cheerio";

// line ~400 of source is where i want

function Retrieve(){
  const [get, setGet] = useState(['loading...']);
  const date = Date();
  var month = '';
  var day = '';
  // console.log(date);
  const dateArr=date.split(' ');
  switch(dateArr[1]){
    case'Jan': month='January'; break;
    case'Feb': month='February'; break;
    case'Mar': month='March'; break;
    case'Apr': month='April'; break;
    case'May': month='May'; break;
    case'Jun': month='June'; break;
    case'Jul': month='July'; break;
    case'Aug': month='August'; break;
    case'Sep': month='September'; break;
    case'Nov': month='November'; break;
    case'Oct': month='October'; break;
    case'Dec': month='December'; break;
  }
  console.log(month)
  if(dateArr[2][0]=='0') day = dateArr[2][1];
  else day = dateArr[2];
  useEffect(()=>{
    console.log(`https://tolkiengateway.net/wiki/${day}_${month}`);
    fetch('http://m1raclemax.hackclub.app:42449', 
      {
        headers: {
          "url":`https://tolkiengateway.net/wiki/${day}_${month}`
        }
      }
    ).then(
      (x)=>{
        return x.text();
      }
    ).then(
      (x)=>{
        console.log('hello');
        console.log(x);
        const $ = cheerio.load(x);
        let text = $('#citizen-section-2').text();
        console.log(text);
        setGet(text);
        // console.log(x);
      }
    );
    // console.log('end of line');
  });
  return(
    <>
      <Text
        style = {{
          // backgroundColor: "cream",
          color:"red"
        }}
      >{get}</Text>
    </>
  );
}


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <ScrollView>
        <Retrieve/>
      </ScrollView>
    </View>
  );
}
