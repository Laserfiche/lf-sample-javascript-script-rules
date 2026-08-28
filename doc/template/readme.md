# Laserfiche Nodejs Rule script Template project

This project is a template for creating a Laserfiche Nodejs Rule script project. It contains a sample script that can be used as a starting point for creating your own script.

## Deploy script to your remote agent

- Copy the contents of the bundle output folder `\dist` to the default script folder for Remote Worker 1:
  - `C:\Program Files\Laserfiche\ProcessAutomationWorkerAgent\LFPALocalAgent\bin`
- If the worker was installed in a different location, use the `bin` subfolder of that installation folder.

## Configure and test this script rule in your Laserfiche Cloud Account -> Process Automation -> Rules

- Create a new rule
  - Select the script rule type: Nodejs
  - Script location: `C:\Program Files\Laserfiche\ProcessAutomationWorkerAgent\LFPALocalAgent\bin\template.js`
  - Input:
    - Name1
    - Name2
  - Output:
    - Name1
    - Name2

  ![Drag Racing](script-rule-configuration.png)

## Test the rule

- Providing two string inputs, this script would echo the inputs

![Drag Racing](script-test-inputs.png)

## Test script rule in a workflow

- Run the workflow and verify the script echo the inputs

![Drag Racing](workflow-script-rule-sample.png)
