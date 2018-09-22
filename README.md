# mkr/bin

A lightweight pastebin/hastebin alternative with no hard frontend JS dependency.

# Starting the app

You know the drill:

```shell
git clone https://github.com/MKRhere/bin
cd bin
npm install
```

Start the app with the ENV variables:
+ `BIN_MONGO_CSTRING`: your Mongo connection string.
+ `BIN_PORT`: port on which `bin` should listen to.

```shell
BIN_MONGO_CSTRING=mongodb://localhost:27017/bin-store \
	BIN_PORT=4000 \
	npm start
```
