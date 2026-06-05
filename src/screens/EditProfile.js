import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/AuthContext";

const EditProfile = ({ navigation }) => {
  const { userData, setUserData } =
    useContext(AuthContext);

  const [name, setName] = useState(
    userData?.name || ""
  );

  const [email, setEmail] = useState(
    userData?.email || ""
  );

  const updateProfile = async () => {
    try {

      const updatedUser = {
        ...userData,
        name,
        email,
      };

      await axios.put(
        `http://localhost:3000/user/${userData.id}`,
        updatedUser
      );

      await AsyncStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      setUserData(updatedUser);

      Alert.alert(
        "Success",
        "Profile Updated Successfully"
      );

      navigation.goBack();

    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        "Failed To Update Profile"
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Edit Profile
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateProfile}
      >
        <Text style={styles.buttonText}>
          Save Changes
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});