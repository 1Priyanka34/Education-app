// import React from "react";
// import { StyleSheet, TouchableOpacity, View, Image} from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Menu = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.menuContainer}>
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={() => navigation.navigate("Course")}>
//         <Image
//           style={styles.iconStyle}
//           source={{
//             uri: "https://img.icons8.com/stickers/90/000000/training.png",
//           }}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={() => navigation.navigate("Student")}>
//         <Image
//           style={styles.iconStyle}
//           source={{
//             uri: "https://img.icons8.com/stickers/90/000000/conference.png",
//           }}
//         />
//       </TouchableOpacity>


//       <TouchableOpacity
//   style={styles.buttonStyle}
//   onPress={() =>
//     navigation.navigate("Teacher")
//   }
// >
//   <Image
//     style={styles.iconStyle}
//     source={{
//       uri: "https://img.icons8.com/color/96/teacher.png"
//     }}
//   />
// </TouchableOpacity>
 
 
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={() => navigation.navigate("About")}>
//         <Image
//           style={styles.iconStyle}
//           source={{
//             uri: "https://img.icons8.com/stickers/90/000000/about.png",
//           }}
//         />
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={() => navigation.navigate("Contact")}>
//         <Image
//           style={styles.iconStyle}
//           source={{
//             uri: "https://img.icons8.com/stickers/90/000000/phone-office.png",
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Menu;

// const styles = StyleSheet.create({
//   menuContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     paddingTop: 12,
//     borderTopWidth: 1,
//     borderTopColor: "#e2e8f0",
//   },

//   buttonStyle: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   iconStyle: {
//     width: 30,
//     height: 30,
//     resizeMode: "contain",
//   },

// });