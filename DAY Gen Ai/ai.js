import { Mistral } from '@mistralai/mistralai';
import config from './config/config.js'

const apiKey = config.AI_KEY || 'your_api_key';

const client = new Mistral({apiKey: apiKey});

const chatResponse = await client.chat.complete({
  model: 'mistral-medium-latest',
  messages: [
    {
        role: 'user', 
        content: 'What is the best French cheese?'
    }
],
});

console.log(chatResponse)  // ai is only llm they dont have anything like internet, --- we are createing tools ai used a tools than can intreact with AI and than gave answers  