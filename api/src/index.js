import createError from 'http-errors';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import versioningRoutes from './routes/versioning';

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set security headers
app.use(helmet());

// TODO: Prevent XSS

// Rate limiting (max 1000 requests per 10 minutes per IP)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 1000,
});
app.use(limiter);

// Prevent http parameter pollution and enable CORS
app.use(hpp());
app.use(cors());

// Mount routes
app.use('/api/version', versioningRoutes);

// Catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
