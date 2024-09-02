<h1>TheCarDealerApp</h1>

<h4>This project is a Car Filter Application built with Next.js and React. The application allows users to filter vehicles by make, model, and type and view the filtered results on a separate page. Below is an overview of how the code is organized and how each part works.</h4>

* Table of Contents
* Technologies Used
* Project Structure
* Features
* Getting Started
* Components Explanation
* Usage<br>
<h2>Technologies Used</h2><br>
* Next.js: Framework used for building the web application.<br>
* React: JavaScript library used for building user interfaces.<br>
* TypeScript: For type safety and improved code quality.<br>
* Tailwind CSS: For styling the components.<br>
* API: Fetches data from NHTSA API for vehicle makes and models.
<br>
<h2>Project Structure</h2>
* pages/: Contains the main pages of the application.<br>
    filter.tsx: The main filter page where users can select vehicle make, model, and type.<br>
    result/[makeId]/[model].tsx: Displays the results based on the user’s selections.<br>
    layout.tsx: Root layout with the Navbar and Footer.<br>
* components/: Contains reusable components.
    Dropdown.tsx: Dropdown component used for selecting vehicle make and model.<br>
    Navbar.tsx: Navigation bar with links to different pages.<br>
    Footer.tsx: Footer section with links and copyrights.<br>
<h2>Features</h2>
* Filter Vehicles: Users can filter vehicles by selecting a make, model, and type from dropdown menus.<br>
* Dynamic Routing: Selected values navigate users to the results page, showing details based on their choices.<br>
* Responsive Design: Uses Tailwind CSS to ensure the application looks good on all devices.<br>

<h2>Components Explanation</h2>
1. ResultPage.tsx
Displays the filtered results based on the user’s selected vehicle make and model. It uses state management to handle the displayed data.
<br>
2. FilterPage.tsx
This page allows users to select vehicle make and model from dropdowns. It fetches data from external APIs and dynamically updates the options based on user selections. The "Next" button routes users to the results page.
<br>
3. Dropdown.tsx
Reusable dropdown component that renders a list of options and handles selection changes.
<br>
4. Navbar.tsx & Footer.tsx
Navbar: Provides navigation links to the Home, Filter, and About pages.
Footer: Contains company information and additional links like Privacy Policy and Contact Us.<br>
<h2>Usage</h2>
 * Navigate to the Filter page from the Navbar.<br>
 * Use the dropdown menus to select a vehicle make, model, and type.<br>
 * Click the Next button to view the results based on your selections.<br>
 * The results page will display cars matching the selected criteria.
