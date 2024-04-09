import React from "react";

const Profile = ({ data }) => {
  return (
    <div className=" md:w-[30%] md:py-10">
      <div className="p-7">
        <img
          className="w-20 h-20 rounded-full object-cover"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="text-xl font-bold mt-5">{data?.name}</h1>
        <p className="text-gray-600 mt-2 font-semibold">{data?.designation}</p>
        <p className="text-gray-600 font-semibold ">{data?.department}</p>
        <p className="text-gray-600 font-semibold ">Centurion University</p>
        <div className="w-full border-b border-gray-500 mt-5"></div>
        <div>
          <p className="font-semibold text-xl mt-3 mb-4">
            Teaching Subjects :{" "}
          </p>
          {data?.teaching.map((item, index) => (
            <p key={index} className="text-gray-600 font-semibold">
              • {item}
            </p>
          ))}
        </div>
        <div className="w-full border-b border-gray-500 mt-5"></div>
        <p className="font-semibold text-xl mt-3 mb-4">Resposibilities : </p>
        {data?.responsibilities.map((item, index) => (
          <p key={index} className="text-gray-600 font-semibold">
            • {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
