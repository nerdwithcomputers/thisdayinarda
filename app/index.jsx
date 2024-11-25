import { useEffect, useState } from "react";
import { Text, View } from "react-native";

// line ~400 of source is where i want

function Retrieve(){
  const [get, setGet] = useState(['loading...']);
  const matcher = /(<section class="citizen-section" id="citizen-section-2">)([\S\s]*)(<\/section>)/;
  useEffect(()=>{
    fetch('http://127.0.0.1:3000', 
      {headers: {
        "url":"https://tolkiengateway.net/wiki/2_November"
      }}
    ).then(
      (x)=>x.text()
    ).then(
      (x)=>{
        let y = x.match(matcher);
        console.log(y);
        setGet(x);
        console.log(x);
      }
    )
  });
  return(
    <Text>{get.toString()}</Text>
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
    <Retrieve/>
    </View>
  );
}
