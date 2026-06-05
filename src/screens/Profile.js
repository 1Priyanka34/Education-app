// Profile.js

import React, {
  useContext
} from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";

import AsyncStorage from
"@react-native-async-storage/async-storage";

import {
  AuthContext
} from "../context/AuthContext";

import {
  CourseContext
} from "../context/CourseContext";

import {
  ThemeContext
} from "../context/ThemeContext";

const Profile = ({
  navigation
}) => {

  const {

    userData,

    setIsLoggedIn

  } = useContext(AuthContext);

  const {

    enrolledCourses,

    removeCourse

  } = useContext(CourseContext);

  const {

    darkMode,

    setDarkMode,

    theme

  } = useContext(ThemeContext);

  // LOGOUT

  const logoutUser = async () => {

    await AsyncStorage.removeItem(
      "user"
    );

    setIsLoggedIn(false);

    navigation.replace("Login");
  };

  // COURSE CARD

 const renderCourse = ({ item }) => {
  return (
    <View
      style={[
        styles.courseCard,
        {
          backgroundColor: theme.cardColor,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.courseName,
            {
              color: theme.textColor,
            },
          ]}
        >
          {item.title}
        </Text>

        {/* Category */}
        <Text style={styles.category}>
          {item.category}
        </Text>

        <Text style={styles.price}>
          ₹ {item.price}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeCourse(item.id)}
      >
        <Text style={styles.removeText}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

  return (

    <ScrollView
      style={[
        styles.mainContainer,
        {
          backgroundColor:
            theme.backgroundColor
        }
      ]}
      showsVerticalScrollIndicator={
        false
      }
    >

      <View style={styles.container}>

        {/* PROFILE IMAGE */}

        <Image

          source={require("../../assets/logo.jpg")}

          style={styles.profileImage}
        />

        {/* USER NAME */}

        <Text
          style={[
            styles.name,
            {
              color:
                theme.textColor
            }
          ]}
        >

          {userData?.name}

        </Text>

        {/* USER EMAIL */}

        <Text
          style={{
            color:
              theme.subText,
            fontSize: 16,
            marginTop: 5
          }}
        >

          {userData?.email}

        </Text>

        {/* DARK MODE */}

        <TouchableOpacity

          style={styles.darkButton}

          onPress={() =>
            setDarkMode(!darkMode)
          }
        >

          <Text style={styles.buttonText}>

            {
              darkMode
              ?
              "Light Mode"
              :
              "Dark Mode"
            }

          </Text>

        </TouchableOpacity>

        {/* JOINED COURSES */}

       {/* JOINED COURSES */}

<Text
  style={[
    styles.sectionTitle,
    {
      color: theme.textColor,
    },
  ]}
>
  Joined Courses
</Text>

{enrolledCourses.length > 0 ? (
  <FlatList
    data={enrolledCourses}
    renderItem={renderCourse}
    keyExtractor={(item) => item.id.toString()}
    scrollEnabled={false}
  />
) : (
  <Text
    style={{
      color: theme.subText,
      marginTop: 10,
    }}
  >
    No enrolled courses
  </Text>
)}

        {/* EDIT PROFILE */}

       <TouchableOpacity
  style={styles.editButton}
  onPress={() =>
    navigation.navigate("EditProfile")
  }
>
  <Text style={styles.buttonText}>
    Edit Profile
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.passwordButton}
  onPress={() =>
    navigation.navigate("ChangePassword")
  }
>
  <Text style={styles.buttonText}>
    Change Password
  </Text>
</TouchableOpacity>
        {/* LOGOUT */}

        <TouchableOpacity

          style={styles.logoutButton}

          onPress={logoutUser}
        >

          <Text style={styles.buttonText}>
            Logout
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
  },

  container: {
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
  },

  category: {
  marginTop: 5,
  color: "#2563eb",
  fontSize: 14,
  fontWeight: "600",
}, 

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  courseCard: {
    width: "100%",
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  courseName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    color: "#2563eb",
    marginTop: 6,
    fontSize: 15,
    fontWeight: "600",
  },

  removeButton: {
    backgroundColor: "red",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft:15
  },

  removeText: {
    color: "#fff",
    fontWeight: "bold",
  },

  darkButton: {
    backgroundColor: "#0f172a",
    padding: 15,
    borderRadius: 14,
    marginTop: 25,
    width: "100%",
    alignItems: "center",
  },

  editButton: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 14,
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },

  passwordButton: {
    backgroundColor: "#7c3aed",
    padding: 15,
    borderRadius: 14,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },

  logoutButton: {
    backgroundColor: "#dc2626",
    padding: 15,
    borderRadius: 14,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

});