import { useEffect, useState } from "react";
import { Text, View, ScrollView, useWindowDimensions } from "react-native";
const calendar = require('./assets/tolkien.json');

function Retrieve(){
  const [get, setGet] = useState('loading');
  const date = Date();
  var month = '';
  var day = '';
  // console.log(date);
  const dateArr=date.split(' ');
  day = dateArr[0];
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
  console.log(month);
  setGet(calendar[`${day}_${month}`]);
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
