import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, 
  ChevronDown,
  LogOut,
  User,
  Plus,
  MoreHorizontal,
  Sun,
  Moon,
  Download,
  ChevronUp
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import logoUnionNew from '../assets/logo-union-new.png';
import iconAnalysis from '../assets/icon-analysis.png';
import iconPersona from '../assets/icon-persona.png';
import iconCloud from '../assets/icon-cloud.png';
import iconMore from '../assets/icon-more.png';
import iconSend from '../assets/icon-send.png';
import bgMain from '../assets/bg-main.png';
import iconSidebar from '../assets/icon-sidebar.svg';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [showUserPopover, setShowUserPopover] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<'chat' | 'history' | 'analysis' | 'persona' | 'history_detail'>('chat');
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [chatTheme, setChatTheme] = useState<'default' | 'analysis' | 'persona' | 'cloud'>('analysis');
  const [selectedHistory, setSelectedHistory] = useState<string | null>(null);
  const { isDark: isDarkMode, toggleTheme } = useTheme();
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  // New State for the tab in the chat card
  const [inputTab, setInputTab] = useState<'analysis' | 'ask'>('analysis');

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={`flex h-screen font-sans text-slate-800 overflow-hidden bg-[#F4F6F9] dark:bg-[#0f111a]`}>
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-[260px]' : 'w-0 overflow-hidden'
        } bg-white dark:bg-[#1a1d2d] flex flex-col h-full transition-all duration-300 ease-in-out shadow-sm z-50 relative`}
      >
        {/* Brand */}
        <div className="px-5 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logoUnionNew} alt="Logo" className="w-6 h-6 object-contain" />
            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">百晓</span>
          </div>
          <div 
            className="p-1.5 hover:bg-slate-100 rounded-md cursor-pointer transition-colors dark:hover:bg-white/5"
            onClick={() => setIsSidebarOpen(false)}
          >
            <img src={iconSidebar} alt="Close Sidebar" className="w-4 h-4 opacity-60 dark:invert" />
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <button 
            className="w-full h-10 bg-gradient-to-r from-[#0066FF] to-[#00EAFF] rounded-lg flex items-center justify-center text-white font-medium shadow-md hover:opacity-90 transition-opacity"
            onClick={() => {
              setCurrentView('chat');
              setChatTheme('analysis');
              setInputTab('analysis');
            }}
          >
            <Plus className="w-4 h-4 mr-1.5" />
            新对话
          </button>
        </div>

        {/* Menu */}
        <div className="px-3 space-y-1">
          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all duration-200 group ${
              chatTheme === 'analysis' 
                ? 'bg-[#E6F4FF] text-[#0066FF] font-medium dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                : 'text-slate-600 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
            }`}
            onClick={() => setChatTheme('analysis')}
          >
            <div className="w-5 h-5 flex items-center justify-center mr-3">
              <img src={iconAnalysis} alt="Analysis" className={`w-auto h-auto max-w-full max-h-full ${chatTheme === 'analysis' ? '' : 'opacity-60 grayscale'}`} />
            </div>
            <span>智能问数</span>
          </div>

          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all duration-200 group ${
              chatTheme === 'persona' 
                ? 'bg-[#E6F4FF] text-[#0066FF] font-medium dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                : 'text-slate-600 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
            }`}
            onClick={() => setChatTheme('persona')}
          >
            <div className="w-5 h-5 flex items-center justify-center mr-3">
              <img src={iconPersona} alt="Persona" className={`w-auto h-auto max-w-full max-h-full ${chatTheme === 'persona' ? '' : 'opacity-60 grayscale'}`} />
            </div>
            <span>智能个体画像</span>
          </div>

          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all duration-200 group ${
              chatTheme === 'cloud' 
                ? 'bg-[#E6F4FF] text-[#0066FF] font-medium dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                : 'text-slate-600 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
            }`}
            onClick={() => setChatTheme('cloud')}
          >
            <div className="w-5 h-5 flex items-center justify-center mr-3">
              <img src={iconCloud} alt="Cloud" className={`w-auto h-auto max-w-full max-h-full ${chatTheme === 'cloud' ? '' : 'opacity-60 grayscale'}`} />
            </div>
            <span>智能云</span>
          </div>

          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 cursor-pointer transition-all duration-200 group dark:text-gray-400 dark:hover:bg-white/5">
            <div className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <img src={iconMore} alt="More" className="w-auto h-auto max-w-full max-h-full opacity-60 grayscale group-hover:grayscale-0" />
              </div>
              <span>更多智能应用</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        <div className="my-4 border-t border-slate-100 mx-5 dark:border-white/5"></div>

        {/* History */}
        <div className="flex-1 px-5 overflow-y-auto">
          <div className="text-xs font-medium text-slate-400 mb-3 pl-1">历史对话</div>
          <div className="space-y-1">
            {['对话11111111111111111111', '对话22222222222222', '对话222', '对话123'].map((item, index) => (
              <div key={index} className="text-sm text-slate-500 py-1.5 px-2 hover:bg-slate-50 rounded cursor-pointer truncate dark:text-gray-400 dark:hover:bg-white/5">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Products */}
        <div className="p-5 border-t border-slate-100 bg-white dark:bg-[#1a1d2d] dark:border-white/5">
          <div className="text-xs font-medium text-slate-400 mb-3">StartDT产品</div>
          <div className="space-y-2">
            <div className="bg-[#F5F7FA] text-slate-600 text-xs px-3 py-2 rounded-md cursor-pointer hover:bg-slate-100 transition-colors dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10">
              智能增长平台
            </div>
            <div className="bg-[#F5F7FA] text-slate-600 text-xs px-3 py-2 rounded-md cursor-pointer hover:bg-slate-100 transition-colors dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10">
              智能湖仓一体平台
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img 
            src={bgMain} 
            alt="Background" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Header / Top Right */}
        <div className="absolute top-6 right-8 z-50 flex items-center gap-4">
           {/* Theme Toggle */}
           <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-slate-500 hover:text-slate-800 transition-colors dark:bg-black/20 dark:text-gray-400 dark:hover:text-white"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

          {/* User Profile */}
          <div 
            className="flex items-center cursor-pointer text-slate-600 hover:text-slate-900 transition-colors dark:text-gray-300 dark:hover:text-white"
            onClick={() => setShowUserPopover(!showUserPopover)}
          >
            <img src={logoUnionNew} className="w-4 h-4 mr-2" /> 
            <span className="text-sm font-medium">个人中心</span>
            {showUserPopover && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in duration-200 dark:bg-[#1a1d2d] dark:border-white/10">
                 <div className="flex items-center justify-center w-full py-2 rounded-lg text-sm text-rose-600 hover:bg-rose-50 cursor-pointer transition-colors" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    退出登录
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Toggle (when closed) */}
        {!isSidebarOpen && (
          <div className="absolute top-6 left-6 z-50">
             <div 
              className="p-2 bg-white rounded-md shadow-sm cursor-pointer hover:bg-slate-50 dark:bg-[#1a1d2d] dark:hover:bg-white/5"
              onClick={() => setIsSidebarOpen(true)}
            >
              <img src={iconSidebar} alt="Open Sidebar" className="w-4 h-4 opacity-60 dark:invert" />
            </div>
          </div>
        )}

        {/* Center Area */}
        <div className="flex-1 flex flex-col items-center justify-center z-10 w-full max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-4 dark:text-white">
              你好，我是<span className="text-[#0066FF]">百晓</span>
            </h1>
            <p className="text-slate-500 text-sm dark:text-gray-400">
              我可以帮你完成查询数据、业务问题诊断、制作报表、分析用户画像、活动策略建议，编写SQL等
            </p>
          </div>

          {/* Chat Card */}
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 dark:bg-[#1a1d2d] dark:border-white/5">
            {/* Tabs */}
            <div className="flex items-center px-6 pt-6 mb-2">
              <div 
                className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors mr-2 ${
                  inputTab === 'analysis' 
                    ? 'bg-[#E6F4FF] text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                    : 'text-slate-500 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
                }`}
                onClick={() => setInputTab('analysis')}
              >
                智能问数
              </div>
              <div 
                className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  inputTab === 'ask' 
                    ? 'bg-[#E6F4FF] text-[#0066FF] dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                    : 'text-slate-500 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
                }`}
                onClick={() => setInputTab('ask')}
              >
                向百晓提问
              </div>
            </div>

            {/* Input Area */}
            <div className="px-6 pb-6 relative">
              <textarea 
                className="w-full h-32 resize-none outline-none text-slate-700 placeholder-slate-300 text-sm leading-relaxed bg-transparent dark:text-gray-200 dark:placeholder-gray-600"
                placeholder={inputTab === 'analysis' ? "向百晓提问" : "请输入你的问题..."}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
              />
              
              <div className="absolute bottom-6 right-6">
                <img 
                  src={iconSend} 
                  alt="Send" 
                  className="w-8 h-8 cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Bottom App Switcher */}
          <div className="mt-12 bg-white/60 backdrop-blur-md border border-white/60 p-1.5 rounded-full flex items-center shadow-sm dark:bg-white/5 dark:border-white/5">
             <button 
              className={`px-5 py-2 rounded-full text-sm font-medium flex items-center transition-all ${
                chatTheme === 'analysis' 
                  ? 'bg-white text-[#0066FF] shadow-sm dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                  : 'text-slate-500 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-white/5'
              }`}
              onClick={() => setChatTheme('analysis')}
             >
               <div className={`w-2 h-2 rounded-full bg-[#0066FF] mr-2 ${chatTheme === 'analysis' ? 'opacity-100' : 'opacity-0'}`}></div>
               智能问数
             </button>
             <button 
              className={`px-5 py-2 rounded-full text-sm font-medium flex items-center transition-all ${
                chatTheme === 'persona' 
                  ? 'bg-white text-[#0066FF] shadow-sm dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                  : 'text-slate-500 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-white/5'
              }`}
              onClick={() => setChatTheme('persona')}
             >
               <div className={`w-2 h-2 rounded-full bg-[#0066FF] mr-2 ${chatTheme === 'persona' ? 'opacity-100' : 'opacity-0'}`}></div>
               智能个体画像
             </button>
             <button 
              className={`px-5 py-2 rounded-full text-sm font-medium flex items-center transition-all ${
                chatTheme === 'cloud' 
                  ? 'bg-white text-[#0066FF] shadow-sm dark:bg-[#0066FF]/20 dark:text-[#0066FF]' 
                  : 'text-slate-500 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-white/5'
              }`}
              onClick={() => setChatTheme('cloud')}
             >
               <div className={`w-2 h-2 rounded-full bg-[#0066FF] mr-2 ${chatTheme === 'cloud' ? 'opacity-100' : 'opacity-0'}`}></div>
               智能云
             </button>
             <button 
              className="px-5 py-2 rounded-full text-sm font-medium flex items-center text-slate-500 hover:bg-white/50 transition-all dark:text-gray-400 dark:hover:bg-white/5"
             >
               <MoreHorizontal className="w-4 h-4 mr-1.5" />
               更多
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;