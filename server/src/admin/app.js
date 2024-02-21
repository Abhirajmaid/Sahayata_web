// @ts-ignore
import logo from "./extensions/Graphic.png"

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Sahayata Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Open",

      "Auth.form.welcome.title": "Welcom to Sahyata Foundation",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  tutorials: false,
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
