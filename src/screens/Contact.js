import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView} from "react-native";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSelected, setSelection] = useState(false);
  
  const handleSubmit = () => {
    if (!name || !email || !message) {
      return;
    }

    if (!isSelected) {
      return;
    }

     navigation.replace(
          "Main"
        );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}>

      <View style={styles.topContainer}>
        <Text style={styles.heading}>
          Contact Us
        </Text>

        <Text style={styles.subHeading}>
          We would love to hear from you
        </Text>

      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>
          Full Name
        </Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>
          Email Address
        </Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Message
        </Text>
        <TextInput
          placeholder="Write your message"
          style={styles.messageInput}
          multiline={true}
          numberOfLines={5}
          value={message}
          onChangeText={setMessage}
        />


        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setSelection(!isSelected)}>

          <View style={styles.checkbox}>

            {isSelected && (
              <View style={styles.checkedBox} />
            )}

          </View>

          <Text style={styles.checkboxText}>
            I agree to the terms and conditions
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  topContainer: {
    backgroundColor: "#2563eb",
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },

  subHeading: {
    fontSize: 16,
    color: "#dbeafe",
    marginTop: 8,
  },

  formContainer: {
    backgroundColor: "#ffffff",
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: "#f8fafc",
  },

  messageInput: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: "#f8fafc",
    textAlignVertical: "top",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#2563eb",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: "#2563eb",
    borderRadius: 3,
  },

  checkboxText: {
    fontSize: 14,
    color: "#475569",
    marginLeft: 10,
    flex: 1,
  },

  button: {
    backgroundColor: "#2563eb",
    marginTop: 25,
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  }
});