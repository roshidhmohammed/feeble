# Feeble Assignment - Frontend
This repository contains details about the project overview, features, technologies used, and Application Architecture.

## Deployment URL
 - Live Link - https://feeble-three.vercel.app/

## Project Overview
 - This application aims to create animated elements with an interactive and responsive UI across multiple devices.


 ## Technologies Used
 - **React** – Frontend library for building the UI.
 - **TailwindCSS** – Utility-first CSS framework for styling.
 - **React Icons** – For consistent icon usage across the application.
 - **React Router DOM** – For handling application routing.
 - **GSAP** - Used for adding interactive and creative animations.

## Application Architecture
The application architecture and codebase are organized into components, common components, constants, pages, and utils to ensure the project is extensible, maintainable, and readable. 

- This entire project and code base are following the SOLID, DRY, KISS principles to ensure extensibility, reusability, maintainability, and readability.
 
 - **components/** – The entire UI is divided into different sections and the codebase for each section is defined in the components folder, excluding commonly used components such as Button, Header, and others.
 - **common/** – This folder contains all reusable UI component such as buttons, header, footer, etc...
 - **utils/constants/** – This files Stores hardcoded constants as well as images and logo imports.
 - **Pages** – The UI for each page is defined here, making it easy to extend the application by adding new pages.
 - **Index.css** - All custom CSS properties are defined here.
 
