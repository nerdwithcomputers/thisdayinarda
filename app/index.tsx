import { Text, View } from "react-native";
import axios from "axios";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>axios.get('https://tolkiengateway.net/wiki/2_November')</>
      <Text></Text>
    </View>
  );
}
