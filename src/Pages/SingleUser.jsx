import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  let { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((data) => data.json())
      .then((finalData) => setUser(finalData));
  }, []);

  console.log(user);

  return (
    <div className="w-full min-h-screen bg-blue-100 pt-8">
      <p className="text-3xl font-semibold text-center">
        {user?.username} Details
      </p>
      <div className="p-8 flex items-center justify-center">
        <div className="bg-base-100 shadow-xl w-[80%] min-h-[800px] flex flex-col md:flex-row items-center rounded-lg space-x-14 pr-12 pl-0 md:pl-12 pb-10 md:pb-0">
          <div className="md:w-[40%] border-[6px] p-10 w-[1/2] md:m-0 flex items-center justify-center rounded-lg border-blue-300 m-6 ">
            <img className="h-full w-full object-cover" src={user?.image} />
          </div>
          <div className="md:w-[60%] w-[90%]">
            <div className="bg-sky-100 grid grid-cols-1 md:grid-cols-2 gap-x-20 px-6 py-12 rounded-lg">
              <div className="mt-3 mx-2">
                <p className="w-full text-sm text-black mt-3 font-semibold cursor-default">
                  First Name
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.firstName}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  Last Name
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.lastName}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  Email
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.email}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  User Name
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.username}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  Address
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.address?.address}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  State
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.address?.state}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  City
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.address?.city}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  Postal Code
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.address?.postalCode}
                </p>
              </div>
              <div className="mt-3 mx-2">
                <p className="text-sm  text-black mt-3 font-semibold cursor-default">
                  Company Name
                </p>
                <hr className="border mt-2 border-blue-400" />
                <p className="py-2 text-lg text-black/95 font-medium cursor-default">
                  {user?.company?.name}
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
