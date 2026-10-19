import type { apis, events } from '@lumibook/electron-api';

/**
 * Extends the global Window interface to include 识光's 
 * Electron bridge APIs and event emitters.
 */
declare global {
  interface Window {
    __apis?: {
      apis: typeof apis;
      events: typeof events;
    };
  }
}

export {};
