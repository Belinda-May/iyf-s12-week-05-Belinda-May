
// ============================================
// TASK 9.1: SELECTING ELEMENTS
// ============================================

// 1. getElementById
const header = document.getElementById("main-header");
console.log("Header:", header);

// 2. getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("Content elements:", contents);

// 3. getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs:", paragraphs);

// 4. querySelector
const firstLink = document.querySelector(".nav-link");
console.log("First link:", firstLink);

// 5. querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("All links:", allLinks);


// ============================================
// TASK 9.1: PRACTICE QUESTIONS
// ============================================

// 1. Select the h1 element
const heading = document.querySelector("h1");
console.log("Heading:", heading);

// 2. Select all elements with class content
const allContent = document.querySelectorAll(".content");
console.log("All content:", allContent);

// 3. Select the contact form
const contactForm = document.querySelector("#contact-form");
console.log("Contact form:", contactForm);

// 4. Select the email input
const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

// 5. Select all list items in the navigation
const navItems = document.querySelectorAll(".nav-list li");
console.log("Navigation items:", navItems);

// 6. Select the first navigation link
const firstNavLink = document.querySelector(".nav-link");
console.log("First navigation link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = document.querySelector("footer p");
console.log("Last paragraph:", lastParagraph);

// ============================================
// TASK 9.2: TRAVERSING THE DOM
// ============================================

const nav = document.querySelector("nav");

// 1. Select the header, then navigate to nav
const mainHeader = document.querySelector("#main-header");
console.log("Nav inside header:", mainHeader.querySelector("nav"));

// 2. Select first nav link, then get its parent li
const firstNavigationLink = document.querySelector(".nav-link");
console.log("Parent list item:", firstNavigationLink.parentElement);

// 3. Select article, then get its next sibling
const article = document.querySelector("article");
console.log("Next sibling:", article.nextElementSibling);

// 4. Select ul, then get all child li elements
const navigationList = document.querySelector(".nav-list");
console.log("List children:", navigationList.children);

// 5. Start from footer and navigate up to body
const pageFooter = document.querySelector("footer");
console.log("Footer parent:", pageFooter.parentElement);
console.log("Footer grandparent:", pageFooter.parentElement.parentElement);
console.log("Body:", pageFooter.parentElement.parentElement.parentElement);

// ============================================
// TASK 9.3: MODIFYING CONTENT
// ============================================

// EXERCISE 1: TEXT CONTENT

const practiceHeading = document.querySelector("h1");

console.log("Text content:", practiceHeading.textContent);
console.log("Inner text:", practiceHeading.innerText);

// Change heading text
practiceHeading.textContent = "Learning DOM Manipulation";


// EXERCISE 2: HTML CONTENT

const practiceArticle = document.querySelector("article");

console.log("Article HTML:", practiceArticle.innerHTML);

// Demonstrate safe text insertion
const userInput = "<b>hi</b>";

const safeParagraph = document.createElement("p");
safeParagraph.textContent = userInput;
practiceArticle.appendChild(safeParagraph);


// EXERCISE 3: ATTRIBUTES

const practiceLink = document.querySelector(".nav-link");

// Get attribute
console.log("Link href:", practiceLink.getAttribute("href"));

// Set attribute
practiceLink.setAttribute("href", "https://developer.mozilla.org");

// Check attribute
console.log("Has target:", practiceLink.hasAttribute("target"));

// Remove attribute
practiceLink.removeAttribute("target");

// Data attributes
practiceLink.dataset.category = "navigation";
console.log("Category:", practiceLink.dataset.category);


// EXERCISE 4: STYLES USING CLASSES

const practiceContainer = document.querySelector(".container");

practiceContainer.classList.add("highlight");
practiceContainer.classList.remove("highlight");
practiceContainer.classList.toggle("highlight");

// ============================================
// TASK 9.4: ADDING AND REMOVING ELEMENTS
// ============================================

// EXERCISE 1: CREATE ELEMENTS

const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.classList.add("content", "highlight");

const articleSection = document.querySelector("article");

articleSection.appendChild(newParagraph);


// Insert before another element
const firstParagraph = articleSection.querySelector("p");

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "Inserted before the first paragraph.";

articleSection.insertBefore(anotherParagraph, firstParagraph);


// EXERCISE 2: REMOVE ELEMENTS

// Create a temporary footer so we can demonstrate removal
const temporaryFooter = document.createElement("footer");
temporaryFooter.textContent = "Temporary footer";
document.body.appendChild(temporaryFooter);

temporaryFooter.remove();


// Remove the last navigation item
const navList = document.querySelector(".nav-list");
const lastNavItem = navList.lastElementChild;

lastNavItem.remove();


// EXERCISE 3: CLONING ELEMENTS

const originalNavItem = document.querySelector(".nav-link").parentElement;

const clonedNavItem = originalNavItem.cloneNode(true);

clonedNavItem.querySelector("a").textContent = "New Link";

navList.appendChild(clonedNavItem);


// BUILD: DYNAMIC NAVIGATION FUNCTION

function addNavItem(text, href) {

    const li = document.createElement("li");

    const link = document.createElement("a");

    link.classList.add("nav-link");
    link.textContent = text;
    link.href = href;

    li.appendChild(link);

    navList.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// ============================================
// TASK 10.1: EVENT LISTENERS
// ============================================

const clickButton = document.querySelector("#click-button");
const clickCount = document.querySelector("#click-count");

let count = 0;

// Listen for button clicks
clickButton.addEventListener("click", function() {

    count++;

    clickCount.textContent = count;

    console.log("Button clicked:", count);

});

// ============================================
// TASK 10.2: EVENT OBJECT
// ============================================

const keyboardInput = document.querySelector("#keyboard-input");
const keyboardOutput = document.querySelector("#keyboard-output");

const mouseButton = document.querySelector("#mouse-button");

// Listen for typing
keyboardInput.addEventListener("input", function(event) {

    keyboardOutput.textContent = "You typed: " + event.target.value;

    console.log("Input value:", event.target.value);

});

// Listen for keyboard presses
keyboardInput.addEventListener("keydown", function(event) {

    console.log("Key pressed:", event.key);

    if (event.key === "Enter") {
        keyboardOutput.textContent = "You pressed Enter!";
    }

});

// Listen for mouse clicks
mouseButton.addEventListener("click", function(event) {

    console.log("Clicked element:", event.target);

    mouseButton.textContent = "You clicked me!";

});

// Listen for mouse hover
mouseButton.addEventListener("mouseover", function() {

    console.log("Mouse entered the button!");

});

// ============================================
// TASK 10.3: EVENT BUBBLING AND DELEGATION
// ============================================

const delegationList = document.querySelector("#delegation-list");

const addListItemButton = document.querySelector("#add-list-item");

const delegationOutput = document.querySelector("#delegation-output");

// ONE listener on the parent list
delegationList.addEventListener("click", function(event) {

    // Check whether an individual list item was clicked
    if (event.target.tagName === "LI") {

        delegationOutput.textContent =
            "You selected: " + event.target.textContent;

        console.log("Selected item:", event.target.textContent);

    }

});

// Add new items dynamically
let itemNumber = 4;

addListItemButton.addEventListener("click", function() {

    const newItem = document.createElement("li");

    newItem.textContent = "Item " + itemNumber;

    delegationList.appendChild(newItem);

    itemNumber++;

});

// ============================================
// TASK 10.4: FORM HANDLING AND VALIDATION
// ============================================

const practiceForm = document.querySelector("#practice-form");

const practiceName = document.querySelector("#practice-name");

const practiceEmail = document.querySelector("#practice-email");

const formMessage = document.querySelector("#form-message");

practiceForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get and clean input values
    const name = practiceName.value.trim();
    const email = practiceEmail.value.trim();

    // Check for empty fields
    if (name === "" || email === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;
    }

    // Check email format
    if (!practiceEmail.checkValidity()) {

        formMessage.textContent = "Please enter a valid email address.";

        return;
    }

    // Display success message
    formMessage.textContent =
        "Thank you, " + name + "! Your form was submitted successfully.";

    console.log("Name:", name);
    console.log("Email:", email);

    // Clear form
    practiceForm.reset();

});
