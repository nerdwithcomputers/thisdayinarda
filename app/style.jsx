import { StyleSheet } from "react-native";

// const {height, width} = useWindowDimensions();
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
  center:{
    alignSelf:"center",
    alignItems:"center",
    alignContent:"center"
  },
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
    marginTop:30,
    // borderBottomRightRadius: 30
  },
  subtitle:{
    color: palette[4],
    textAlign:"center",
    fontSize:20,
    // flex:1,
    backgroundColor:palette[3],
    // marginTop:30,
    // borderBottomRightRadius: 30
  },
  dateCardText:{
    color:palette[0],
    fontSize:18,
    align:"center",
    textAlign:"left",
    flex:1,
    margin:15,
    maxWidth:"90%",
  },
  dateCardBox:{
    alignItems:"center",
    backgroundColor:palette[4],
    borderRadius: 30,
    margin:10,
    // marginBottom:10,
    maxWidth:"95%",
    width:"80%",
    alignSelf:"center"
  },
  imageBack:{
    resizeMode:"repeat",
    // maxWidth:"95%",
    borderRadius:30,
    // marginTop:10
  },
  imageBack1:{
    resizeMode:"repeat",
    // maxWidth:"95%",
    borderRadius:30,
    marginTop:10
  },
})

export default sheet