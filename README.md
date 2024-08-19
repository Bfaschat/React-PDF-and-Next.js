# React-PDF and Next.js Example

This project demonstrates how to integrate `react-pdf` with `Next.js` to display and download PDF files. It uses React hooks and the `react-pdf` library to handle PDF rendering and interactions.
 
## Features

- Displays PDF documents using `react-pdf`
- Dynamically updates the number of pages and renders them
- Allows users to download the PDF
- Responsive design with PDF rendering adjusted based on container size

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Next.js**: React framework for server-rendered applications
- **react-pdf**: PDF viewer component for React
- **pdfjs-dist**: PDF.js library for rendering PDFs

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Bfaschat/react-pdf-next-pages-demo.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd react-pdf-next-pages-demo
   ```

3. **Install Dependencies**

   ```bash
   yarn install
   ```

## Running the Project

### Development Mode

To start the project in development mode, which enables hot reloading, run:

```bash
yarn run dev
```

This will start the Next.js development server and you can view the application in your browser at `http://localhost:3000`.

### Production Mode

To build and start the project in production mode, follow these steps:

1. **Build the Project**

   ```bash
   yarn run build
   ```

2. **Start the Production Server**

   ```bash
   yarn start
   ```

The application will be served at `http://localhost:3000` in production mode.

## Usage

- Open the application in your browser.
- Use the "Download PDF" button to download the sample PDF file.
- The PDF file will be displayed on the page, and you can view its pages.

## Code Overview

- **`pages/_app.tsx`**: Initializes the Next.js application and applies global settings and styles.
- **`pages/index.tsx`**: Main page component that sets up and displays the PDF viewer.
- **`pages/Sample.tsx`**: Component for rendering and interacting with the PDF using `react-pdf`.
- **`public/sample.pdf`**: Sample PDF file used for demonstrating the PDF viewer.
- **`pages/Sample.css`**: Global stylesheet for project-wide styles and layout adjustments.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/Bfaschat/react-pdf-next-pages-demo).

## Contact

For any questions, please contact [Ningmua Bruno](mailto:bfaschats@gmail.com).
