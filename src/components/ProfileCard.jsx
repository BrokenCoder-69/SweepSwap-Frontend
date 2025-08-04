// src/components/ProfileCard.jsx
import { Link } from "react-router-dom";

export default function ProfileCard({ user, showEdit = true }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl w-full max-w-md text-white">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar || "https://i.pravatar.cc/150?img=68"}
          alt="Avatar"
          className="w-28 h-28 rounded-full mb-4 ring-4 ring-purple-500 shadow-lg"
        />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-400">{user.email}</p>
        <span className="text-sm text-purple-400 mt-1">{user.role}</span>

        {showEdit && (
          <Link
            to="/profile/edit"
            className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            Edit Profile
          </Link>
        )}
      </div>
    </div>
  );
}
