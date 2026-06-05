import React, { createContext, useState } from "react";

export const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
  const [teachers] = useState([
  {
    id: 1,
    name: "Rahul Sharma",
    subject: "React Native",
    experience: "5 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#eff6ff",
    textStyle: "#2563eb"
  },
  {
    id: 2,
    name: "Anjali Verma",
    subject: "Machine Learning",
    experience: "4 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#f0fdf4",
    textStyle: "#16a34a"
  },
  {
    id: 3,
    name: "Amit Singh",
    subject: "Android Dev",
    experience: "6 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#fef3c7",
    textStyle: "#d97706"
  },
  {
    id: 4,
    name: "Priya Nair",
    subject: "UI/UX Design",
    experience: "5 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#ffa8e433",
    textStyle: "#db2777"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    subject: "Node.js Backend",
    experience: "7 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#f3e8ff",
    textStyle: "#9333ea"
  },
  {
    id: 6,
    name: "Sneha Reddy",
    subject: "Data Science",
    experience: "3 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#ecfeff",
    textStyle: "#0891b2"
  },
  {
    id: 7,
    name: "Arjun Kaplan",
    subject: "Flutter Dev",
    experience: "4 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#eff6ff",
    textStyle: "#2563eb"
  },
  {
    id: 8,
    name: "Meera Joshi",
    subject: "Cyber Security",
    experience: "6 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#fee2e2",
    textStyle: "#dc2626"
  },
  {
    id: 9,
    name: "Rohan Das",
    subject: "DevOps & Cloud",
    experience: "8 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#f0fdf4",
    textStyle: "#0d9488"
  },
  {
    id: 10,
    name: "Kriti Deshmukh",
    subject: "Product Management",
    experience: "5 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#fff7ed",
    textStyle: "#ea580c"
  },
  {
    id: 11,
    name: "Sanjay Singhal",
    subject: "iOS Swift",
    experience: "9 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#f8fafc",
    textStyle: "#475569"
  },
  {
    id: 12,
    name: "Ritu Kapoor",
    subject: "Fullstack Web",
    experience: "4 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#f3e8ff",
    textStyle: "#9333ea"
  },
  {
    id: 13,
    name: "Aditya Roy",
    subject: "Deep Learning",
    experience: "5 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#f0fdf4",
    textStyle: "#16a34a"
  },
  {
    id: 14,
    name: "Tanvi Saxena",
    subject: "Blockchain Tech",
    experience: "3 Years",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    bgStyle: "#ecfeff",
    textStyle: "#0891b2"
  },
  {
    id: 15,
    name: "Nitin Kumar",
    subject: "Database Systems",
    experience: "7 Years",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    bgStyle: "#fef3c7",
    textStyle: "#d97706"
  }
]);

  return (
    <TeacherContext.Provider value={{ teachers }}>
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherProvider;
