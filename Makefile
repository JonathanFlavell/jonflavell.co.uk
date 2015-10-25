BOWER = bower
SASS = sass --no-cache
PREFIXER = autoprefixer

BROWSERIFY = browserify
BABELIFY = babelify
UGLIFYJS = uglifyjs

PUBLIC_DIR = ./public/assets
JS_DIR = ${PUBLIC_DIR}/js
SRC_DIR = ./src/assets
BOWER_DIR = ./bower_components
VENDOR_DIR = ./vendor

ES6_MAIN_FILE = ${SRC_DIR}/es6/main.js
JS_BUNDLE_FILE = ${SRC_DIR}/js/bundle.js
JS_MIN_BUNDLE_FILE = ${JS_DIR}/bundle.min.js
JS_VENDOR_FILE = ${JS_DIR}/vendor.js
JS_VENDOR_FILES = ${BOWER_DIR}/jquery/dist/jquery.min.js

CSS_DIR = ${PUBLIC_DIR}/css
CSS_APP_FILE = ${CSS_DIR}/app.css

SCSS_DIR = ${SRC_DIR}/scss
SCSS_APP_FILE = ${SCSS_DIR}/app.scss

FONTS_DIR = ${PUBLIC_DIR}/fonts
FONT_FILES = ${BOWER_DIR}/font-awesome/fonts/*

all: clean depend build

clean:
	rm -rf ${CSS_DIR}
	rm -rf ${JS_DIR}
	rm -rf ${FONTS_DIR}
	rm -rf ${VENDOR_DIR}
	rm -rf ${BOWER_DIR}

depend: composer bower

composer:
	composer install --no-dev

bower:
	${BOWER} cache clean
	${BOWER} install

build: scss uglify

###
# ASSET PIPELINE
###
build-dirs:
	mkdir -p ${CSS_DIR} ${JS_DIR} ${FONTS_DIR}
	for FONT_FILE in ${FONT_FILES}; do cp $$FONT_FILE ${FONTS_DIR}; done

scss: build-dirs
	${SASS} --style compressed ${SCSS_APP_FILE} ${CSS_APP_FILE}
	${PREFIXER} ${CSS_APP_FILE}

scss-pretty: build-dirs
	${SASS} ${SCSS_APP_FILE} ${CSS_APP_FILE}
	${PREFIXER} ${CSS_APP_FILE}

scss-watch: build-dirs
	${SASS} --watch ${SCSS_APP_FILE}:${CSS_APP_FILE}

es6:
	${BROWSERIFY} ${ES6_MAIN_FILE} -t ${BABELIFY} -o ${JS_BUNDLE_FILE}

uglify: es6
	${UGLIFYJS} ${JS_VENDOR_FILES} --output ${JS_VENDOR_FILE} --mangle
	${UGLIFYJS} ${JS_BUNDLE_FILE} --output ${JS_MIN_BUNDLE_FILE} --mangle
