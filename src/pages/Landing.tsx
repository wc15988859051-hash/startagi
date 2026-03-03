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
  Download
} from 'lucide-react';
import iconSidebar from '../assets/icon-sidebar.svg';
import iconHistory from '../assets/icon-history.svg';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [showUserPopover, setShowUserPopover] = useState(false);
  const [isAnalysisDropdownOpen, setIsAnalysisDropdownOpen] = useState(false);
  const [analysisType, setAnalysisType] = useState('快速分析');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<'chat' | 'history' | 'analysis' | 'persona' | 'history_detail'>('chat');
  const [isThinkingOpen, setIsThinkingOpen] = useState(true);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [chatTheme, setChatTheme] = useState<'default' | 'analysis' | 'persona' | 'cloud'>('default');
  const [selectedHistory, setSelectedHistory] = useState<string | null>(null);

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64 border-r' : 'w-0 overflow-hidden'
        } bg-white/80 backdrop-blur-2xl border-indigo-50/50 flex flex-col h-full transition-all duration-300 ease-in-out shadow-sm z-50`}
      >
        {/* Brand */}
        <div className="p-6 flex items-center justify-between min-w-[256px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md">S</div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">StartAGI</h1>
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
                ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
            onClick={() => setCurrentView('chat')}
          >
            <MessageSquarePlus className={`w-4 h-4 mr-3 ${currentView === 'chat' ? 'text-indigo-600' : 'text-slate-400'}`} />
            <span>新对话</span>
          </div>
          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              currentView === 'analysis' 
                ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
            onClick={() => {
              setCurrentView('analysis');
              setSelectedApp('智能问数');
            }}
          >
            <BarChart2 className={`w-4 h-4 mr-3 ${currentView === 'analysis' ? 'text-indigo-600' : 'text-slate-400'}`} />
            <span>智能问数</span>
          </div>
          <div 
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
              currentView === 'persona' 
                ? 'bg-indigo-50 text-indigo-600 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
            onClick={() => {
              setCurrentView('persona');
              setSelectedApp(null);
            }}
          >
            <User className={`w-4 h-4 mr-3 ${currentView === 'persona' ? 'text-indigo-600' : 'text-slate-400'}`} />
            <span>智能个体画像</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-all duration-200 group">
            <div className="flex items-center">
              <Cloud className="w-4 h-4 mr-3 text-slate-400 group-hover:text-slate-600" />
              <span>智能云XX</span>
            </div>
            <PenLine className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
          </div>
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-all duration-200 group">
            <div className="flex items-center">
              <MoreHorizontal className="w-4 h-4 mr-3 text-slate-400 group-hover:text-slate-600" />
              <span>更多智能应用</span>
            </div>
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </div>
        </div>

        <div className="my-6 border-t border-slate-100 mx-6"></div>

        {/* History Section */}
        <div className="flex-1 px-3 min-w-[256px] overflow-y-auto">
          <div 
            className={`flex items-center justify-between px-3 mb-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors ${currentView === 'history' ? 'text-indigo-600 font-medium' : ''}`}
            onClick={() => setCurrentView(currentView === 'history' ? 'chat' : 'history')}
          >
            <span className="text-xs font-semibold tracking-wider uppercase">历史对话</span>
            <img 
              src={iconHistory} 
              alt="View All History" 
              className="w-3 h-3 hover:opacity-70 transition-opacity opacity-60"
            />
          </div>
          
          <div className="space-y-1">
            {['会员数查询任务', '上个月渠道会员开通人数统计', '最近30天用户访问情况总结', '杭州地区 30 岁男性用户画像', '查询去年新用户GMV情况'].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center px-3 py-2 rounded-lg text-sm cursor-pointer transition-all duration-200 group ${
                  currentView === 'history_detail' && selectedHistory === item 
                    ? 'bg-indigo-50 text-indigo-700 font-medium shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                onClick={() => {
                  setSelectedHistory(item);
                  setCurrentView('history_detail');
                }}
              >
                <div className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 transition-colors ${
                  currentView === 'history_detail' && selectedHistory === item 
                    ? 'bg-indigo-500' 
                    : 'bg-slate-200 group-hover:bg-indigo-300'
                }`}></div>
                <span className="truncate opacity-90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Products */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="text-xs text-slate-400 mb-3 font-medium px-1">StartDT产品</div>
          <div className="space-y-2">
            {['智能增长', '智能制造', '数据治理'].map((item, index) => (
              <div key={index} className="flex items-center px-3 py-2 bg-white border border-slate-100 rounded-lg text-sm text-slate-700 cursor-pointer hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
                <div className="w-3 h-3 bg-indigo-100 rounded-sm mr-2.5"></div>
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
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-200/20 blur-[120px] mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-[100px] mix-blend-multiply"></div>
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-200/20 blur-[80px] mix-blend-multiply"></div>
        </div>

        {/* Toggle Sidebar Button (when sidebar is closed) */}
        {!isSidebarOpen && (
          <div className="absolute top-6 left-6 z-10">
            <img 
              src={iconSidebar} 
              alt="Toggle Sidebar" 
              className="w-4 h-4 cursor-pointer hover:opacity-70 transition-opacity opacity-50"
              onClick={() => setIsSidebarOpen(true)}
            />
          </div>
        )}

        {/* Top Right User Area */}
        <div className="absolute top-6 right-8 z-10">
          <div 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity group"
            onClick={() => setShowUserPopover(!showUserPopover)}
          >
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 shadow-sm group-hover:shadow-md transition-all">
              <User className="w-4 h-4 text-slate-600" />
            </div>
            <span className="text-sm text-slate-700 font-medium">个人中心</span>
          </div>

          {/* User Popover */}
          {showUserPopover && (
            <div className="absolute top-12 right-0 w-72 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 animate-in fade-in zoom-in duration-200 z-50">
              <div className="space-y-4 mb-6">
                <div className="text-sm text-slate-600 flex items-center justify-between">
                  <span className="text-slate-400">昵称</span>
                  <span className="font-medium">小童</span>
                </div>
                <div className="text-sm text-slate-600 flex items-center justify-between">
                  <span className="text-slate-400">邮箱</span>
                  <span className="font-medium">liuchulian@startdt.com</span>
                </div>
                <div className="text-sm text-slate-600 flex items-center justify-between">
                  <span className="text-slate-400">手机号</span>
                  <span className="font-medium">17816869833</span>
                </div>
              </div>
              <div 
                className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm text-slate-600 hover:bg-rose-50 hover:text-rose-600 cursor-pointer transition-all border border-slate-200 hover:border-rose-200"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                退出登录
              </div>
            </div>
          )}
        </div>

        {/* Center Content */}
        {currentView === 'chat' ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8 animate-in fade-in duration-300 relative z-10">
            {chatTheme === 'default' ? (
              <>
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">你好，我是 StartAGI</h1>
                <p className="text-slate-400 text-sm mb-12 tracking-wider font-light">我可以帮你完成查询数据、业务问题诊断、制作报表、分析用户画像等任务哦</p>
              </>
            ) : chatTheme === 'analysis' ? (
              <div className="w-full mb-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-teal-100 shadow-lg shadow-teal-500/5 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">提问示例</span>
                    <span className="text-xs text-slate-400 cursor-pointer hover:text-teal-600 transition-colors flex items-center gap-1">
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
                      <button key={index} className="px-3.5 py-2 rounded-lg bg-teal-50 text-xs text-teal-700 hover:bg-teal-100 hover:shadow-sm transition-all border border-transparent hover:border-teal-200">
                        {item}
                      </button>
                    ))}
                    <div className="w-5 h-5 border-2 border-teal-100 border-t-teal-500 rounded-full animate-spin ml-2"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">你好，我是 StartAGI</h1>
                <p className="text-slate-400 text-sm mb-12 tracking-wider font-light">我可以帮你完成查询数据、业务问题诊断、制作报表、分析用户画像等任务哦</p>
              </>
            )}

            {/* Chat Input Card */}
            <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-5 h-48 relative mb-10 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 ring-1 ring-slate-100/50">
              <div className="flex items-start gap-3 h-full">
                {/* App Tag */}
                {chatTheme === 'analysis' && (
                  <div className="flex-shrink-0 flex items-center bg-teal-50 text-teal-600 px-2.5 py-1 rounded-md text-xs font-medium border border-teal-200 mt-0.5">
                    智能问数
                    <button 
                      className="ml-2 hover:bg-teal-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                      onClick={() => setChatTheme('default')}
                    >
                      ×
                    </button>
                  </div>
                )}
                {chatTheme === 'persona' && (
                  <div className="flex-shrink-0 flex items-center bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-medium border border-indigo-200 mt-0.5">
                    智能个体画像
                    <button 
                      className="ml-2 hover:bg-indigo-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                      onClick={() => setChatTheme('default')}
                    >
                      ×
                    </button>
                  </div>
                )}

                {chatTheme === 'cloud' && (
                  <div className="flex-shrink-0 flex items-center bg-sky-50 text-sky-600 px-2.5 py-1 rounded-md text-xs font-medium border border-sky-200 mt-0.5">
                    智能云XX
                    <button 
                      className="ml-2 hover:bg-sky-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                      onClick={() => setChatTheme('default')}
                    >
                      ×
                    </button>
                  </div>
                )}

                <textarea 
                  className="flex-1 h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent pt-0.5 text-base leading-relaxed"
                  placeholder={
                    chatTheme === 'persona' 
                      ? "请输入关于当前用户（用户ID：250910）的基础信息或行为问题，如：用户会员等级。支持最近30天的数据查询。" 
                      : chatTheme === 'cloud'
                      ? "请输入..."
                      : "请输入你的问题..."
                  }
                />
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div 
                  className="flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg select-none transition-all border border-transparent hover:border-slate-200"
                  onClick={() => setIsAnalysisDropdownOpen(!isAnalysisDropdownOpen)}
                >
                  <span className="mr-2 font-medium">{analysisType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAnalysisDropdownOpen ? 'rotate-180' : ''} text-slate-400`} />
                </div>
                
                {isAnalysisDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-bottom-left p-1">
                    {['快速分析', '深度思考'].map((type) => (
                      <div
                        key={type}
                        className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                          analysisType === type ? 'text-indigo-600 bg-indigo-50 font-medium' : 'text-slate-600 hover:bg-slate-50'
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
                <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-200">
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </div>

            {/* Action Chips */}
            <div className="flex space-x-3">
              <button 
                className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  chatTheme === 'analysis' 
                    ? 'bg-teal-50 text-teal-700 border-teal-200 shadow-sm' 
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
                onClick={() => setChatTheme(chatTheme === 'analysis' ? 'default' : 'analysis')}
              >智能问数</button>
              {['智能个体画像', '智能云XX'].map((item, index) => (
                <button 
                  key={index} 
                  className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    (chatTheme === 'persona' && item === '智能个体画像')
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm' 
                      : (chatTheme === 'cloud' && item === '智能云XX')
                      ? 'bg-sky-50 text-sky-700 border-sky-200 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                  }`}
                  onClick={() => {
                    if (item === '智能个体画像') {
                      setChatTheme(chatTheme === 'persona' ? 'default' : 'persona');
                    } else if (item === '智能云XX') {
                      setChatTheme(chatTheme === 'cloud' ? 'default' : 'cloud');
                    }
                  }}
                >
                  {item}
                </button>
              ))}
              <button className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center shadow-sm">
                <span className="mr-1">更多</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : currentView === 'analysis' ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8 animate-in fade-in duration-300 relative z-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-16 tracking-tight">言出数随，分析如此简单</h1>

            {/* Chat Input Card */}
            <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-5 h-48 relative mb-10 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 ring-1 ring-slate-100/50">
              <div className="flex items-start gap-3 h-full">
                {/* App Tag */}
                {selectedApp && (
                  <div className="flex-shrink-0 flex items-center bg-teal-50 text-teal-600 px-2.5 py-1 rounded-md text-xs font-medium border border-teal-200 mt-0.5">
                    {selectedApp}
                    <button 
                      className="ml-2 hover:bg-teal-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedApp(null);
                      }}
                    >
                      ×
                    </button>
                  </div>
                )}

                <textarea 
                  className="flex-1 h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent pt-0.5 text-base leading-relaxed"
                  placeholder="请输入你的问题..."
                />
              </div>
              
              <div className="absolute bottom-4 left-4">
                <div 
                  className="flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg select-none transition-all border border-transparent hover:border-slate-200"
                  onClick={() => setIsAnalysisDropdownOpen(!isAnalysisDropdownOpen)}
                >
                  <span className="mr-2 font-medium">{analysisType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAnalysisDropdownOpen ? 'rotate-180' : ''} text-slate-400`} />
                </div>
                
                {isAnalysisDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-bottom-left p-1">
                    {['快速分析', '深度思考'].map((type) => (
                      <div
                        key={type}
                        className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                          analysisType === type ? 'text-indigo-600 bg-indigo-50 font-medium' : 'text-slate-600 hover:bg-slate-50'
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
                <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-200">
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </div>

            {/* Analysis Chips */}
            <div className="w-full space-y-4">
              <div className="flex flex-wrap gap-3 items-center">
                {[
                  '过去7天购买总次数是多少？',
                  '2024年7月按天查看购买总次数',
                  '2024年7月促销活动名称为「夏季促销」的购买总次数',
                  '2024年7月按性别查看购买总次数'
                ].map((item, index) => (
                  <button key={index} className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-600 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-sm transition-all duration-200">
                    {item}
                  </button>
                ))}
                
                <div className="flex items-center space-x-4 ml-2">
                  <div className="flex items-center text-slate-500 text-sm cursor-pointer hover:text-indigo-600 transition-colors">
                    <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                      <path d="M16 16h5v5" />
                    </svg>
                    刷新
                  </div>
                  <div className="flex items-center text-slate-500 text-sm cursor-pointer hover:text-indigo-600 transition-colors">
                    <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    查看问题库
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : currentView === 'persona' ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8 animate-in fade-in duration-300 relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl mb-8 flex items-center justify-center shadow-inner">
              <User className="w-10 h-10 text-indigo-400" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">想了解用户的基础信息和行为，来问我吧</h1>
            <p className="text-indigo-600 text-sm mb-16 font-medium bg-indigo-50 px-4 py-1.5 rounded-full">支持最近30天的数据查询</p>

            {/* Chat Input Card */}
            <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-5 h-48 relative mb-10 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 ring-1 ring-slate-100/50">
              {/* App Tag */}
              <div className="absolute top-5 left-5 z-10 flex items-center bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md text-xs font-medium border border-indigo-200">
                个体画像
                <button 
                  className="ml-2 hover:bg-indigo-100 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                  onClick={() => setCurrentView('chat')}
                >
                  ×
                </button>
              </div>

              <textarea 
                className="w-full h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent pt-0.5 text-base leading-relaxed indent-[6.5rem]"
                placeholder="请输入关于当前用户（用户ID：250910）的基础信息或行为问题&#10;如：用户会员等级"
              />
              
              <div className="absolute bottom-4 left-4">
                <div 
                  className="flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg select-none transition-all border border-transparent hover:border-slate-200"
                  onClick={() => setIsAnalysisDropdownOpen(!isAnalysisDropdownOpen)}
                >
                  <span className="mr-2 font-medium">{analysisType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isAnalysisDropdownOpen ? 'rotate-180' : ''} text-slate-400`} />
                </div>
                
                {isAnalysisDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl shadow-slate-200/50 z-20 overflow-hidden animate-in fade-in zoom-in duration-200 origin-bottom-left p-1">
                    {['快速分析', '深度思考'].map((type) => (
                      <div
                        key={type}
                        className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors ${
                          analysisType === type ? 'text-indigo-600 bg-indigo-50 font-medium' : 'text-slate-600 hover:bg-slate-50'
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
                <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-200">
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        ) : currentView === 'history_detail' ? (
          <div className="flex-1 flex flex-col h-full relative max-w-4xl mx-auto w-full z-10">
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
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent">
              <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-5 h-32 relative hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 ring-1 ring-slate-100/50">
                <textarea 
                  className="w-full h-full resize-none outline-none text-slate-700 placeholder-slate-400 bg-transparent pt-0.5 text-base leading-relaxed"
                  placeholder="请输入你的问题..."
                />
                <div className="absolute bottom-4 left-4 flex items-center text-sm text-slate-600 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors">
                  <span className="mr-2 font-medium">快速分析</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-200">
                    <Send className="w-5 h-5 ml-0.5" />
                  </button>
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
