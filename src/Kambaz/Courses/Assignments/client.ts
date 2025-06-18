import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
// export const fetchAssignmentsForModule = async (moduleId: string) => {
//   const { data } = await axiosWithCredentials.get(
//     `${COURSES_API}/${moduleId}/Assignments`
//   );
//   return data;
// };
// export const createAssignmentForModule = async (
//   moduleId: string,
//   assignment: any
// ) => {
//   const { data } = await axiosWithCredentials.post(
//     `${COURSES_API}/${moduleId}/Assignments`,
//     assignment
//   );
//   return data;
// };
export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(
        `${COURSES_API}/${assignment._id}`,
        assignment
    );
    return data;
};
export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${COURSES_API}/${assignmentId}`
  );
  return data;
};
export const fetchAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/Assignments`
  );
  return data;
}
export const createAssignmentForCourse = async (
  courseId: string,
  assignment: any
) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/Assignments`,
    assignment
  );
  return data;
};