
import { GOOGLE_GEMINI_KEY } from "./constants";
import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable
// const genAI = new GoogleGenerativeAI(
//     {
//     apiKey: GOOGLE_GEMINI_KEY, 
//     dangerouslyAllowBrowser: true,
// });

const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_KEY);


export default genAI;