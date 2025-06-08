import { ImageBackground } from "react-native";
import { Image, Text } from "react-native-web";

export default function BorderImg({ children }, img = require('../assets/images/border.png'), cornerImg = ''){
  return(
    <>
      {/* <Image 
        source={img}
        style={{
          width: children.width,
          resizeMode: 'repeat'
        }}
      /> */}
      <ImageBackground
        source={img}
        style={{
          height:children.height,
          resizeMode: 'repeat'
        }}
      >
        <Text>{children.Text}</Text>
      </ImageBackground>
    </>
  )
}
