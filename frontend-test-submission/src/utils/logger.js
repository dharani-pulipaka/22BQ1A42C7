// src/utils/logger.js
import axios from 'axios';

export const log = async (stack, level, pkg, message) => {
  try {
    await axios.post('http://20.244.56.144/evaluation-service/logs', {
      stack,
      level,
      package: pkg,
      message,
    });
  } catch (error) {
    console.error("Log failed:", error);
  }
};
