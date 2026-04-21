'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { Key, Sparkles, X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function WelcomeToast({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-8 left-1/2 z-1000 w-[calc(100vw-32px)] md:w-auto md:min-w-112.5"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-orange-100 p-5 md:p-6 relative overflow-hidden">

            
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 text-stone-400 hover:text-stone-600 transition-colors bg-stone-100 p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-5 relative z-10">

              <div className="flex items-start gap-4">
                <div className="bg-orange-500 p-3 rounded-2xl shrink-0 shadow-lg shadow-orange-200">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pr-6">
                  <h5 className="font-black text-stone-900 text-lg leading-tight mb-1">
                    Welcome! 👋
                  </h5>
                  <p className="text-stone-500 text-[13px] md:text-sm font-medium leading-snug">
                    포트폴리오 유입을 환영합니다. <span className="text-orange-600 font-bold">서버 예열</span>이 완료되었습니다.
                  </p>
                </div>
              </div>


              <div className="bg-stone-50 rounded-3xl p-4 border border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-orange-600 font-black text-[10px] uppercase tracking-widest">
                    <Key className="w-3 h-3" />
                    Test Account
                  </div>
                  <div className="flex gap-3 text-[12px] text-stone-600">
                    <div className="flex gap-1">
                      <span className="font-bold text-stone-400">ID</span>
                      <span className="font-mono text-stone-900">test@test.com</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="font-bold text-stone-400">PW</span>
                      <span className="font-mono text-stone-900">123456</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleCopy("test@test.com / 123456")}
                  className="bg-white border border-stone-200 hover:border-orange-300 text-stone-600 hover:text-orange-600 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                >
                  {copied ? (
                    <><Check className="w-3.5 h-3.5" /> Copied!</>
                  ) : (
                    <><Copy className="w-3.5 h-3.5" /> 계정 복사</>
                  )}
                </button>
              </div>
            </div>

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute bottom-0 left-0 bg-orange-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}