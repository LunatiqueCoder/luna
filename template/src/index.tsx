/**
 * When compiling for web, it will search for index.js on root/src.
 */
import 'react-native-gesture-handler';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// RNVI integration for web
import './icons';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
