import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer';
import '@react-pdf-viewer/viewer/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import pdfFile from './Krzysztof Truszkowski.pdf';

const CV = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <div className="cv-container">
      {/* ... (your existing CV content) */}
      <div className="cv-section">
        <h2>Curriculum Vitae</h2>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfFile} />
        </Worker>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
      {/* ... (rest of your CV content) */}
    </div>
  );
};

export default CV;