import axios from "axios";
import React, { useEffect, useState } from "react";
import MainDetails from "./MainDetails"; // MainDetails komponentini içeri aktar
import { Link } from "react-router-dom"; // Link'i içe aktar

export default function Main() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5034/api/courses")
      .then((response) => {
        setCourses(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API isteği başarısız oldu:", error);
        setLoading(false);
      });
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };
  console.log(courses);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {courses.slice(0, 30).map((course) => (
            <div key={course.id} className="sm:w-1/3 mb-10 px-4">
              <div className="rounded-lg border border-gray-300 p-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt={course.name}
                    className="object-cover object-center h-full w-full"
                    src={`/images/courses/${course.id}.jpg`}
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  {course.name}
                </h2>
                <p className="leading-relaxed text-base">{course.category}</p>
                <p className="leading-relaxed text-base">{course.earnings}</p>
                <p className="leading-relaxed text-base">{course.price}</p>
                <div className="flex justify-between mt-6">
                  <Link
                    to={`/course/${course.id}`}
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg"
                  >
                    Detay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* selectedCourse değeri varsa, MainDetails komponentini açın */}
      {selectedCourse && (
        <MainDetails course={selectedCourse} closeModal={closeModal} />
      )}
    </section>
  );
}
