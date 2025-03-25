import React from "react";
import assets, { dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
        <p className="text-gray-600 mt-2 mx-auto max-w-2xl">
          Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80 text-center border border-gray-200"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto border-2 border-gray-300"
            />
            <h3 className="mt-4 font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
            <div className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(testimonial.rating)
                      ? assets.star
                      : assets.star_blank
                  }
                  alt="Star Rating"
                  className="w-4 h-4"
                />
              ))}
            </div>
            <p className="text-gray-700 mt-2 text-sm">{testimonial.feedback}</p>
            <a href="#" className="text-blue-500 mt-2 inline-block font-medium">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
