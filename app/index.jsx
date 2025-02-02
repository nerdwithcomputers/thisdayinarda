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
    case'Jan': month='January';
    case'Feb': month='February';
    case'Mar': month='March';
    case'Apr': month='April';
    case'May': month='May';
    case'Jun': month='June';
    case'Jul': month='July';
    case'Aug': month='August';
    case'Sep': month='September';
    case'Nov': month='November';
    case'Oct': month='October';
    case'Dec': month='December';
  }
  if(dateArr[2][0]=='0') day = dateArr[2][1];
  else day = dateArr[2];
  useEffect(()=>{
    fetch('http://m1raclemax.hackclub.app:42449', 
      {headers: {
        "url":`https://tolkiengateway.net/wiki/${day}_${month}`
      }}
    ).then((x)=>x.text()).then(
      (x)=>{
        const $ = cheerio.load(x);
        let text = $('#citizen-section-2').text();
        setGet(text);
        // console.log(x);
      }
    )
  });
  return(
    <Text>{get}</Text>
  );
}


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Retrieve/>
      </ScrollView>
    </View>
  );
}
