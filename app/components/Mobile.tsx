'use client'

import { motion } from "framer-motion"
import { Store } from "lucide-react"
import Image from "next/image"


export function Mobile() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center w-full"
        >
            <div className="w-full max-w-70 md:max-w-[320px] h-fit  bg-stone-900 rounded-[3rem] p-3  border-[6px] relative" >

                <div className="w-full  bg-[#FFFBEB] rounded-[2.2rem] overflow-hidden flex flex-col items-center py-6 md:pt-10 border border-stone-700/10" >

                    <div className="flex flex-col items-center mb-4 md:mb-8 scale-90 md:scale-100" >
                        <Image src="/m.png" alt="MungPass Logo" width={60} height={60} className="rounded-full shadow-md" />
                        <h2 className="text-xl md:text-2xl font-black tracking-tight text-stone-800 mt-2">
                            멍<span className="text-orange-600">패스</span>
                        </h2>
                    </div >

                    <div className="w-[90%] bg-white rounded-4xl shadow-xl p-4 md:p-6 flex flex-col items-center space-y-3 md:space-y-4 border border-white" >
                        <div className="text-center">
                            <h3 className="text-base md:text-lg font-bold text-stone-800">견주님</h3>
                            <p className="text-[10px] text-stone-400 font-medium">멍패스에 오신 것을 환영해요!</p>
                        </div>
                        <div className="w-full flex justify-end">


                            <div className="bg-stone-100 p-1 rounded-full   text-[8px] font-black">
                                <span className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-sm">일반 유저</span>
                                <span className="text-stone-400 px-3 py-1">사장님</span>
                            </div>
                        </div>

                        <div className="w-full space-y-1.5">
                            <label className="text-[9px] font-black text-orange-600 ml-1">이메일 주소</label>
                            <div className="w-full h-9 bg-stone-50 border border-stone-100 rounded-xl px-3 flex items-center shadow-inner">
                                <span className="text-[10px] text-stone-300">mungpass@example.com</span>
                            </div>
                            <label className="text-[9px] font-black text-orange-600 ml-1">비밀번호</label>
                            <div className="w-full h-9 bg-stone-50 border border-stone-100 rounded-xl px-3 flex items-center shadow-inner">
                                <span className="text-[10px] text-stone-300">******</span>
                            </div>
                        </div>

                        <button className="w-full h-9 md:h-10 bg-orange-600 text-white text-[11px] font-black rounded-xl flex items-center justify-center gap-1">
                            접속하기 <span>→</span>
                        </button>

                        <button className="w-full h-9 md:h-10 bg-[#FEE500] text-stone-800 text-[11px] font-black rounded-xl flex items-center justify-center gap-2">
                            <div className="w-2.5 h-2.5 bg-stone-800 rounded-full" /> 카카오 로그인
                        </button>
                    </div >

                    <div className="mt-4 md:mt-6 w-[90%] p-3 bg-white/80 rounded-2xl border border-dashed border-orange-200 flex items-center justify-between" >
                        <div className="flex items-center gap-2">
                            <div className="bg-orange-500 p-1.5 rounded-lg">
                                <Store className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black text-stone-700 leading-none">사장님이신가요?</span>
                                <span className="text-[7px] text-orange-500 font-bold mt-0.5">입점 상담 신청하기</span>
                            </div>
                        </div>
                        <span className="text-[12px] font-black text-orange-400">→</span>
                    </div >
                </div >
            </div >
        </motion.div >
    )
}