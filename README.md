# Rewards Network Versioning Tool: Developer Guide
Created By: Ryan BrodeFrank

A short guide on developing, deploying, and using the React Versioning Tool.

## Developing
### Initializing
In order to edit the Versioning Tool download the all folders/files except the 'build' and 'node_modules' folders. Open a terminal and open the folder containing the root files (where package.json is located). Run 'npm install' command to download all node modules. It is now possible to run and edit the Versioning Tool on your local machine.

### Testing
After following everything in the [Initializing section](#initializing), run 'npm start' in your terminal inside the downloaded Versioning Tool folder to initialize a local version on http://localhost:3000/. Saving any changes once 'npm start' is running will reload the local version with changes.

## Deployment
### Building
Run 'npm run build' in your terminal. After it has finished, open the SFTP client and connect to the backend of the WordPress site. In the root folder is a 'react' folder, copy this onto your local machine as a backup, then delete it from the WordPress database. Find the edited local version of the tool and transfer the 'build' folder into root of the WordPress backend with the SFTP. This folder should also include the folders 'wp-content' and 'wp-includes'. Change the 'build' folder's name to 'react' and delete the 'index.html' file.

In the WordPress site, go to the page editor where the tool has been embeded. Change the script tag with src="/react/static/js/main.{hash-code}.js" and change the {hash-code} number to the updated file hash number (in 'build/static/js/main.{hash-code}.js) from your local project.

## Using the Versioning Tool
### Formatting the Document
The Versioning Tool only works with a preformatted document that follows certain guidelines. Any file that does not align with those guidelines will fail to version properly.

#### Variables
A variable is any value that could change depending on which Partner is being versioned. 

Variables must be inside curly brackets {} and match one of the listed variables below. Capitalization and spaces inside the {} will not affect the program, so {Bonus Currency} and {bonuscurrency} are both valid. However if a variable is spelled incorrectly or has added or removed characters it will return as an UNDEFINED VARIABLE.

##### Variable List
* Name
    * Loyalty Program Name
* Partner
    * Partner's 2 Letter Identifier
* Program
    * Dining Program Name
* Currency
    * Partner's Currency Name
* X Number of Currency
    * Amount of Partner Currency a Member Can Receive
* Bonus Currency
    * Partner's Bonus Currency
* Parent Brand Incentive
    * Description of How Partner's Currency Can Be Used
* Full Sentence
    * Variable to Add a Period "." at the End of Full Sentences in for Partner's That Require it. Add the Varible After the Last Word in the Sentence as if it was a Period. This is an Example{full sentence}

#### Sections
Sections are different areas of the document that have differing formatting for each Partner. Each section can have different casing and punctation rules based on the Partner. Below is a list of the different sections with how to designate them in quotes. For sections the Versioning Tool will ignore capitalization but NOT spacing.

##### Section List
* Subject Line
    * "subject line (50 characters)"
* Title Tag
    * "title tag (50 characters)"
* Headline
    * "headline:"
* Body
    * "body:"

### Casing
The Versioning Tool assumes that each document is written in **Sentence Case** with only the first word of a sentence and proper nouns being capitalized. If a partner requires a different casing type then the tool will transform the Sentence Casing to the proper format. 

### Using the Tool
The Versioning Tool is hosted at [Rewards Network Versioning Tool](https://rnstg.wpengine.com/versioning-tool/). Once there click "Choose File" and select the Word document you want to version (must be of file type '.docx'). Click the checkbox next to any partners to toggle that partner on/off. Finally, once all partners have been selected/deselected click the "Generate Document" button. A new file will soon appear in your browser (depending on the browser you are using it will appear in different places, but most likely it will appear at the bottom of your browser). Click the file to download it.

## Reference Resources
https://medium.com/@CodeCareerCoach/react-app-inside-a-wordpress-page-or-post-4c7d38181b3d
https://zeph.co/disable-code-splitting-create-react-app

# Version Information
## 1.0.2
* CSS updates
* Bootstrap removed
* Error catching code implemented
* Doc type limited to .docx files
* Fixed global mentions bug

## 1.0.1
* Added Marriott Bonvoy
* Global Mentions changed to still have the 1st mention but all trademarks are removed
* Body sections can now also be identified by 'Body Copy:'
* Partner data update
* Increased file submission security

## 1.0
Versioning Tool functionality finished and posted to RN.com