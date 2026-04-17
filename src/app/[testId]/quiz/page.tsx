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
  const [collectedKeys, setCollectedKeys] = useState<string[]>([]);
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

  function handleSelect(scoreKeys: string[]) {
    if (isTransitioning || !currentQuestion) return;

    const newKeys = [...collectedKeys, ...scoreKeys];

    if (currentIndex === total - 1) {
      const resultType = getResultType(newKeys);
      router.push(`/${testId}/result/${resultType}`);
      return;
    }

    setIsTransitioning(true);
    setCollectedKeys(newKeys);

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
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
        <div className="max-w-md mx-auto">
          <ProgressBar current={currentIndex + 1} total={total} />
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
