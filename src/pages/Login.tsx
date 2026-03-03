import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import bgImage from '../assets/mmajvw90-796h647.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validation and auth logic would go here
    navigate('/landing');
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side - 3D Illustration */}
      <div className="hidden lg:block w-[60%] relative bg-[#13182d]">
        <img 
          src={bgImage} 
          alt="3D Chip Illustration" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient if needed, but image seems self-contained */}
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-[40%] bg-[#282a31] flex flex-col justify-center px-12 py-12 relative">
        <div className="max-w-md w-full mx-auto flex flex-col h-full justify-center">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-2">
              欢迎来到 <span className="text-[#3679ea]">StartAGI</span>
            </h1>
            <p className="text-[#babdc9] text-sm leading-relaxed">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>

          {/* Form Section */}
          <div className="flex-grow flex flex-col justify-center">
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="text-xl font-semibold text-white">登录</h2>
              <span className="text-[#868a9a] text-sm tracking-widest font-medium">LOG IN</span>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Account Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#babdc9] group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="账户"
                  className="w-full bg-[#3b3d47] text-white placeholder-[#babdc9] text-sm rounded-sm py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#3679ea] transition-all"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#babdc9] group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="password"
                  placeholder="密码"
                  className="w-full bg-[#3b3d47] text-white placeholder-[#babdc9] text-sm rounded-sm py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#3679ea] transition-all"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#3679ea] hover:bg-[#2f68c9] text-white font-semibold py-3 rounded-sm transition-colors mt-8 shadow-lg shadow-blue-900/20"
              >
                登 录
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8 text-center lg:text-left">
            <p className="text-[#868a9a] text-xs">
              Copyright© 2016-2026 startdtcom All Rights Reserved 奇点云 版权所有
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
