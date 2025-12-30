import Card from "./components/Card";
import Inputs from "./components/Inputs";
import { useState } from "react";

const App = () => {
  const localData = JSON.parse(localStorage.getItem("user-data")) || [];
  const [userData, setData] = useState(localData);

  console.log(userData);

  const deleteHandler = (idx) => {
    setData((oldData) => {
      const updatedData = oldData.filter((_, i) => i !== idx);
      localStorage.setItem("user-data", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <div
      className="bg-[#151515] 
      h-screen 
      w-screen
      p-4"
    >
      <Inputs setUserData={setData} />
      <Card userData={userData} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
