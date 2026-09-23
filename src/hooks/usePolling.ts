import { useEffect, useState } from "react";

/**
 * Hace polling de `fetcher` cada `intervalMs`. Si el backend no responde
 * (offline, CORS, etc.) `fetcher` debe resolver `null` — el hook conserva
 * el último valor conocido (o `initial`) y reporta `isLive: false` en vez
 * de romper la UI.
 */
export function usePolling<T>(
  fetcher: (signal: AbortSignal) => Promise<T | null>,
  intervalMs: number,
  initial: T,
  deps: unknown[] = [],
): { data: T; isLive: boolean } {
  const [data, setData] = useState<T>(initial);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const tick = async () => {
      const result = await fetcher(controller.signal);
      if (cancelled) return;
      if (result !== null) {
        setData(result);
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    };

    tick();
    const id = setInterval(tick, intervalMs);

    return () => {
      cancelled = true;
      controller.abort();
      clearInterval(id);
    };
    // deps controla cuándo se reinicia el polling (ej. cambio de rango del gráfico)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, isLive };
}
