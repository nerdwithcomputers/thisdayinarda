import { useEffect, useState } from "react";
import { Text, View } from "react-native";

// line ~400 of source

function Retrieve(){
  const [get, setGet] = useState([]);
  useEffect(()=>{
    fetch(
      'https://quotes.toscrape.com/',
      {
        method:'GET'
      }
    ).then(
      (data)=>{
        setGet(data.text);
      }
    );
  });
  return(
    <>
      {get}
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
    <Retrieve></Retrieve>
    </View>
  );
}
