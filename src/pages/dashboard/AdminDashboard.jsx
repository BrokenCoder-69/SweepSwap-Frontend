const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-fuchsia-400">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h2 className="text-xl mb-2">Users</h2>
          <p className="text-gray-300">Total Users: 1024</p>
        </div>
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h2 className="text-xl mb-2">Products</h2>
          <p className="text-gray-300">Pending Approvals: 12</p>
        </div>
        <div className="bg-white/5 p-5 rounded-xl border border-white/10">
          <h2 className="text-xl mb-2">Reports</h2>
          <p className="text-gray-300">5 new reports submitted.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
