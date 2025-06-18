import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const deleteModule = async (moduleId: string) => {
    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
    return response.data; };
export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
    return data;
};

export const fetchAllCourses = async () => {
  const resp = await axiosWithCredentials.get("/api/courses");
  return resp.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  await axiosWithCredentials.post(`/api/users/${userId}/courses`, { courseId });
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  await axiosWithCredentials.delete(
    `/api/users/${userId}/courses/${courseId}`
  );
};
export const findModulesForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/modules`
  );
  return data;
};
export const createModuleForCourse = async (
  courseId: string,
  module: { name: string }
) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return data;
};