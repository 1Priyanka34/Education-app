import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,Linking} from "react-native";

// import Menu from "../component/Menu";

const About = () => {
  const openWebsite = () => {
    Linking.openURL("https://www.google.com");
  };

  const openInstagram = () => {
    Linking.openURL("https://www.instagram.com");
  };

  const openYoutube = () => {
    Linking.openURL("https://www.youtube.com");
  };

  const openGithub = () => {
    Linking.openURL("https://github.com");
  };

  return (
    <View style={styles.mainContainer}>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}>

        {/* HEADER */}

        <View style={styles.topContainer}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={styles.logo}
          />

          <Text style={styles.appName}>
            EduLearn Portal
          </Text>

          <Text style={styles.tagline}>
            Learn • Grow • Achieve
          </Text>

        </View>

        {/* ABOUT CARD */}

        <View style={styles.card}>

          <Text style={styles.heading}>
            About Our Platform
          </Text>

          <Text style={styles.description}>
            EduLearn Portal is a modern education platform
            designed to help students learn advanced skills
            with interactive courses, expert mentors, and
            real-world projects.
          </Text>

          <Text style={styles.description}>
            Our mission is to provide high-quality education
            in Web Development, Android Development,
            Machine Learning, UI/UX Design, and many more
            technologies.
          </Text>
        </View>

        {/* FEATURES */}

        <View style={styles.card}>
          <Text style={styles.heading}>
            Why Choose Us ?
          </Text>

          <Text style={styles.feature}>
            ✅ Interactive Learning Experience
          </Text>

          <Text style={styles.feature}>
            ✅ Expert Mentors & Guidance
          </Text>

          <Text style={styles.feature}>
            ✅ Industry Level Projects
          </Text>

          <Text style={styles.feature}>
            ✅ Placement Preparation
          </Text>

          <Text style={styles.feature}>
            ✅ Modern UI & Smart Learning
          </Text>

        </View>

        {/* LINKS */}

        <View style={styles.card}>
          <Text style={styles.heading}>
            Connect With Us
          </Text>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={openWebsite}>
            <Text style={styles.linkText}>
              🌐 Visit Website
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={openInstagram}
          >
            <Text style={styles.linkText}>
              📸 Instagram
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={openYoutube}
          >
            <Text style={styles.linkText}>
              ▶ YouTube Channel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={openGithub}
          >
            <Text style={styles.linkText}>
              💻 GitHub Profile
            </Text>
          </TouchableOpacity>

        </View>

        {/* FOOTER */}

        <Text style={styles.footer}>
          © 2026 EduLearn Portal
        </Text>

      </ScrollView>

      <View style={styles.menuContainer}>
        {/* <Menu /> */}
      </View>

    </View>
  );
};

export default About;

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  container: {
    flex: 1,
  },

  topContainer: {
    backgroundColor: "#2563eb",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#ffffff",
  },

  appName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 15,
  },

  tagline: {
    fontSize: 16,
    color: "#dbeafe",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 15,
  },

  description: {
    fontSize: 15,
    color: "#64748b",
    lineHeight: 24,
    marginBottom: 12,
  },

  feature: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 12,
  },

  linkButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  linkText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    fontSize: 14,
    color: "#64748b",
    marginVertical: 30,
  },

  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
  },

});