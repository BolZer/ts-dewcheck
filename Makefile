dev:
	npm run dev

clean:
	rm -rf ./dist/*
	rm -rf ./ts-dewcheck

build: clean
	npm run build-assets && packr2 build -o app --v && packr2 clean && rm -rf ./dist/*
