import { createIdentifier, type Memento } from '@lumibook/infra';

export interface AppSidebarState extends Memento {}

export const AppSidebarState =
  createIdentifier<AppSidebarState>('AppSidebarState');
