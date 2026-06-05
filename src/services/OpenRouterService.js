import axios from "axios";

const API_KEY = "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";

export const generateQuiz = async (
  topic,
  difficulty
) => {
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",

        messages: [
          {
            role: "user",
            content: `
Generate exactly 20 MCQ questions on ${topic}.

Difficulty Level: ${difficulty}

Return ONLY valid JSON.

[
 {
   "question":"Question",
   "options":["A","B","C","D"],
   "answer":"Correct Answer"
 }
]
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const text =
      response.data.choices[0].message.content;

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.log(
      error.response?.data || error
    );
    return [];
  }
};