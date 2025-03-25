import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import Loading from "../../components/student/Loading";
import assets from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";

const Player = () => {
  const [playerRating, setPlayerRating] = useState(0);
  const [courseData, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [playerData, setPlayerData] = useState(null);

  const { courseId } = useParams();
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);

  useEffect(() => {
    const matchId = () => {
      const findCourse = enrolledCourses.find((course) => course._id === courseId);
      setCourse(findCourse || null);
      setLoading(false);
    };
    matchId();
  }, [courseId, enrolledCourses]);

  if (loading) return <Loading />;
  if (!courseData) return <Loading />;

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap px-6 md:px-16 py-8 w-full justify-between bg-gradient-to-b from-cyan-100/70 min-h-screen">
        {/* Left Section: Course Structure */}
        <div className="w-full md:w-[45%] rounded-lg">
          <h2 className="text-lg md:text-xl font-bold mb-4">Course Structure</h2>
          {courseData.courseContent.map((chapter, index) => (
            <div key={index} className="mb-4 border border-gray-300 rounded-lg">
              {/* Chapter Title */}
              <div
                className="flex justify-between items-center p-4 bg-gray-50 rounded border-b border-gray-300 cursor-pointer"
                onClick={() => toggleChapter(chapter.chapterId)}
              >
                <div className="flex items-center">
                  <img
                    src={expandedChapters[chapter.chapterId] ? assets.up_arrow_icon : assets.down_arrow_icon}
                    alt="arrow"
                    className="w-4 h-4 mr-2"
                  />
                  <span className="font-medium pr-3">{chapter.chapterTitle}</span>
                </div>
                <span className="text-gray-500 text-sm">
                  {chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}
                </span>
              </div>

              {/* Lecture List */}
              {expandedChapters[chapter.chapterId] && (
                <div className="pt-2 pl-8 px-5 bg-white">
                  {chapter.chapterContent.map((lecture, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2">
                      <div className="flex items-center">
                        <img src={assets.play_icon} alt="play" className="w-4 h-4 mr-2" />
                        <span className="pr-3">{lecture.lectureTitle}</span>
                      </div>
                      <div className="flex items-center">
                        {lecture.lectureUrl && (
                          <span
                            className="text-blue-500 mr-4 cursor-pointer hover:underline"
                            onClick={() =>
                              setPlayerData({
                                videoId: lecture.lectureUrl.split("/").pop(),
                                chapter: index + 1,
                                lecture: idx + 1,
                                lectureTitle: lecture.lectureTitle,
                              })
                            }
                          >
                            Watch
                          </span>
                        )}
                        <span className="text-gray-500 text-sm">
                          {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                            units: ["h", "m"],
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Rating */}
          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-lg md:text-xl font-bold">Rate this Course:</h1>
            <Rating />
          </div>
        </div>

        {/* Right Section: Video Player */}
        <section className="w-full md:w-[50%] max-w-lg py-8 md:py-11">
          {/* Video Player or Thumbnail */}
          <div className="relative w-full">
            {playerData ? (
              <div>
                <YouTube
                  videoId={playerData.videoId}
                  opts={{ playerVars: { autoplay: 1 } }}
                  iframeClassName="w-full aspect-video"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm md:text-base">
                    {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                  </p>
                  <button className="text-blue-700 cursor-pointer hover:underline">
                    {false ? "Completed" : "Mark Complete"}
                  </button>
                </div>
              </div>
            ) : (
              <img src={courseData.courseThumbnail} alt="Course Thumbnail" className="w-full h-auto rounded-lg shadow-md" />
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Player;
