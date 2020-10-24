import AddToHomeScreen from 'a2hs.js';
import QuasarLogo from 'src/assets/quasar-logo-full.svg';

export default () => {
  const options = {
    brandName: 'Chat App',
    logoImage: QuasarLogo,
  };
  AddToHomeScreen(options);
};
