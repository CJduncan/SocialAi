import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
  res.send('Hello from Dalle ');
});

const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(8081, () => console.log('Server started on port 8081'));
    } catch (error) {
      console.log(error);
    }
  };

startServer();