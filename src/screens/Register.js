import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, StatusBar, TouchableOpacity, Text } from "react-native";
import axios from "axios";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // if (!name || !email || !password) return;
    // try {
    //   await axios.post("http://localhost:3000/user", {
    //     name,
    //     email,
    //     password
    //   });

      navigation.navigate("Login");
    // } catch (e) {
    //   console.log(e);
    // }
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Name" value={name} onChangeText={setName} style={styles.input}/>
      <TextInput placeholder="Enter Email" value={email} onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Enter Password" value={password} secureTextEntry onChangeText={setPassword} style={styles.input}/>

  <TouchableOpacity
  
          style={styles.RegisterButton}
  
          onPress={handleRegister}
        >
  
          <Text style={styles.registerText}>
            Register
          </Text>
  
        </TouchableOpacity>
      <TouchableOpacity
              onPress={() =>
                navigation.navigate("Login")
              }
            >
      
              <Text style={styles.loginText}>
      
                Already have an account ?
      
                <Text style={styles.loginNow}>
                  {" "}Login
                </Text>
      
              </Text>
      
            </TouchableOpacity></View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex:1, 
    justifyContent:"center",
    padding:20 
  },

  input:{ 
    borderWidth:2, 
    marginBottom:10, 
    padding:10,
    borderRadius:7,
    borderColor:"#0f6fee"
   },
   
  RegisterButton: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  registerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  loginText: {
    textAlign: "center",
    marginTop: 25,
    color: "#64748b",
    fontSize: 15,
  },

  loginNow: {
    color: "#2563eb",
    fontWeight: "bold",
  },

});

export default Register;