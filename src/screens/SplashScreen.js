import React, {
  useEffect,
  useContext
} from "react";

import {
  View,
  ActivityIndicator
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../context/AuthContext";

const SplashScreen = ({ navigation }) => {

  const {
    setIsLoggedIn,
    setUserData
  } = useContext(AuthContext);

  useEffect(() => {

    checkLogin();

  }, []);

  const checkLogin = async () => {

    const user =
      await AsyncStorage.getItem("user");

    if (user) {

      setUserData(JSON.parse(user));
      setIsLoggedIn(true);

      navigation.replace("Main");

    } else {

      navigation.replace("Login");

    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator
        size="large"
        color="blue"
      />
    </View>
  );
};

export default SplashScreen;