# template

Simple return the input arguments as output parameter

## Package Scripts

- To install the package, cd `root` and run `npm install`.
- To test the package, run `npm test`.
- To build the package, run `npm run build`.
  - this will generate a `dist` folder with the compiled package.

## Command Line Interface

This would be the same interface how remote agent invoke the target script

- npm: `npm start -- key1=val1 key2=val2 key3=val3` 
- node: `node bin/launcher.mjs key1=val1 key2=val2 key3=val3`
- Or after run `npm build`: `node dist/distance key1=val1 key2=val2 key3=val3`

Should see below output after execution

```bash
> template@0.1.0 start
> node ./bin/launcher.mjs key1=val1 key2=val2 key3=val3

key1:val1
key2:val2
key3:val3
```

Any text write to stdout in a format {key}:{value} will be parsed as output parameter by remote agent worker. 
e.g., in the sample command would produce a output parameter map `{ "key1": "val1", "key2": "val2", "key3": "val3" }`.

## License

This package is licensed under the MIT License. See the `LICENSE` file for details.
