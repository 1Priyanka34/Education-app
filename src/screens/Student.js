import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/student"
      );
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size="large"
          color="#2563eb"
        />
      </View>
    );
  }

  const renderStudent = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.info}>
            📧 {item.email}
          </Text>

          <Text style={styles.info}>
            📱 {item.mobile}
          </Text>

          <Text style={styles.info}>
            🌐 {item.website}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Students Dashboard
        </Text>

        <Text style={styles.subHeader}>
          {students.length} Registered Students
        </Text>
      </View>

      <FlatList
        data={students}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </View>
  );
};

export default Student;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    marginBottom: 20,
    backgroundColor:"rgb(251, 248, 248)"
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0f172a",
  },

  subHeader: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 4,
    marginLeft:10
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,

    elevation: 6,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#2563eb",
  },

  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },

  info: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 4,
  },

  description: {
    marginTop: 15,
    fontSize: 14,
    lineHeight: 22,
    color: "#64748b",
  },
});