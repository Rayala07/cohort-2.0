import { useState } from "react";

const Inputs = ({ setUserData }) => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");

  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const companyHandler = (e) => {
    setCompanyName(e.target.value);
  };
  const roleHandler = (e) => {
    setUserRole(e.target.value);
  };
  const nameHandler = (e) => {
    setUserName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      userName: userName,
      userRole: userRole,
      companyName: companyName,
      city: city,
    };

    setUserData((oldData) => {
      const updatedData = [...oldData, newUser];
      localStorage.setItem("user-data", JSON.stringify(updatedData));
      return updatedData;
    });

    setUserName("");
    setUserRole("");
    setCompanyName("");
    setCity("");
  };

  return (
    <div
      className="text-white
      w-100
      flex
      justify-between
      items-center
      flex-col
      gap-4"
    >
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={nameHandler}
          className="border
        border-[#ffffffac]
        p-2
        rounded-md"
        />
        <input
          type="text"
          placeholder="Your role"
          value={userRole}
          onChange={roleHandler}
          className="border
        border-[#ffffffac]
        p-2
        rounded-md"
        />
        <input
          type="text"
          placeholder="Company"
          value={companyName}
          onChange={companyHandler}
          className="border
        border-[#ffffffac]
        p-2
        rounded-md"
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={cityHandler}
          className="border
        border-[#ffffffac]
        p-2
        rounded-md"
        />
        <button className="bg-black border py-1 px-4 mt-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Inputs;
