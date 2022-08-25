const Logout = () => {
  return <>{localStorage.removeItem("Token")}</>;
};
export default Logout;
