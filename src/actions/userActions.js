export function setUser() {
  return {
    type: 'SET_USER',
    payload: {
      id: 1,
      email: 'erik_jonsson@jackmorton.com',
      firstName: 'Erik',
      lastName: 'Jönsson',
      office: 'New York',
      title: 'Sr. Brand Marketing Associate',
    },
  };
}
