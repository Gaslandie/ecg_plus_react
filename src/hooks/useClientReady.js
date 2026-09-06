import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const useClientReady = () => useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
