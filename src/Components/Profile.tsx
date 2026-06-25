import { useState, type ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const handleBannerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[95.8%] ml-20">
      {/* Banner Section */}
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            className="hidden"
            id="banner-upload"
            accept="image/*"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Profile/Channel Logo Section */}
      <div className="flex items-center ml-4 mt-8">
        <img
          src={profileUrl}
          alt="channel logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        {/* FIX: Changed htmlFor to match the input id, and moved input out of the label */}
        <button className="-ml-24 z-10 mt-36 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            onChange={handleProfileUpload}
            id="profile-upload"
            accept="image/*"
            className="hidden"
          />
        </button>
        {/* Channel Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-16">John Doe</h1>
          <p className="ml-16">1M views</p>
          <p className="nt-2 ml-16">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="ml-16 mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-rede-500">
            subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
