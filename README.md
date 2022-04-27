# Project HearATale Narrative of the life of Frederick Douglas
Project HearATale aims to create a web based application designed to help below average literacy level high school students improve in their reading comprehension.
Our team aims to create a web based e-reader through javascript, html, and react that allows the user to read the Narrative of the Life of Frederick Douglas while supported by
an audio reader. To improve on user literacy and comprehension our final deliverable aims to provide user word pronounciation, word definitions, and word quizzes.

# Installation Guide
The following instillation guide provides a brief overview and walkthrough on how the application may be installed on a user device.
Plase note that instillation may require different steps when this application is being hosted onto a server.

### Pre-Requisites
   - NodeJS must be installed and configured before proceeding to use the application. 
   - Use the link for instillation of NodeJS: https://nodejs.org/en/download/ 
   - A detailed help guide for NodeJS configuration can be found at: https://nodejs.org/en/docs/

### Dependencies
   - Two dependecies must be installed for this application to be able to run
   - Both commands can be entered in command prompt or the powershell terminal in the file directory of the application: 
   - ```npm install```
   - ```npm i react-h5-audio-player --force```

### Download Instructions
   - You can download the application files from this github repository or this link: https://github.com/davidsteng/jd-group-1335/download_zip
   - Extract the contents of the zip file into a seperate folder where the application will run from

### Build Instructions
   - No build necessary for this application

### Application Installation
   - Once the application is downloaded, make sure you install the two dependencies in the command promp within the file directory of the app folder

### Run Instructions
   - Once the dependencies have been installed, while remaining in the same directory, run the following command through the terminal: ```npm start```

### Troubleshooting
   - If you run into any issues regarding the dependencies not installing correctly, you can try putting ```--force``` after the two prompts listed above and it should install
   - If ```npm install``` is giving some errors, it is completely normal. The application will still run smoothly, just type in ```npm start```

# Relase Notes

## Version 1.0

### Features
   - Quiz functionality updated to pull answer choices beginning with the same letter as the word quizzed

### Bug Fixes
   - Clicking on words for the first time now correctly plays audio for the word by accessing the AWS for all words currently in the database
   - Target Word user interface updated to increase font size and enhance readability
   - User interface for quiz screen and target word pop up fixed to not include a scroll bar
   - Audio splicing fixed: previously certain sections of the audio were of incorrect length leading to blank audio
   - Page number is now saved so when the user exits the eReader to the background that variable is saved and not re-initialized
   - Added all of the sightwords and target words with seaparated names
   - Reformatted and added to gallery page per client request
   - Fixed formatting and sizing of buttons of the side bar in the eReader

### Known Issues
   - Clicking on a word multiple times will lead to overlap of audio playing
   - Certain words that are in the ebook do not have a related audio file in the directory

## Version 0.4.0

### Features
   - Clicking on the question mark within a target words pop-up screen now opens up the quiz screen
   - The quiz screen provides the user with the definiiton of the word they selected, the correct answer, and options to submit

### Bug Fixes
   - Additional words added to the csv file which contain all words and definitions
   - Word aspect ratio of pages fixed and remaining audio files parsed and uploaded to the deliverable

### Known Issues
   - Clicking on a word in the text should pause the audio reading of the chapter
   - Gold and Silver stars should be correctly formatted onto thee quiz screen instead of overlapping
   - Quiz screen UI can be improved to be more streamlined for user experience

## Version 0.3.0

### Features
   - Clicking on a word for the first time now plays the audio of the word
   - Clicking on a word for the second time within a time fram now opens the pop-up for the word
   - Clicking on a word within the popup now plays the word audio
   - Clicking on a word definition within a popup plays the word definition
   - Audio Slider has been added for traversing through a chapter's audio files
   - Audio files linked to nextpage function - clicking the next page loads the next audio file as well as page text

### Bug Fixes
   - Additional words added to the definitions page
   - Additional code added to differentiate between names from definition words, names no longer show as a a list of derivative words

### Known Issues
   - Words are formatted differently on screens with different aspect ratio - potential fix is to scale ereader width off a factor of the height
   - Clicking on a word in the text should pause the audio reading of the chapter

## Version 0.2.0

### Features
   - Home screen reorganized into two portions: The Narrative of the Life of Frederick Douglas and the background
   - Biography and gallery added to the background portion of the book
   - Words are able to be clicked on and recognized within the text
   - Clicking on words brings up a popup with the word definition
   - Chapter buttons added to map respective chapters for navigation through the novel

### Bug Fixes
   - Image sources changed to correctly link to general folder within src to be properly accessed
   - Changed the font and image sizes to be in respect to a portion of the screen size allowing text to properly load on larger and smaller screens

### Known Issues
   - Not all word definitions are loaded into the system due to late access to Part 1 definitions

## Version 0.1.0

### Features
   - Home screen added to application
   - Preface of novel added
   - Letter from Wendell Phillips added
   - Pages of novel seperated to end on paragraph when possible
   - Side bar selection added to include return to home page and start quiz button

### Bug Fixes
   - Table of Contents removed to be reimplemented on right side of application window
   - Bug regarding buttons not working to jump to chapter start fixed

### Known Issues
   - Clicking on a word in the novel does not properly return word information for loading audio and definition
   - Window and text is scaled to font not percent of screen leading to small text and icons on larger monitors

# Information for Future Implementation

## Audio for Words/Definitions

## Audio per Page + Text Consistency across Different Screen Sizes

## Quiz and Star Data
