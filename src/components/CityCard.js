import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function CityCard(props) {
  let { photo, name, navigation, city } = props;

  const NavigationContainer = () => {
    navigation.navigate("CitiesDetails", { city });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photo }}
        resizeMode="cover"
        style={styles.img}
      ></Image>
      <View style={styles.containerBody}>
        <Text style={styles.text}>{name}</Text>
        <Button
          onPress={NavigationContainer}
          title="Discover"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    height: 300,
    marginTop: 24,
    alignItems: "center",
    marginLeft: 20,
  },
  containerBody: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 10,
  },
  text: {
    width: "100%",
    color: "aliceblue",
    padding: 10,
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  img: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});
