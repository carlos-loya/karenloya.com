.PHONY: install build dev deploy clean

install:
	npm install

build: install
	npm run build

dev:
	npm run dev

deploy:
	npx vercel --prod

clean:
	rm -rf .next node_modules
