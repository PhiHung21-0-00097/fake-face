import { axiosIntanceAuth, axiosTest } from ".";
const getCourse = () => {
  return axiosIntanceAuth.get("/courses/detail");
};
const loginCreateUser = (data) => {
  return axiosTest.post("/users/login", { ...data });
};
export { getCourse, loginCreateUser };
