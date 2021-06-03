.PHONY:charts

charts:
	cd chart && helm package node_backend/
	mv chart/*.tgz docs/
	helm repo index docs --url https://mjsprengers.github.io/node_backend/ --merge ./docs/index.yaml