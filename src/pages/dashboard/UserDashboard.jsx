const UserDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h2 className="text-xl mb-2">Orders</h2>
          <p className="text-gray-300">You have 3 active orders.</p>
        </div>
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h2 className="text-xl mb-2">Wishlist</h2>
          <p className="text-gray-300">5 items in your wishlist.</p>
        </div>
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h2 className="text-xl mb-2">Messages</h2>
          <p className="text-gray-300">2 new messages.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
