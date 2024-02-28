// Example validation.js
const validateEmail = (email) => {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Basic password validation (at least 6 characters)
  return password.length >= 6;
};

export { validateEmail, validatePassword };
