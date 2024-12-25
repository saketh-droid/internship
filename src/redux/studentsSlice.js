import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../api/supabase';

// Thunk to Fetch Students Data
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const { data, error } = await supabase
    .from('students') // Replace with your table name
    .select('name, cohort, course, dateJoined, lastLogin, status');
  if (error) {
    throw new Error(error.message);
  }
  return data;
});

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentsSlice.reducer;
