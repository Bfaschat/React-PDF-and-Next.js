import { useCallback, useState, useEffect } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import Head from "next/head";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export const applyPromisePolyfill = () => {
  if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== "undefined") {
      // We are in the browser environment
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    } else if (typeof global !== "undefined") {
      // We are in the server (Node.js) environment
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      global.Promise.withResolvers = function () {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return { promise, resolve, reject };
      };
    }
  }
};
//import 'pdfjs-dist/legacy/build/pdf.worker.min.mjs';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;


const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};
const maxWidth = 800;

export default function PdfViewer() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    applyPromisePolyfill();
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const [file, setFile] = useState('./sample.pdf');
  const [numPages, setNumPages] = useState(null);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);

  const onResize = useCallback((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onFileChange(event) {
    const { files } = event.target;
    const nextFile = files?.[0];

    if (nextFile) {
      setFile(nextFile);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
      <>
      <Head>
      <title>React-PDF V9.0.1 By Ningmua Bruno</title>
        
      </Head>
      <div className="Bfaschat">
      <header>
        <h1>React-PDF V9.0.1 By Ningmua Bruno</h1>
      </header>
      <div className="Bfaschat__container">
        <div className="Bfaschat__container__load">
          {/* Download Button */}
          <button className="download-button" onClick={() => {
            const link = document.createElement('a');
            link.href = './sample.pdf'; // Replace with your PDF path
            link.download = 'sample.pdf'; // Download filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } }>
            Download PDF
          </button>
        </div>
        <div className="Bfaschat__container__document scrollbar-custom" ref={setContainerRef}>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth} />
            ))}
          </Document>
        </div>
      </div>
    </div></>
  );
}