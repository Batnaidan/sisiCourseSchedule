import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getDep = () => api.get('/deps');
export const getAllCourses = (depId) => api.get(`/courses/${depId}`);
export const getCourseById = (depId, CourseId) =>
  api.get(`/course/${depId}/${CourseId}`);

const apis = { getDep, getAllCourses, getCourseById };

export default apis;
