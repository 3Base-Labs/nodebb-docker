# nodebb-docker

This repo is used to run nodebb in 3base labs. 

This repo shouldn't be modified unless you're sure of what you're doing. 
It automatically fetches from [3base-labs/nodebb](https://github.com/3base-labs/nodebb)
and creates new image tags.

If you want to create a new ghcr image tag, you should create a new tag in the 3base-labs's
nodebb repo. And either wait for the automatic update workflow to run or manually trigger the 
`check-update` workflow.

## Simple Start

```bash
cd nodebb-docker
```

1. Create the data directory
```bash
mkdir -p ./data/
```

2. Create config files and modify them
```bash
cp nodebb-mongo-init.example.js nodebb-mongo-init.js
cp setup.example.json setup.json
```
_`Note:` If you updated credentials, make sure to update it in `docker-compose.yml` as well_

3. Run the container
```bash
docker compose up -d
```


### Note from the original repo creator [NavyStack](https://github.com/NavyStack/nodebb-docker):

- This is the result of tweaking all over the place. I don't know why the WebGUI 
doesn't reflect the values entered and uses the hardcoded `setup.json`.
- So simply modify the `setup.json` to mount it and proceed to the WebUI.
