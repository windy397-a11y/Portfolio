
import React, { useState, useEffect } from 'react';

// --- Icons (Inline SVGs to avoid import errors) ---

const CalculationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 011-1V4z" />
  </svg>
);

// --- Sub-components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-[0.2em] text-white mono uppercase">
          KIM <span className="text-blue-500">H.J</span>
        </div>
        <nav className="hidden md:flex space-x-10">
          {['About', 'Skills', 'Experience', 'Career', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-widest font-semibold text-slate-400 hover:text-white transition-colors mono"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl animate-fade-in">
          <div className="mono text-blue-500 text-sm tracking-[0.3em] uppercase mb-6 flex items-center">
            <span className="w-8 h-[1px] bg-blue-500 mr-4"></span>
            Strength Calculation Master
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            무결점의 <span className="text-slate-500">계산,</span><br />
            구조적 <span className="italic text-white underline decoration-blue-600 underline-offset-8">안전</span>의 정점.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl">
            "아무 생각 없음"의 경지에서 탄생하는 가장 순수한 수치.<br />
            12년의 숙련된 감각으로 회사의 자산과 구조의 생명을 지킵니다.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#about" className="px-10 py-5 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all rounded-sm flex items-center group">
              EXPERTISE VIEW
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex items-center space-x-4 px-6 text-slate-500 mono text-sm border-l border-slate-800">
              <span>010-9690-3727</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute right-10 bottom-0 h-1/2 w-[1px] bg-gradient-to-t from-blue-600 to-transparent opacity-30 hidden lg:block"></div>
      <div className="absolute right-20 bottom-0 h-1/3 w-[1px] bg-gradient-to-t from-slate-600 to-transparent opacity-20 hidden lg:block"></div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-bold mb-10 tracking-tighter">
              A Passion for <br />
              <span className="text-blue-600">Precision Engineering.</span>
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                12년이라는 시간 동안 저는 수많은 압력용기와 열교환기의 운명을 결정하는 
                수치들을 다루어 왔습니다. 저의 철학은 단순합니다. 
              </p>
              <p className="text-white font-medium border-l-2 border-blue-600 pl-6 py-2">
                "가장 안전한 것이 가장 경제적인 것이며, <br />
                가장 정밀한 계산이 회사의 이익을 보호한다."
              </p>
              <p>
                복잡한 엔지니어링 환경에서 흔들림 없이 '계산' 그 자체에만 몰입하는 
                저만의 집중 방식은 오류를 허용하지 않는 완벽한 설계 결과물로 이어집니다.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               { icon: <CalculationIcon />, title: "Master Calculation", text: "ASME, API, KGS 등 다양한 코드 기반의 고정밀 강도 해석 수행." },
               { icon: <ShieldIcon />, title: "Strict Integrity", text: "안전 계수를 엄격히 준수하면서도 최적의 두께와 재질을 산정." },
               { icon: <ChartIcon />, title: "Cost Reduction", text: "불필요한 과설계를 제거하여 원가 경쟁력을 극대화하는 엔지니어링." },
               { icon: <ToolsIcon />, title: "Technical Doc", text: "생산 현장과 직접 소통 가능한 수준 높은 MPS 및 기술 사양서 발행." }
             ].map((item, idx) => (
               <div key={idx} className="p-10 card-blur border border-slate-800 hover:border-blue-600/50 transition-all group">
                 <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                 <h4 className="text-white font-bold text-xl mb-4 mono tracking-tight">{item.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { name: 'COMPRESS & PV-Elite', desc: 'Global Standard 분석 도구 숙달', level: 98 },
    { name: 'Excel Optimization', desc: '자체 제작 강도계산 자동화 시트', level: 95 },
    { name: 'Manufacturing Standards', desc: '코드 및 표준 규격 완벽 해석', level: 92 },
    { name: 'Purchasing Technical Spec', desc: '자재 발주 및 기술 검토 전문성', level: 90 },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="mono text-blue-500 text-xs mb-4 uppercase tracking-[0.3em]">Core Competencies</div>
            <h2 className="text-4xl font-bold tracking-tighter">기술적 역량</h2>
          </div>
          <p className="text-slate-500 max-w-md mt-6 md:mt-0">
            단순한 도구 사용을 넘어, 역학적 원리에 대한 깊은 이해를 바탕으로 최상의 솔루션을 제공합니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
                  <p className="text-slate-500 text-sm">{skill.desc}</p>
                </div>
                <div className="mono text-blue-500 font-bold">{skill.level}%</div>
              </div>
              <div className="h-[2px] w-full bg-slate-800">
                <div 
                  className="h-full bg-blue-600 transition-all duration-1000 group-hover:bg-blue-400" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  const highlights = [
    "12년 경력의 압력용기/열교환기 강도계산 실무",
    "프로젝트 자재 원가 15% 이상 절감 프로젝트 다수 성공",
    "대형 플랜트 설비 MPS 표준화 및 프로세스 정립",
    "기술 사양서(PR) 검토 및 협력사 기술 커뮤니케이션 리드"
  ];

  return (
    <section id="experience" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900/50 p-12 md:p-24 border border-slate-800 relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl mono select-none">EXP</div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              주요 업적 및 성과
              <span className="ml-6 flex-1 h-[1px] bg-slate-800"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {highlights.map((text, i) => (
                <div key={i} className="flex space-x-6 items-start">
                  <span className="text-blue-500 mono font-bold text-lg mt-1">[{i+1}]</span>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Career: React.FC = () => {
  const careerSteps = [
    { year: "2012", title: "엔지니어링의 시작", company: "기초를 쌓다.", detail: "강도계산의 기본 원리와 글로벌 규격(ASME 등)에 대한 집중 탐구 및 실무 적용 시작." },
    { year: "2018", title: "시니어 엔지니어", company: "최적화를 도모하다.", detail: "단순 계산을 넘어 경제성 분석을 결합한 원가 절감형 설계 프로세스 도입 및 성공." },
    { year: "PRESENT", title: "강도계산 마스터", company: "완벽을 신뢰하다.", detail: "복잡한 고압 시스템 및 특수 환경 설비의 안전성과 효율성을 총괄 책임." },
  ];

  return (
    <section id="career" className="py-32 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {careerSteps.map((step, idx) => (
            <div key={idx} className="flex mb-16 last:mb-0 group">
              <div className="w-32 pt-2 flex-shrink-0">
                <span className="mono text-blue-600 font-bold tracking-tighter text-xl">{step.year}</span>
              </div>
              <div className="flex-1 pl-12 border-l border-slate-800 group-hover:border-blue-600 transition-colors pb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                <div className="text-slate-500 mb-6 font-medium italic">{step.company}</div>
                <p className="text-slate-400 leading-relaxed font-light">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 tracking-tighter">Let's Calculate Success.</h2>
          <p className="text-slate-400 text-lg mb-16 leading-relaxed">
            꼼꼼한 검토와 성실한 태도, 그리고 압도적인 전문성으로 귀사의 프로젝트에 최상의 가치를 더하겠습니다.
          </p>
          
          <div className="flex flex-col items-center space-y-8">
            <div className="group cursor-pointer">
              <div className="text-slate-500 mono text-xs uppercase tracking-[0.4em] mb-2 group-hover:text-blue-500 transition-colors">Phone Support</div>
              <div className="text-3xl font-bold text-white group-hover:underline underline-offset-8">010-9690-3727</div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-slate-500 mono text-xs uppercase tracking-[0.4em] mb-2 group-hover:text-blue-500 transition-colors">Direct Communication</div>
              <div className="text-xl font-bold text-slate-300">이메일 미입력 / 문의 환영</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-12 border-t border-slate-900 text-center">
    <div className="container mx-auto px-6">
      <div className="text-slate-600 text-[10px] tracking-[0.5em] uppercase mono mb-4">
        Accuracy · Reliability · Efficiency
      </div>
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} 김현주. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
