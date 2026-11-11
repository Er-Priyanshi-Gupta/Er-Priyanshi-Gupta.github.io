import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, X, HelpCircle, CheckCircle2 } from 'lucide-react';

interface VoiceNavigationProps {
  onNavigate: (sectionId: string) => void;
  onToggleTheme: () => void;
}

// Extend Window interface for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const VoiceNavigation: React.FC<VoiceNavigationProps> = ({ onNavigate, onToggleTheme }) => {
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [lastCommand, setLastCommand] = useState<string>('');
  const [speechFeedbackEnabled, setSpeechFeedbackEnabled] = useState<boolean>(true);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('Listening for command...');
    };

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const speechResult = event.results[current][0].transcript.toLowerCase().trim();
      setTranscript(speechResult);

      if (event.results[current].isFinal) {
        processCommand(speechResult);
      }
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error:', event.error);
      setIsListening(false);
      if (event.error === 'not-allowed') {
        setTranscript('Microphone access was denied.');
      } else {
        setTranscript(`Recognition paused (${event.error})`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const speakFeedback = (text: string) => {
    if (!speechFeedbackEnabled || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Speech synthesis error', e);
    }
  };

  const processCommand = (command: string) => {
    setLastCommand(command);

    if (command.includes('home') || command.includes('top')) {
      onNavigate('home');
      speakFeedback('Navigating to Home');
    } else if (command.includes('about') || command.includes('bio')) {
      onNavigate('about');
      speakFeedback('Navigating to About section');
    } else if (command.includes('skill')) {
      onNavigate('skills');
      speakFeedback('Navigating to Technical Skills');
    } else if (command.includes('project')) {
      onNavigate('projects');
      speakFeedback('Showing Projects');
    } else if (command.includes('experience') || command.includes('intern') || command.includes('work')) {
      onNavigate('experience');
      speakFeedback('Showing Experience');
    } else if (command.includes('achievement') || command.includes('certif') || command.includes('award')) {
      onNavigate('achievements');
      speakFeedback('Showing Achievements and Certifications');
    } else if (command.includes('education') || command.includes('college') || command.includes('degree')) {
      onNavigate('education');
      speakFeedback('Showing Education');
    } else if (command.includes('contact') || command.includes('email') || command.includes('message')) {
      onNavigate('contact');
      speakFeedback('Navigating to Contact');
    } else if (command.includes('theme') || command.includes('dark') || command.includes('light')) {
      onToggleTheme();
      speakFeedback('Toggling theme');
    } else {
      speakFeedback(`Command "${command}" not recognized`);
    }

    // Auto-clear message banner after 4 seconds
    setTimeout(() => {
      setTranscript('');
    }, 4000);
  };

  const toggleListening = () => {
    if (!isSupported) {
      setShowHelpModal(true);
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setTranscript('');
    } else {
      try {
        setTranscript('Initializing microphone...');
        recognitionRef.current?.start();
      } catch (err) {
        console.error('Error starting recognition:', err);
      }
    }
  };

  return (
    <>
      {/* Pill Trigger */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={toggleListening}
          aria-label={isListening ? 'Stop Voice Navigation' : 'Start Voice Navigation'}
          title={isSupported ? 'Click to navigate with your voice' : 'Voice navigation not supported on this browser'}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
            isListening
              ? 'bg-red-500/20 text-red-300 border-red-500/50 animate-pulse shadow-lg shadow-red-500/20'
              : 'bg-surfaceDark/70 hover:bg-violet-900/30 text-accentLavender dark:text-purple-200 border-accentViolet/30 hover:border-accentViolet/70'
          }`}
        >
          {isListening ? (
            <>
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              <Mic className="w-3.5 h-3.5 text-red-400" />
              <span className="hidden sm:inline">Listening...</span>
            </>
          ) : (
            <>
              <MicOff className="w-3.5 h-3.5 text-accentViolet" />
              <span className="hidden sm:inline">Voice Nav</span>
            </>
          )}
        </button>

        {/* Info/Help trigger */}
        <button
          onClick={() => setShowHelpModal(true)}
          className="p-1.5 rounded-full text-slate-400 hover:text-white transition-colors"
          title="Voice Commands Guide"
          aria-label="Voice Navigation Guide"
        >
          <HelpCircle className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating Active Voice Banner */}
      {isListening || transcript ? (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full p-4 rounded-2xl glass-panel shadow-2xl border border-accentViolet/40 backdrop-blur-xl animate-bounce-in">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isListening ? 'bg-emerald-400 animate-ping' : 'bg-accentViolet'}`} />
              <span className="text-xs font-semibold uppercase tracking-wider text-accentLavender">
                {isListening ? 'Voice Assistant Active' : 'Voice Navigation'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSpeechFeedbackEnabled(!speechFeedbackEnabled)}
                title={speechFeedbackEnabled ? 'Spoken confirmation is ON' : 'Spoken confirmation is OFF'}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {speechFeedbackEnabled ? <Volume2 className="w-3.5 h-3.5 text-accentViolet" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => {
                  recognitionRef.current?.stop();
                  setIsListening(false);
                  setTranscript('');
                }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <p className="text-sm font-mono text-slate-200">
            "{transcript || 'Say "Show Projects", "Go to About", or "Toggle Theme"…'}"
          </p>
          {lastCommand && (
            <div className="mt-2 text-[11px] text-accentViolet/90 flex items-center gap-1 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Executed: "{lastCommand}"
            </div>
          )}
        </div>
      ) : null}

      {/* Voice Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="max-w-md w-full glass-panel p-6 rounded-3xl border border-accentViolet/40 shadow-2xl relative">
            <button
              onClick={() => setShowHelpModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-accentViolet/20 text-accentViolet border border-accentViolet/30">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Browser Voice Navigation</h3>
                <p className="text-xs text-slate-400">Powered by Web Speech API</p>
              </div>
            </div>

            {!isSupported && (
              <div className="mb-4 p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs">
                Note: Web Speech API is not supported in this browser. For the best voice experience, try Google Chrome, Microsoft Edge, or Safari.
              </div>
            )}

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              Click the <strong>Voice Nav</strong> pill in the navbar and speak any of the following natural commands to jump across the portfolio:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-5">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Go to Home"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Open About"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Show Skills"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Show Projects"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Open Experience"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Achievements"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentViolet font-semibold">"Education"</span>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                <span className="text-accentPink font-semibold">"Toggle Theme"</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 bg-black/30 p-3 rounded-xl border border-white/5">
              🔒 <strong>Privacy Assurance:</strong> Audio is processed strictly inside your browser. No voice recordings are stored, collected, or uploaded.
            </div>

            <button
              onClick={() => setShowHelpModal(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-accentViolet to-accentPink text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

