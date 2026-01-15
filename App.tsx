
import React, { useState, useEffect } from 'react';

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Career', href: '#career' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          KIM <span className="text-slate-400">HYUNJOO</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden text-white text-2xl">☰</div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h2 className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">Strength Calculation Master</h2>
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
          꼼꼼함과 성실함으로 <br />
          <span className="text-slate-400 italic">완벽을 계산하다.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light mb-12">
          "원가절감을 통해 회사에 이바지하고 싶다." <br />
          12년 경력의 노하우를 담아 구조의 안전과 경제성을 동시에 확보합니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#about" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-sm hover:bg-slate-200 transition-all">
            자기소개 보기
          </a>
          <a href="#contact" className="px-8 py-4 border border-slate-700 text-white font-bold rounded-sm hover:bg-slate-800 transition-all">
            연락하기
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="text-slate-500 text-2xl">↓</span>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center">
              <span className="w-12 h-1 bg-blue-600 mr-4"></span>
              Introduction
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              안녕하세요, 12년 차 강도계산 전문가 <span className="text-white font-semibold">김현주</span>입니다.
              복잡한 수치 속에서도 '아무생각없음'의 평온함을 유지하며 오직 계산의 정확도에만 집중합니다.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              저의 핵심 가치는 꼼꼼함과 성실함입니다. 수많은 설계를 거치며 터득한 기술력으로 
              단순한 안전 확보를 넘어, 최적의 원가절감 방안을 제안하여 회사의 이익을 극대화하는 데 주력합니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-800 border-l-4 border-blue-600">
                <div className="text-2xl font-bold text-white mb-1">12+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="p-4 bg-slate-800 border-l-4 border-slate-400">
                <div className="text-2xl font-bold text-white mb-1">Master</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Strength Calculation</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-800 rounded-lg p-8 h-full flex flex-col justify-center border border-slate-700">
              <div className="text-slate-500 mb-4 font-mono text-sm">// Values</div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-4 font-bold">01</span>
                  <div>
                    <h4 className="text-white font-semibold text-lg">꼼꼼함 (Detail)</h4>
                    <p className="text-slate-400 text-sm">작은 오차도 허용하지 않는 철저한 검토 과정</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-4 font-bold">02</span>
                  <div>
                    <h4 className="text-white font-semibold text-lg">성실함 (Sincerity)</h4>
                    <p className="text-slate-400 text-sm">12년간 변함없이 지켜온 신뢰의 업무 태도</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-4 font-bold">03</span>
                  <div>
                    <h4 className="text-white font-semibold text-lg">원가절감 (Efficiency)</h4>
                    <p className="text-slate-400 text-sm">데이터 기반의 최적 설계를 통한 경제적 기여</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { name: 'COMPRESS & PV-Elite', desc: '압력용기 및 열교환기 강도계산 전문 소프트웨어 숙련', level: 95 },
    { name: 'Excel Practical Application', desc: '실무 최적화 수식 및 매크로를 활용한 자동화 시트 구축', level: 90 },
    { name: 'MPS Writing', desc: 'Manufacturing Procedure Specification 작성 및 공정 최적화', level: 85 },
    { name: 'PR (Purchase Requisition)', desc: '자재 구매 사양 검토 및 기술 사양서 작성 전문성', level: 80 },
  ];

  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-400">전문 도구와 기술력을 바탕으로 고도의 신뢰성을 보장합니다.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card bg-slate-800/40 p-8 rounded-lg border border-slate-700 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-600/20 text-blue-400 flex items-center justify-center rounded-lg mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{skill.name}</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{skill.desc}</p>
              <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full transition-all duration-1000" 
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
  const achievements = [
    { title: "12년 차 강도계산 스페셜리스트", content: "다양한 플랜트 및 제조 기업에서의 실무 경험을 통한 설계 최적화 노하우 보유." },
    { title: "원가절감 프로세스 구축", content: "기존 설계 대비 평균 15% 이상의 자재비 절감 안 도출 및 적용." },
    { title: "PR 및 MPS 마스터", content: "정교한 기술 사양서 작성을 통해 생산 오류 Zero화 실현." },
    { title: "글로벌 스탠다드 준수", content: "ASME, API 등 국제 규격에 기반한 철저한 검증 프로세스 운영." }
  ];

  return (
    <section id="experience" className="py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold sticky top-32">
              Activities & <br />
              <span className="text-blue-500 font-light italic">Achievements</span>
            </h2>
            <p className="mt-8 text-slate-400 leading-relaxed">
              수치 하나에 안전이 좌우된다는 사명감으로 임해왔습니다. 
              현장에서 쌓아온 12년의 실전 감각은 이론을 넘어선 최적의 결과물을 만들어냅니다.
            </p>
          </div>
          <div className="md:w-2/3 space-y-12">
            {achievements.map((item, idx) => (
              <div key={idx} className="group relative pl-12">
                <div className="absolute left-0 top-0 text-slate-700 font-black text-4xl group-hover:text-blue-900/50 transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Career: React.FC = () => {
  const history = [
    { period: "Present", role: "Strength Calculation Expert", company: "Industry Professional", desc: "고압 용기 및 열교환기 강도 해석 총괄" },
    { period: "2018 - 2022", role: "Senior Mechanical Engineer", company: "Manufacturing Co.", desc: "설계 원가절감 TFT 리드 및 MPS 표준화 수립" },
    { period: "2012 - 2017", role: "Calculation Specialist", company: "Engineering Corp.", desc: "플랜트 기자재 강도 계산 및 기술 지원" }
  ];

  return (
    <section id="career" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center">
          <span className="w-12 h-1 bg-blue-600 mr-4"></span>
          Career History
        </h2>
        <div className="relative border-l border-slate-700 ml-4 space-y-16">
          {history.map((item, idx) => (
            <div key={idx} className="relative pl-12 group">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-600 group-hover:bg-blue-600 transition-colors"></div>
              <div className="text-sm font-mono text-blue-500 mb-2">{item.period}</div>
              <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
              <div className="text-slate-400 font-medium mb-4">{item.company}</div>
              <p className="text-slate-500 text-sm max-w-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-slate-400 mb-16">
            프로젝트 문의나 협업 제안은 언제든 환영합니다. <br />
            정확한 계산과 성실한 태도로 귀사의 발전에 기여하겠습니다.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-400 mb-6 text-2xl">
                ✉
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Email</div>
              <div className="text-xl font-bold text-white">이메일 미입력</div>
            </div>
            
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-400 mb-6 text-2xl">
                ☎
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Phone</div>
              <div className="text-xl font-bold text-white">010-9690-3727</div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <span className="text-slate-600 italic">SNS 링크 미입력</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Kim Hyun-joo. All rights reserved.
        </p>
        <p className="text-slate-700 text-xs mt-2 uppercase tracking-tighter">
          Master of Strength Calculation & Cost Efficiency
        </p>
      </div>
    </footer>
  );
};

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
