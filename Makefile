build:
	docker build -t hexat.studio .
now:
	now --docker -e NODE_ENV=production
