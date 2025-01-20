import React, { useState } from "react";
import reviewDummy from "../../images/review-dummy-photo.webp";

function WriteReview() {
  const [file, setFile] = useState(null);
  const [rating, setRating] = useState("5"); // state for rating dropdown

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow file drop
  };

  return (
    <>
      {/* Main container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* File Upload Section */}
          <label
            className="border-2 border-dashed border-gray-300 hover:border-[#dee7ff] cursor-pointer p-6 rounded-lg flex flex-col items-center justify-center"
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <div className="text-center">
              <i className="fas fa-image text-gray-600 text-6xl mb-4"></i>
              <p className="text-gray-600">Drop your travel photos here</p>
              <p className="text-gray-500 text-sm">PNG, JPG, or WEBP. Max 200mb.</p>
              <p className="text-gray-500 text-sm mt-2">Or choose a file</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" // Hide default file input
              />
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={() => document.querySelector('input[type="file"]').click()}
              >
                Browse
              </button>
            </div>
            {file && (
              <div className="mt-4 w-full">
                <div className="bg-gray-100 p-2 rounded flex justify-between items-center mb-2">
                  <span className="text-gray-600">{file.name}</span>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={handleFileRemove}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            )}
          </label>

          {/* Form Section */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Trip Title</label>
              <input
                type="text"
                className="w-full p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Enter trip title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Review (optional)</label>
              <textarea
                className="w-full resize-none p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Describe your trip experience"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Location Visited</label>
              <input
                type="text"
                className="w-full p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Enter location"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Ratings</label>
              <select
                value={rating}
                onChange={handleRatingChange}
                className="w-full p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Trip Duration</label>
              <input
                type="text"
                className="w-full p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="e.g. 7 days"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Trip Dates (optional)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">Start Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="mm/dd/yyyy"
                    />
                    <i className="fas fa-calendar-alt absolute right-3 top-3 border-solid text-gray-400"></i>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">End Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full p-3 border-solid bg-white text-gray-700 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="mm/dd/yyyy"
                    />
                    <i className="fas fa-calendar-alt absolute right-3 top-3 border-solid text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Submit Review
            </button>
          </div>
        </div>
      </div>
      {/* Main end */}
    </>
  );
}

export default WriteReview;
