const { redirect } = require("next/dist/server/api-utils");

module.exports = {
   trailingSlash: true,
   async redirects() {
      return [
         {
            source: '/perguntas',
            destination: '/faq',
            permanent: true,
         },
      ]
   },
}