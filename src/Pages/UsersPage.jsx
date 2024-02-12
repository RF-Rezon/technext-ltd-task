import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showErros, setShowErrors] = useState(false);
  const [sortBy, setSortBy] = useState(''); // Add state for sorting option
  const { register, handleSubmit, reset } = useForm();


  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
    fetch("https://dummyjson.com/users")
      .then((data) => data.json())
      .then((finalData) => setUsers(finalData.users));
      }
  }, []);


  const handleInputChange =(e)=> {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    // Perform search operation here, for now just log the search query
    console.log('Performing search for:', searchQuery);

    if (!searchQuery) {
      setShowErrors(true);
      return;
    }

    const searchedUsers =  users?.filter(user => user.username.toLowerCase().includes(searchQuery.toLowerCase()));
    if(searchedUsers.length === 0) {
       setShowErrors(true)
    }else{
      setShowErrors(false)
    }
    setUsers(searchedUsers)
  
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setShowErrors(false); // Reset errors when changing sorting option

    let sortedUsers = [...users]; // Copy current users array to not mutate state directly

    if (e.target.value === 'name') {
      sortedUsers.sort((a, b) => a.username.localeCompare(b.username));
    } else if (e.target.value === 'email') {
      sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else if (e.target.value === 'company') {
      sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
    }

    setUsers(sortedUsers);
  };


  const onSubmit = (data) => {
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newUserId, ...data };
    const updatedUsers = [...users, newUser]; // Create a new array with the new user added
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Update local storage with the updated users array
    reset();
    document.location.href = '/'; // Redirect to the home page
  };


  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="h-20 w-full flex items-center justify-center space-x-3 md:space-x-6 bg-sky-100 px-4">
          <div id="search_box">
            <div className="relative">
              <input
                type="text"
                placeholder="Search By Username"
                className="px-4 py-3 rounded-md text-sm font-medium outline-none border-none focus:outline-sky-300 focus:outline-2 bg-white"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <div className="absolute border-l border-l-gray-500 my-1 mr-1 bottom-0 h-auto top-0 right-0 bg-white w-[17%] flex items-center justify-center rounded-md cursor-pointer">
                <CiSearch fill="gray" onClick={handleSearch} className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div id="selection">
          <select
              name="sortSelect"
              id="sortSelect"
              className="px-3 py-[11px] w-full rounded-md bg-white text-sm font-medium text-gray-700 outline-none border-none"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              <option value="name">User Name</option>
              <option value="email">Email</option>
              <option value="company">Company Name</option>
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
              <div className="modal-box w-11/12 max-w-full pb-10">
                {/* //////////////////////// */}

                <div className="flex items-center justify-center">
                  <div className="w-[80%] px-6 h-full">
                    <div className="mt-12 md:mt-0">
                      <div className="border-b-black border-b-[3px] pb-6 flex items-center justify-center my-10">
                        <div className="text-3xl font-semibold">
                          <p>Add User Form</p>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
              
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("image")}
                            type="url"
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
                            type="text"
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
                        <div>
                          <input
                            type="submit"
                            className="bg-sky-200 hover:bg-sky-300 active:border active:border-sky-400 transition-all rounded-md px-5 py-2.5 text-sm font-medium shadow cursor-pointer mt-5"
                            value="Add User"
                          />
                        </div>
                      </form>
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
          {showErros ? (<div><p className="text-2xl text-red-400 font-medium text-center">Not match anything!. Please try again.</p></div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {users?.map((each) => (
              <article  key={each.id} className="relative shadow-lg rounded-lg hover:rounded-3xl">
                <img data-aos="fade-up" data-aos-duration="4000"
                  src={each.image}
                  className="absolute object-contain h-full w-full"
                />

                <div className="relative h-full pt-32 sm:pt-48 lg:pt-64 bg-black bg-opacity-20 hover:bg-opacity-95 transition-all duration-300 rounded-lg hover:rounded-3xl hover:scale-105">
                  <div className="p-4 sm:p-6">
                    <p className="block text-xs font-medium text-white/90 cursor-default">
                      {each.email}
                    </p>

                    <p>
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
                                {each?.company?.name}{each?.c_name} 
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
          </div>)}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
