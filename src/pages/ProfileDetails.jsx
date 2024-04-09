import React from "react";

const ProfileDetails = () => {
  return (
    <div className="w-full h-screen bg-[#F4F5F7] flex px-24">
        {/* description section */}
        <div className="md:w-[70%]"></div>
        {/* profile section */}
        <div className=" md:w-[30%]">
         <div className="p-7">
            <img 
            className="w-20 h-20 rounded-full object-cover"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <h1 className="text-xl font-bold mt-5">Saneev Kumar Das</h1>
            <p className="text-gray-600 ">Assitant Professor</p>
            <p className="text-gray-600 ">Department of Computer Science</p>
            <p className="text-gray-600 ">Indian Institute of Information Technology, Ranchi</p>
         </div>
        </div>
    </div>
  );
};

export default ProfileDetails;
