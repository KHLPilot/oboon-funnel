"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getResultType } from "@/lib/scoring";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import type { QuizQuestion } from "@/data/types";

export default function QuizPage() {
  const router = useRouter();
  const { testId } = useParams<{ testId: string }>();

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // 질문별 선택 점수를 따로 저장 (뒤로가기 시 해당 질문 점수 제거)
  const [answersByQuestion, setAnswersByQuestion] = useState<string[][]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("@/data/tests/index").then(({ getTestData }) => {
      getTestData(testId).then((data) => {
        if (!data) {
          router.replace("/");
          return;
        }
        setQuestions(data.questions);
        setIsLoading(false);
      });
    });
  }, [testId, router]);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const collectedKeys = answersByQuestion.flat();

  function handleSelect(scoreKeys: string[]) {
    if (isTransitioning || !currentQuestion) return;

    const newAnswers = [...answersByQuestion, scoreKeys];

    if (currentIndex === total - 1) {
      const resultType = getResultType(newAnswers.flat());
      router.push(`/${testId}/result/${resultType}`);
      return;
    }

    setIsTransitioning(true);
    setAnswersByQuestion(newAnswers);

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(false);
    }, 200);
  }

  function handleBack() {
    if (currentIndex === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setAnswersByQuestion((prev) => prev.slice(0, -1));
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(false);
    }, 200);
  }

  if (isLoading) {
    return (
      <main className="min-h-dvh bg-gray-50 flex items-center justify-center">
        <div className="text-gray-300 text-sm">불러오는 중...</div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-100 px-5 py-4 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          {currentIndex > 0 ? (
            <button
              onClick={handleBack}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-500"
              aria-label="이전 문항"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : (
            <div className="flex-shrink-0 w-8" />
          )}
          <div className="flex-1">
            <ProgressBar current={currentIndex + 1} total={total} />
          </div>
          <div className="flex-shrink-0 w-8" />
        </div>
      </header>

      <div className="flex-1 flex items-start justify-center px-5 py-10">
        <div className="w-full max-w-md">
          {!isTransitioning && currentQuestion && (
            <QuestionCard
              key={currentIndex}
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div>
    </main>
  );
}
