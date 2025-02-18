// src/utils/wordUtils.ts
const API_URL = "http://metaphorpsum.com/paragraphs/1/2";

export const getRandomText = async (): Promise<string> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch text");
    }
    return await response.text();
  } catch (error) {
    // Fallback text in case API fails
    console.log("Failed to fetch text", error);
    return "The quick brown fox jumps over the lazy dog";
  }
};

export const splitIntoWords = (text: string): string[] => {
  return text.trim().split(/\s+/);
};
