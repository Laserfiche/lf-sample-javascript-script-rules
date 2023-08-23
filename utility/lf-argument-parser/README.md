# Lasefiche Argument Parser

The main purpose of this packages is to show how remote agent would re-orginize input parameters to the process arguments and pass the arguments to the script. It also shows how remote agent would read the output parameters from the standard output of the script.

## Example

You create a script rule that:

- Script location: `ProcessAutomationWorker\bin\Scripts\node\sample.js`
- Input Parameters:
  - Input1: value1
  - Input2: value2
- Output Prameters:
  - Output1

The remote agent would invoke the script with the following arguments:

```bash
node sample.js Input1=value1 Input2=value2
```

This package would parse the arguments and return an input map for the target script to use:

```javascript
{
  Input1: 'value1',
  Input2: 'value2'
}
```

For the output parameter, remote agent would read the value from the standard output of the script, looking for any text the format under `Output1:result` and return the result in a output map:

```javascript
{
  Output1: 'result'
}
```

## Dependencies

The minor purpose of this package is also to show how to handle dependencies of npm package in the nodejs script rule.
