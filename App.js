// whatsapp chat app

// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import Main from "./component/Main";
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <Main />
//     </SafeAreaProvider>
//   );
// }

// phone calls app

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialIcons } from "@expo/vector-icons";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import CallsScreen from "./phonecalls/CallsScreen";
// import DialPadScreen from "./phonecalls/DialPadScreen";
// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
//           <Tab.Screen
//             name="Calls"
//             component={CallsScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialIcons name="call" size={size} color={color} />
//               ),
//             }}
//           />

//           <Tab.Screen
//             name="DialPad"
//             component={DialPadScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialIcons name="dialpad" size={size} color={color} />
//               ),
//             }}
//           />

//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }


//   User todo app

// import 'react-native-gesture-handler';
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import DrawerNavigator from './usertodo/navigation/DrawerNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// }

import React from "react";
// import StackNavigator from "./educationApp/navigation/StackNavigator";
import StackNavigator from "./src/navigation/StackNavigator";
import AuthProvider from "./src/context/AuthContext";
import TeacherProvider from "./src/context/TeacherContext";
import ThemeProvider from "./src/context/ThemeContext";
import CourseProvider from "./src/context/CourseContext";// import StackNavigation from "./practice/form/StackNavigation";
// import ContactForm from "./practice/form/ContactForm";
// import Counter from "./practice/Counter";
//import RandomColor from "./practice/RandomColor";
// import NetflixCard from "./practice/NetflixCard";
// import Practice from "./practice/Practice";
// import FlatlistDemo from "./practice/FlatlistDemo";

const App = () =>{
  return(
    // <Practice/>
    // <FlatlistDemo/>
    // <NetflixCard/>
    // <Counter/>
    // <RandomColor/>
    // <ContactForm/>
    // <StackNavigation/>
   <CourseProvider>

  <ThemeProvider>

    <AuthProvider>

      <TeacherProvider>

        <StackNavigator />

      </TeacherProvider>

    </AuthProvider>

  </ThemeProvider>

</CourseProvider>
  )
}

export default App;



// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, StyleSheet } from 'react-native';
// import HomePage from './src/screens/HomePage';
// import Course from './src/screens/Course';
// import Student from './src/screens/Student';
// import About from './src/screens/About';
// import Contact from './src/screens/Contact';
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='HomePage'>
//         <Stack.Screen
//           name="HomePage"
//           options={{
//             headerShown: false,
//           }}
//         >
//           {(props) => (
//             <HomePage
//               {...props}
//               channelName={"EduLearn Portal"}
//             />
//           )}
//         </Stack.Screen>

//         <Stack.Screen
//           name="Course"
//           component={Course}
//           options={{
//             headerTitle: "Courses",
//             headerTintColor: "#0775f4",
//             headerTitleAlign: "center",

//             headerTitleStyle: {
//               fontSize: 24,
//               fontWeight: "bold",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Student"
//           component={Student}
//           options={{
//             headerTintColor: "#0775f4",
//             headerTitleAlign: "center",

//             headerTitleStyle: {
//               fontSize: 24,
//               fontWeight: "bold",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="About"
//           component={About}
//           options={{
//             headerTintColor: "#0775f4",
//             headerTitleAlign: "center",

//             headerTitleStyle: {
//               fontSize: 24,
//               fontWeight: "bold",
//             },
//           }}
//         />

//         <Stack.Screen
//           name="Contact"
//           component={Contact}
//           options={{
//             headerTintColor: "#0775f4",
//             headerTitleAlign: "center",

//             headerTitleStyle: {
//               fontSize: 24,
//               fontWeight: "bold",
//             },
//           }}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

