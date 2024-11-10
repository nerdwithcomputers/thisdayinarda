import { useEffect, useState } from "react";
import { Text, View } from "react-native";

// line ~400 of source is where i want

function Retrieve(){
  const [get, setGet] = useState(['loading...']);
  useEffect(()=>{
    fetch(
      'https://quotes.toscrape.com/',
      {method:'GET'}
    ).then(
      (data)=>{
        setGet(data);
        console.log(data);
      }
    ).catch((error)=>setGet(error));
  });
  return(
    <>
      {get.toString()}
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
      }}
    >
    <Retrieve/>
    </View>
  );
}
