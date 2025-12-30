const Card = ({ userData, onDelete }) => {
  return (
    <div className="flex gap-8">
      {userData.map((user, idx) => {
        return (
          <div
            key={idx}
            className="border border-white w-fit p-4 mt-10 flex flex-col items-center gap-2"
          >
            <p className="text-white">{user.userRole}</p>
            <p className="text-white">{user.userName}</p>
            <p className="text-white">{user.CompanyName}</p>
            <p className="text-white">{user.city}</p>

            <button
              onClick={() => onDelete(idx)}
              className="text-white bg-[#d12f2f] border rounded p-2 cursor-pointer"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
