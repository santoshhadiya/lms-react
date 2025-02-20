import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import Loading from '../../components/student/Loading';
import assets from '../../assets/assets';
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from '../../components/student/Rating';


const Player = () => {

  const [playerRating, setPlayerRating] = useState(0);

  const handleRatePlayer = (rating) => {
    setPlayerRating(rating);
    // You can also save the rating to an API or state management here
  };


  const [courseData, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedChapters, setExpandedChapters] = useState({});
  const [playerData, setPlayerData] = useState(null)

  const { courseId } = useParams();

  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);

  useEffect(() => {
    const matchId = () => {
      const findCourse = enrolledCourses.find((course) => course._id === courseId);
      if (findCourse) {
        setCourse(findCourse);
      } else {
        setCourse(null);
      }
      setLoading(false);
    };

    matchId();
  }, [courseId, enrolledCourses]);

  if (loading) {
    return <Loading />;
  }

  if (!courseData) {
    return <Loading />;
  }


  /* Open/Close Title */
  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId], // Toggle the state for the clicked chapter
    }));
  };


  return (
    <>
      <div className='flex px-[110px] py-8 w-full justify-between bg-gradient-to-b from-cyan-100/70'>
        {/* Left */}
        <div className=" rounded-lg ">
          <h2 className="text-xl font-bold mb-4">Course Structure</h2>
          {courseData.courseContent.map((chapter, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-300 rounded"
            >
              {/* Title Of Card */}
              <div
                className="flex justify-between items-center p-4 bg-gray-50 rounded border-b border-gray-300 cursor-pointer"
                onClick={() => toggleChapter(chapter.chapterId)}
              >

                <div className="flex items-center ">
                  <img
                    src={
                      expandedChapters[chapter.chapterId]
                        ? "https://icons.veryicon.com/png/o/miscellaneous/unionpay-digital-marketing/up-arrow-thin.png" // Use up arrow when expanded
                        : assets.down_arrow_icon // Use down arrow when collapsed
                    }
                    alt="arrow"
                    className="w-4 h-4 mr-2"
                  />
                  <span className="font-medium pr-3">
                    {chapter.chapterTitle}
                  </span>
                </div>
                <span className="text-gray-500">
                  {chapter.chapterContent.length} lectures -{" "}
                  {calculateChapterTime(chapter)}
                </span>

              </div>

              {/* Data Of Card */}
              {expandedChapters[chapter.chapterId] && (
                <div className="pt-2 pl-8 px-5 bg-white">
                  {chapter.chapterContent.map((lecture, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2"
                    >
                      <div className="flex items-center">
                        <img
                          src={false ? assets.blue_tick_icon : assets.play_icon}
                          alt="play"
                          className="w-4 h-4 mr-2"
                        />
                        <span className='pr-3'>{lecture.lectureTitle}</span>
                      </div>
                      <div className="flex items-center">
                        {lecture.lectureUrl && (
                          <span
                            className="text-blue-500 mr-4 cursor-pointer"
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
                        <span className="text-gray-500">
                          {humanizeDuration(
                            lecture.lectureDuration * 60 * 1000,
                            {
                              units: ["h", "m"],
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Rating */}
          <div className='flex items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate this Course:</h1>
            <Rating />
          </div>

        </div>

        {/* Right */}
        <section className="max-w-md  py-11 overflow-hidden w-[50%] h-fit">

          {/* Thumbnail */}
          <div className="relative w-full h-fit">
            {playerData ? (
              <div>
                <YouTube
                  videoId={playerData.videoId}
                  opts={{ playerVars: { autoplay: 1 } }}
                  iframeClassName="w-full aspect-video h-fit object-cover"
                />
                <div className='flex justify-between'>
                  <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                  <button className='text-blue-700 cursor-pointer'>{false ? "Completed" : "Mark Complete"}</button>
                </div>
              </div>
            ) : (
              <img
                src={courseData.courseThumbnail}
                alt="Text to Image SaaS App"
                className="w-full h-fit object-cover"
              />
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Player