import express, { json } from 'express';
import cors from "cors"
import 'express-async-errors';

import handleErrorsMiddleware from '../middlewares/errorHandler';
import router from '../routes';

const app = express();
app.use(json());
app.use(cors());

app.use(router);
app.use(handleErrorsMiddleware);

export default app;