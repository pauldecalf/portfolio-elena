import React, { createContext, useContext, useState, ReactNode } from "react";

interface TabContextType {
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const savedTab = localStorage.getItem("activeTabIndex");
  const initialTabIndex = savedTab ? parseInt(savedTab, 10) : 0;

  const [activeTabIndex, setActiveTabIndex] = useState<number>(initialTabIndex);

  React.useEffect(() => {
    localStorage.setItem("activeTabIndex", activeTabIndex.toString());
  }, [activeTabIndex]);

  return <TabContext.Provider value={{ activeTabIndex, setActiveTabIndex }}>{children}</TabContext.Provider>;
};

export const useTab = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};
