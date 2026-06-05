import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../screens/Register";
import Login from "../screens/Login";
import HomePage from "../screens/HomePage";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Course from "../screens/Course";
import Student from "../screens/Student";
import CourseDetails from "../screens/CourseDetails";
import Teacher from "../screens/Teacher";
import BottomTabNavigator from "./BottomTabNavigator";
import EditProfile from "../screens/EditProfile";
import ChangePassword from "../screens/ChangePassword";
import SplashScreen from "../screens/SplashScreen";
// import Admin from "../screens/Admin";
// import AddCourse from "../screens/AddCourse";
// import ManageCourses from "../screens/ManageCourses";
// import ManageStudents from "../screens/ManageStudents";
import AIQuizScreen from "../screens/AIQuizScreen";
import ResultScreen from "../screens/ResultScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#2563eb",
        }}
      >

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: "SplashScreen",
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
        
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
          }}
        />


        <Stack.Screen
          name="HomePage"
          options={{
            headerShown: false,
          }}>
          {(props) => (
            <HomePage
              {...props}
              channelName={"EduLearn Portal"}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            title: "Courses",
          }}
        />

        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            title: "Course Details",
          }}
        />

        <Stack.Screen
          name="Student"
          component={Student}
          options={{
            title: "Students",
          }}
        />

        <Stack.Screen
  name="AIQuiz"
  component={AIQuizScreen}
/>

<Stack.Screen
name="Result"
component={ResultScreen}
/>

<Stack.Screen
name="Leaderboard"
component={LeaderboardScreen}
/>
{/* 
<Stack.Screen
  name="Admin"
  component={Admin}
/>

<Stack.Screen
  name="AddCourse"
  component={AddCourse}
/>

<Stack.Screen
  name="ManageCourses"
  component={ManageCourses}
/>

<Stack.Screen
  name="ManageStudents"
  component={ManageStudents}
/> */}

        <Stack.Screen
          name="Teacher"
          component={Teacher}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About",
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
          }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;