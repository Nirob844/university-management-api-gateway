import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/academic-faculties',
    routes: academicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
