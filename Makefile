run:
	npm run start

fetch_chains:
	curl -so - -L https://github.com/cosmos/chain-registry/archive/refs/heads/master.tar.gz | tar -x --strip-components=1 -C src/assets/chain-registry
	rm -rf src/assets/chain-registry/.github