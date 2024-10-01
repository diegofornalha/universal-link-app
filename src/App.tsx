import React, { useEffect } from 'react';
import './App.css'; // Adicione os estilos aqui ou use Styled Components

const App: React.FC = () => {
  // Função para detectar o dispositivo e redirecionar automaticamente
  const detectDeviceAndRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const appUrlScheme = "weixin://dl/business/?t=jw5RP9P4GVf";
    const appStoreUrl = "https://apps.apple.com/pt/app/phiz-chat/id6447375837";
    const googlePlayUrl = "https://play.google.com/store/apps/details?id=live.phiz.app2";
    const fallbackUrl = "https://phiz.com.br/download";

    if (/android/i.test(userAgent)) {
      // Redireciona para o app ou Google Play no Android
      window.location.href = appUrlScheme;
      setTimeout(() => {
        window.location.href = googlePlayUrl;
      }, 1500);
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      // Redireciona para o app ou App Store no iOS
      window.location.href = appUrlScheme;
      setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 1500);
    } else {
      // Redireciona para o fallback no desktop
      window.location.href = fallbackUrl;
    }
  };

  useEffect(() => {
    // Executa o redirecionamento assim que o componente montar
    detectDeviceAndRedirect();
  }, []);

  return (
    <div className="container">
      <div className="main">
        <img
          src="https://app.phiz.chat/oss/view/2024101ac765480-350f-4576-890d-bd83eb3a518e.jpg"
          className="screenshot"
          alt="Doterra"
        />
      </div>
      <div className="popup">
        <div className="popup__header">
          <img
            className="popup__logo"
            src="https://app.phiz.chat/oss/view/2024917455bbc15-4bc6-4989-b562-6c2d9e29d52a.jpg"
            alt="Doterra Logo"
          />
          <span className="popup__name">Doterra</span>
        </div>
        <div className="popup__desc"></div>
        <button className="popup__button">Open in Phiz App</button>
      </div>
    </div>
  );
};

export default App;
