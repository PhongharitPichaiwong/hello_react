import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AtomProductProvider } from './provider/AtomProductProvider';
import { AuthProvider } from './provider/AuthProvider';
import { MikeProductProvider } from './provider/MikeProductProvider';
import { ThemeProvider } from './provider/ThemeProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <MikeProductProvider>
            <AtomProductProvider>
              <App />
            </AtomProductProvider>
          </MikeProductProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
