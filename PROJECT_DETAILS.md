# PMG Cinema Project Overview

## 1. Project name
PMG (Premium Movies Gallery) is a movie-themed web application built with React and Vite. The project simulates a cinema website where users can browse movies, view details, and book seats for selected films.

## 2. Project purpose
The application acts as a front-end movie portal for a cinema brand. It provides a modern interface for:

- user login and sign-up screens,
- browsing now-showing and upcoming movies,
- viewing movie details,
- selecting and booking cinema seats,
- navigating through different cinema categories.

The project is designed as a user-facing prototype and showcases responsive UI, animated sections, and movie discovery interactions.

## 3. Main technologies used

### Frontend
- React 19
- Vite
- JavaScript
- React Router DOM
- Bootstrap
- React Bootstrap

### Styling
- Custom CSS files in the src/css folder
- Bootstrap styling for layout and components

### Data and API integration
- Axios
- The Movie Database (TMDb) API for retrieving movies and genre information

### Deployment
- GitHub Pages
- gh-pages package

## 4. Project architecture
The project is organized as a React single-page application with routed pages. The main structure is:

- src/App.jsx: route definitions and app-level router
- src/pages/: page-level components
- src/components/: reusable components such as Navbar, footer, and seat selection
- src/hooks/: custom hooks such as loading behavior
- src/css/: styling per page and feature
- src/assets/: images and branding assets

## 5. Application flow
The app starts with a login screen.

### Route flow
- /login: user authentication page
- /dashboard: main homepage with featured movie cards
- /nowshowing: current movie list with details panel
- /comingsoon: upcoming movie section
- /arabic: Arabic movie category page
- /hits: international hits category page
- /about: about the cinema
- /book: seat booking page for a selected movie

The app uses HashRouter, which means the routes are generated with a hash-based URL structure for easier deployment in static hosting environments.

## 6. Key features

### 6.1 Login and sign-up experience
The login screen includes:

- branded cinema logo,
- animated box expansion on hover,
- toggle login/signup states,
- password visibility toggles,
- loading screen on initial app entry.

This is a polished front-end experience created to look like a premium cinema portal.

### 6.2 Dashboard home screen
The Dashboard page displays a set of movies fetched from TMDb's now-playing endpoint. It includes:

- featured movie cards,
- flip animation on card selection,
- carousel-like slider navigation,
- rating and overview display,
- Book Now interaction.

### 6.3 Now Showing page
This page loads a list of currently playing movies and provides:

- poster gallery,
- large detail panel for selected movie,
- movie title, rating, genres, and overview,
- Book Now button,
- slider navigation control for browsing posters.

### 6.4 Booking page
The booking flow is implemented in the BookingPage component. It:

- receives selected movie data through route state,
- allows seat selection,
- shows selected seat list,
- calculates ticket total,
- confirms booking with a JavaScript alert.

The seat layout is managed by the SeatSelection component, which renders a grid of A-F rows and 1-12 columns. Seats are categorized as:

- available,
- selected,
- booked.

### 6.5 Navigation and layout
A shared layout wraps the page content with:

- Navbar,
- dynamic page content via Outlet,
- Footer.

The Navbar includes navigation links and a category dropdown for film types.

## 7. Important component breakdown

### App.jsx
This is the main application root. It defines the router, default redirect, and all route mappings.

### Layout.jsx
This wraps all authenticated pages with the navbar and footer so repeated layout elements are shared across pages.

### Navbar.jsx
This component provides the top menu, brand logo, search box, and navigation links to the different sections of the application.

### login_page.jsx
This page handles the login/sign-up UI and includes the animated brand panel and password toggles.

### Dashboard.jsx
This page fetches films from TMDb and creates the interactive movie slider and cards.

### NowShowing.jsx
This page handles movie browsing and details selection with a horizontal poster slider.

### BookingPage.jsx
This page is the booking interface for selected movies and selected seats.

### SeatSelection.jsx
This component renders the cinema seat map and handles seat-click interactions.

### footer.jsx
This is the global footer displayed at the bottom of each routed page.

### useLoadingScreen.js
This custom hook controls the fake loading screen behavior, adds animated dot text, and fades out the loader after a set duration.

## 8. Data flow and API integration
The project uses the TMDb API to fetch movie information. Two main requests are used:

1. Get now-playing movies:
   - Endpoint: /movie/now_playing
   - Used in Dashboard and NowShowing

2. Get genre list:
   - Endpoint: /genre/movie/list
   - Used in NowShowing to map each movie's genre IDs to readable names

This data is loaded asynchronously with axios and stored in React state.

## 9. CSS and visual style
The project uses custom CSS for each major screen, including:

- App.css
- dashboard.css
- nowshowing.css
- nav.css
- BookingPage.css
- style.css
- about.css
- loading.css

The visual design is cinematic and dark-themed, with gold, black, and red accents to match a premium movie brand identity.

## 10. Current project status and implementation notes
The app is a front-end prototype rather than a full production-ready cinema system. Some current characteristics include:

- login and sign-up forms are UI-driven only; no backend authentication exists,
- booking is simulated with front-end confirmation alerts,
- seat availability is static, not connected to a database,
- some pages are more design-focused than fully functional,
- many features are created to demonstrate UI and UX rather than real business logic.

## 11. Setup and running the project
From the root project directory, run:

1. npm install
2. npm run dev

Production build:

- npm run build

Deployment to GitHub Pages:

- npm run deploy

The project is configured with a homepage field and gh-pages deployment script.

## 12. Summary
PMG is a stylish React cinema web app that focuses on cinematic branding, movie browsing, and seat booking interactions. It is a visually rich frontend prototype built with modern React patterns, static routing, and API-based movie data from TMDb.

It demonstrates a premium movie experience with a polished interface, interactive navigation, and a realistic booking flow while remaining intentionally lightweight and front-end focused.
