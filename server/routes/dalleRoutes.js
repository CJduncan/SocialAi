import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Hello from DALL-E!' });
});

// ...[previous code]...

// ...[previous code]...

router.route('/').post(async (req, res) => {
  try {
      const { prompt } = req.body;

      const response = await openai.images.generate({
          prompt,
          n: 1,
          size: '1024x1024',
          response_format: 'b64_json'
      });

      // Log the full response for inspection
      console.log('Full Response:', response);

      // Adjust the following line based on the actual response structure
      const imageData = response.data;

      if (!imageData) {
          throw new Error('No image data found in response');
      }

      res.status(200).json({ photo: imageData });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send({ message: error?.message || 'Something went wrong' });
  }
});

// ...[rest of the code]...


// ...[rest of the code]...


export default router;
