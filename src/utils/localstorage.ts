const AUTH_KEY = 'authData';
const SESSION_KEY = 'session';
interface localStorageDataType {
  tokenInfo: {
    accessToken: string;
    refreshToken: string;
  }
}
export const LoginStorage = {
  getData():localStorageDataType | null {
    const localStorageData = JSON.parse(localStorage.getItem(AUTH_KEY) ?? 'null') as( localStorageDataType | null);
    if (!localStorageData) return null;
    return localStorageData;
  },
  setData(res: unknown) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(res));
  },
  clearData() {
    localStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_KEY);
  },
};

export const SessionStorage = {
  getData() {
    const localStorageData = JSON.parse(localStorage.getItem(SESSION_KEY) ?? 'null') as unknown;
    return localStorageData;
  },
  setData(res: unknown) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(res));
  },
  clearData() {
    localStorage.removeItem(SESSION_KEY);
  },
};
