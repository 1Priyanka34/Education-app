// src/context/CourseContext.js

import React, {
  createContext,
  useEffect,
  useState
} from "react";

import AsyncStorage from
"@react-native-async-storage/async-storage";

export const CourseContext =
  createContext();

const CourseProvider = ({
  children
}) => {

  const [
    enrolledCourses,
    setEnrolledCourses
  ] = useState([]);

  // LOAD COURSES

  useEffect(() => {

    loadCourses();

  }, []);

  const loadCourses = async () => {

    try {

      const data =
        await AsyncStorage.getItem(
          "enrolledCourses"
        );

      if (data !== null) {

        setEnrolledCourses(
          JSON.parse(data)
        );
      }

    } catch (error) {

      console.log(error);
    }
  };

  // ENROLL COURSE

  const enrollCourse =
    async (course) => {

      try {

        const alreadyJoined =
          enrolledCourses.find(
            item =>
              item.id === course.id
          );

        if (alreadyJoined) {
          return;
        }

        const updatedCourses = [

          ...enrolledCourses,

          course
        ];

        setEnrolledCourses(
          updatedCourses
        );

        await AsyncStorage.setItem(

          "enrolledCourses",

          JSON.stringify(
            updatedCourses
          )
        );

      } catch (error) {

        console.log(error);
      }
    };

  // REMOVE COURSE

  const removeCourse =
    async (id) => {

      try {

        const updatedCourses =
          enrolledCourses.filter(
            item => item.id !== id
          );

        setEnrolledCourses(
          updatedCourses
        );

        await AsyncStorage.setItem(

          "enrolledCourses",

          JSON.stringify(
            updatedCourses
          )
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <CourseContext.Provider
      value={{

        enrolledCourses,

        enrollCourse,

        removeCourse

      }}
    >

      {children}

    </CourseContext.Provider>
  );
};

export default CourseProvider;