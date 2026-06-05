import axios from "axios";

const BASE_URL =
  "http://localhost:3000/leaderboard";

export const saveResult = async (
  result
) => {
  const response =
    await axios.post(
      BASE_URL,
      result
    );

  return response.data;
};

export const getLeaderboard =
  async () => {
    const response =
      await axios.get(
        BASE_URL
      );

    return response.data.sort(
      (a, b) =>
        Number(
          b.percentage
        ) -
        Number(
          a.percentage
        )
    );
  };

export const deleteResult =
  async (id) => {
    console.log(
      "Deleting ID:",
      id
    );

    const response =
      await axios.delete(
        `${BASE_URL}/${id}`
      );

    console.log(
      "Delete Success"
    );

    return response.data;
  };