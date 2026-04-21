'use client'

import { motion } from "framer-motion"
import { MessageCircleWarning, Store } from "lucide-react"

export function Persona() {
    return (
        <section className="py-24 bg-stone-50/50">
            <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-sm font-bold text-orange-600 tracking-[0.2em] uppercase">The Story</h2>
                    <p className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
                        우리는 왜 <span className="text-orange-500">멍패스</span>를 만들었을까요?
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    {/* //*견주 용 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-stone-100 space-y-6 relative overflow-hidden"
                    >
                        <MessageCircleWarning className="absolute -right-4 -top-4 w-24 h-24 text-stone-200 opacity-50" />
                        <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full">
                            <span className="text-lg">😫</span>
                            <span className="text-sm font-bold text-orange-600">견주님의 목소리</span>
                        </div>
                        <h4 className="text-2xl font-black text-stone-800 leading-snug">
                            &quot;매번 반복되는 수기 작성,<br/> 아이와 놀 시간도 부족해요&quot;
                        </h4>
                        
                        <p className="text-stone-500 leading-relaxed font-medium">
                            카페 입구에서 이름과 번호, 아이의 특징을 적는 1분이 유난히 길게 느껴졌습니다. 
                            <span className="text-stone-800 font-semibold"> 데이터가 대신 말해준다면 어떨까요? </span> 
                            견주님의 소중한 에너지는 오직 반려견과의 교감에만 쓰여야 하니까요.
                        </p>
                    </motion.div>

                    {/* //*사장  */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-stone-100 space-y-6 relative overflow-hidden"
                    >
                        <Store className="absolute -right-4 -top-4 w-24 h-24 text-stone-200 opacity-50" />

                        <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full">
                            <span className="text-lg">🤯</span>
                            <span className="text-sm font-bold text-emerald-600">사장님의 고민</span>
                        </div>

                        <h4 className="text-2xl font-black text-stone-800 leading-snug">
                            &quot;정산 실랑이와 갑작스런 휴무,<br/> 매번 일일이 설명하기 지쳐요&quot;
                        </h4>
                        
                        <p className="text-stone-500 leading-relaxed font-medium">
                            초과 이용 정산의 민망함부터 갑작스러운 개인 사정 공지까지. 
                            <span className="text-stone-800 font-semibold"> 사장님은 운영의 즐거움에만 집중하세요.</span> 
                            복잡한 소통과 뒷단(Back-office)의 비효율은 멍패스가 완벽하게 해결합니다.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}