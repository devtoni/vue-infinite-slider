# vue-infinite-slider

Project for learning purposes with a bit of overengineering.

I wanted to have a bit taste of async generators and tagged templates.

The application uses a Bootstrap carousel displaying sets of five photos infinitely making calls to the Unsplash API using a service that returns an async generator. It won't recover the previous ones when a new set is display it because of design decision.

This service in its first call fetchs 30 photos from Unsplash API, after that it stores the result in a local instance cache. 

Finally it yields an iterator (the cached results spliced) with the first five values but mapped to simulate another request returning for each value a resolved promise.

On the second call it will just return the next five values from the cached results following the previous step.

When the cached values are used, then it will make another request to the Unsplash API.

The reason to use this async generator, is to have a way (there are other ways of course) to avoid making 30 requests in each service call from the Unsplash API response in the imaginary case we need it for each value, so with this strategy we will make the requests on demand. 

30 request may be a 'few', but imagine now a more typical scenario:

- We need to make a first call to retrieve a list of cities returning 1000 records.
- Then for each city we need to retrieve the list of its POI's to display to the user.
- The UI needs to display 10 cities at a time. 

Without having an strategy we would have to make a lot of requests without really need that unless we needed it to display all at the same time.


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
