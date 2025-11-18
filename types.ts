import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}

export interface SectionProps {
  title: string;
  content: string;
  reverse?: boolean;
  icon: React.ReactNode;
}