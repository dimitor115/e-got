# e-got
This is proof of concept app for collecting points for mountain's badges in Poland. 
I've created it as a final of my university (Wrocław University of Science and Technology) project and I decided to integrate as many newest technologist as possible.
The point was to face with my ideas and problems with modern web development.

I was trying to avoid having dwo different instances: frontend and backend.
That is way in my approach, the same based on `express.js` app render `vue.js` components and 
provides `REST API` for data access. As database I decided to use Mongo DB, which is perfect for prototype apps.

The whole projects structure, components rendering, page router and `PWA` module, provides the 
`Nuxt.js` framework. 


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Credits:
- `nuxt.js`
- `vue.js`
- `vue-bootstrap`
- `mongo db`
- `express.js`
- `img-vuer` https://github.com/ssshooter/img-vuer - for scalable image view on mobiles 
- `v-blur` https://github.com/ndelvalle/v-blur
- `client-compress` https://github.com/davejm/client-compress - for client side image compression
- `cypress` https://www.cypress.io/ - for e2e tests
- `jsdoc` - for simple documentation generator

