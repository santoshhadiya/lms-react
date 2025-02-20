import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses,setEnrolledCourses]=useState([])
  const navigate = useNavigate();

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  //fetch enrolled courses
  const fetchEnrolledCourses=async()=>{
   setEnrolledCourses(dummyCourses);
  }

  //caclulate avg rating
  const calculateRating = (course) => {
    if (course.courseRatings.length == 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  //Chapter Time
  const calculateChapterTime = (chapter) => {
    let totalTime = 0;
    chapter.chapterContent.map((lecture) => {
      totalTime += lecture.lectureDuration;
    });
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"] });
  };

  //Course Duration
  const calculateCourseDuration = (course) => {
    let totalTime = 0;
    course.courseContent.map((chapter) => {
      chapter.chapterContent.map((lecture) => {
        totalTime += lecture.lectureDuration;
      });
    });
    return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m"] });
  };

  //Number Of Lectures
  const calculareNoOfLacturs = (course) => {
    let numberOfLectures = 0;
    course.courseContent.map((chapter) => {
      numberOfLectures += chapter.chapterContent.length;
    });
    return numberOfLectures;
  };

  useEffect(() => {
    fetchAllCourses();
    fetchEnrolledCourses();
  }, []);

  const value = {
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculareNoOfLacturs,
    calculateCourseDuration,
    enrolledCourses,
    fetchEnrolledCourses,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
