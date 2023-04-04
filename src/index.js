import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Sample';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-resources-ko';

GC.Spread.Common.CultureManager.culture("ko-kr");
//GC.spread.Sheets.LicenseKey="라이센스 키";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(<App />);
