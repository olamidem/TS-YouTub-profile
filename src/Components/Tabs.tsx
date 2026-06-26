import { FaHome, FaPhone } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Card from "./Card";
import { GoProjectSymlink } from "react-icons/go";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using react and Tailwind CSS."
            image="https://placehold.co/400x300"
            link="#"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using react and Tailwind CSS."
            image="https://placehold.co/400x300"
            link="#"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaPhone />,
    content: <Contact />,
  },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
      <div className="p-4 mt-12">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 text-center py-2 px-4 font-medium text-sm ${activeTab === tab.id ? "border-b-2" : "text-gray-600"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-Center justify-center space-x-2 cursor-pointer">
                {tab.icon}
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 p-4 rounded-lg">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    );
};

export default Tabs;
