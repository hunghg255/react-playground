import { proxy } from 'valtio';

type Status = 'init' | 'mount' | 'install' | 'start' | 'ready' | 'error';

export const statusProxy = proxy<{ value: Status }>({ value: 'init' });
