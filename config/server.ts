export default ({ env }) => ({
  url: env('RENDER_EXTERNAL_URL'), // <- Important for Render deployment

  host: env('HOST', '0.0.0.0'),     // <- Keep this as is
  port: env.int('PORT', 1337), // <- Render will pass the correct PORT
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),    // <- Use environment variable for APP_KEYS (required)
  },

  admin: {
    serveAdminPanel: true,          // <- Important! Ensures Strapi serves the admin panel in production
  },
});

