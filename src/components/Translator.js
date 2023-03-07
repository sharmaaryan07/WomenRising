import React, { useEffect } from 'react';

function GoogleTranslate() {
  useEffect(() => {
    const googleTranslateScriptId = 'google-translate-script';
    const existingScript = document.getElementById(googleTranslateScriptId);

    if (!window.google || !window.google.translate) {
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = googleTranslateScriptId;
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    } else {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
  }, []);

  return <div className='sticky top-[37rem]  z-50 ml-8  ' ><div id="google_translate_element" className=' shadow-2xl absolute p-1 bg-white'>
    </div></div>;
    
}

export default GoogleTranslate;
