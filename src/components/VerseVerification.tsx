import { useState } from "react";
import { BookOpen, ExternalLink, CheckCircle2, XCircle, Copy, Check, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface VerseVerificationProps {
  reference: string;
  explanation: string;
  show: boolean;
  isCorrect: boolean;
  correctAnswer: string;
  selectedAnswer?: string;
}

const VerseVerification = ({ 
  reference, 
  explanation, 
  show, 
  isCorrect,
  correctAnswer,
  selectedAnswer
}: VerseVerificationProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(true);

  if (!show) return null;

  const getBibleComUrl = () => {
    const encoded = encodeURIComponent(reference);
    return `https://www.bible.com/search/bible?q=${encoded}`;
  };

  const getBibleGatewayUrl = () => {
    const encoded = encodeURIComponent(reference);
    return `https://www.biblegateway.com/passage/?search=${encoded}&version=NR2006`;
  };

  const copyReference = async () => {
    try {
      await navigator.clipboard.writeText(`${reference}\n${explanation}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mt-6"
    >
      <div className={`rounded-xl overflow-hidden border-2 ${
        isCorrect 
          ? "border-success/40 bg-gradient-to-br from-success/5 via-emerald-500/5 to-green-500/5" 
          : "border-destructive/40 bg-gradient-to-br from-destructive/5 via-orange-500/5 to-red-500/5"
      }`}>
        {/* Header */}
        <div 
          className={`px-6 py-4 flex items-center justify-between cursor-pointer ${
            isCorrect ? "bg-success/10" : "bg-destructive/10"
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${isCorrect ? "bg-success/20" : "bg-destructive/20"}`}>
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-success" />
              ) : (
                <XCircle className="w-6 h-6 text-destructive" />
              )}
            </div>
            <div>
              <h4 className="font-bold text-lg text-foreground">
                {isCorrect ? t('explanation.correct') : t('explanation.incorrect')}
              </h4>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Shield className="w-4 h-4" />
                <span className="text-sm">{t('verification.verifiedAnswer', 'Risposta Verificata NR2006')}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-6 py-5 space-y-4">
                {/* Answer Comparison */}
                {!isCorrect && selectedAnswer && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <p className="text-xs text-muted-foreground mb-1">{t('verification.yourAnswer', 'La tua risposta')}</p>
                      <p className="font-medium text-destructive">{selectedAnswer}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                      <p className="text-xs text-muted-foreground mb-1">{t('verification.correctAnswer', 'Risposta corretta')}</p>
                      <p className="font-medium text-success">{correctAnswer}</p>
                    </div>
                  </div>
                )}

                {isCorrect && (
                  <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                    <p className="text-xs text-muted-foreground mb-1">{t('verification.correctAnswer', 'Risposta corretta')}</p>
                    <p className="font-medium text-success">{correctAnswer}</p>
                  </div>
                )}

                {/* Bible Reference Box */}
                <div className="p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="font-bold text-primary text-lg">{reference}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={copyReference}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  
                  <blockquote className="pl-4 border-l-4 border-primary/30 italic text-foreground/90 leading-relaxed">
                    {explanation}
                  </blockquote>
                </div>

                {/* Verification Links */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href={getBibleGatewayUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors"
                  >
                    <Shield className="w-4 h-4" />
                    {t('verification.verifyNR2006', 'Verifica su NR2006')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={getBibleComUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    {t('study.readVerse', 'Leggi il versetto')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Source Badge */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Shield className="w-3 h-3" />
                    <span>{t('verification.source', 'Fonte: Nuova Riveduta 2006 (NR2006)')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VerseVerification;
