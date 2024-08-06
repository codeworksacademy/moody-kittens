<div class="text-center">
	<img src="https://codeworks.blob.core.windows.net/public/assets/img/projects/moody-logo.png" alt="moody kittens" height="250">
</div>

> Everyone on the internet should have a experience the joys of owning a cat!

## Goals
In this application, you will build out a fun application that allows users to experience the joys of owning a cat. This app is intended to ensure you, as a student, have learned the fundamental concepts around web development, successfully graduating you out of the beginner's bracket.

Students that successfully build this application and meet all of the requirements will receive a `$200 discount` from their tuition when they join the CodeWorks Immersive Fullstack course. 

## The Setup
The basic design and layout for this app have been mocked out, and the names of the JavaScript functions have all been created. As the developer, you will need to work across HTML, CSS, and JavaScript to complete the requirements. In the code, you will see several comments intended to be used as help and guidelines on what needs to be accomplished. Once you have achieved the requirements of the app, use GitHub to host the page live.

## Build Suggestions

### Initial Setup
1. **Set Up Project Structure:**
   - Create a new directory for your project.
   - Inside the directory, create `index.html`, `style.css`, and `script.js` files.
   - Link the CSS and JavaScript files to the HTML file.

### HTML Structure
2. **Create the Form:**
   - Inside `index.html`, create a form with an input field for the kitten's name and a submit button.
   - Add placeholders and labels for user-friendly input.

3. **Add Placeholder for Kitten List:**
   - Create a section in the HTML where the list of kittens will be displayed.

### CSS Styling
4. **Style the Form and Kitten List:**
   - Use CSS to style the form and the list of kittens.
   - Apply a custom Google Font to the entire page.
   - Add specific styles that will change based on the kitten's mood (e.g., different background colors or images for different moods).

### JavaScript Functionality
5. **Handle Form Submission:**
   - Prevent the default form submission behavior to avoid page reload.
   - Retrieve the value from the form input.
   - Create a unique ID for each new kitten.
   - Add the new kitten to an array of kittens.
   - Clear the form input after submission.
   - Save the updated kittens list to local storage.
   - Call a function to update the displayed list of kittens.

6. **Draw the Kittens List:**
   - Create a function that reads the kittens list from local storage.
   - Loop through the array and create HTML elements for each kitten.
   - Append the kitten elements to the placeholder section in the HTML.
   - Apply mood-based styles to each kitten.

7. **Persist Data on Page Refresh:**
   - On page load, retrieve the kittens list from local storage.
   - Call the function to draw the kittens list with the retrieved data.

### Additional Features
8. **Manage Kitten Mood:**
   - Add buttons to each kitten's element that allow users to change the kitten's mood.
   - Create event handlers for these buttons to update the mood in the kittens array and local storage.
   - Re-draw the kittens list after updating a kitten's mood.

9. **Delete Kittens:**
   - Add a delete button to each kitten's element.
   - Create an event handler to remove the kitten from the array and local storage.
   - Re-draw the kittens list after deletion.

### Final Touches
10. **Validation:**
    - Ensure that a kitten with the same name cannot be added more than once.
    - Provide user feedback if a duplicate name is entered.

11. **Testing and Debugging:**
    - Test the app in different browsers to ensure compatibility.
    - Debug any issues that arise during development.

### Deployment
12. **Host on GitHub Pages:**
    - Push the code to a GitHub repository.
    - Use GitHub Pages to host the live version of your application.

## Requirements
- [ ] Users must have a form where they enter in at minimum the name of a kitten 
- [ ] A Kitten's name and mood must be visible for the user 
- [ ] A custom Google Font must be added 
- [ ] A Kitten's mood must affect visually the appearance of the kitten 
- [ ] Add Kitten form clears when submitted 
- [ ] Add Kitten form submission does not reload the page 
- [ ] Kittens are stored in local storage 
- [ ] Kittens can be deleted 
- [ ] Kittens have at least two buttons that affect the kitten's mood in different ways 
- [ ] Kitten's and their mood persist through page reloads 
- [ ] Kitten's with the same name as an already present kitten cannot be added 
- [ ] Kittens are visible when the page reloads
