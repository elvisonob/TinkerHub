import dayjs from 'dayjs';
import '../i18n';

import { useTranslation } from 'react-i18next';

export default function MemoLearning() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* {<h1>{t('welcome')}</h1>} */}
      {<p>{t('welcome')}</p>}

      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
    </>
  );
}
