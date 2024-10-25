import React, { useState, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function Component() {
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
    applyTheme(savedTheme || 'system')
  }, [])

  const applyTheme = (newTheme: string) => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
    }

    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap');
        
        body {
          font-family: 'Noto Sans SC', sans-serif;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

      `}</style>
      <div className="bg-gray-200 dark:bg-gray-900 transition-colors duration-300 min-w-[375px] min-h-[100vh] flex flex-col justify-between items-center p-4">
        <div className="flex-grow flex items-center">
          <div className="p-8 rounded-[24px] bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl animate-float">
            <div className="flex justify-center items-center">
              <img className="w-[256px] h-[256px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105" src="https://picsur.xxfer.cn/i/b0b3e92c-15fa-4570-b22f-9ce0ec418601.webp" alt="QR Code" />
            </div>
            <div className="mt-4 mb-6 text-[15px] text-center text-black/60 dark:text-white/60 font-medium">扫描二维码关注我</div>
            <div className="w-full flex items-center p-4 rounded-[14px] bg-[#f7f7f7] dark:bg-[#303134] transition-colors duration-300 hover:bg-[#f0f0f0] dark:hover:bg-[#3a3a3d]">
              <img className="w-[56px] h-[56px] mr-4 rounded-full shadow-sm" src="/img/vx-official.jpg" alt="Profile Picture" />
              <div className="flex flex-col justify-between">
                <div className="font-bold text-lg text-black dark:text-white">小李同学 Coding</div>
                <div className="text-[14px] text-black/60 dark:text-white/60 mt-1">热爱可抵岁月漫长</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-1 bg-gray-200 dark:bg-gray-800 rounded-lg flex space-x-1">
          <button
            onClick={() => toggleTheme('light')}
            className={`p-2 rounded-md transition-colors duration-200 ${
              theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-gray-700 text-gray-200'
            } ${
              theme === 'light' ? 'hover:bg-gray-400' : 'hover:bg-gray-600'
            }`}
            aria-label="Light mode"
          >
            <Sun size={20} className="text-current" />
          </button>
          <button
            onClick={() => toggleTheme('system')}
            className={`p-2 rounded-md transition-colors duration-200 ${
              theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-gray-700 text-gray-200'
            } ${
              theme === 'light' ? 'hover:bg-gray-400' : 'hover:bg-gray-600'
            }`}
            aria-label="System preference"
          >
            <Monitor size={20} className="text-current" />
          </button>
          <button
            onClick={() => toggleTheme('dark')}
            className={`p-2 rounded-md transition-colors duration-200 ${
              theme === 'light' ? 'bg-gray-300 text-gray-800' : 'bg-gray-700 text-gray-200'
            } ${
              theme === 'light' ? 'hover:bg-gray-400' : 'hover:bg-gray-600'
            }`}
            aria-label="Dark mode"
          >
            <Moon size={20} className="text-current" />
          </button>
        </div>
      </div>
    </>
  )
}