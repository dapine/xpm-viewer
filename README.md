# xpm-viewer

xpm-viewer is a simple React app for displaying [X PixMap](https://en.wikipedia.org/wiki/X_PixMap) images. It currently supports XPM version 2, which is not embedded or depends on the C programming language.

![Example of a rendered .XPM file](docs/img.png)

**Installation**

There is not aditional dependencies, just the good old react.js.
You can just clone this repo and run `npm install` to install the dependencies and `npm start` to start the development server or `npm build` to build it to production.
```
$ git clone https://github.com/dapine/xpm-viewer.git
$ cd xpm-viewer
$ npm install
$ npm start
```

**Caution ahead!**

XPM format has a very fragile specification, so you need to be careful about your image. Be sure to pass a well formed pixmap, otherwise the image shown will make no sense.
