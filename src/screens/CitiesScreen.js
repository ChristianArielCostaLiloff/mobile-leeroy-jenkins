import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, ScrollView, Text } from "react-native";
import cityActions from "../redux/actions/cityActions";
import CityCard from "../components/CityCard";
import { useDispatch, useSelector } from "react-redux";

export default function CitiesScreen(props) {
  let { cities, filters } = useSelector((store) => store.cityReducer);
  const { getCities, getCitiesByNameAndContinent } = cityActions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters) {
      dispatch(getCitiesByNameAndContinent(filters));
    } else {
      dispatch(getCities());
    }
  }, []);

  return (
    <View>
      <ScrollView>
        <Text>{cities}</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Search"
          onChangeText={(text) => {
            let filters = {
              continent: "",
              name: text,
            };
            dispatch(getCitiesByNameAndContinent(filters));
          }}
        />
        <View className="flex wrap">
          {cities.map((city) => (
            <CityCard
              key={city._id}
              city={city}
              name={city.name}
              navigation={props.navigation}
              continent={city.continent}
              photo={city.photo}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "#063970",
    marginTop: 30,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  backimage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  containerCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  inputText: {
    backgroundColor: "#fff",
    width: "90%",
    height: 40,
    borderRadius: 20,
    margin: 20,
    paddingLeft: 20,
  },
});
