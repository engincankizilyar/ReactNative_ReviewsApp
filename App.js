import 'react-native-gesture-handler';
import React from "react";
import Navigator from "./routes/drawer";
import Home from "./screens/home";


/*
export default class App extends Component {
  render() {
    return (
      <View>
        <Text> Redcliff </Text>
      </View>
    )
  }
}
*/

const App = () => {
  return <Navigator />;
}
export default App;