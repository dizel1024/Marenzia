'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface InspirationItem {
  id: string;
  slug: string;
  title: string;
  image?: string;
  categorySlug: string;
}

interface InspirationContextType {
  savedItems: InspirationItem[];
  addItem: (item: InspirationItem) => void;
  removeItem: (id: string) => void;
  isSaved: (id: string) => boolean;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const InspirationContext = createContext<InspirationContextType | undefined>(undefined);

export function InspirationProvider({ children }: { children: React.ReactNode }) {
  const [savedItems, setSavedItems] = useState<InspirationItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem('marenzia_inspiration');
    if (stored) {
      try {
        setSavedItems(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse inspiration items', e);
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('marenzia_inspiration', JSON.stringify(savedItems));
    }
  }, [savedItems, isMounted]);

  const addItem = (item: InspirationItem) => {
    setSavedItems((prev) => {
      if (prev.some(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
    openDrawer(); // Auto-open when adding
  };

  const removeItem = (id: string) => {
    setSavedItems((prev) => prev.filter(i => i.id !== id));
  };

  const isSaved = (id: string) => {
    return savedItems.some(i => i.id === id);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <InspirationContext.Provider value={{ savedItems, addItem, removeItem, isSaved, isDrawerOpen, openDrawer, closeDrawer }}>
      {children}
    </InspirationContext.Provider>
  );
}

export function useInspiration() {
  const context = useContext(InspirationContext);
  if (context === undefined) {
    throw new Error('useInspiration must be used within an InspirationProvider');
  }
  return context;
}
