import express from 'express';
import userRoutes from './routes/user.routes.ts';
import projectRoutes from './routes/project.routes.ts'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// use routes
app.use('/', userRoutes);
app.use("/projects", projectRoutes)
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});