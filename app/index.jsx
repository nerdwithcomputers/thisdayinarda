import {useState} from "react";
import {Text, View, ScrollView, useWindowDimensions} from "react-native";
import sheet from "./style";
import BorderImg from "./borderimg";
const calendarArda = require('./../assets/tolkien.json');
const calendarIRL = require('./../assets/irl.json');

// console.log(sheet);

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
        <Text style={sheet.subtitle}>
          click to swap from arda to irl
        </Text>
        <BorderImg>
        <Retrieve which={calendar}/>
        </BorderImg>
      </ScrollView>
    </View>
  );
}
