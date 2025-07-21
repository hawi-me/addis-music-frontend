# addis-music-frontend
A full-stack web application for managing a list of songs, built with a React frontend and integrated with the JSONPlaceholder API for CRUD operations. The project uses a custom Webpack configuration, Redux Toolkit for state management, Redux-Saga for handling API side effects, and Emotion for responsive styling.
Features

Paginated Song List: Displays songs with title, artist, album, and year, fetched from the JSONPlaceholder API.
CRUD Operations: Create, read, update, and delete songs via API calls.
State Management: Uses Redux Toolkit and Redux-Saga for global state and asynchronous operations.
Responsive Styling: Styled with Emotion for a clean, responsive UI.
Custom Webpack: Manually configured Webpack with support for JavaScript, JSX, CSS, and images.

Setup Instructions
Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)
Git

Installation

Clone the Repository:
git clone <repository-url>
cd song-manager


Install Dependencies:
npm install



Run the Development Server:
npm start

The app will open automatically at http://localhost:3000.

Build for Production:
npm run build

The output will be in the dist/ folder.




Webpack Configuration
The webpack.config.js is manually configured to meet the project requirements:

Entry/Output:
Entry: src/index.js
Output: dist/bundle.[contenthash].js with cache-busting hashes and automatic cleanup of the dist/ folder.


Module Rules:
babel-loader: Transpiles JavaScript and JSX using @babel/preset-env and @babel/preset-react.
style-loader and css-loader: Handles CSS for Emotion-based styling.
Asset module: Processes images (PNG, JPG, SVG, etc.) and outputs them to dist/assets/.


Plugins:
HtmlWebpackPlugin: Generates index.html from public/index.html.
Dotenv: Injects environment variables (e.g., API_BASE_URL) from the .env file.


Optimization:
Code splitting enabled via splitChunks for smaller bundle sizes.


Development Server:
Serves files from dist/ on port 3000 with auto-open and compression enabled.


The API responses are transformed to include song attributes (title, artist, album, year) in the Redux store.
AI Usage


Manual Testing: Running the app locally, performing CRUD operations, and checking pagination.
Debugging: Using browser DevTools to inspect API calls and Redux state.


Technologies Used

Frontend: React (functional components, hooks: useState, useEffect), Redux Toolkit, Redux-Saga, Emotion.
Build Tool: Webpack (custom configuration).
Testing: Jest, React Testing Library.
API: JSONPlaceholder (mock backend).
Dependencies:
React: ^18.2.0
Redux Toolkit: ^1.9.5
Redux-Saga: ^1.2.3
Emotion: @emotion/react ^11.11.1, @emotion/styled ^11.11.0
Axios: ^1.6.0
Webpack: ^5.88.2, plus plugins (html-webpack-plugin, dotenv-webpack)



Project Structure
song-manager/
├── src/
│   ├── components/
│   │   ├── SongList.js
│   │   ├── SongForm.js
│   │   └── Pagination.js
│   ├── redux/
│   │   ├── songsSlice.js
│   │   ├── sagas.js
│   │   └── store.js
│   ├── styles/
│   │   └── theme.js
│   ├── tests/
│   │   └── SongList.test.js
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── .babelrc
├── .env
├── package.json
├── webpack.config.js
└── README.md





