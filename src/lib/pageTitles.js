const pageTitles = {
  '/login': 'Log in',
  '/signup': 'Sign up',
};

export function getPageTitle(pathname) {
  if (pageTitles[pathname]) {
    return pageTitles[pathname];
  }
  return null;
}
