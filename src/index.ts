import express from 'express';
import userRoutes from './routes/user.routes.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// use routes
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});