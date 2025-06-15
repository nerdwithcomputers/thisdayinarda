import { StyleSheet } from "react-native";

/*
text colour
x
x
title block
datecard bg
background
*/

// const {height, width} = useWindowDimensions();
let p=1
const palette = p==0 ? [
  '#bd1919',
  '#229c9c',
  '#19bdbd',
  '#008585',
  '#004343',
  '#002222'
] : [
  '#C7F011',
  '#6aa96f',
  '#3a7e44',
  '#1a6033',
  '#18883F',
  '#205716'
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
    color: palette[0],
    textAlign:"center",
    fontSize:50,
    backgroundColor:palette[3],
    marginTop:30,
    
  },
  subtitle:{
    color: palette[4],
    textAlign:"center",
    fontSize:20,
    backgroundColor:palette[3],
    // marginTop:30,
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
    backgroundColor:palette[5],
    borderRadius:20,
    margin:5,
    // marginBottom:10,
    maxWidth:"95%",
    minWidth:"90%",
    // width:"80%",
    alignSelf:"center"
  },
  imageBack:{
    resizeMode:"repeat",
    borderRadius:10,
    
  },
  imageBack1:{
    resizeMode:"repeat",
    // maxWidth:"95%",
    borderRadius:30,
    marginTop:10
  },
})

export default sheet