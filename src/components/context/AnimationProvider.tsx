"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const AnimationContext = createContext({
  hasVisited: false,
  setHasVisited: (value: boolean) => {},
});

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [hasVisited, setHasVisited] = useState(false);

  return (
    <AnimationContext.Provider value={{ hasVisited, setHasVisited }}>
      {children}
    </AnimationContext.Provider>
  );
}

export const useAnimation = () => useContext(AnimationContext);
