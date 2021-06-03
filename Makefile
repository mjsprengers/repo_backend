.PHONY:charts

charts:
	cd chart && helm package node_backend/
	mv chart/*.tgz docs/
	helm repo index docs --url https://mjsprengers.github.io/repo_backend/ --merge ./docs/index.yaml