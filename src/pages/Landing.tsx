import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquarePlus, 
  BarChart2, 
  User, 
  Cloud, 
  MoreHorizontal, 
  ChevronRight, 
  History, 
  Box, 
  Send, 
  ChevronDown,
  LogOut,
  PenLine,
  Info,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronUp,
  Download,
  Moon,
  Sun
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import iconSidebar from '../assets/icon-sidebar.svg';
import iconHistory from '../assets/icon-history.svg';
import logoFull from '../assets/logo_full.png';
import logoUnion from '../assets/logo-union.png';
import logoVector from '../assets/logo-vector.png';
import iconSend from '../assets/icon-send.png';
import bgMain from '../assets/bg-main.png';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [showUserPopover, setShowUserPopover] = useState(false);
  const [isAnalysisDropdownOpen, setIsAnalysisDropdownOpen] = useState(false);
  const [analysisType, setAnalysisType] = useState('快速分析');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<'chat' | 'history' | 'analysis' | 'persona' | 'history_detail'>('chat');
  const [isThinkingOpen, setIsThinkingOpen] = useState(true);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [chatTheme, setChatTheme] = useState<'default' | 'analysis' | 'persona' | 'cloud'>('analysis');
  const [selectedHistory, setSelectedHistory] = useState<string | null>(null);
  const { isDark: isDarkMode, toggleTheme } = useTheme();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/login');
  };

  return (
    <div className={`flex h-screen font-sans text-slate-800 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-[#0f111a] dark:via-[#1a1d2d] dark:to-[#0f111a]`}>
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64 border-r' : 'w-0 overflow-hidden'
        } bg-white/50 backdrop-blur-xl border-white/40 dark:bg-[#1a1d2d]/80 dark:border-white/5 flex flex-col h-full transition-all duration-300 ease-in-out shadow-lg z-50`}
      >
        {/* Brand */}
        <div className="p-6 flex items-center justify-between min-w-[256px]">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img 
                src={logoUnion} 
                alt="Logo Part 1" 
                className="w-[27px] h-[17px] object-contain absolute"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <img 
                src={logoVector} 
                alt="Logo Part 2" 
                className="w-[7px] h-[7px] object-contain absolute"
                style={{ top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}
              />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#016aff] to-cyan-500">StartAGI</span>
          </div>
          <img 
            src={iconSidebar} 
            alt="Toggle Sidebar" 
            className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Primary Menu */}
        <div className="px-3 space-y-1 min-w-[256px]">
          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              currentView === 'chat' 
                ? 'bg-[#e6f0ff] text-[#016aff] shadow-sm dark:bg-[#016aff]/20 dark:text-[#016aff]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200'
            }`}
            onClick={() => setCurrentView('chat')}
          >
            <MessageSquarePlus className={`w-4 h-4 mr-3 ${currentView === 'chat' ? 'text-[#016aff] dark:text-[#016aff]' : 'text-slate-400 dark:text-gray-500'}`} />
            <span>新对话</span>
          </div>
          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              currentView === 'analysis' 
                ? 'bg-[#e6f0ff] text-[#016aff] shadow-sm dark:bg-[#016aff]/20 dark:text-[#016aff]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200'
            }`}
            onClick={() => {
              setCurrentView('analysis');
              setSelectedApp('智能问数');
            }}
          >
            <BarChart2 className={`w-4 h-4 mr-3 ${currentView === 'analysis' ? 'text-[#016aff] dark:text-[#016aff]' : 'text-slate-400 dark:text-gray-500'}`} />
            <span>智能问数</span>
          </div>
          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              currentView === 'persona' 
                ? 'bg-[#e6f0ff] text-[#016aff] shadow-sm dark:bg-[#016aff]/20 dark:text-[#016aff]' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200'
            }`}
            onClick={() => {
              setCurrentView('persona');
              setSelectedApp(null);
            }}
          >
            <User className={`w-4 h-4 mr-3 ${currentView === 'persona' ? 'text-[#016aff] dark:text-[#016aff]' : 'text-slate-400 dark:text-gray-500'}`} />
            <span>智能个体画像</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-all duration-200 group dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200">
            <div className="flex items-center">
              <Cloud className="w-4 h-4 mr-3 text-slate-400 group-hover:text-slate-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
              <span>智能云XX</span>
            </div>
            <PenLine className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 dark:text-gray-500" />
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-all duration-200 group dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200">
            <div className="flex items-center">
              <MoreHorizontal className="w-4 h-4 mr-3 text-slate-400 group-hover:text-slate-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
              <span>更多智能应用</span>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-gray-500" />
          </div>
        </div>

        <div className="my-6 border-t border-slate-100 mx-6 dark:border-white/5"></div>

        {/* History Section */}
        <div className="flex-1 px-3 min-w-[256px] overflow-y-auto">
          <div 
            className={`flex items-center justify-between px-3 mb-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors dark:text-gray-500 dark:hover:text-gray-300 ${currentView === 'history' ? 'text-indigo-600 font-medium dark:text-indigo-400' : ''}`}
            onClick={() => setCurrentView(currentView === 'history' ? 'chat' : 'history')}
          >
            <span className="text-xs font-semibold tracking-wider uppercase">历史对话</span>
            <img 
              src={iconHistory} 
              alt="View All History" 
              className="w-3 h-3 hover:opacity-70 transition-opacity opacity-60 dark:opacity-40 dark:invert"
            />
          </div>
          
          <div className="space-y-1">
            {['会员数查询任务', '上个月渠道会员开通人数统计', '最近30天用户访问情况总结', '杭州地区 30 岁男性用户画像', '查询去年新用户GMV情况'].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center px-3 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200 group ${
                  currentView === 'history_detail' && selectedHistory === item 
                    ? 'bg-indigo-50 text-indigo-700 font-medium shadow-sm dark:bg-indigo-500/20 dark:text-indigo-300' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200'
                }`}
                onClick={() => {
                  setSelectedHistory(item);
                  setCurrentView('history_detail');
                }}
              >
                <div className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 transition-colors ${
                  currentView === 'history_detail' && selectedHistory === item 
                    ? 'bg-indigo-500 dark:bg-indigo-400' 
                    : 'bg-slate-200 group-hover:bg-indigo-300 dark:bg-white/10 dark:group-hover:bg-indigo-500/50'
                }`}></div>
                <span className="truncate opacity-90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Products */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 dark:bg-white/5 dark:border-white/5">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="text-xs text-slate-400 dark:text-gray-500 font-medium">StartDT产品</div>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-white/10 transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
          <div className="space-y-2">
            {['智能增长平台', '智能湖仓一体平台'].map((item, index) => (
              <div key={index} className="flex items-center px-3 py-2 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 cursor-pointer hover:border-indigo-200 hover:shadow-sm transition-all duration-200 dark:bg-white/5 dark:border-white/5 dark:text-gray-300 dark:hover:bg-white/10">
                <div className="w-3 h-3 bg-indigo-100 rounded-sm mr-2.5 dark:bg-indigo-500/30"></div>
                <span className="text-xs">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-0">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={bgMain} 
            alt="Background" 
            className="w-full h-full object-cover dark:opacity-0 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none dark:opacity-100 opacity-0 transition-opacity duration-500"></div>
        </div>

        {/* Toggle Sidebar Button (when sidebar is closed) */}
        {!isSidebarOpen && (
          <div className="absolute top-6 left-6 z-10">
            <img 
              src={iconSidebar} 
              alt="Toggle Sidebar" 
              className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity opacity-50 dark:opacity-40 dark:invert"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>
        )}

        {/* Top Right User Area */}
        <div className="absolute top-6 right-8 z-[100]">
          <div 
            className="flex items-center cursor-pointer group bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative z-[101] dark:bg-[#1a1d2d] dark:border-white/10"
            style={{ width: showUserPopover ? 'auto' : '32px', paddingRight: showUserPopover ? '12px' : '0' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.width = 'auto';
              e.currentTarget.style.paddingRight = '12px';
            }}
            onMouseLeave={(e) => {
              if (!showUserPopover) {
                e.currentTarget.style.width = '32px';
                e.currentTarget.style.paddingRight = '0';
              }
            }}
            onClick={() => setShowUserPopover(!showUserPopover)}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 dark:bg-white/5">
              <User className="w-4 h-4 text-slate-600 dark:text-gray-300" />
            </div>
            <span className={`text-sm text-slate-700 font-medium whitespace-nowrap overflow-hidden transition-opacity duration-300 ml-1 dark:text-gray-200 ${showUserPopover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>个人中心</span>
          </div>

          {/* User Popover */}
          {showUserPopover && (
            <>
              <div className="fixed inset-0 z-[99]" onClick={() => setShowUserPopover(false)}></div>
              <div className="absolute top-12 right-0 w-72 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 animate-in fade-in zoom-in duration-200 z-[100] dark:bg-[#1a1d2d] dark:border-white/10 dark:shadow-black/50">
              <div className="space-y-4 mb-6">
                <div className="text-sm text-slate-600 flex items-center justify-between dark:text-gray-400">
                  <span className="text-slate-400 dark:text-gray-500">昵称</span>
                  <span className="font-medium dark:text-gray-200">小童</span>
                </div>
                <div className="text-sm text-slate-600 flex items-center justify-between dark:text-gray-400">
                  <span className="text-slate-400 dark:text-gray-500">邮箱</span>
                  <span className="font-medium dark:text-gray-200">liuchulian@startdt.com</span>
                </div>
                <div className="text-sm text-slate-600 flex items-center justify-between dark:text-gray-400">
                  <span className="text-slate-400 dark:text-gray-500">手机号</span>
                  <span className="font-medium dark:text-gray-200">17816869833</span>
                </div>
              </div>
              <div 
                className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm text-slate-600 hover:bg-rose-50 hover:text-rose-600 cursor-pointer transition-all border border-slate-200 hover:border-rose-200 dark:text-gray-400 dark:border-white/10 dark:hover:bg-rose-900/20 dark:hover:text-rose-400 dark:hover:border-rose-900/30"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                退出登录
              </div>
            </div>
          </>
          )}
        </div>

        {/* Center Content */}
        {currentView === 'chat' ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8 animate-in fade-in duration-300 relative z-10">
            {chatTheme === 'default' ? (
              <>
                <h1 className="text-[28px] font-semibold text-slate-900 mb-4 tracking-tight dark:text-white">你好，我是 <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] to-[#00FFFF]">StartAGI</span></h1>
                <p className="text-[#666666] text-sm mb-12 tracking-wider font-normal dark:text-gray-400">我可以帮你完成查询数据、业务问题诊断、制作报表、分析用户画像、活动策略建议，编写SQL等</p>
              </>
            ) : chatTheme === 'analysis' ? (
              <>
                <h1 className="text-[28px] font-semibold text-slate-900 mb-4 tracking-tight dark:text-white">你好，我是 <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] to-[#00FFFF]">StartAGI</span></h1>
                <p className="text-[#666666] text-sm mb-12 tracking-wider font-normal dark:text-gray-400">我可以帮你完成查询数据、业务问题诊断、制作报表、分析用户画像、活动策略建议，编写SQL等</p>
              </>
            ) : (
              <>
                <h1 className="text-[28px] font-semibold text-slate-900 mb-4 tracking-tight dark:text-white">你好，我是 <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00A8FF] to-[#00FFFF]">StartAGI</span></h1>
                <p className="text-[#666666] text-sm mb-12 tracking-wider font-normal dark:text-gray-400">我可以帮你完成查询数据、业务问题诊断、制作报表、分析用户画像、活动策略建议，编写SQL等</p>
              </>
            )}

            {/* Chat Input Card */}
            <div className="w-full h-48 relative mb-10 group">
              {/* Examples Floating Panel for Analysis Theme */}
              {chatTheme === 'analysis' && (
                <div className={`w-full absolute bottom-full mb-[10px] z-20 transition-all duration-300 ${isInputFocused ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-teal-100 shadow-lg shadow-teal-500/5 p-6 dark:bg-[#1a1d2d]/60 dark:border-teal-900/30">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider dark:text-teal-400">提问示例</span>
                      <span className="text-xs text-slate-400 cursor-pointer hover:text-teal-600 transition-colors flex items-center gap-1 dark:text-gray-500 dark:hover:text-teal-400">
                        查看问题库 <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5 items-center">
                      {[
                        '过去7天购买总次数是多少？',
                        '2024年7月按天查看购买总次数',
                        '2024年7月促销活动名称为「夏季促销」的购买总次数',
                        '2024年7月按性别查看购买总次数'
                      ].map((item, index) => (
                        <button key={index} className="px-3.5 py-2 rounded-lg bg-teal-50 text-xs text-teal-700 hover:bg-teal-100 hover:shadow-sm transition-all border border-transparent hover:border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:hover:bg-teal-900/40 dark:hover:border-teal-800/50">
                          {item}
                        </button>
                      ))}
                      <div className="w-5 h-5 border-2 border-teal-100 border-t-teal-500 rounded-full animate-spin ml-2 dark:border-teal-900/30 dark:border-t-teal-500"></div>
                    </div>
                  </div>
                </div>
              )}
              {/* Neon Glow & Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-2xl opacity-70 dark:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-2xl opacity-70 dark:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-full bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-5 transition-all duration-300 dark:bg-[#0f111a] dark:border-transparent dark:shadow-none overflow-hidden">
                <div className="flex items-start gap-3 h-full">
                {/* App Tag */}
                {chatTheme === 'analysis' && (
                  <div className="flex-shrink-0 flex items-center bg-teal-50 text-teal-600 px-2.5 py-1 rounded-md text-xs font-medium border border-teal-200 mt-0.5 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-800/30">
                    智能问数
                  </div>
                )}
                {chatTheme === 'persona' && (
                  <div className="flex-shrink-0 flex items-center bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-medium border border-indigo-200 mt-0.5 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800/30">
                    智能个体画像
                  </div>
                )}

                {chatTheme === 'cloud' && (
                  <div className="flex-shrink-0 flex items-center bg-sky-50 text-sky-600 px-2.5 py-1 rounded-md text-xs font-medium border border-sky-200 mt-0.5 dark:bg-sky-900/20 dark:text-sky-400 dark:border-sky-800/30">
                    智能云XX
                  </div>
                )}

                <textarea 
                  className="flex-1 h-full resize-none outline-none text-slate-700 placeholder-[#999999] bg-transparent pt-0.5 text-base leading-relaxed dark:text-gray-200 dark:placeholder-gray-600"
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    // Small delay to allow clicking on example questions
                    setTimeout(() => setIsInputFocused(false), 200);
                  }}
                  placeholder={
                    chatTheme === 'persona' 
                      ? "请输入关于当前用户（用户ID：250910）的基础信息或行为问题，如：用户会员等级。支持最近30天的数据查询。" 
                      : chatTheme === 'cloud'
                      ? "请输入..."
                      : "向 StartAGI 提问"
                  }
                />
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div 
                  className="flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg select-none transition-all border border-transparent hover:border-slate-200 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:border-white/10"
                  onClick={() => setIsAnalysisDropdownOpen(!isAnalysisDropdownOpen)}
                >
                  <span className="mr-2 font-medium">{analysisType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAnalysisDropdownOpen ? 'rotate-180' : ''} text-slate-400 dark:text-gray-500`} />
                </div>
                
                {isAnalysisDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-bottom-left p-1 dark:bg-[#252836] dark:border-white/10 dark:shadow-black/50">
                    {['快速分析', '深度思考'].map((type) => (
                      <div
                        key={type}
                        className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                          analysisType === type ? 'text-indigo-600 bg-indigo-50 font-medium dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
                        }`}
                        onClick={() => {
                          setAnalysisType(type);
                          setIsAnalysisDropdownOpen(false);
                        }}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 right-4">
                <img 
                  src={iconSend} 
                  alt="Send" 
                  className="w-10 h-10 cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
                />
              </div>
            </div>
            </div>

            {/* Action Chips */}
            <div className="flex space-x-4">
              <button 
                className={`px-8 py-3 rounded-full border text-sm font-medium transition-all duration-200 shadow-[0_10px_37px_-4px_rgba(132,158,172,0.18)] backdrop-blur-sm flex items-center gap-2 ${
                  chatTheme === 'analysis' 
                    ? 'bg-white border-teal-600 text-teal-600 dark:bg-white/10 dark:border-teal-400 dark:text-teal-400' 
                    : 'bg-white/80 border-white text-slate-900 hover:bg-white dark:bg-white/5 dark:border-white/5 dark:text-gray-200 dark:hover:bg-white/10'
                }`}
                onClick={() => setChatTheme(chatTheme === 'analysis' ? 'default' : 'analysis')}
              >
                <BarChart2 className="w-4 h-4" />
                智能问数
              </button>
              
              <button 
                className={`px-8 py-3 rounded-full border text-sm font-medium transition-all duration-200 shadow-[0_10px_37px_-4px_rgba(132,158,172,0.18)] backdrop-blur-sm flex items-center gap-2 ${
                  chatTheme === 'persona' 
                    ? 'bg-white border-indigo-600 text-indigo-600 dark:bg-white/10 dark:border-indigo-400 dark:text-indigo-400' 
                    : 'bg-white/80 border-white text-slate-900 hover:bg-white dark:bg-white/5 dark:border-white/5 dark:text-gray-200 dark:hover:bg-white/10'
                }`}
                onClick={() => setChatTheme(chatTheme === 'persona' ? 'default' : 'persona')}
              >
                <User className="w-4 h-4" />
                智能个体画像
              </button>

              <button 
                className={`px-8 py-3 rounded-full border text-sm font-medium transition-all duration-200 shadow-[0_10px_37px_-4px_rgba(132,158,172,0.18)] backdrop-blur-sm flex items-center gap-2 ${
                  chatTheme === 'cloud' 
                    ? 'bg-white border-rose-600 text-rose-600 dark:bg-white/10 dark:border-rose-400 dark:text-rose-400' 
                    : 'bg-white/80 border-white text-slate-900 hover:bg-white dark:bg-white/5 dark:border-white/5 dark:text-gray-200 dark:hover:bg-white/10'
                }`}
                onClick={() => setChatTheme(chatTheme === 'cloud' ? 'default' : 'cloud')}
              >
                <Cloud className="w-4 h-4" />
                智能云XX
              </button>

              <button className="px-8 py-3 rounded-full border border-white bg-white/80 text-sm font-medium text-slate-900 hover:bg-white transition-all flex items-center shadow-[0_10px_37px_-4px_rgba(132,158,172,0.18)] backdrop-blur-sm dark:bg-white/5 dark:border-white/5 dark:text-gray-300 dark:shadow-none dark:hover:bg-white/10">
                <span className="mr-1">更多</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : currentView === 'analysis' ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8 animate-in fade-in duration-300 relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl mb-8 flex items-center justify-center shadow-inner dark:from-teal-900/30 dark:to-cyan-900/30 dark:shadow-none">
              <BarChart2 className="w-10 h-10 text-teal-600 dark:text-teal-400" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-10 tracking-tight dark:text-white">言出数随，分析如此简单</h1>

            {/* Chat Input Card */}
            <div className="w-full h-48 relative mb-10 group">
              {/* Examples Floating Panel */}
              <div className={`w-full absolute bottom-full mb-[10px] z-20 transition-all duration-300 ${isInputFocused ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-teal-100 shadow-lg shadow-teal-500/5 p-6 dark:bg-[#1a1d2d]/60 dark:border-teal-900/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider dark:text-teal-400">提问示例</span>
                    <span className="text-xs text-slate-400 cursor-pointer hover:text-teal-600 transition-colors flex items-center gap-1 dark:text-gray-500 dark:hover:text-teal-400">
                      查看问题库 <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 items-center">
                    {[
                      '过去7天购买总次数是多少？',
                      '2024年7月按天查看购买总次数',
                      '2024年7月促销活动名称为「夏季促销」的购买总次数',
                      '2024年7月按性别查看购买总次数'
                    ].map((item, index) => (
                      <button key={index} className="px-3.5 py-2 rounded-lg bg-teal-50 text-xs text-teal-700 hover:bg-teal-100 hover:shadow-sm transition-all border border-transparent hover:border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:hover:bg-teal-900/40 dark:hover:border-teal-800/50">
                        {item}
                      </button>
                    ))}
                    <div className="w-5 h-5 border-2 border-teal-100 border-t-teal-500 rounded-full animate-spin ml-2 dark:border-teal-900/30 dark:border-t-teal-500"></div>
                  </div>
                </div>
              </div>

              {/* Neon Glow & Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-xl opacity-70 dark:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-xl opacity-70 dark:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-full bg-white/90 rounded-xl border border-white/50 shadow-lg p-5 transition-all duration-300 dark:bg-[#0f111a] dark:border-transparent dark:shadow-none overflow-hidden">
                <div className="flex items-start gap-3 h-full">
                {/* App Tag */}
                {selectedApp && (
                  <div className="flex-shrink-0 flex items-center bg-[#0ab7b11a] text-[#0ab7b1] px-3 py-1 rounded-[2px] text-xs border border-[#0ab7b1] mt-0.5 font-normal dark:bg-[#0ab7b1]/20 dark:text-[#0ab7b1] dark:border-[#0ab7b1]/30">
                    {selectedApp}
                  </div>
                )}

                <textarea 
                  className="flex-1 h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent text-base leading-relaxed dark:text-gray-200 dark:placeholder-gray-600"
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 200);
                  }}
                  placeholder="请输入你的问题..."
                />
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div 
                  className="flex items-center text-sm text-gray-600 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded select-none transition-colors dark:text-gray-400 dark:hover:bg-white/5"
                  onClick={() => setIsAnalysisDropdownOpen(!isAnalysisDropdownOpen)}
                >
                  <span className="mr-1 font-normal">{analysisType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAnalysisDropdownOpen ? 'rotate-180' : ''} text-gray-400 dark:text-gray-500`} />
                </div>
                
                {isAnalysisDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border border-gray-100 rounded-lg shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-bottom-left p-1 dark:bg-[#252836] dark:border-white/10 dark:shadow-black/50">
                    {['快速分析', '深度思考'].map((type) => (
                      <div
                        key={type}
                        className={`px-3 py-2 text-sm rounded-md cursor-pointer transition-colors ${
                          analysisType === type ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-white/5'
                        }`}
                        onClick={() => {
                          setAnalysisType(type);
                          setIsAnalysisDropdownOpen(false);
                        }}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 right-4">
                <img 
                  src={iconSend} 
                  alt="Send" 
                  className="w-10 h-10 cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
                />
              </div>
            </div>
            </div>
          </div>
        ) : currentView === 'persona' ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8 animate-in fade-in duration-300 relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl mb-8 flex items-center justify-center shadow-inner dark:from-indigo-900/30 dark:to-violet-900/30 dark:shadow-none">
              <User className="w-10 h-10 text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight dark:text-white">想了解用户的基础信息和行为，来问我吧</h1>
            <p className="text-indigo-600 text-sm mb-16 font-medium bg-indigo-50 px-4 py-1.5 rounded-full dark:bg-indigo-900/20 dark:text-indigo-400">支持最近30天的数据查询</p>

            {/* Chat Input Card */}
            <div className="w-full h-48 relative mb-10 group">
              {/* Neon Glow & Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-2xl opacity-70 dark:opacity-100 blur-sm transition-opacity duration-500"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-2xl opacity-70 dark:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-full bg-white/90 rounded-2xl border border-white/50 shadow-lg flex flex-col transition-all duration-300 dark:bg-[#0f111a] dark:border-transparent dark:shadow-none overflow-hidden">
                
                {/* Input Area */}
              <div className="flex-1 p-5 relative">
                {/* App Tag */}
                <div className="absolute top-5 left-5 z-10 flex items-center bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-medium border border-indigo-200 select-none dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800/30">
                  个体画像
                </div>

                <textarea 
                  className="w-full h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent text-base leading-relaxed indent-[4.8rem] dark:text-gray-200 dark:placeholder-gray-600"
                  placeholder="请输入关于当前用户（用户ID：250910）的基础信息或行为问题，如：用户会员等级"
                />
              </div>
              
              {/* Footer Toolbar */}
              <div className="flex items-center justify-between px-5 pb-5">
                {/* Left: Dropdown */}
                <div className="relative">
                  <div 
                    className="flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg select-none transition-all border border-transparent hover:border-slate-200 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:border-white/10"
                    onClick={() => setIsAnalysisDropdownOpen(!isAnalysisDropdownOpen)}
                  >
                    <span className="mr-2 font-medium">{analysisType}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAnalysisDropdownOpen ? 'rotate-180' : ''} text-slate-400 dark:text-gray-500`} />
                  </div>
                  
                  {isAnalysisDropdownOpen && (
                    <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-bottom-left p-1 dark:bg-[#252836] dark:border-white/10 dark:shadow-black/50">
                      {['快速分析', '深度思考'].map((type) => (
                        <div
                          key={type}
                          className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                            analysisType === type ? 'text-indigo-600 bg-indigo-50 font-medium dark:bg-indigo-900/30 dark:text-indigo-400' : 'text-slate-600 hover:bg-slate-50 dark:text-gray-400 dark:hover:bg-white/5'
                          }`}
                          onClick={() => {
                            setAnalysisType(type);
                            setIsAnalysisDropdownOpen(false);
                          }}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Send Button */}
                <img 
                  src={iconSend} 
                  alt="Send" 
                  className="w-10 h-10 cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
                />
              </div>
            </div>
            </div>
          </div>
        ) : currentView === 'history_detail' ? (
          <div className="flex-1 flex flex-col h-full relative max-w-4xl mx-auto w-full z-10 animate-in fade-in duration-300">
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-8 py-6 pb-48">
              {/* User Message */}
              <div className="flex justify-end mb-8 animate-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-start max-w-2xl flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-orange-500 flex items-center justify-center text-white text-xs ml-3 flex-shrink-0 shadow-md shadow-rose-200">
                    A
                  </div>
                  <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tr-none px-5 py-3.5 text-slate-700 text-sm leading-relaxed">
                    {selectedHistory || '上个月各渠道的访问量是多少，从大到小排序'}
                  </div>
                </div>
              </div>

              {/* AI Message */}
              <div className="flex items-start max-w-3xl animate-in slide-in-from-bottom-2 duration-500 delay-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs mr-3 flex-shrink-0 shadow-md shadow-indigo-200">
                  <MessageSquarePlus className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  {/* Thinking Process Accordion */}
                  <div className="mb-4">
                    <div 
                      className="flex items-center text-xs text-slate-500 cursor-pointer mb-2 select-none hover:text-indigo-600 transition-colors"
                      onClick={() => setIsThinkingOpen(!isThinkingOpen)}
                    >
                      <span className="mr-1 font-medium">我已完成思考</span>
                      {isThinkingOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </div>
                    
                    {isThinkingOpen && (
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-xs space-y-4 animate-in fade-in duration-200">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 flex-shrink-0 shadow-sm shadow-indigo-200"></div>
                          <div>
                            <div className="font-semibold text-slate-700 mb-1">确认问题</div>
                            <div className="text-slate-500 leading-relaxed">这个月的GMV总和是多少</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 flex-shrink-0 shadow-sm shadow-indigo-200"></div>
                          <div>
                            <div className="font-semibold text-slate-700 mb-1">问题分析</div>
                            <div className="text-slate-500 leading-relaxed">对用户输入进行深度拆解，通过 NLP 技术提取问题中的核心诉求、数据维度、筛选条件等关键信息</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 flex-shrink-0 shadow-sm shadow-indigo-200"></div>
                          <div>
                            <div className="font-semibold text-slate-700 mb-1">元数据匹配</div>
                            <div className="text-slate-500 leading-relaxed">调用预设的元数据知识库，将问题分析阶段提取的关键信息与元数据中的字段定义、数据来源、关联关系进行智能比对</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 flex-shrink-0 shadow-sm shadow-indigo-200"></div>
                          <div>
                            <div className="font-semibold text-slate-700 mb-1">数据计算</div>
                            <div className="text-slate-500 leading-relaxed">调用算法，输出查询结果</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Result */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-1.5">
                    <div className="text-slate-400 text-xs mb-3 px-3 pt-2">根据您的数据权限范围，以下为本次查询结果</div>
                    <div className="flex items-center justify-between mb-3 px-3">
                      <div className="font-bold text-slate-800 text-sm">上个月各渠道的访问量从大到小排序</div>
                      <div className="w-7 h-7 rounded-lg hover:bg-slate-50 flex items-center justify-center cursor-pointer transition-colors text-slate-400 hover:text-indigo-600">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                    {/* Placeholder for chart/table */}
                    <div className="h-48 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium tracking-wide">
                      [ 图表 / 数据展示区域 ]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area (Fixed at bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-full h-32 relative group">
                {/* Neon Glow & Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-2xl opacity-70 dark:opacity-100 blur-sm transition-opacity duration-500"></div>
                <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 dark:from-violet-600 dark:via-pink-500 dark:to-orange-500 rounded-2xl opacity-70 dark:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-full h-full bg-white/90 rounded-2xl border border-white/50 shadow-lg p-5 transition-all duration-300 dark:bg-[#0f111a] dark:border-transparent dark:shadow-none overflow-hidden">
                  <textarea 
                    className="w-full h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent pt-0.5 text-base leading-relaxed dark:text-gray-200 dark:placeholder-gray-600"
                    placeholder="请输入你的问题..."
                  />
                  <div className="absolute bottom-4 left-4 flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors dark:text-gray-400 dark:hover:bg-white/5">
                    <span className="mr-2 font-medium">快速分析</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <img 
                      src={iconSend} 
                      alt="Send" 
                      className="w-10 h-10 cursor-pointer hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 w-full max-w-5xl mx-auto px-12 py-12 animate-in fade-in duration-300 overflow-y-auto relative z-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">历史对话</h1>
            
            <div className="space-y-8">
              {/* Today */}
              <div>
                <div className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">今天</div>
                <div className="space-y-3">
                  {[
                    '为什么这个月销售额会下降？',
                    '北京地区全年营业额变化趋势总结'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-200 group">
                      <span className="text-slate-700 text-sm font-medium group-hover:text-indigo-900 transition-colors">{item}</span>
                      <span 
                        className="text-indigo-600 text-sm cursor-pointer hover:text-indigo-700 font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                        onClick={() => {
                          setSelectedHistory(item);
                          setCurrentView('history_detail');
                        }}
                      >
                        查看对话
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yesterday */}
              <div>
                <div className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">昨天</div>
                <div className="space-y-3">
                  {[
                    '销售额查询',
                    '线下门店销售量查询'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-200 group">
                      <span className="text-slate-700 text-sm font-medium group-hover:text-indigo-900 transition-colors">{item}</span>
                      <span 
                        className="text-indigo-600 text-sm cursor-pointer hover:text-indigo-700 font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                        onClick={() => {
                          setSelectedHistory(item);
                          setCurrentView('history_detail');
                        }}
                      >
                        查看对话
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Last 7 Days */}
              <div>
                <div className="text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider">近7天</div>
                <div className="space-y-3">
                  {[
                    '销售额查询xxxxx',
                    '线下门店销售量查询xxxxx',
                    '上个月各渠道的访问量是多少，从大到小排序'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md hover:shadow-slate-200/50 transition-all duration-200 group">
                      <span className="text-slate-700 text-sm font-medium group-hover:text-indigo-900 transition-colors">{item}</span>
                      <span 
                        className="text-indigo-600 text-sm cursor-pointer hover:text-indigo-700 font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                        onClick={() => {
                          setSelectedHistory(item);
                          setCurrentView('history_detail');
                        }}
                      >
                        查看对话
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
