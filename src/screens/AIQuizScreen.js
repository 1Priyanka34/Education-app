import React, {
  useState,
  useContext,
} from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";

import {
  generateQuiz,
} from "../services/OpenRouterService";

import {
  saveResult,
} from "../services/LeaderboardService";

import {
  AuthContext,
} from "../context/AuthContext";

const AIQuizScreen = ({
  navigation,
}) => {
  const { userData } =
    useContext(AuthContext);

  const [topic, setTopic] =
    useState("");

  const [difficulty,
    setDifficulty] =
    useState("Easy");

  const [quiz, setQuiz] =
    useState([]);

  const [loading,
    setLoading] =
    useState(false);

  const [currentQuestion,
    setCurrentQuestion] =
    useState(0);

  const [answers,
    setAnswers] =
    useState({});

  const createQuiz =
    async () => {
      if (!topic) {
        Alert.alert(
          "Error",
          "Enter Topic"
        );
        return;
      }

      setLoading(true);

      const data =
        await generateQuiz(
          topic,
          difficulty
        );

      setQuiz(data);
      setCurrentQuestion(0);
      setAnswers({});

      setLoading(false);
    };

  const selectAnswer =
    (option) => {
      setAnswers({
        ...answers,
        [currentQuestion]:
          option,
      });
    };

  const nextQuestion =
    () => {
      if (
        currentQuestion <
        quiz.length - 1
      ) {
        setCurrentQuestion(
          currentQuestion + 1
        );
      }
    };

  const previousQuestion =
    () => {
      if (
        currentQuestion > 0
      ) {
        setCurrentQuestion(
          currentQuestion - 1
        );
      }
    };

  const submitQuiz =
    async () => {
      let score = 0;

      quiz.forEach(
        (q, index) => {
          if (
            answers[index] ===
            q.answer
          ) {
            score++;
          }
        }
      );

      const percentage =
        (
          (score /
            quiz.length) *
          100
        ).toFixed(0);

      const status =
        percentage >= 34
          ? "Passed"
          : "Failed";

      await saveResult({
        name:
          userData?.name ||
          "Student",

        topic,
        difficulty,
        score,
        percentage,
        status,
      });

      navigation.navigate(
        "Result",
        {
          score,
          percentage,
          status,
          total:
            quiz.length,
        }
      );
    };

  return (
    <ScrollView
      style={styles.container}
    >
      <Text
        style={styles.heading}
      >
        AI Quiz Generator
      </Text>

      <TextInput
        placeholder="Enter Topic"
        value={topic}
        onChangeText={setTopic}
        style={styles.input}
      />

      <Text
        style={styles.label}
      >
        Difficulty
      </Text>

      <View
        style={
          styles.diffContainer
        }
      >
        {[
          "Easy",
          "Medium",
          "Hard",
        ].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.diffBtn,
              difficulty ===
                item &&
                styles.activeDiff,
            ]}
            onPress={() =>
              setDifficulty(
                item
              )
            }
          >
            <Text
              style={{
                color:
                  difficulty ===
                  item
                    ? "#fff"
                    : "#2563eb",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={
          styles.generateBtn
        }
        onPress={
          createQuiz
        }
      >
        <Text
          style={styles.btnText}
        >
          Generate Quiz
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#2563eb"
        />
      )}

      {quiz.length > 0 && (
        <View
          style={styles.card}
        >
          <Text
            style={
              styles.questionNo
            }
          >
            Question{" "}
            {currentQuestion + 1}
            /{quiz.length}
          </Text>

          <Text
            style={
              styles.question
            }
          >
            {
              quiz[
                currentQuestion
              ]?.question
            }
          </Text>

          {quiz[
            currentQuestion
          ]?.options.map(
            (
              option,
              index
            ) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  answers[
                    currentQuestion
                  ] ===
                    option &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  selectAnswer(
                    option
                  )
                }
              >
                <Text
                  style={
                    styles.optionText
                  }
                >
                  {option}
                </Text>
              </TouchableOpacity>
            )
          )}

          <View
            style={
              styles.navigationRow
            }
          >
            <TouchableOpacity
              style={
                styles.prevBtn
              }
              onPress={
                previousQuestion
              }
            >
              <Text
                style={
                  styles.btnText
                }
              >
                Previous
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                styles.nextBtn
              }
              onPress={
                nextQuestion
              }
            >
              <Text
                style={
                  styles.btnText
                }
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={
              styles.submitBtn
            }
            onPress={
              submitQuiz
            }
          >
            <Text
              style={
                styles.btnText
              }
            >
              Submit Quiz
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default AIQuizScreen;

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#f8fafc",
      padding: 15,
    },

    heading: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
    },

    input: {
      backgroundColor:
        "#fff",
      padding: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ddd",
    },

    label: {
      marginTop: 20,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: "bold",
    },

    diffContainer: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      marginBottom: 20,
    },

    diffBtn: {
      borderWidth: 1,
      borderColor:
        "#2563eb",
      width: "30%",
      padding: 12,
      borderRadius: 10,
      alignItems: "center",
    },

    activeDiff: {
      backgroundColor:
        "#2563eb",
    },

    generateBtn: {
      backgroundColor:
        "#2563eb",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },

    card: {
      backgroundColor:
        "#fff",
      padding: 20,
      marginTop: 20,
      borderRadius: 15,
    },

    questionNo: {
      color: "#64748b",
    },

    question: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 15,
    },

    option: {
      borderWidth: 1,
      borderColor:
        "#ddd",
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
    },

    selectedOption: {
      backgroundColor:
        "#dbeafe",
      borderColor:
        "#2563eb",
    },

    optionText: {
      fontSize: 16,
    },

    navigationRow: {
      flexDirection: "row",
      justifyContent:
        "space-between",
      marginTop: 20,
    },

    prevBtn: {
      backgroundColor:
        "#f59e0b",
      width: "48%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },

    nextBtn: {
      backgroundColor:
        "#2563eb",
      width: "48%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },

    submitBtn: {
      backgroundColor:
        "#16a34a",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
    },

    btnText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });