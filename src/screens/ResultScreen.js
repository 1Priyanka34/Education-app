import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ResultScreen = ({
  route,
  navigation,
}) => {
  const {
    score = 0,
    percentage = 0,
    status = "Failed",
    total = 0,
  } = route?.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Quiz Result
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Score
        </Text>

        <Text style={styles.score}>
          {score} / {total}
        </Text>

        <Text style={styles.label}>
          Percentage
        </Text>

        <Text style={styles.percent}>
          {percentage}%
        </Text>

        <Text
          style={[
            styles.status,
            {
              color:
                status === "Passed"
                  ? "green"
                  : "red",
            },
          ]}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "Leaderboard"
          )
        }
      >
        <Text style={styles.buttonText}>
          View Leaderboard
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            "AIQuiz"
          )
        }
      >
        <Text style={styles.buttonText}>
          Generate New Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },

  label: {
    fontSize: 18,
    color: "#64748b",
    marginTop: 10,
  },

  score: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#2563eb",
  },

  percent: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#16a34a",
    marginTop: 10,
  },

  status: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#2563eb",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});