// ProfileForm Component
import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import AuthContext from "../../context/AuthContext";

const ProfileForm = () => {
  const { isFormDirty, setIsFormDirty } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState(
    localStorage.getItem("profilePhoto") || null
  );
  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    bio: localStorage.getItem("bio") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    age: localStorage.getItem("age") || "",
    address: localStorage.getItem("address") || "",
  });
 

  // Handle image change (preview)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setImagePreview(base64Image);
        setIsFormDirty(true); // Mark form as dirty on image change
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setIsFormDirty(true); // Mark form as dirty on input change
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormDirty) {
      toast.error("No changes detected. Form submission cancelled.");
      return;
    }
    // Save form data to localStorage
    localStorage.setItem("profilePhoto", imagePreview);
    Object.entries(formData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });
    setIsFormDirty(false); // Reset form dirty flag after successful save
    toast.success("Profile information saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Account</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Profile Photo Section */}
        <div className="flex flex-col items-center space-y-4">
          <label className="text-sm font-medium text-gray-700">Profile Photo</label>
          <div className="relative group">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-32 h-32 object-cover rounded-full shadow-md"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-full shadow-md">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <label
              htmlFor="profilePhoto"
              className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 bg-blue-500 text-white px-4 py-2 text-xs font-medium rounded-full shadow-md cursor-pointer hover:bg-blue-600 transition"
            >
              Upload
              <input
                type="file"
                id="profilePhoto"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Other Form Fields */}
        {Object.entries(formData).map(([key, value]) => (
          <div className="flex flex-col" key={key}>
            <label htmlFor={key} className="text-sm mb-2 font-medium text-gray-700">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type={key === "age" ? "number" : key === "email" ? "email" : "text"}
              id={key}
              value={value}
              onChange={handleInputChange}
              placeholder={`Your ${key.charAt(0).toUpperCase() + key.slice(1)}`}
              className="border text-xs border-gray-300 border-solid rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>
        ))}

        {/* Save Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 shadow-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
