import React from "react";
import EyeClosedIcon from "../../images/eye_closed.svg";

const PasswordForm = () => {
  return (
    <div className="md:flex md:items-center md:justify-between space-y-6 md:space-y-0">
      <div className="md:w-2/4 space-y-6">
        <h2 className="text-2xl font-bold mb-2">Change Password</h2>
        <form className="space-y-4">
          {["Current Password", "New Password", "Confirm Password"].map((field, index) => (
            <div className="flex flex-col" key={index}>
              <label htmlFor={field.toLowerCase().replace(" ", "-")} className="text-sm mb-2 font-medium text-gray-700">
                {field}
              </label>
              <div className="relative">
                <input
                  type="password"
                  id={field.toLowerCase().replace(" ", "-")}
                  placeholder={`Enter your ${field.toLowerCase()}`}
                  className="border border-gray-300 border-solid rounded-md p-2 w-full text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                />
                <button type="button" className="absolute right-3 top-2 text-gray-500">
                  <img src={EyeClosedIcon} alt="Toggle visibility" />
                </button>
              </div>
            </div>
          ))}
          <button type="submit" className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 shadow-md text-sm">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
