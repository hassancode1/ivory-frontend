export const dollarFormatter = (num) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(num);
 
  export const getLocalAccessToken = () => {
    return localStorage.getItem(`jwtToken`);
  };
 export  const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  };
  export const API_URL = "https://whale-app-a3hvg.ondigitalocean.app/ivory2"

