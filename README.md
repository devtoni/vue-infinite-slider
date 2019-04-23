# vue-infinite-slider

Project for learning purposes with a bit of overengineering.

I wanted to have a bit taste of async generators and tagged templates.

The application displays a set of photos in a Bootstrap carousel using a service called from the action.

This service in its first call fetchs 30 photos from Unsplash API, after that it stores the result in a local instance cache. 

Finally it returns an async generator that will yield another iterator (the cached results spliced) with the first five values but mapped to simulate another request returning for each value a resolved promise.

On the second call it will just return the next five values from the cached results.

When the cached values are used, then it will make another request to the Unsplash API.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
