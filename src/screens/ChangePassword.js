import React, {
  useState,
  useContext
} from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";

import axios from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {AuthContext} from "../context/AuthContext";

const ChangePassword = ({navigation}) => {

  const {userData, setUserData} = useContext(AuthContext);

  const [oldPassword, setOldPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePassword =
    async () => {

      if (!oldPassword || !newPassword || !confirmPassword) {
        return;
      }

      if (
        oldPassword !==
        userData.password
      ) {
        return;
      }

      if (newPassword !== confirmPassword
      ) {
            return;
      }

      try {

        const updatedUser = {
          ...userData,
          password:newPassword,
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
        navigation.goBack();

      } catch (error) {
        console.log(error);
      }
    };

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Change Password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Old Password"
        secureTextEntry
        value={oldPassword}
        onChangeText={
          setOldPassword
        }
      />

      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={
          setNewPassword
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={
          setConfirmPassword
        }
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updatePassword}
      >

        <Text style={styles.buttonText}>
          Update Password
        </Text>

      </TouchableOpacity>

    </View>
  );
};

export default ChangePassword;

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
    backgroundColor: "#7c3aed",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});