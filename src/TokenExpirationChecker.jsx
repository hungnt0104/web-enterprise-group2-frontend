import React, { useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";

function TokenExpirationChecker({ children }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        // console.log(currentTime)
        if (decodedToken.exp < currentTime) {
          // Token is expired, log the user out
        //   localStorage.removeItem('token');
        window.alert("Your session was expired")
          window.localStorage.clear();
            window.location.href = "/";
          // Add other necessary log out actions
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return <>{children}</>;
}

export default TokenExpirationChecker;