import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

const App = () => {
  
  const pressFunction = () => {
    console.log("Merhaba")
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Hello React Native CLARUSWAY</Text>
        <Button />
      </View>
    </SafeAreaView>
  )
}

export default App;