# Project Details

- **Project**: WeekDay Job Search
- **Project URL**: [https://weekday-jobsearch-av.vercel.app/](https://weekday-jobsearch-av.vercel.app/)

## Technology Stack
- ReactJs
- Redux toolkit
- CSS
- Material UI

## Functionality

- The platform display job listings as cards with the following information:
  - Job title
  - Company name
  - Location
  - Job description (limited with an option to expand)
  - Experience required
  - Apply button/link

- Filters should allowing users to refine job listings based on:
  - Min experience
  - Company name
  - Location
  - Remote/on-site
  - Tech stack
  - Role
  - Min base pay

- Made Filter Data dynamic based on companies data.
- Implemented infinite scroll to load more job listings as the user scrolls down the page.
- Ensured responsive design across different screen sizes, including mobile devices.
- Added Scroll to top button for Smooth UX.
- Hosted on Vercel.


## Vite Project Setup Guide

This repository contains a Vite project that you can run locally. Follow the instructions below to set up and run the application on your machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (Node Package Manager) or yarn

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Ayushi20-19/weekday-jobsearch.git
    ```

2. Navigate into the project directory:

    ```bash
    cd weekday-jobsearch
    ```

3. Install dependencies using npm or yarn:

    ```bash
    npm install
    # or
    yarn
    ```

## Running the Application

Once you've installed the dependencies, you can run the application locally. Follow these steps:

1. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Additional Information

### File Structure

The project has the following structure:
<img width="876" alt="Screenshot 2024-05-06 at 10 13 53 PM" src="https://github.com/Ayushi20-19/weekday-jobsearch/assets/50084909/94b0c835-5109-42d9-a02d-d2ce7ebc0d2e">

- **src**: Contains the application source code.
  - **components**: Contains the UI components.
    - **JobCard**: Contains components related to job cards.
    - **JobFilter**: Contains components related to job filtering.
  - **redux**: Contains Redux related files.
    - **services**: Contains service files.
    - **slices**: Contains Redux slice files.
    - **store.js**: Redux store configuration.
  - **utils**: Contains utility files.
    - **app.js**: Utility functions used across the application.
- **package.json**: Contains project metadata and dependencies.

## UI 

<img width="1397" alt="Screenshot 2024-05-06 at 11 06 59 PM" src="https://github.com/Ayushi20-19/weekday-jobsearch/assets/50084909/cd73da5c-2f3b-4bae-ae8e-1cf272735202">

### with filters

<img width="1264" alt="Screenshot 2024-05-06 at 10 32 09 PM" src="https://github.com/Ayushi20-19/weekday-jobsearch/assets/50084909/1e8b4c0e-9c10-41d1-8c60-2f847ca5f81f">

### Responsive design

<img width="356" alt="Screenshot 2024-05-06 at 10 34 44 PM" src="https://github.com/Ayushi20-19/weekday-jobsearch/assets/50084909/f0c9f74f-5928-4566-aa43-119bdd9d5473">







