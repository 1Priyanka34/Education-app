import React from "react";

import { createBottomTabNavigator }
from "@react-navigation/bottom-tabs";

import Ionicons from
"react-native-vector-icons/Ionicons";

// import HomePage from "../screens/HomePage";
import Course from "../screens/Course";
// import Teacher from "../screens/Teacher";
import Student from "../screens/Student";
import Profile from "../screens/Profile";
import Contact from "../screens/Contact";
import HomePage from "../screens/HomePage";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarActiveTintColor: "#2563eb",

        tabBarInactiveTintColor: "gray",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarIcon: ({ color, size }) => {

          let iconName;

          if (route.name === "Contact") {
            iconName = "call";
          }

          else if (route.name === "Courses") {
            iconName = "book";
          }

          else if (route.name === "Home") {
            iconName = "home";
          }

          else if (route.name === "Students") {
            iconName = "school";
          }

          else if (route.name === "Profile") {
            iconName = "person";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

      })}
    >

      <Tab.Screen
        name="Home"
        component={HomePage}
        initialParams={{ channelName: "eduLearn Portal" }}
      />

      <Tab.Screen
        name="Courses"
        component={Course}
      />

      <Tab.Screen
        name="Students"
        component={Student}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;