import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image
} from "react-native";
import { TeacherContext } from "../context/TeacherContext";

const Teacher = () => {
  const { teachers } = useContext(TeacherContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expert Faculty</Text>
      <Text style={styles.subHeading}>Learn from certified industry practitioners</Text>

      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image 
                source={{ uri: item.avatarUrl }} 
                style={styles.avatar} 
                resizeMode="cover"
              />
              <View style={styles.infoWrapper}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.experienceText}>💼 {item.experience} Experience</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardFooter}>
              <Text style={styles.label}>Specialization:</Text>
              <View style={[styles.badge, { backgroundColor: item.bgStyle || "#f1f5f9" }]}>
                <Text style={[styles.badgeText, { color: item.textStyle || "#475569" }]}>
                  {item.subject}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Teacher;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc", // Modern off-white slate background canvas
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  heading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0f172a", // Deep slate body header
    letterSpacing: -0.5,
  },

  subHeading: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
    marginBottom: 24,
  },

  listContent: {
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26, // Perfect circle layout mask
    backgroundColor: "#e2e8f0", // Subtle grey placeholder background loading color
    borderWidth: 1.5,
    borderColor: "#f1f5f9",
  },

  infoWrapper: {
    marginLeft: 14,
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
  },

  experienceText: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: "#f1f5f9",
    marginVertical: 14,
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#94a3b8",
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  badgeText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
