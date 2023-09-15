# Sample Laserfiche Nodejs Rule script project

Sample javascript scripts that can be invoked from Laserfiche workflow or business process.

Scripts are invoked by **Laserfiche Remote Agent** which is a service installed on a Windows PC for this purpose.

## Prerequisites

- [nodejs 16 LTS or later](https://nodejs.org/en)
- [Visual Studio Code v1.80 or later](https://code.visualstudio.com/download)
- [A Laserfiche Cloud Account](https://www.laserfiche.com/signon/)
- [Creating a Node.js Script Documentation](https://doc.laserfiche.com/laserfiche.documentation/en-us/Default.htm#../Subsystems/ProcessAutomation/Content/Resources/Rules/nodejsscript.htm?TocPath=Process%2520Automation%257CRules%257CGetting%2520Started%2520With%2520Scripts%257C_____3)

## Build and Test script

This project is using [NPM workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) to setup a mono-repo with multiple packages. Please refer to the documentation for more details.

- Clone this GIT repository
- Install: `npm install -w source/ -w utility/`
- Test: `npm test -w source/ -w utility/`
- Build: `npm run build -w source/`

## Configure a remote agent

- [Remote Agents Documentation](https://doc.laserfiche.com/laserfiche.documentation/en-us/Default.htm#../Subsystems/ProcessAutomation/Content/Resources/Integrations/Remote-Agents/Remote-Agents.htm?TocPath=Process%2520Automation%257CIntegrations%257CRemote%2520Agents%257C_____0)
  
## Sample Projects

- [Template Nodejs Script Rule](doc/template/readme.md)
- [Distance between two zipcodes](doc/distance-between-zipcodes/readme.md)

### Note for bundling

- In all the sample packages, we are using ***rollup*** to bundle all the code (include internal and external dependencies) into a single file. This is not required, but it makes it easier to deploy the code to the remote agent.
- You can also ***copy the folder*** of source code package into remote agent and manually install the dependencies using `npm install` command.
- Remote agent only cares the target script file, and it expects the deployment step to ensure the target script is executable during invocation time.
