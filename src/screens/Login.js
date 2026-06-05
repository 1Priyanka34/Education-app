import React, {
  useState,
  useContext
} from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView
} from "react-native";

import axios from "axios";

import AsyncStorage from
  "@react-native-async-storage/async-storage";

import {
  AuthContext
} from "../context/AuthContext";

const Login = ({ navigation }) => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const {
    setIsLoggedIn,
    setUserData
  } = useContext(AuthContext);

  // LOGIN FUNCTION

  const handleLogin = async () => {

    if (!email || !password) {

      Alert.alert(
        "Error",
        "Please fill all fields"
      );

      return;
    }

    try {

      const res = await axios.get(
        "http://localhost:3000/user"
      );

      const user = res.data.find(

        u =>
          u.email === email &&
          u.password === password
      );

      if (user) {

        setUserData(user);

        setIsLoggedIn(true);

        await AsyncStorage.setItem(
          "user",
          JSON.stringify(user)
        );

        navigation.replace(
          "Main"
        );

      } else {

        Alert.alert(
          "Login Failed",
          "Invalid Email or Password"
        );
      }

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Server Error",
        "Could not connect to server"
      );
    }
  };

  return (

    <ScrollView
      contentContainerStyle={
        styles.container
      }
      showsVerticalScrollIndicator={false}
    >

      {/* TOP IMAGE */}

      <Image
        source={require("../../assets/logo.jpg")}
        style={styles.logo}
      />

      {/* TITLE */}

      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Text style={styles.subtitle}>
        Login to continue learning
      </Text>

      {/* EMAIL */}

      <TextInput

        placeholder="Enter Email"

        placeholderTextColor="#94a3b8"

        value={email}

        onChangeText={setEmail}

        style={styles.input}
      />

      {/* PASSWORD */}

      <TextInput

        placeholder="Enter Password"

        placeholderTextColor="#94a3b8"

        secureTextEntry

        value={password}

        onChangeText={setPassword}

        style={styles.input}
      />

      {/* LOGIN BUTTON */}

      <TouchableOpacity

        style={styles.loginButton}

        onPress={handleLogin}
      >

        <Text style={styles.loginText}>
          Login
        </Text>

      </TouchableOpacity>

      {/* REGISTER */}

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Register")
        }
      >

        <Text style={styles.registerText}>

          Don't have an account ?

          <Text style={styles.registerNow}>
            {" "}Register
          </Text>

        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#f8fafc",
  },

  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  loginButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  registerText: {
    textAlign: "center",
    marginTop: 25,
    color: "#64748b",
    fontSize: 15,
  },

  registerNow: {
    color: "#2563eb",
    fontWeight: "bold",
  },

});