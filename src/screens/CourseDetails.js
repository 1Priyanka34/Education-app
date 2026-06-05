// CourseDetails.js

import React, {
  useContext,
  useEffect,
  useState
} from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";

import axios from "axios";

import { CourseContext } from "../context/CourseContext";
import { ThemeContext } from "../context/ThemeContext";

const CourseDetails = ({ route }) => {

  const { course } = route.params;

  const {
    enrollCourse,
    enrolledCourses
  } = useContext(CourseContext);

  const { theme } =
    useContext(ThemeContext);

  const [review, setReview] =
    useState("");

  const [reviews, setReviews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [editingId, setEditingId] =
    useState(null);

  // IMAGE MAPPING

  const imageMap = {
    "web.jpg": require("../../assets/web.jpg"),
    "graphic.jpg": require("../../assets/graphic.jpg"),
    "logo.jpg": require("../../assets/logo.jpg"),
    "eth.jpg": require("../../assets/eth.jpg"),
  };

  // GET REVIEWS

  const getReviews = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:3000/reviews"
        );

      const filteredReviews =
        response.data.filter(
          item =>
            item.courseId === course.id
        );

      setReviews(filteredReviews);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    getReviews();

  }, []);

  // ENROLL

  const handleEnroll = () => {

    const alreadyJoined =
      enrolledCourses.find(
        item =>
          item.id === course.id
      );

    if (alreadyJoined) {

      Alert.alert(
        "Already Enrolled"
      );

      return;
    }

    enrollCourse(course);

    Alert.alert(
      "Success",
      "Course Enrolled Successfully"
    );
  };

  // ADD OR UPDATE REVIEW

  const addReview = async () => {

    if (!review.trim()) {

      Alert.alert(
        "Error",
        "Please enter review"
      );

      return;
    }

    try {

      if (editingId) {

        await axios.put(
          `http://localhost:3000/reviews/${editingId}`,
          {
            id: editingId,
            courseId: course.id,
            courseName: course.title,
            review: review,
          }
        );

        Alert.alert(
          "Success",
          "Review Updated"
        );

        setEditingId(null);

      } else {

        await axios.post(
          "http://localhost:3000/reviews",
          {
            courseId: course.id,
            courseName: course.title,
            review: review,
          }
        );

        Alert.alert(
          "Success",
          "Review Added"
        );
      }

      setReview("");

      getReviews();

    } catch (error) {

      console.log(error);
    }
  };

  // EDIT REVIEW

  const editReview = item => {

    setReview(item.review);

    setEditingId(item.id);
  };

  // DELETE REVIEW
const deleteReview = async (id) => {

  try {

    console.log("Deleting Review ID:", id);

    await axios.delete(
      `http://localhost:3000/reviews/${id}`
    );

    setReviews(prevReviews =>
      prevReviews.filter(
        item => item.id !== id
      )
    );

    Alert.alert(
      "Success",
      "Review Deleted Successfully"
    );

  } catch (error) {

    console.log(
      "DELETE ERROR:",
      error.response?.data ||
      error.message
    );

    Alert.alert(
      "Error",
      "Failed to delete review"
    );
  }
};

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Image
        source={
          imageMap[course.image]
        }
        style={styles.courseImage}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>

        <Text style={styles.courseTitle}>
          {course.title}
        </Text>

        <Text style={styles.priceText}>
          ₹ {course.price}
        </Text>

        <Text style={styles.description}>
          {course.description}
        </Text>

        <Text style={styles.sectionTitle}>
          Technologies Covered
        </Text>

        <View style={styles.techContainer}>

          <View style={styles.techTag}>
            <Text style={styles.techText}>
              {course.course1}
            </Text>
          </View>

          <View style={styles.techTag}>
            <Text style={styles.techText}>
              {course.course2}
            </Text>
          </View>

          <View style={styles.techTag}>
            <Text style={styles.techText}>
              {course.course3}
            </Text>
          </View>

        </View>

        <View style={styles.infoCard}>

          <Text style={styles.infoTitle}>
            Course Features
          </Text>

          <Text style={styles.infoText}>
            • 40+ Hours Video Lectures
          </Text>

          <Text style={styles.infoText}>
            • Live Projects Included
          </Text>

          <Text style={styles.infoText}>
            • Placement Assistance
          </Text>

          <Text style={styles.infoText}>
            • Certificate Included
          </Text>

          <Text style={styles.infoText}>
            • Lifetime Access
          </Text>

        </View>

        <Text style={styles.sectionTitle}>
          Write Review
        </Text>

        <TextInput
          placeholder="Write your review..."
          placeholderTextColor="gray"
          value={review}
          onChangeText={setReview}
          multiline
          style={styles.reviewInput}
        />

        <TouchableOpacity
          style={styles.reviewButton}
          onPress={addReview}
        >

          <Text style={styles.reviewButtonText}>

            {
              editingId
                ? "Update Review"
                : "Submit Review"
            }

          </Text>

        </TouchableOpacity>

        <Text style={styles.sectionTitle}>
          Student Reviews
        </Text>

        {
          loading ?

            <ActivityIndicator
              size="large"
              color="#2563eb"
            />

            :

            reviews.length > 0 ?

             reviews.map(item => (

  <View
    key={item.id}
    style={styles.reviewCard}
  >

    <Text style={styles.reviewText}>
      {item.review}
    </Text>

    <View style={styles.actionContainer}>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => editReview(item)}
      >
        <Text style={styles.actionText}>
          Edit
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteReview(item.id)}
      >
        <Text style={styles.actionText}>
          Delete
        </Text>
      </TouchableOpacity>

    </View>

  </View>

))

              :

              <Text>
                No reviews available
              </Text>
        }

        <TouchableOpacity
          style={styles.enrollButton}
          onPress={handleEnroll}
        >

          <Text style={styles.enrollButtonText}>
            Enroll Now
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  courseImage: {
    width: "100%",
    height: 260,
  },

  contentContainer: {
    padding: 20,
  },

  courseTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },

  priceText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2563eb",
    marginTop: 12,
  },

  description: {
    fontSize: 16,
    lineHeight: 26,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },

  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  techTag: {
    backgroundColor: "#dbeafe",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  techText: {
    color: "#1d4ed8",
    fontWeight: "bold",
  },

  infoCard: {
    backgroundColor: "#fff",
    marginTop: 25,
    padding: 20,
    borderRadius: 18,
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoText: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 12,
  },

  reviewInput: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
    minHeight: 100,
    textAlignVertical: "top",
  },

  reviewButton: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
  },

  reviewButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  reviewCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  reviewText: {
    fontSize: 15,
    color: "#334155",
  },

  actionContainer: {
  flexDirection: "row",
  justifyContent: "flex-end",
  margin:2
},

editButton: {
  backgroundColor: "#2563eb",
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 8,
  marginRight: 10,
},

deleteButton: {
  backgroundColor: "#dc2626",
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 8,
},

actionText: {
  color: "#ffffff",
  fontWeight: "bold",
  fontSize: 14,
},

  enrollButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },

  enrollButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

});