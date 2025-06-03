import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json";
import { v4 as uuidv4 } from "uuid";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: enrollmentsData as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (
      state,
      action: PayloadAction<{ user: string; course: string }>
    ) => {
      const { user, course } = action.payload;
      // avoid dup
      if (
        !state.enrollments.find(
          (e) => e.user === user && e.course === course
        )
      ) {
        state.enrollments.push({ _id: uuidv4(), user, course });
      }
    },
    unenrollCourse: (
      state,
      action: PayloadAction<{ user: string; course: string }>
    ) => {
      const { user, course } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;