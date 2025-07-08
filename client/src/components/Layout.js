import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, UserPlus, LogIn } from 'lucide-react';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const navLinkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition font-medium ${
      pathname === path
        ? 'bg-yellow-400 text-gray-900 shadow-md'
        : 'text-white hover:bg-yellow-100 hover:text-yellow-700'
    }`;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-100 to-yellow-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col py-6 px-4 shadow-2xl">
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400">Trivio</div>
            <div className="text-xs text-gray-400">Global Invoice System</div>
          </div>
        </div>

        <nav className="space-y-3">
          <Link to="/" className={navLinkClass('/')}>
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="/register" className={navLinkClass('/register')}>
            <UserPlus className="w-5 h-5" />
            Register
          </Link>
          <Link to="/login" className={navLinkClass('/login')}>
            <LogIn className="w-5 h-5" />
            Login
          </Link>
        </nav>

        {/* Avatar Placeholder */}
        <div className="mt-auto pt-10 text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-gray-800">
              TG
            </div>
          </div>
          <div className="text-xs text-gray-400">© {new Date().getFullYear()} Trivio Global</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10 bg-white flex items-center justify-center">
        <div className="w-full max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
