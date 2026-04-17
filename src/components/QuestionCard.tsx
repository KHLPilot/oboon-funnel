"use client";

import type { QuizQuestion } from "@/data/types";

const LABELS = ["A", "B", "C", "D"] as const;

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  onSelect: (scoreKeys: string[]) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="animate-slide-up w-full">
      <div className="mb-6">
        <span className="inline-block text-xs font-bold text-oboon-primary bg-oboon-light px-3 py-1 rounded-full mb-4">
          Q{questionNumber}
        </span>
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          {question.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option.score)}
            className="
              w-full text-left px-5 py-4 rounded-2xl
              bg-white border-2 border-gray-100
              text-gray-800 font-medium text-base leading-snug
              active:scale-[0.98] active:border-oboon-primary active:bg-oboon-light
              hover:border-oboon-primary hover:bg-oboon-light
              transition-all duration-150
              shadow-sm
            "
          >
            <span className="inline-flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">
                {LABELS[index]}
              </span>
              <span>{option.text}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
