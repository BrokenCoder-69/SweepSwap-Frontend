// src/pages/profile/ProfileView.jsx
import ProfileCard from "../../components/ProfileCard";


const dummyUser = {
  name: "John Doe",
  email: "john@example.com",
  role: "Customer",
  avatar: "https://i.pravatar.cc/150?img=68",
};

export default function ProfileView() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <ProfileCard user={dummyUser} />
    </div>
  );
}
