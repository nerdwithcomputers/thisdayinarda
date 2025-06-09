import {useState} from "react";
import {Text, View, ScrollView, useWindowDimensions, ImageBackground} from "react-native";
import sheet from "./style";
// import Retrieve from "./Retrieve"
const calendarArda = require('./../assets/tolkien.json');
const calendarIRL = require('./../assets/irl.json');

// console.log(calendarArda);

function Retrieve(args){
  const date = Date();
  // console.log(cal);
  let month, day = '';
  // let calendar = which;
  // console.log(cal.which)
  const dateArr=date.split(' ');
  day = parseInt(dateArr[2]);
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
  };
  // console.log(month);
  console.log(`${day}_${month}`);
  let get = args.cal[`${day}_${month}`];
  console.log(get);
  let text='';
  for(let i in get){
    let entry = get[i];
    if(entry.endsWith(':')){
      // ternary go brr
      text+= i==0 ? entry+'\n' : '\n'+entry+'\n'
    }else if(entry.match(/\d* -/)){
      text+=entry+'\n\n'
    }else{
      text+=entry+'\n'
    }
    // console.log(text);
  }
  return(
    <View style={sheet.dateCardBox}>
      <Text style={sheet.dateCardText}>
        {text}
      </Text>
    </View>
  );
}

function RetrieveWBorder(args){
  return(
    <View style={{width:"80%", alignSelf:"center", alignContent:"center"}}>
      <ImageBackground
        source={require("../assets/images/border.png")}
        style={{
          alignSelf:"center",
          alignItems:"center",
          alignContent:"center",
          // margin:30,
          maxWidth:"90%"
        }}
        imageStyle={{
          resizeMode:"repeat",
          maxWidth:"80%",
          alignSelf:"center",
          alignItems:"center",
          alignContent:"center",
          borderRadius:30
        }}
      >
        <Retrieve cal={args.cal}/>
      </ImageBackground>
    </View>
  )
}


export default function Index() {
  const [which, setWhich] = useState('Arda');
  const [calendar, setCalendar] = useState(calendarArda);
  const swap=()=>{
    if(which=='Arda'){
      setWhich('History');
      setCalendar(calendarIRL);
    }else{
      setWhich('Arda');
      setCalendar(calendarArda);
    }
  }

  // console.log(calendar);

  return(
    <View style={sheet.container}>
      <ScrollView>
        <Text style={sheet.title} onPress={swap}>
          Today in {which}
        </Text>
        <Text style={sheet.subtitle}>
          click to swap from arda to irl
        </Text>
        <RetrieveWBorder cal={calendar}/>
      </ScrollView>
    </View>
  );
}
