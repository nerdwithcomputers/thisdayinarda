import { Text, View } from "react-native";
import axios from "axios";

// line ~400 of source

var body;

axios.get("https://tolkiengateway.net/wiki/2_November").then(function(response){
    body = response
});

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <>{body}</>
    </View>
  );
}
