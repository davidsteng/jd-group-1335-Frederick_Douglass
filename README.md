# Project HearATale Narrative of the life of Frederick Douglas
Project HearATale aims to create a web based application designed to help below average literacy level high school students improve in their reading comprehension.
Our team aims to create a web based e-reader through javascript, html, and react that allows the user to read the Narrative of the Life of Frederick Douglas while supported by
an audio reader. To improve on user literacy and comprehension our final deliverable aims to provide user word pronounciation, word definitions, and word quizzes.

# Relase Notes

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

## Version 0.4.0

### Features
   - Clicking on the question mark within a target words pop-up screen now opens up the quiz screen
   - The quiz screen provides the user with the definiiton of the word they selected and four words beginning with the same letter as answer options
   - Correct answer provides the user with 1 gold star incorrect answers turn all gold star silver
   - Five gold stars in a row master a word
   - Mastered words cannot lose gold stars even if questions are answered incorrectly

### Bug Fixes
   - Additional words added to the csv file which contain all words and definitions
   - Word aspect ratio of pages fixed and remaining audio files parsed and uploaded to the deliverable

### Known Issues
   - Clicking on a word in the text should pause the audio reading of the chapter
   - Gold and Silver stars should be correctly formatted onto thee quiz screen instead of overlapping
   - Quiz screen UI can be improved to be more streamlined for user experience
