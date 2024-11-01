export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'",
            'https://cdn.ckeditor.com',
            'https://api-cheatsheet.up.railway.app',
          ],
          'connect-src': ["'self'", 'https://api-cheatsheet.up.railway.app'],
        },
      },
    },
  },
]
