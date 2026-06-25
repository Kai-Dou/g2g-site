export const ROAD_PATH_D =
  "M 40 80 C 180 80, 220 160, 360 180 C 520 200, 580 120, 720 140 C 860 160, 900 280, 760 320 C 620 360, 500 400, 340 420 C 180 440, 120 520, 280 540 C 440 560, 700 520, 920 500";

export const ROAD_VIEWBOX = { width: 1000, height: 600 };

/** Progresso 0–1 de cada etapa ao longo da estrada */
export const STEP_PROGRESS = [0.04, 0.32, 0.58, 0.82, 0.97];

export function getPointOnRoad(path: SVGPathElement, progress: number) {
  const length = path.getTotalLength();
  const clamped = Math.min(1, Math.max(0, progress));
  return path.getPointAtLength(clamped * length);
}

export function getClosestProgress(
  path: SVGPathElement,
  x: number,
  y: number,
  samples = 120,
) {
  const length = path.getTotalLength();
  let best = 0;
  let bestDist = Infinity;

  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const point = path.getPointAtLength(t * length);
    const dist = (point.x - x) ** 2 + (point.y - y) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      best = t;
    }
  }

  return best;
}

export function clientToSvgPoint(
  svg: SVGSVGElement,
  clientX: number,
  clientY: number,
) {
  const point = svg.createSVGPoint();
  point.x = clientX;
  point.y = clientY;
  const matrix = svg.getScreenCTM();
  if (!matrix) return { x: 0, y: 0 };
  const transformed = point.matrixTransform(matrix.inverse());
  return { x: transformed.x, y: transformed.y };
}

export function getActiveStepIndex(progress: number) {
  const stepAnchors = STEP_PROGRESS.slice(0, 4);
  let closest = 0;
  let minDiff = Infinity;
  stepAnchors.forEach((anchor, index) => {
    const diff = Math.abs(progress - anchor);
    if (diff < minDiff) {
      minDiff = diff;
      closest = index;
    }
  });
  return closest;
}
