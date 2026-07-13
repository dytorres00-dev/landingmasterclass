"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  const reduced = useReducedMotion();
  const MotionDiv = motion.div;
  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <MotionDiv
      {...anim}
      className="flex flex-col items-start gap-5 py-2"
      role="alert"
      aria-live="assertive"
    >
      <AlertCircle
        className="h-8 w-8 text-red-700/80"
        strokeWidth={1.4}
        aria-hidden
      />
      <p className="text-[16px] leading-[1.6] text-carbon max-w-prose">
        {message}
      </p>
      <Button variant="secondary" onClick={onRetry}>
        Intentar de nuevo
      </Button>
    </MotionDiv>
  );
}
