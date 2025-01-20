import React from "react";

function TabsNavigation({ tabs, activeTab, onTabChange, user }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Account</h3>
      <hr className="border-gray-300 " />
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`block w-full text-left px-4 py-2 rounded-md ${
            tab.id === "tab4"
              ? "hover:bg-[#ffdede] hover:text-[#de0000]"
              : "hover:bg-blue-100"
          } ${
            activeTab === tab.id
              ? "bg-blue-200 text-blue-700 font-semibold"
              : ""
          }
           ${!user ? "cursor-not-allowed" : ""}
          `}
          disabled={!user}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabsNavigation;
