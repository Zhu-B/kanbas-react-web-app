import { createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";
//import coursesData from "../Database/courses.json";
import { v4 as uuidv4 } from "uuid";

// export interface Course {
//   _id: string;
//   name: string;
//   number: string;
//   startDate: string;
//   endDate: string;
//   description: string;
// }

// interface CoursesState {
//   courses: Course[];
// }

// const initialState: CoursesState = {
//   courses: coursesData as Course[],
// };

// const coursesSlice = createSlice({
//   name: "courses",
//   initialState,
//   reducers: {
//     addCourse: (state, action: PayloadAction<Omit<Course, "_id">>) => {
//       state.courses.push({ _id: uuidv4(), ...action.payload });
//     },
//     updateCourse: (state, action: PayloadAction<Course>) => {
//       state.courses = state.courses.map((c) =>
//         c._id === action.payload._id ? action.payload : c
//       );
//     },
//     deleteCourse: (state, action: PayloadAction<string>) => {
//       state.courses = state.courses.filter((c) => c._id !== action.payload);
//     },
//   },
// });

// export const { addCourse, updateCourse, deleteCourse } =
//   coursesSlice.actions;
// export default coursesSlice.reducer;

const initialState = {
  courses: [],
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: uuidv4(),
        modules: [],
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((c: any) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    editCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === courseId ? { ...c, editing: true } : c
      ) as any;
    },
  },
});
export const { addCourse, deleteCourse, updateCourse, editCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;