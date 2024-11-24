import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

// line ~400 of source is where i want

function Retrieve(){
  const [get, setGet] = useState(['loading...']);
  useEffect(()=>{
    fetch('https://localhost:3000', 
      {headers: {
        "url":"https://tolkiengateway.net/wiki/2_November"
      }}
    )
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
