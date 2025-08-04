import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-5 border-r border-white/10 shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-cyan-400">SweepSwap</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-cyan-400">Dashboard</Link>
        <Link to="/dashboard/orders" className="block hover:text-cyan-400">My Orders</Link>
        <Link to="/dashboard/cart" className="block hover:text-cyan-400">Cart</Link>
        <Link to="/dashboard/messages" className="block hover:text-cyan-400">Messages</Link>
        <Link to="/dashboard/profile" className="block hover:text-cyan-400">Profile</Link>
        <Link to="/dashboard/settings" className="block hover:text-cyan-400">Settings</Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
