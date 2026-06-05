import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import About from "./About";
import Teacher from "./Teacher";

const HomePage = ({ navigation, route }) => {
  const channelName = route?.params?.channelName || "Education App"; 
  const { setIsLoggedIn, userData } = useContext(AuthContext);

  const [activeSubView, setActiveSubView] = useState("home");

  if (activeSubView === "about") {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setActiveSubView("home")}
          >
            <Text style={styles.backButtonText}>← Back to Home</Text>
          </TouchableOpacity>
        </View>
        <About />
      </View>
    );
  }

  if (activeSubView === "teacher") {
    return (
      <View style={styles.rootContainer}>
        {/* Back Button Header */}
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setActiveSubView("home")}
          >
            <Text style={styles.backButtonText}>← Back to Home</Text>
          </TouchableOpacity>
        </View>
        <Teacher />
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* TOP HERO BANNER */}
        <View style={styles.homeTop}>
          <Image
            style={styles.img}
            source={require("../../assets/logo.jpg")}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>Welcome to,</Text>
            <Text style={styles.titleText}>{channelName}</Text>
          </View>
        </View>

        {/* WELCOME SUMMARY CARD */}
        <View style={styles.cardContainer}>
          <Text style={styles.sectionTitle}>About Our Platform</Text>
          <Text style={styles.descriptionText}>
            Empowering your learning journey with interactive chat networks,
            real-time peer collaborations, and expert-led discussions.
          </Text>
        </View>

        <View style={styles.exploreSection}>
          <Text style={styles.exploreHeading}>Explore Platform</Text>
          <Text style={styles.exploreSubheading}>Click below to find more information</Text>

          <div style={{ display: "none" }}>To know more about this Platform</div>

          <View style={styles.buttonGrid}>
            {/* About Card Button */}
            <TouchableOpacity
              style={[styles.gridButton, styles.aboutButtonGradient]}
              onPress={() => setActiveSubView("about")}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonEmoji}>🌐</Text>
              <Text style={styles.buttonMainText}>About Us</Text>
              <Text style={styles.buttonSubText}>Learn our story</Text>
            </TouchableOpacity>

            {/* Teacher Card Button */}
            <TouchableOpacity
              style={[styles.gridButton, styles.teacherButtonGradient]}
              onPress={() => setActiveSubView("teacher")}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonEmoji}>🎓</Text>
              <Text style={styles.buttonMainText}>Our Faculty</Text>
              <Text style={styles.buttonSubText}>Meet the experts</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.aiStyles}
            onPress={() => navigation.navigate("AIQuiz")}
          >
            <Text style={styles.aiText}>
              Generate AI Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f8fafc", // Modern off-white slate background
  },

  mainContainer: {
    flex: 1,
  },

  homeTop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0569f6",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

  },

   aiStyles: {
  backgroundColor: "#7c3aed", 
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 14,
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 12,
},

aiText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  letterSpacing: 0.5,
}, 

  img: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: "#ffffff",
  },

  headerTextContainer: {
    marginLeft: 16,
  },

  welcomeText: {
    fontSize: 14,
    color: "#e0f2fe",
    fontWeight: "500",
  },

  titleText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.5,
  },

  cardContainer: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: -20, // Negative margin overlapping hero banner beautifully
    padding: 24,
    borderRadius: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },

  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#475569",
  },

  subHeader: {
    backgroundColor: "#101ee6",
    paddingTop: 30,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8

  },

  backButton: {
    alignSelf: "flex-start",
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#f9fbfd",
  },

  backButtonText: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 14,
  },

  exploreSection: {
    marginTop: 32,
    paddingHorizontal: 20,
  },

  exploreHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
  },

  exploreSubheading: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
    marginBottom: 16,
  },

  buttonGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  gridButton: {
    width: "48%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0"
  },

  buttonEmoji: {
    fontSize: 28,
    marginBottom: 12,
  },

  buttonMainText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
  },

  buttonSubText: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
  },
});
