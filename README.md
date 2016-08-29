# Bankia UI generator

## Run generator locally

In the ***generator-bakia-ui/*** folder type:

```
npm link
yo bankia-ui
```

## Generator folder structure

- **generators/app/:** Default generator (yo bankia-ui)  

## Debug bankia-ui generator

```
# OS X / Linux
node --debug `which yo` bankia-ui

# Windows
# Find the path to the yo binary
where yo
# Would be something like C:\Users\<USER>\AppData\Roaming\npm\yo
# Use this path to derive yo cli.js file
# C:\Users\<USER>\AppData\Roaming\npm\node_modules\yo\lib\cli.js
node --debug <path to yo cli.js> bankia-ui
```

### Debug Mode
```
# OS X / Linux
DEBUG=yeoman:generator

# Windows
set DEBUG=yeoman:generator
```

### Tests
```
npm test
```

#### Debug mocha test
```
npm run test:debug
```
