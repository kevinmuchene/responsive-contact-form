### ADA-COMPLIANT CONTACT FORM
This project is a responsive, ADA-compliant web application that allows users to input their personal information, select their country of birth from a dynamically populated dropdown, and view a confirmation message upon submission. It was built as a time-limited challenge, focusing on clean code, accessibility, and user-friendliness.

## Features
**Responsive Design**: The layout is optimized for both desktop and mobile screens using Tailwind CSS.

**Dynamic Data Fetching**: The country dropdown is populated using the REST Countries API.

**Form Validation**: Uses Formik and Yup for robust validation of user inputs.

**Accessibility**: Fully adheres to WCAG 2.1 guidelines for color contrast etc

**Error Handling**: Gracefully manages API errors and provides feedback to users.

**Modern Stack**: Built with React, TypeScript, Axios, Formik, Yup, and Tailwind CSS for styling.

## Installation

1. **Clone the Respository**
   
   git clone https://github.com/kevinmuchene/responsive-contact-form

   cd responsive-contact-form
   
3. **Install Dependencies**
   Ensure you have Node.js installed, then run:

   npm install
   
5. **Start the development server**

   npm start

## My Approach

**UI and Responsiveness**

 Used Tailwind CSS for rapid and responsive UI development. Tailwind provides utility-first classes, ensuring a consistent design across all devices with minimal custom CSS.

**Data Fetching**
Axios was used for API calls within a custom hook useGetCountriesData.
Axios simplifies HTTP requests with built-in error handling and a cleaner syntax compared to Fetch.

**Form Validation**
Formik was paired with Yup for form state management and schema-based validation.
These libraries integrate seamlessly with React, reducing boilerplate and enhancing validation capabilities.

**Accessibility**
 Ensured all inputs are labeled correctly, and the form is navigable via keyboard.
 Accessibility is critical for compliance with WCAG 2.1 and creating an inclusive user experience.
 
**Error Handling**
 Implemented error states for API calls and form validation feedback.
 A user-friendly application must gracefully handle failures and provide clear feedback.

# Challenges Faced
1. Time Constraints
The project was developed within a limited time as I saw email a little bit later in the day, necessitating efficient decision-making and prioritization.
2. ADA Compliance
Ensuring compliance required thorough testing.
