import React from "react";

const ProfileForm = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Account</h2>
      <form className="space-y-4">
        {["Name", "Profile Photo", "Bio", "Email", "Phone", "Age", "Address"].map((field, index) => (
          <div className="flex flex-col" key={index}>
            <label htmlFor={`my${field}`} className="text-sm mb-2 font-medium text-gray-700">
              {field}
            </label>
            <input
              type={field === "Profile Photo" ? "file" : "text"}
              id={`my${field}`}
              placeholder={`Your ${field}`}
              readOnly={field === "Name"}
              className="border border-gray-300 border-solid rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 shadow-md">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
