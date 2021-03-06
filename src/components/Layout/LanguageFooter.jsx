import React from "react";
import LanguageButton from "./LanguageButton";

const LanguageFooter = props => (
  <div className="row justify-content-center mt-5">
    <LanguageButton
      changeLocale={props.changeLocale}
      currentLocale={props.locale}
      locale="es"
    />
    <LanguageButton
      changeLocale={props.changeLocale}
      currentLocale={props.locale}
      locale="en"
    />
    <LanguageButton
      changeLocale={props.changeLocale}
      currentLocale={props.locale}
      locale="fr"
    />
  </div>
);

export default LanguageFooter;
