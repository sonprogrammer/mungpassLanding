'use client'

import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, MapPin, Heart,
  BarChart3, Store, Zap, UserCheck,
  MonitorCheck
} from 'lucide-react';
import Link from 'next/link';

interface FeaturesProps {
  tab: 'user' | 'owner';
  setTab: (value: 'user' | 'owner') => void;
}

export function Features({ tab, setTab }: FeaturesProps) {

  const content = {
    user: [
      {
        icon: <UserCheck className="w-6 h-6 text-orange-500" />,
        title: "스마트 체크인",
        desc: "강아지 등록 한 번으로 성격, 알러지 등 특이사항이 사장님께 자동 전달됩니다."
      },
      {
        icon: <Clock className="w-6 h-6 text-orange-500" />,
        title: "실시간 이용 관리",
        desc: "입실과 동시에 남은 시간을 앱에서 실시간으로 확인하고 알림을 받으세요."
      },
      {
        icon: <MapPin className="w-6 h-6 text-orange-500" />,
        title: "내 주변 카페 찾기",
        desc: "지도를 통해 주변 매장을 찾고, 실제 이용객의 평점과 기록을 확인하세요."
      },
      {
        icon: <Heart className="w-6 h-6 text-orange-500" />,
        title: "단골 매장 찜하기",
        desc: "자주 가는 매장을 찜하고, 나만의 애견카페 방문 기록을 쌓아보세요."
      }
    ],
    owner: [
      {
        icon: <BarChart3 className="w-6 h-6 text-emerald-500" />,
        title: "자동 매출 분석",
        desc: "QR 체크인 시 매출이 자동 누적되며, 전월 대비 증감률을 차트로 한눈에 보여줍니다."
      },
      {
        icon: <Zap className="w-6 h-6 text-emerald-500" />,
        title: "실시간 매장 컨트롤",
        desc: "개인 사정 시 '즉시 마감' 버튼으로 유저들에게 실시간 휴무 사유를 알릴 수 있습니다."
      },
      {
        icon: <Store className="w-6 h-6 text-emerald-500" />,
        title: "유연한 영업 설정",
        desc: "고정된 정보 대신 휴가나 영업시간 변경을 자유롭게 설정하여 헛걸음을 방지합니다."
      },
      {
        icon: <MonitorCheck className="w-6 h-6 text-emerald-500" />,
        title: "가상 키오스크",
        desc: "고객이 상품 선택 후 QR을 찍는 것만으로도 주문이 접수되어 인건비를 절감합니다."
      }
    ]
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
            모두가 행복한 <br className="sm:hidden" /> 반려생활의 시작
          </h2>
          <p className="text-sm md:text-base text-stone-500 font-medium px-4">
            멍패스는 견주님과 사장님 모두의 불편함을 해결합니다.
          </p>

          {/* //* 탭  */}
          <div className="flex justify-center mt-6 md:mt-8">
            <div className="bg-stone-100 p-1 rounded-2xl flex relative w-full max-w-[320px]">
              <motion.div
                className="absolute bg-white rounded-xl shadow-md h-[calc(100%-8px)] top-1"
                initial={false}
                animate={{
                  x: tab === 'user' ? 0 : '100%',
                  width: '50%'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                onClick={() => setTab('user')}
                className={`cursor-pointer relative z-10 w-1/2 py-3 text-sm font-bold transition-colors ${tab === 'user' ? 'text-orange-500' : 'text-stone-400'}`}
              >
                견주님용
              </button>
              <button
                onClick={() => setTab('owner')}
                className={`cursor-pointer relative z-10 w-1/2 py-3 text-sm font-bold transition-colors ${tab === 'owner' ? 'text-emerald-500' : 'text-stone-400'}`}
              >
                사장님용
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {content[tab].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 md:p-8 rounded-4xl md:rounded-[2.5rem] border flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${tab === 'owner' ? 'bg-emerald-50/50 border-emerald-100' : 'bg-orange-50/50 border-orange-100'
                    }`}
                >
                  <div className={`bg-white w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border shadow-sm mb-6 group-hover:scale-110 transition-transform ${tab === 'owner' ? 'border-emerald-100' : 'border-orange-100'
                    }`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 md:mt-20">
          <AnimatePresence mode="wait">
            {tab === 'owner' ? (
              <motion.div
                key="owner-banner"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 md:p-10 lg:p-12 bg-stone-900 rounded-[2.5rem] md:rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl"
              >
                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
                  <div className="space-y-6 flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-1 rounded-full border border-emerald-500/30">
                      <span className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">For Partners</span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight">
                        복잡한 <span className="text-emerald-400">정산관리</span>,<br />
                        이제 멍패스가 다 할게요.
                      </h4>
                      <p className="text-sm md:text-lg text-stone-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        수기 기록 없이도 <span className="text-stone-100 font-bold">실시간 누적 매출</span>이 자동으로 계산됩니다.
                        데이터 기반의 정산으로 운영의 효율을 극대화하세요.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-md mx-auto lg:mx-0">
                      {['일별/월별 자동 리포트', '매출 증감률 분석', '초과금 자동 계산'].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="text-xs md:text-sm text-stone-300 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto pt-4 lg:pt-0">
                    <Link
                      href="https://mungpass.vercel.app/signup/owner"
                      target='_blank'
                      className="w-full lg:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl transition-all hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:-translate-y-1 cursor-pointer whitespace-nowrap"
                    >
                      멍패스 입점하러 가기
                    </Link>

                    <p className="text-stone-500 text-xs md:text-sm font-medium flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-stone-500 rounded-full" />
                      신청 후 최종 승인까지 약 2~3일이 소요됩니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="user-banner"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-6 md:p-10 lg:p-12 bg-white rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-orange-100 shadow-[0_30px_60px_-15px_rgba(251,146,60,0.1)] overflow-hidden relative"
              >
                <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
                  <div className="space-y-6 flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1 rounded-full border border-orange-100">
                      <span className="text-orange-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">For Pet Owners</span>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-stone-900">
                        우리 아이와 노는 시간,<br />
                        이제 <span className="text-orange-500">1분 1초</span>도 아끼지 마세요.
                      </h4>
                      <p className="text-sm md:text-lg text-stone-500 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                        번거로운 입장 절차는 멍패스가 대신할게요.
                        <span className="text-stone-900 font-bold"> QR 스캔 한 번</span>으로 아이의 특이사항까지 정확하게 전달하고 오직 교감에만 집중하세요.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-md mx-auto lg:mx-0">
                      {['자동 데이터 전달', '실시간 잔여시간 확인', '단골 매장 찜하기'].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          <span className="text-xs md:text-sm text-stone-600 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-auto pt-4 lg:pt-0">
                    <Link href="https://mungpass.vercel.app/" target='_blank' className="w-full lg:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-lg md:text-xl transition-all hover:shadow-[0_20px_40px_rgba(249,115,22,0.2)] hover:-translate-y-1 cursor-pointer whitespace-nowrap">
                      멍패스 가입하러 가기
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}