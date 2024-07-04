export const checkvalidateData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^.{8,}$/.test(password);
  
    if (!isEmailValid) return "Email ID is not valid!";
    if (!isPasswordValid) return "Password must be at least 8 characters long!";
  
    return null;
  }
 