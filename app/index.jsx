import { useEffect, useState } from "react";
import {StyleSheet, Text, View, ScrollView, useWindowDimensions} from "react-native";
const calendarArda = require('./../assets/tolkien.json');
const calendarIRL = require('./../assets/irl.json');
const palette = [
  '#bd1919',
  '#229c9c',
  '#19bdbd',
  '#008585',
  '#004343',
  '#002222'
];
const palette1 = [
  '#a2c8a7',
  '#6aa96f',
  '#3a7e44',
  '#1a6033',
  '#1a6033',
  '#0b3c20'
]
const sheet = StyleSheet.create({
  container:{
    flex: 3,
    // margin:10,
    backgroundColor: palette[5]
  },
  title:{
    color: palette[5],
    textAlign:"center",
    fontSize:60,
    // flex:1,
    backgroundColor:palette[3],
    marginTop:30
  },
  dateCardText:{
    color:palette[0],
    align:"center",
    textAlign:"left",
    flex:1,
    margin:15,
    width:'75%',
  },
  dateCardBox:{
    alignItems:"center",
    backgroundColor:palette[4],
    borderRadius: 30,
    marginTop:30
  }
})

function Retrieve(calendar){
  const date = Date();
  let month, day = '';
  // let calendar = which;
  // console.log(calendar.which)
  const dateArr=date.split(' ');
  day = dateArr[2];
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
  // month="March"
  let get = calendar.which[`${day}_${month}`];
  let text='';
  for(let i in get){
    let entry = get[i];
    if(entry.endsWith(':')){
      // ternary go brr
    //condition \/  true \/       false \/
      text+= i==0 ? entry+'\n' : '\n'+entry+'\n'
    }else if(entry.match(/\d* -/)){
      text+= entry+'\n\n'
    }else{
      text+= entry+'\n'
    }
  }
  return(
    <View style={sheet.dateCardBox}>
      <Text style={sheet.dateCardText}>
        {text}
      </Text>
    </View>
  );
}

export default function Index() {
  const [which, setWhich] = useState('Arda');
  const [calendar, setCalendar] = useState(calendarArda)
  const swap=()=>{
    if(which=='Arda'){
      setWhich('History');
      setCalendar(calendarIRL);
    }else{
      setWhich('Arda');
      setCalendar(calendarArda);
    }
  }
  return(
    <View style={sheet.container}>
      <ScrollView>
        <Text style={sheet.title} onPress={swap}>
          Today in {which}
        </Text>
        <Retrieve which={calendar}/>
      </ScrollView>
    </View>
  );
}
