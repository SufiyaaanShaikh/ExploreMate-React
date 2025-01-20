import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";
import SpringModal from "../components/Home/SpringModal";
import TabsNavigation from "../components/EditProfile/TabsNavigation";
import TabContent from "../components/EditProfile/TabContent";
import Header from "../components/Header";

function EditProfile() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { logout, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const tabs = [
    { id: "tab1", label: "Personal Info" },
    { id: "tab2", label: "Change Password" },
    { id: "tab3", label: "Help & Support" },
    { id: "tab4", label: "Logout" },
  ];

  const handleTabChange = (tabId) => {
    if (tabId === "tab4") {
      setIsOpen(true);
    } else {
      setActiveTab(tabId);
    }
  };

  return (
    <>
      <Header />
      <div className="my-28 bg-white">
        <div className="sec vh-70 grid grid-cols-1 rounded-lg p-6 md:grid-cols-3 gap-6">
          <TabsNavigation tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} user={user} />
          <div className="col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <TabContent activeTab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onConfirm={() => {
          logout();
          setIsOpen(false);
          navigate("/");
          toast.success("Successfully logged out!");
        }}
      />
    </>
  );
}

export default EditProfile;
