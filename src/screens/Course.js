import React, {
  useState,
  useContext,
  useEffect
} from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";

import axios from "axios";

import { CourseContext } from "../context/CourseContext";

const Course = ({ navigation }) => {

  const { enrollCourse, enrolledCourses } =
    useContext(CourseContext);

  const [courses, setCourses] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    "Web",
    "AI/ML",
    "Android",
    "Design",
    "Security"
  ];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {

      const response = await axios.get(
        "http://localhost:3000/courses"
      );

      setCourses(response.data);

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "Unable to load courses"
      );
    }
  };

  const getImage = (imageName) => {

    switch (imageName) {

      case "web.jpg":
        return require("../../assets/web.jpg");

      case "graphic.jpg":
        return require("../../assets/graphic.jpg");

      case "logo.jpg":
        return require("../../assets/logo.jpg");

      case "eth.jpg":
        return require("../../assets/eth.jpg");

      default:
        return require("../../assets/logo.jpg");
    }
  };

  const filteredCourses = courses.filter((item) => {

    const searchMatch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  const joinCourse = (item) => {

    const alreadyJoined =
      enrolledCourses.find(
        (course) => course.id === item.id
      );

    if (alreadyJoined) {

      Alert.alert(
        "Already Joined",
        "You already enrolled in this course"
      );

      return;
    }

    enrollCourse(item);

    Alert.alert(
      "Success",
      "Course Enrolled Successfully"
    );
  };

  const courseCard = ({ item }) => {

    return (

      <View style={styles.card}>

        <Image
          source={getImage(item.image)}
          style={styles.cardImage}
          resizeMode="cover"
        />

        <View style={styles.cardBody}>

          <Text style={styles.courseTitle}>
            {item.title}
          </Text>

          <Text style={styles.courseDescription}>
            {item.description}
          </Text>

          <View style={styles.buttonContainer}>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() =>
                navigation.navigate(
                  "CourseDetails",
                  { course: item }
                )
              }
            >
              <Text style={styles.detailsText}>
                Details
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.joinButton}
              onPress={() =>
                joinCourse(item)
              }
            >
              <Text style={styles.joinText}>
                Join Course
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.footer}>

            <Text style={styles.price}>
              ₹ {item.price}
            </Text>

            <Text style={styles.student}>
              2.5k+ Students
            </Text>

          </View>

        </View>

      </View>
    );
  };

  return (

    <View style={styles.container}>

      <Text style={styles.headerText}>
        Explore Courses
      </Text>

      <TextInput
        placeholder="Search Courses..."
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <View style={styles.categoryListContainer}>

        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (

            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item &&
                  styles.activeCategory
              ]}
              onPress={() =>
                setSelectedCategory(item)
              }
            >
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === item &&
                  { color: "#fff" }
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>

          )}
        />

      </View>

      <FlatList
        data={filteredCourses}
        renderItem={courseCard}
        keyExtractor={(item) =>
          item.id.toString()
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
          paddingTop: 5
        }}
      />

    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 14,
    paddingTop: 10,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#0f172a",
  },

  searchInput: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
    marginBottom: 18,
    fontSize: 15,
    elevation: 3,
  },

  categoryListContainer: {
    minHeight: 60,
    marginBottom: 10,
  },

  categoryButton: {
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 30,
    marginRight: 10,
  },

  activeCategory: {
    backgroundColor: "#2563eb",
  },

  categoryButtonText: {
    fontWeight: "bold",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 22,
    marginBottom: 22,
    overflow: "hidden",
    elevation: 5,
  },

  cardImage: {
    width: "100%",
    height: 180,
  },

  cardBody: {
    padding: 18,
  },

  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
  },

  courseDescription: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 23,
    color: "#64748b",
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  detailsButton: {
    flex: 1,
    backgroundColor: "#e2e8f0",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 10,
  },

  joinButton: {
    flex: 1,
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  detailsText: {
    fontWeight: "bold",
    color: "#000",
  },

  joinText: {
    fontWeight: "bold",
    color: "#fff",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
  },

  student: {
    color: "gray",
  },
});