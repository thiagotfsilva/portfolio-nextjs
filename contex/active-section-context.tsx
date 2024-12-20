"use client"
import type { SectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react'

type ActiceSectionContextProviderProps = {
  children: React.ReactNode
};

type ActiveSectionContextType = {
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<"Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact">>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiceSectionContextProviderProps) {

  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }}>
      { children }
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if(context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionProvider"
    );
  }

  return context;
}