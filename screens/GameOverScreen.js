import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game over</Text>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text>Number of rounds it took: {props.guessedRounds}</Text>
      <Text>The number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: { width: "80%", height: 300 }
});

export default GameOverScreen;
