# Make your own HashMap: BSM dictionary
Objective: Work in a group to create a HashMap.

* Create a HashMap Class with constructor (CC Learn Hash Maps: JavaScript exercise 1) 
* Create a deterministic hash method that takes a `key` as a parameter and returns a compressed index. The hashing algorithms should make use of the ASCII codes of the key’s characters.  (hashing algorithm: CC Learn Hash Maps: JavaScript exercise 2, compression: CC Learn Hash Maps: JavaScript exercise 3)
* Create an `assign` method, which will handle the logic needed to take in a key value pair and store the value at an index determined by the hash algorithm. (CC Learn Hash Maps: JavaScript exercise 4)
* Create a `retrieve` method to retrieve the values you will be storing. (CC Learn Hash Maps: JavaScript exercise 5)

_Hint: Use the steps in the Codecademy lessons referenced above to find step-by-step instructions on how to complete each requirement._

[Link to Codecademy: Learn Hash Maps: JavaScript] (https://www.codecademy.com/paths/pass-the-technical-interview-with-javascript/tracks/hash-maps-js/modules/hash-maps-js/lessons/learn-hash-maps-javascript)

**Once complete, assign a couple of the Generation BSM’s to your HashMap as keys and your own description of the BSM as the value.**



## Part 1 - Clone the project

* Begin by _forking_ this project into a personal repository.
   * To do this, click the `Fork` button located at the top right of this page.
* Navigate to your github profile to find the _newly forked repository_.
* Clone the repository from **your account** into the directory on your computer that you use to keep your projects (ex. `dev` directory).
* Open the newly cloned project in a code editor (ex. Visual Studio Code).

### Part 2 - Edit the _cloned_ project

* from a text editor (i.e. - Visual Studio Code), select:
  * `File` > `Add Folder to WorkSpace`
    * Select the directory you use to store your projects (ex. `dev` directory) 
    * From the text editor,in the directory you use to store your projects (ex. `dev` directory), locate the newly cloned project
    * Expand the project from the _project explorer (may just be called `explorer`)
    * Modify the appropriate files to complete the assignment.
    

### Part 3 - _Pushing_ new changes to repository

* From a _terminal_ navigate to the root directory of the _cloned_ project.
* From the root directory of the project, execute the following commands:
    * `git add .`
        * Add all files in current directory to the staging area       
    * `git commit -m 'I have made an edit to a file!'`
        * Save all staged changes to local repository
    * `git push -u origin main`
        * Push changes from local repository to remote repository

### Part 4 - Submitting assignment

* From the browser, navigate to the _forked_ project from **your** Github account.
* Click the `Pull Requests` tab.
* Select `New Pull Request`