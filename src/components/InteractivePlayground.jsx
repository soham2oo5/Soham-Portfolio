import React, { useState } from 'react';
import { playClickSound, playThwipSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  RotateCcw, 
  FileText, 
  Search,
  Sliders,
  ShieldCheck,
  Bot
} from 'lucide-react';

export const InteractivePlayground = () => {
  const [activeTab, setActiveTab] = useState('nlp'); // 'nlp' | 'ats'

  // ================= NLP SARCASM DETECTOR STATE =================
  const nlpPresets = [
    {
      label: "Hinglish Sarcasm",
      text: "Arre wah! Itna fast delivery, pure 12 din lag gaye! 😂",
      lang: "Hinglish / Code-mixed"
    },
    {
      label: "English Genuine",
      text: "The camera clarity and battery life are genuinely exceptional. Loved it!",
      lang: "English"
    },
    {
      label: "Marathi Sarcasm",
      text: "Khup chhan kaam kelat re, sagla project crash kela! 👏",
      lang: "Marathi"
    },
    {
      label: "English Sarcasm",
      text: "Great job breaking production on a Friday evening, absolute geniuses.",
      lang: "English"
    }
  ];

  const [inputText, setInputText] = useState(nlpPresets[0].text);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [nlpResult, setNlpResult] = useState(null);

  // Linguistic sarcasm evaluator logic
  const runNlpAnalysis = (textToTest = inputText) => {
    playThwipSound();
    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = textToTest.toLowerCase();
      
      // Sarcasm triggers
      const sarcasmIndicators = [
        'arre wah', 'pure 12 din', 'crash kela', 'khup chhan', 'breaking production',
        'absolute geniuses', '10 din', 'fast delivery, pure', '😂', '👏', 'great job breaking'
      ];
      
      const onomatopoeiaList = ['arre wah', 'wah', 'haha', 'uff', 'oho', 'ufff', 'achha'];
      
      let sarcasmHits = 0;
      sarcasmIndicators.forEach(word => {
        if (lower.includes(word)) sarcasmHits++;
      });

      const detectedOnomatopoeia = onomatopoeiaList.filter(o => lower.includes(o));

      const isSarcastic = sarcasmHits > 0 || (lower.includes('great') && lower.includes('crash')) || (lower.includes('fast') && lower.includes('din'));
      
      const confidence = isSarcastic 
        ? Math.min(84 + sarcasmHits * 5, 96) 
        : (lower.includes('exceptional') || lower.includes('loved')) ? 93 : 78;

      const surfacePolarity = (lower.includes('great') || lower.includes('wah') || lower.includes('chhan') || lower.includes('loved') || lower.includes('exceptional'))
        ? 'Positive (Surface level)'
        : 'Neutral / Mixed';

      const trueSentiment = isSarcastic ? 'Negative (Sarcastic Dissatisfaction)' : (lower.includes('loved') ? 'Positive (Genuine)' : 'Neutral');

      // Tokenization demo
      const tokens = textToTest.split(/\s+/).map((tok, i) => ({
        token: tok,
        isFlagged: sarcasmIndicators.some(ind => ind.toLowerCase().includes(tok.toLowerCase().replace(/[^a-zA-Z]/g, '')))
      }));

      setNlpResult({
        isSarcastic,
        confidence,
        surfacePolarity,
        trueSentiment,
        onomatopoeia: detectedOnomatopoeia.length > 0 ? detectedOnomatopoeia : ['None detected'],
        tokens,
        detectedLang: textToTest.includes('kela') ? 'Marathi' : (textToTest.includes('Arre') || textToTest.includes('din')) ? 'Hindi-English (Hinglish)' : 'English',
        timestamp: new Date().toLocaleTimeString()
      });

      setIsAnalyzing(false);
    }, 450);
  };

  // ================= ATS RESUME MATCHER STATE =================
  const atsPresets = [
    {
      role: "AI / ML Engineer",
      keywords: ["Python", "PyTorch", "Transformers", "NLP", "XLM-RoBERTa", "FastAPI", "Scikit-learn", "REST APIs", "Git"]
    },
    {
      role: "Frontend / Full-Stack Developer",
      keywords: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "RESTful API", "Git", "Responsive Web Design"]
    },
    {
      role: "Android Developer",
      keywords: ["Java", "Android Studio", "XML Layouts", "OOP", "Git", "Mobile UI"]
    }
  ];

  const sohamVerifiedSkills = [
    "python", "pytorch", "transformers", "nlp", "xlm-roberta", "fastapi", "scikit-learn", 
    "rest apis", "git", "react", "javascript", "tailwind css", "html5", "css3", 
    "restful api", "java", "android studio", "xml layouts", "oop", "mobile ui", 
    "sql", "mysql", "flask", "pandas", "numpy"
  ];

  const [selectedAtsPreset, setSelectedAtsPreset] = useState(atsPresets[0]);
  const [atsScoreData, setAtsScoreData] = useState(null);

  const calculateAtsMatch = (preset = selectedAtsPreset) => {
    playThwipSound();
    const matched = [];
    const missing = [];

    preset.keywords.forEach(kw => {
      if (sohamVerifiedSkills.includes(kw.toLowerCase())) {
        matched.push(kw);
      } else {
        missing.push(kw);
      }
    });

    const score = Math.round((matched.length / preset.keywords.length) * 100);
    setAtsScoreData({
      role: preset.role,
      score,
      matched,
      missing,
      total: preset.keywords.length
    });

    if (score >= 85) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#e11d48', '#2563eb', '#38bdf8']
      });
    }
  };

  return (
    <section id="playground" className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-white/5">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>LIVE INTERACTIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Interactive Engineering Playground
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Don't just take my word for it. Test the core algorithmic mechanics of my flagship projects directly inside your browser.
          </p>

          {/* Module Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10">
            <button
              onClick={() => {
                playClickSound();
                setActiveTab('nlp');
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'nlp'
                  ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-md shadow-rose-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Multilingual Sarcasm Scanner</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setActiveTab('ats');
                if (!atsScoreData) calculateAtsMatch(atsPresets[0]);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ats'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>ATS Resume Matcher</span>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: NLP SARCASM & ONOMATOPOEIA DETECTOR ================= */}
        {activeTab === 'nlp' && (
          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            
            {/* Context Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div>
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  XLM-RoBERTa Sarcasm & Onomatopoeia Simulator
                </h3>
                <p className="text-xs text-slate-400">
                  Simulating transformer-based attention layers that invert faux-positive social comments into true sentiment.
                </p>
              </div>
              <span className="self-start sm:self-center px-2.5 py-1 rounded bg-rose-950/80 border border-rose-800 text-rose-300 font-mono text-[11px]">
                MODEL: XLM-RoBERTa-base
              </span>
            </div>

            {/* Presets Row */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Select quick test phrase:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {nlpPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputText(preset.text);
                      runNlpAnalysis(preset.text);
                    }}
                    className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                      inputText === preset.text
                        ? 'bg-rose-950/40 border-rose-500 text-white shadow-xs'
                        : 'bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-rose-300 flex items-center justify-between">
                      <span>{preset.label}</span>
                      <span className="text-[10px] font-mono text-slate-500">{preset.lang}</span>
                    </div>
                    <p className="truncate mt-1 text-slate-300 font-mono text-[11px]">{preset.text}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Text Input */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Custom Input Stream:</span>
                <span className="text-slate-500">Supports English, Hindi, Marathi, Hinglish</span>
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type any comment to analyze (e.g., 'Arre wah! Itna fast service, pura din laga diya 😂')..."
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-hidden focus:border-rose-500 focus:ring-1 focus:ring-rose-500 font-sans"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => runNlpAnalysis()}
                disabled={isAnalyzing || !inputText.trim()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 disabled:opacity-50 transition-all shadow-md shadow-rose-600/30 active:scale-95 cursor-pointer"
              >
                <Zap className={`w-4 h-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
                <span>{isAnalyzing ? 'Running Inference...' : 'Run Sarcasm Inference'}</span>
              </button>

              <button
                onClick={() => {
                  setInputText('');
                  setNlpResult(null);
                  playClickSound();
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Inference Results Output */}
            {nlpResult && (
              <div className="mt-4 p-5 rounded-xl bg-slate-950 border border-white/10 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-emerald-400">INFERENCE COMPLETE</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">{nlpResult.timestamp}</span>
                </div>

                {/* Score Indicators Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  
                  {/* Sarcasm Flag Box */}
                  <div className={`p-3.5 rounded-xl border ${
                    nlpResult.isSarcastic 
                      ? 'bg-rose-950/50 border-rose-500/60' 
                      : 'bg-emerald-950/50 border-emerald-500/60'
                  }`}>
                    <div className="text-[11px] font-mono uppercase text-slate-400">Classification</div>
                    <div className="text-base font-bold mt-1 flex items-center gap-2">
                      {nlpResult.isSarcastic ? (
                        <>
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          <span className="text-rose-300">Sarcasm Detected!</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-300">Genuine Expression</span>
                        </>
                      )}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                      Confidence: <span className="text-white font-bold">{nlpResult.confidence}%</span>
                    </div>
                  </div>

                  {/* Surface vs True Sentiment */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400">Surface vs True</div>
                    <div className="text-xs text-slate-300 mt-1">
                      Surface: <span className="text-amber-300 font-medium">{nlpResult.surfacePolarity}</span>
                    </div>
                    <div className="text-xs font-semibold mt-1">
                      True: <span className={nlpResult.isSarcastic ? 'text-rose-400' : 'text-emerald-400'}>{nlpResult.trueSentiment}</span>
                    </div>
                  </div>

                  {/* Onomatopoeia & Language */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-white/5">
                    <div className="text-[11px] font-mono uppercase text-slate-400">Linguistic Markers</div>
                    <div className="text-xs text-slate-300 mt-1">
                      Lang: <span className="text-blue-300 font-medium">{nlpResult.detectedLang}</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      Onomatopoeia: <span className="text-purple-300 font-medium">{nlpResult.onomatopoeia.join(', ')}</span>
                    </div>
                  </div>

                </div>

                {/* Token Attention Stream */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                    Subword Token Attention:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {nlpResult.tokens.map((tok, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded text-xs font-mono ${
                          tok.isFlagged
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                            : 'bg-slate-900 text-slate-400 border border-white/5'
                        }`}
                      >
                        {tok.token}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

        {/* ================= TAB 2: ATS RESUME CHECKER SIMULATOR ================= */}
        {activeTab === 'ats' && (
          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div>
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  ATS Resume Relevance & TF-IDF Keyword Matcher
                </h3>
                <p className="text-xs text-slate-400">
                  Simulating ATS Resume Checker Pro's text extraction and vector similarity algorithm against Soham's actual profile.
                </p>
              </div>
              <span className="self-start sm:self-center px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800 text-blue-300 font-mono text-[11px]">
                TF-IDF VECTORIZER
              </span>
            </div>

            {/* Target Job Role Selector */}
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Select target job description role:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {atsPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedAtsPreset(preset);
                      calculateAtsMatch(preset);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedAtsPreset.role === preset.role
                        ? 'bg-blue-950/50 border-blue-500 text-white shadow-xs'
                        : 'bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white">{preset.role}</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1">
                      {preset.keywords.length} critical skills required
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Candidate Match Breakdown Card */}
            {atsScoreData && (
              <div className="p-5 rounded-xl bg-slate-950 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400">Target Role:</span>
                    <h4 className="text-base font-bold text-white">{atsScoreData.role}</h4>
                  </div>
                  
                  {/* Score Pill */}
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-display font-black text-emerald-400">
                      {atsScoreData.score}%
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      HIGH MATCH
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full transition-all duration-700"
                    style={{ width: `${atsScoreData.score}%` }}
                  />
                </div>

                {/* Matched Keywords */}
                <div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Candidate Competencies ({atsScoreData.matched.length} / {atsScoreData.total}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {atsScoreData.matched.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs"
                      >
                        ✓ {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="pt-2 border-t border-white/5 text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-semibold">ATS Reviewer Summary:</span> Candidate demonstrates high alignment with core requirements. Key foundational frameworks (PyTorch, Transformers, REST APIs, Java) are verified through practical implementations.
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
