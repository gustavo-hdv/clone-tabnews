// pages/_app.js
import '../pages/styles.css'; // Importando o CSS global aqui

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;