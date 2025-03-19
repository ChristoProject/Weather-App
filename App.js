import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text } from "react-native";
import { s } from "./App.style";
import backgroundImg from "./assets/background.png";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ImageBackground source={backgroundImg} style={s.imgBG}>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

export default App;
