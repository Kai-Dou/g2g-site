"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import {
  ROAD_PATH_D,
  ROAD_VIEWBOX,
  STEP_PROGRESS,
  clientToSvgPoint,
  getActiveStepIndex,
  getClosestProgress,
  getPointOnRoad,
} from "@/lib/road-path";
import { cn } from "@/lib/utils";

interface DraggableRoadMarkerProps {
  onStepChange?: (stepIndex: number) => void;
  onDraggingChange?: (dragging: boolean) => void;
}

export function DraggableRoadMarker({
  onStepChange,
  onDraggingChange,
}: DraggableRoadMarkerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dragging = useRef(false);
  const [position, setPosition] = useState({ x: 40, y: 80 });
  const [progress, setProgress] = useState(STEP_PROGRESS[0]);

  const updatePosition = useCallback(
    (t: number) => {
      const path = pathRef.current;
      if (!path) return;
      const point = getPointOnRoad(path, t);
      setProgress(t);
      setPosition({ x: point.x, y: point.y });
      onStepChange?.(getActiveStepIndex(t));
    },
    [onStepChange],
  );

  useEffect(() => {
    updatePosition(STEP_PROGRESS[0]);
  }, [updatePosition]);

  const endDrag = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    onDraggingChange?.(false);
    document.body.classList.remove("roadmap-dragging");
    document.body.style.removeProperty("user-select");
    document.body.style.removeProperty("cursor");
  }, [onDraggingChange]);

  const handlePointerMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!dragging.current || !svgRef.current || !pathRef.current) return;
      const svgPoint = clientToSvgPoint(svgRef.current, clientX, clientY);
      const t = getClosestProgress(pathRef.current, svgPoint.x, svgPoint.y);
      updatePosition(t);
    },
    [updatePosition],
  );

  useEffect(() => {
    const onWindowMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      handlePointerMove(e.clientX, e.clientY);
    };

    const onWindowUp = () => endDrag();

    window.addEventListener("pointermove", onWindowMove, { passive: false });
    window.addEventListener("pointerup", onWindowUp);
    window.addEventListener("pointercancel", onWindowUp);

    return () => {
      window.removeEventListener("pointermove", onWindowMove);
      window.removeEventListener("pointerup", onWindowUp);
      window.removeEventListener("pointercancel", onWindowUp);
    };
  }, [handlePointerMove, endDrag]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    onDraggingChange?.(true);
    document.body.classList.add("roadmap-dragging");
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handlePointerMove(e.clientX, e.clientY);
  };

  const leftPct = (position.x / ROAD_VIEWBOX.width) * 100;
  const topPct = (position.y / ROAD_VIEWBOX.height) * 100;

  return (
    <>
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${ROAD_VIEWBOX.width} ${ROAD_VIEWBOX.height}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          ref={pathRef}
          d={ROAD_PATH_D}
          fill="none"
          stroke="transparent"
          strokeWidth="120"
        />
      </svg>

      <motion.div
        role="slider"
        aria-label="Arraste a van entre as etapas do processo"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        className="absolute z-50 -translate-x-1/2 -translate-y-1/2 touch-none select-none"
        animate={{
          left: `${leftPct}%`,
          top: `${topPct}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 36,
          mass: 0.8,
        }}
        onPointerDown={handlePointerDown}
      >
        <div className="flex cursor-grab flex-col items-center active:cursor-grabbing">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-g2g-yellow bg-g2g-red shadow-lg shadow-g2g-red/50 ring-4 ring-g2g-red/20">
            <Truck className="text-white" size={24} aria-hidden />
          </div>
          <span className="mt-1.5 whitespace-nowrap rounded-full bg-g2g-navy-950/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-g2g-yellow">
            Arraste
          </span>
        </div>
      </motion.div>
    </>
  );
}

const MOBILE_STEP_PROGRESS = STEP_PROGRESS.slice(0, 4);

const roadmapStepLabels = [
  "Contato",
  "Avaliação",
  "Agregação",
  "Na estrada",
];

interface MobileRoadSliderProps {
  activeStep: number;
  onStepChange?: (stepIndex: number) => void;
}

export function MobileRoadSlider({
  activeStep,
  onStepChange,
}: MobileRoadSliderProps) {
  return (
    <div className="mb-6">
      <div className="relative mb-4 flex items-center justify-between px-1">
        {MOBILE_STEP_PROGRESS.map((_, index) => (
          <button
            key={roadmapStepLabels[index]}
            type="button"
            onClick={() => onStepChange?.(index)}
            className={cn(
              "relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-black transition-all duration-300",
              activeStep === index
                ? "scale-110 border-g2g-yellow bg-g2g-red text-white shadow-lg shadow-g2g-red/40"
                : "border-white/20 bg-g2g-navy-900 text-g2g-gray-400",
            )}
            aria-label={`Etapa ${index + 1}: ${roadmapStepLabels[index]}`}
            aria-current={activeStep === index ? "step" : undefined}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
        <div
          className="absolute left-4 right-4 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-g2g-red/40 via-g2g-yellow/50 to-g2g-red/40"
          aria-hidden
        />
      </div>

      <motion.div
        key={activeStep}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 32 }}
        className="flex items-center gap-3 rounded-2xl border border-g2g-red/25 bg-g2g-red/5 p-4"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-g2g-yellow bg-g2g-red">
          <Truck className="text-white" size={20} aria-hidden />
        </div>
        <p className="text-xs text-g2g-gray-100">
          Toque nas etapas acima ou deslize o marcador para navegar pelo processo.
        </p>
      </motion.div>
    </div>
  );
}

export function MilestoneHighlight({
  active,
  className,
  children,
  dimmed,
}: {
  active: boolean;
  className?: string;
  children: ReactNode;
  dimmed?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none transition-all duration-300",
        active && "ring-2 ring-g2g-red/60 ring-offset-2 ring-offset-g2g-navy-950 rounded-[20px]",
        dimmed && !active && "opacity-60",
        className,
      )}
    >
      {children}
    </div>
  );
}
