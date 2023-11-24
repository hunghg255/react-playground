import { WebContainer } from '@webcontainer/api';
import { proxy } from 'valtio';

type Status = 'init' | 'mount' | 'install' | 'start' | 'ready' | 'error';

export const statusProxy = proxy<{ value: Status }>({ value: 'init' });
export const wcProxy = proxy<{ value?: WebContainer }>();
