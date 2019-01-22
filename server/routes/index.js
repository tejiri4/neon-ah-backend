import { Router } from 'express';
import userRoutes from './api/user';
import authRoutes from './api/auth';
import articleRoutes from './api/article';
import commentRoutes from './api/comment';

const routes = Router();

routes.use(userRoutes);
routes.use(authRoutes);
routes.use(articleRoutes);
routes.use(commentRoutes);

export default routes;
