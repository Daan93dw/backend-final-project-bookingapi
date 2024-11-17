// Function that removes the password from user object
const removePasswordFromUserData = (user) => {
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export default removePasswordFromUserData;
