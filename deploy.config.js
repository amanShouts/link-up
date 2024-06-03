module.exports = {
  apps: [
    {
      name: "backend",
      script: "backend/dist/index.js",
      env: {
        PORT: 3000,
        DATABASE_URL: "Your_DB_string",
        CLOUDINARY_CLOUD_NAME: "Your_Cloud_name",
        CLOUDINARY_API_KEY: "Your_Cloud_API_Key",
        CLOUDINARY_SECRET: "Your_Cloud_Secret",
      },
    },
  ],
  script: "serve",
  env: {
    PM2_SERVE_PATH: "frontend/dist/",
    PM2_SERVE_PORT: 5173,
  },
};
