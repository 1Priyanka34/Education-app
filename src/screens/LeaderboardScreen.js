import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { deleteResult, getLeaderboard } from "../services/LeaderboardService";


const LeaderboardScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData =
    async () => {
      const result =
        await getLeaderboard();
      setData(result);
    };

  const handleDelete = async (id) => {
    console.log("handleDelete called");
    console.log("ID:", id);

    try {
      await deleteResult(id);

      console.log("deleteResult finished");

      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("HANDLE DELETE ERROR", error);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.rank}>
          #{index + 1}
        </Text>

        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={async () => {
            console.log("Button Pressed");

            await handleDelete(item.id);
          }}
        >
          <Text style={styles.deleteText}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.info}>
        Topic: {item.topic}
      </Text>

      <Text style={styles.info}>
        Difficulty: {item.difficulty}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.score}>
          Score: {item.score}
        </Text>

        <Text style={styles.percent}>
          {item.percentage}%
        </Text>
      </View>
    </View>
  );

  return (
    <View
      style={
        styles.container
      }
    >
      <Text
        style={
          styles.title
        }
      >
        🏆
        Leaderboard
      </Text>

      <FlatList
        data={data}
        keyExtractor={(
          item
        ) =>
          item.id
        }
        renderItem={
          renderItem
        }
      />
    </View>
  );
};

export default
  LeaderboardScreen;

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor:
        "#f8fafc",
    },

    title: {
      fontSize: 28,
      fontWeight:
        "bold",
      textAlign:
        "center",
      color:
        "#2563eb",
      marginBottom: 15,
    },

    card: {
      backgroundColor:
        "#fff",
      padding: 15,
      borderRadius: 15,
      marginBottom: 10,
      elevation: 4,
    },

    header: {
      flexDirection:
        "row",
      justifyContent:
        "space-between",
    },

    rank: {
      fontSize: 18,
      fontWeight:
        "bold",
      color:
        "#2563eb",
    },

    deleteBtn: {
      backgroundColor:
        "#ef4444",
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
    },

    deleteText: {
      color:
        "#fff",
      fontWeight:
        "bold",
    },

    name: {
      fontSize: 22,
      fontWeight:
        "bold",
      marginTop: 10,
    },

    info: {
      color:
        "#64748b",
      marginTop: 4,
    },

    footer: {
      flexDirection:
        "row",
      justifyContent:
        "space-between",
      marginTop: 15,
    },

    score: {
      fontWeight:
        "600",
    },

    percent: {
      color:
        "#16a34a",
      fontWeight:
        "bold",
      fontSize: 18,
    },
  });