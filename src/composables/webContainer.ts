import { WebContainer } from '@webcontainer/api';

let _webContainerPromise: Promise<WebContainer>;

export function getWebContainer() {
  if (!_webContainerPromise) {
    _webContainerPromise = WebContainer.boot();
  }
  return _webContainerPromise;
}
