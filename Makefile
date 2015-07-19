BOWER = bower
SASS = sass --no-cache
PREFIXER = autoprefixer

COFFEE = coffee
UGLIFYJS = uglifyjs

PUBLIC_DIR = ./public/assets
SRC_DIR = ./src/assets
BOWER_DIR = ./bower_components
VENDOR_DIR = ./vendor

JS_DIR = ${PUBLIC_DIR}/js
JS_APP_FILE = ${JS_DIR}/app.js
JS_VENDOR_FILE = ${JS_DIR}/vendor.js
JS_VENDOR_FILES = ${BOWER_DIR}/jquery/dist/jquery.min.js

CSS_DIR = ${PUBLIC_DIR}/css
CSS_APP_FILE = ${CSS_DIR}/app.css

SCSS_DIR = ${SRC_DIR}/scss
SCSS_APP_FILE = ${SCSS_DIR}/app.scss

FONTS_DIR = ${PUBLIC_DIR}/fonts
FONT_FILES = ${BOWER_DIR}/font-awesome/fonts/*

COFFEE_FILES = ${SRC_DIR}/coffee/*.coffee

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

build: scss coffee

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

coffee: coffee-pretty
	${UGLIFYJS} ${JS_APP_FILE} ${JS_SOURCE_FILES} --output ${JS_APP_FILE} --mangle
	${UGLIFYJS} ${JS_VENDOR_FILES} --output ${JS_VENDOR_FILE} --mangle

coffee-pretty: build-dirs
	cat ${COFFEE_FILES} | coffee --compile --stdio > ${JS_APP_FILE}

coffee-watch:
	@${COFFEE} --watch --compile --map --join ${JS_APP_FILE} ${COFFEE_FILES}


