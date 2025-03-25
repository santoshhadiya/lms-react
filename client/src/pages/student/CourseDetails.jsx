import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import assets from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Loading from "../../components/student/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculareNoOfLacturs,
    calculateCourseDuration,
  } = useContext(AppContext);
  const [courseData, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const matchId = () => {
      const findCourse = allCourses.find((course) => course._id === id);
      if (findCourse) {
        setCourse(findCourse);
      } else {
        setCourse(null);
      }
      setLoading(false);
    };

    matchId();
  }, [id, allCourses]);

  if (loading) {
    return <Loading />;
  }

  if (!courseData) {
    return <Loading />;
  }

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  return (
    <>
      <div className="px-6 md:px-10 lg:px-[110px] py-10 w-full bg-gradient-to-b from-cyan-100/70">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left */}
          <div className="w-full lg:w-[55%]">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              {courseData.courseTitle}
            </h1>

            <p
              className="text-gray-600 mb-4 text-sm md:text-base"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription.slice(0, 200),
              }}
            ></p>
            {/* Course Info */}
            <div className="flex flex-wrap items-center mb-4 text-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < Math.floor(calculateRating(courseData))
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                ))}
              </div>
              <span className="ml-2 text-blue-500">
                ({courseData.courseRatings.length} ratings)
              </span>
              <span className="ml-4 text-gray-500">
                {calculareNoOfLacturs(courseData)} lectures
              </span>
              <span className="ml-4 text-gray-500">
                {calculateCourseDuration(courseData)}
              </span>
            </div>

            {/* Course Structure */}
            <div className="rounded-lg">
              <h2 className="text-lg md:text-xl font-bold mb-4">Course Structure</h2>
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="mb-4 border border-gray-300 rounded overflow-hidden"
                >
                  <div
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                    onClick={() => toggleChapter(chapter.chapterId)}
                  >
                    <div className="flex items-center">
                      <img
                        src={
                          expandedChapters[chapter.chapterId]
                            ? "https://icons.veryicon.com/png/o/miscellaneous/unionpay-digital-marketing/up-arrow-thin.png"
                            : assets.down_arrow_icon
                        }
                        alt="arrow"
                        className="w-4 h-4 mr-2"
                      />
                      <span className="font-medium">{chapter.chapterTitle}</span>
                    </div>
                    <span className="text-gray-500">
                      {chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}
                    </span>
                  </div>
                  {expandedChapters[chapter.chapterId] && (
                    <div className="pt-2 pl-4 px-3 bg-white">
                      {chapter.chapterContent.map((lecture, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2">
                          <div className="flex items-center">
                            <img src={assets.play_icon} alt="play" className="w-4 h-4 mr-2" />
                            <span className="text-sm md:text-base">{lecture.lectureTitle}</span>
                          </div>
                          <span className="text-gray-500 text-sm">
                            {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                              units: ["h", "m"],
                            })}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-4">Course Description</h2>
            <p
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
            ></p>
          </div>

          {/* Right Section */}
          <section className="max-w-md mx-auto bg-white rounded shadow-lg overflow-hidden w-[100%] h-fit">
            {/* Thumbnail */}
            <div className="relative">
              {playerData ? (
                <YouTube
                  videoId={playerData.videoId}
                  opts={{ playerVars: { autoplay: 1 } }}
                  iframeClassName="w-full aspect-video h-48 object-cover"
                />
              ) : (
                <img
                  src={courseData.courseThumbnail}
                  alt="Text to Image SaaS App"
                  className="w-full h-48 object-cover"
                />
              )}
            </div>

            {/* Course Info */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900">
                {courseData.courseTitle}
              </h2>

              {/* Limited Offer */}
              <p className="text-red-600 text-sm mt-1 font-medium">
                ⏳ 5 days left at this price!
              </p>

              {/* Pricing */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-gray-900">
                  $
                  {courseData.coursePrice -
                    Math.floor(
                      (courseData.coursePrice * courseData.discount) / 100
                    )}
                </span>
                <span className="text-gray-500 line-through">
                  ${courseData.coursePrice}
                </span>
                <span className="text-green-600 text-sm font-medium">
                  {courseData.discount}% Off
                </span>
              </div>

              {/* Ratings, Duration & Lessons */}
              <div className="flex items-center text-gray-600 text-sm mt-3">
                <span className="text-yellow-500">
                  ★ {calculateRating(courseData)}
                </span>
                <span className="mx-2">|</span>
                <span>⏳{calculateCourseDuration(courseData)}</span>
                <span className="mx-2">|</span>
                <span>📚 {calculareNoOfLacturs(courseData)} lessons</span>
              </div>

              {/* Enroll Button */}
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-center text-sm font-semibold hover:bg-blue-500 cursor-pointer">
                {isAlreadyEnrolled ? "Already Enrolled" : " Enroll Now"}
              </button>

              {/* Course Features */}
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  What’s in the course?
                </h3>
                <ul className="text-gray-700 text-sm mt-2 space-y-1">
                  <li>✅ Lifetime access with free updates.</li>
                  <li>✅ Step-by-step, hands-on project guidance.</li>
                  <li>✅ Downloadable resources and source code.</li>
                  <li>✅ Quizzes to test your knowledge.</li>
                  <li>✅ Certificate of completion.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
