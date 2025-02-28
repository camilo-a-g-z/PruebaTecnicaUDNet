import cors from "cors";

const ACCEPTED_ORIGINS = ["http://localhost:8080", "http://localhost:3000"];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      //para que no se rechace la peticion desde un html simple (en produccion se debe cambiar)
      return callback(null, true);
    },
  });
