'use client'

import { motion, Variants } from 'framer-motion';
import { QrCode, Sparkles, Store } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Features } from '@/app/components/Features';
import { Persona } from '@/app/components/Persona';
import { useTrafficTracker } from '@/app/hooks/useTrafficTracker';
import { WelcomeToast } from '@/app/components/WelcomeToast';
import { LogVisitor } from '@/app/components/LogVisitor';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scrollLeft: Variants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }
    }
  }
}

const scrollRight: Variants = {
  animate: {
    x: [-1000, 0],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }
    }
  }
}

export default function Home() {
  const [tab, setTab] = useState<'user' | 'owner'>('user')

  const { isWelcomeMessage, setIsWelcomeMessage } = useTrafficTracker()

  const ownerImg = ["/owner-kiosk.png", "/owner-main.png", "/owner-managekiosk.png", "/owner-manageStore.png", "/owner-notification.png", "/owner-productmanage.png", "/owner-static.png", "/owner-storetime.png", "/owner-usetable.png"]
  const userImg = ["/user-around.png", "/user-main.png", "/user-mypage.png", "/user-mypet.png", "/user-realtime.png"]

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans">

    <LogVisitor />

      <WelcomeToast
        visible={isWelcomeMessage} 
        onClose={() => setIsWelcomeMessage(false)} 
      />
      
      
      {/* //* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
        <nav className="max-w-7xl mx-auto px-5 py-3 md:py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="/m.png"
              alt="로고"
              width={42}
              height={42}
              className="rounded-full border border-orange-100 md:w-12.5 md:h-12.5"
            />
            <div className="flex flex-col">
              <h1 className="text-lg md:text-xl font-black text-slate-900 tracking-tighter leading-none">
                멍 <span className="text-orange-500">패스</span>
              </h1>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-0.5">mungpass</span>
            </div>
          </Link>
        </nav>
      </header>

      {/* //* Hero Section */}
      <section className="relative bg-orange-50/50 py-16 md:py-32 overflow-hidden">
        {/* //* 배경 스크롤 애니메이션 (모바일에서 투명도 낮춤) */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center gap-6 md:gap-10 opacity-[0.2] md:opacity-40 -rotate-12 pointer-events-none scale-110 md:scale-100">
          <motion.div className="flex gap-6 md:gap-8 whitespace-nowrap" variants={scrollLeft} animate="animate">
            {[...ownerImg, ...ownerImg].map((src, i) => (
              <div key={`owner-${i}`} className="relative w-40 h-80 md:w-50 md:h-100 bg-white rounded-[30px] md:rounded-[40px] border border-orange-100 shrink-0 overflow-hidden shadow-xl">
                <Image src={src} alt="기능" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
          <motion.div className="flex gap-6 md:gap-8 whitespace-nowrap" variants={scrollRight} animate="animate">
            {[...userImg, ...userImg, ...userImg].map((src, i) => (
              <div key={`user-${i}`} className="relative w-40 h-80 md:w-50 md:h-100 bg-white rounded-[30px] md:rounded-[40px] border border-orange-100 shrink-0 overflow-hidden shadow-xl">
                <Image src={src} alt="기능" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center relative z-10">
          {/* //* 메인 카피 카드 */}
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-6 bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-white">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 text-xs md:text-sm font-bold text-orange-600 shadow-sm">
              <Sparkles className="w-4 h-4" />
              대한민국 1등 애견카페 간편 입장권
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font- leading-[1.15] font-black tracking-tight text-stone-900">
              우리 아이와 애견카페,<br />
              이제 <span className="text-orange-500">멍패스</span>로 1초 만에!
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-xl text-stone-600 max-w-lg leading-relaxed font-semibold">
              번거로운 수기 명부 대신 QR 스캔 한 번이면 끝. <br className="hidden md:block" />
              단골 카페와 우리 아이 방문 기록까지 앱 하나로 관리하세요.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-4">
              <Link href="https://mungpass.vercel.app/" target='_blank' className="w-full cursor-pointer sm:w-auto bg-stone-900 text-white px-10 py-4 md:py-5 rounded-full text-lg font-black flex items-center justify-center gap-3 hover:bg-black transition-all shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95">
                <QrCode className="w-6 h-6 text-orange-400" />
                지금 시작하기
              </Link>
            </motion.div>
          </motion.div>

          {/* //* 폰 화면 UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center lg:pr-10"
          >
            <div className="w-full max-w-70 md:max-w-[320px] aspect-[1/2.1] bg-stone-900 rounded-[3rem] p-3 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-[6px] border-stone-800 relative">
              <div className="w-full h-full bg-[#FFFBEB] rounded-[2.2rem] overflow-hidden flex flex-col items-center pt-8 md:pt-10 border border-stone-700/10">
                
                <div className="flex flex-col items-center mb-6 md:mb-8 scale-90 md:scale-100">
                  <Image src="/m.png" alt="MungPass Logo" width={70} height={70} className="rounded-full shadow-md" />
                  <h2 className="text-2xl font-black tracking-tight text-stone-800 mt-2">
                    멍<span className="text-orange-600">패스</span>
                  </h2>
                  <p className="text-[9px] font-bold text-orange-400 tracking-[0.2em] uppercase">Mungpass - Membership</p>
                </div>

                <div className="w-[88%] bg-white rounded-4xl shadow-xl p-5 md:p-6 flex flex-col items-center space-y-4 border border-white">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-stone-800">견주님</h3>
                    <p className="text-[10px] text-stone-400 font-medium">멍패스에 오신 것을 환영해요!</p>
                  </div>

                  <div className="bg-stone-100 p-1 rounded-full flex self-end text-[8px] font-black">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-sm">일반 유저</span>
                    <span className="text-stone-400 px-3 py-1">사장님</span>
                  </div>

                  <div className="w-full space-y-2">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-orange-600 ml-1">이메일 주소</label>
                      <div className="w-full h-9 md:h-10 bg-stone-50 border border-stone-100 rounded-xl px-3 flex items-center shadow-inner">
                        <span className="text-[10px] text-stone-300">mungpass@example.com</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full h-10 bg-orange-600 text-white text-[11px] font-black rounded-xl flex items-center justify-center gap-1 shadow-lg shadow-orange-100">
                    접속하기 <span className="text-sm">→</span>
                  </button>
                  
                  <button className="w-full h-10 bg-[#FEE500] text-stone-800 text-[11px] font-black rounded-xl flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-stone-800 rounded-full" /> 카카오 로그인
                  </button>
                </div>

                <div className="mt-6 w-[88%] p-3 bg-white/80 rounded-2xl border border-dashed border-orange-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-500 p-1.5 rounded-lg">
                      <Store className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-stone-700 leading-none">사장님이신가요?</span>
                      <span className="text-[7px] text-orange-500 font-bold mt-0.5">입점 상담 신청하기</span>
                    </div>
                  </div>
                  <span className="text-[14px] font-black text-orange-400">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* //* 페르소나 섹션 */}
      <Persona />

      {/* //* 기능 섹션 */}
      <Features tab={tab} setTab={setTab} />
      
      <footer className="py-12 text-center text-stone-400 text-sm border-t border-stone-50">
        © 2026 MungPass. All rights reserved.
      </footer>
    </div>
  );
}