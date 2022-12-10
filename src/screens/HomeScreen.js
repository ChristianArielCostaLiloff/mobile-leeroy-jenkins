import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require("../../assets/backgroundHome.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/favicon.png")}
            style={{
              width: 200,
              height: 200,
              marginTop: "5%",
            }}
          />
          <Text
            style={{
              fontSize: 50,
              textAlign: "center",
              marginBottom: "5%",
              color: "white",
            }}
          >
            My Tinerary
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Cities")}
              style={{
                backgroundColor: "#006466",
                width: 100,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignContent: "center",
                margin: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Cities
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Hotels")}
              style={{
                backgroundColor: "#006466",
                width: 100,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                margin: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Hotels
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    alignItems: "center",
    display: "flex",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
