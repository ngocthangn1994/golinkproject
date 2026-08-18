# GoLink

GoLink is a full-stack URL shortcut platform and browser extension that allows users to save keywords for websites and quickly navigate to them.

For example, after saving:

```text
amazon -> https://www.amazon.com
```

Users can type:

```text
go amazon
```

in the Chrome address bar and GoLink will redirect them to Amazon.

## Features

- Create keyword-based URL shortcuts
- View saved links
- Delete saved links
- Resolve keywords to full URLs
- Chrome/Edge browser extension
- Omnibox support using the `go` keyword
- React popup interface
- REST API backend
- MongoDB database

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose

### Browser Extension

- React
- TypeScript
- Chrome Extension Manifest V3
- Chrome Omnibox API

## Project Structure

```text
golink/
├── backend/      # Node.js and Express REST API
├── frontend/     # React web application
├── extension/    # Chrome/Edge browser extension
└── README.md
```

## How GoLink Works

1. User creates a keyword and destination URL.

Example:

```text
Keyword: amazon
URL: https://www.amazon.com
```

2. The link is stored in MongoDB.

3. The user types the following in the browser address bar:

```text
go amazon
```

4. The browser extension sends a request to the GoLink backend.

```text
GET /api/v1/links/resolve/amazon
```

5. The backend returns the saved URL.

6. The extension redirects the current browser tab to:

```text
https://www.amazon.com
```

## Running the Project Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Browser Extension

```bash
cd extension
npm install
npm run build
```

Then open Chrome:

```text
chrome://extensions
```

Enable **Developer mode**, click **Load unpacked**, and select the extension's `dist` folder.

## Example

Create a shortcut:

```text
amazon -> https://www.amazon.com
```

Then type in Chrome:

```text
go
```

Press `Tab` or `Space`, enter:

```text
amazon
```

and press `Enter`.

The browser will open Amazon.

## Author

Ngoc Thang Nguyen

## Status

GoLink is currently under development.
