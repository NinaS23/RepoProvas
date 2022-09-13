import app from "./app/app";
import dotenv from 'dotenv';
dotenv.config();

const port = +process.env.PORT || 6002;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
});