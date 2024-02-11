import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((data) => data.json())
      .then((finalData) => setUsers(finalData));
  }, []);

  console.log(users.users);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data), reset();
  };

//   const handleDetails =(id)=> {
//     const { history } = this.props;
//     history.push(`/your-route/${id}`);
//   }

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="h-20 w-full flex items-center justify-center space-x-6 bg-sky-100">
          <div id="search_box">
            <div className="relative">
              <input
                type="text"
                placeholder="Search By Dua Name"
                className="px-4 py-3 rounded-md text-sm font-medium outline-none border-none focus:outline-sky-300 focus:outline-2 bg-white"
              />
              <div className="absolute my-1 mr-1 bottom-0 h-auto top-0 right-0 bg-white w-[17%] flex items-center justify-center rounded-md cursor-pointer">
                <CiSearch fill="gray" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div id="selection">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="px-3 py-[11px] w-full rounded-md border-gray-300 text-sm font-medium text-gray-700 outline-none border-none"
            >
              <option value="">Please Select</option>
              <option value="JM">John Mayer</option>
              <option value="SRV">Stevie Ray Vaughn</option>
              <option value="JH">Jimi Hendrix</option>
              <option value="BBK">B.B King</option>
              <option value="AK">Albert King</option>
              <option value="BG">Buddy Guy</option>
              <option value="EC">Eric Clapton</option>
            </select>
          </div>

          <div id="add_user">
            <button
              className="btn bg-white hover:bg-white hover:border-2 hover:border-sky-300"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <p className="text-sm font-medium">Add User</p>
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-full">
                {/* //////////////////////// */}

                <div className="flex items-center justify-between space-x-4">
                  <div className="md:basis-2/5 px-6 h-full">
                    <div className="mt-48 md:mt-0">
                      <div className="border-b-black border-b-[3px] pb-6 flex items-center justify-center my-10">
                        <div className="text-3xl font-semibold">
                          <p>Add User Form</p>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <p className="py-5 font-semibold text-gray-800 text-base">
                                Class Name
                              </p>
                              <div className="relative z-0 w-full mb-6 group">
                                <select {...register("c_name")} className="select select-info w-full max-w-xs text-gray-800">
                                  <option className="text-gray-800" value="Piano Prowess: Keys to Excellence">Piano</option>
                                  <option className="text-gray-800" value="Guitar Mastery: Fretboard Fundamentals ">Guiter</option>
                                  <option className="text-gray-800" value="Violin Virtuosity: Bow to Strings">Violin</option>
                                  <option className="text-gray-800" value="Drum Dynamics: Rhythm Revolution">Drums</option>
                                  <option className="text-gray-800" value="Bass Groove: Low-End Explorations">Bass</option>
                                  <option className="text-gray-800" value="Saxophone Serenade: Wind Harmony">Saxophone</option>
                                </select>
                              </div> */}
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("image")}
                            type="url"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                          />
                          <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Avatar
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("username")}
                            type="text"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            //   value={user?.displayName || ""}
                          />
                          <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Username
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("firstName")}
                            type="text"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            //   value={user?.displayName || ""}
                          />
                          <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("lastName")}
                            type="text"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            //   value={user?.displayName || ""}
                          />
                          <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Last Name
                          </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("email")}
                            type="email"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            //   value={user?.email || ""}
                          />
                          <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Email
                          </label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("address")}
                              type="text"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            />
                            <label
                              htmlFor="floating_first_name"
                              className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Address
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("state")}
                              type="text"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            />
                            <label
                              htmlFor="floating_first_name"
                              className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              State
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("city")}
                              type="text"
                              id="floating_last_name"
                              className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            />
                            <label
                              htmlFor="floating_last_name"
                              className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              City
                            </label>
                          </div>
                          <div className="relative z-0 w-full group mb-6">
                            <input
                              {...register("postalCode")}
                              type="number"
                              id="floating_first_name"
                              className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              required
                            />
                            <label
                              htmlFor="floating_first_name"
                              className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Postal Code
                            </label>
                          </div>
                        </div>
                        <div className="relative z-0 w-full group my-6">
                          <input
                            {...register("c_name")}
                            type="number"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm font-medium text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                          />
                          <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-50 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Company Name
                          </label>
                        </div>
                        <input
                          type="submit"
                          className="bg-sky-200 hover:bg-sky-300 active:border active:border-sky-400 transition-all rounded-md px-5 py-2.5 text-sm font-medium shadow cursor-pointer mt-5"
                          value="Add User"
                        />
                      </form>
                    </div>
                  </div>
                  <div className="md:basis-3/5 h-full">
                    <div className="grid grid-cols-5 gap-5">
                      {users?.users?.slice(0, 20).map((each) => (
                        <img
                          className="w-24 place-self-center"
                          src={each.image}
                          key={each.id}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* //////////////////////// */}
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn border-none hover:bg-red-200 hover:outline-none active:outline-none text-sm font-medium">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto min-h-screen p-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {users?.users?.map((each) => (
              <article key={each.id} className="relative shadow-lg">
                <img
                  src={each.image}
                  className="absolute object-contain h-full w-full"
                />

                <div className="relative pt-32 sm:pt-48 lg:pt-64 bg-black bg-opacity-20 hover:bg-opacity-95 transition-all duration-300 rounded-lg hover:rounded-3xl">
                  <div className="p-4 sm:p-6">
                    <p className="block text-xs font-medium text-white/90 cursor-default">
                      {each.email}
                    </p>

                    <p to="#">
                      <h3 className="mt-0.5 text-lg text-white font-semibold cursor-default">
                        {each.firstName} {each.lastName}
                      </h3>
                    </p>
                    <p className="text-base underline underline-offset-8 text-white mt-3 font-medium cursor-default">
                      Address
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 font-medium cursor-default">
                      {each?.address?.address}, {each?.address?.city},{" "}
                      {each?.address?.state}
                    </p>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base underline underline-offset-8 text-white mt-3 font-medium cursor-default">
                              Company Name
                            </p>
                              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 font-medium cursor-default">
                                {each?.company?.name}
                              </p>
                        
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base underline underline-offset-8 text-white mt-3 font-medium cursor-default">
                              User Name
                            </p>
                            <Link to={`/${each.id}`} className="mt-2 line-clamp-3 text-sm text-white font-semibold cursor-pointer">
                              {each?.username}
                            </Link>
                          </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
