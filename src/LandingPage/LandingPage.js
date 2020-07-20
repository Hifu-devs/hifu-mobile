import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";

  export const LandingPage = () => {
    return (
      <View style={styles.container}>
         <ImageBackground
          source={require("../../assets/Background.png")}
          style={styles.backgroundImg}
        >
          {/* <Text>HIFU</Text>
          <Text>When you want to get lost but still found</Text>
          <StatusBar style="auto" /> */}
        </ImageBackground>  
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImg: {
      resizeMode: "cover",
      justifyContent: "center",
    }
  });