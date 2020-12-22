import React, { createContext, useContext, useState } from 'react';

const SoundContext = createContext({} as any);

export default function SoundProvider({ children }: any) {
  const [windActive, setWindActive] = useState(false);
  const [campfireActive, setCampfireActive] = useState(false);
  const [rainActive, setRainActive] = useState(false);
  const [birdsActive, setBirdsActive] = useState(false);

  return (
    <SoundContext.Provider
      value={{
        windActive,
        setWindActive,
        campfireActive,
        setCampfireActive,
        rainActive,
        setRainActive,
        birdsActive,
        setBirdsActive,
      }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);

  const {
    windActive,
    setWindActive,
    campfireActive,
    setCampfireActive,
    rainActive,
    setRainActive,
    birdsActive,
    setBirdsActive,
  } = context;

  return {
    windActive,
    setWindActive,
    campfireActive,
    setCampfireActive,
    rainActive,
    setRainActive,
    birdsActive,
    setBirdsActive,
  };
}
