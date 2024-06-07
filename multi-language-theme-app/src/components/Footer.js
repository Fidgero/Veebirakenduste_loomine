import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer({ className }) {
  const { t } = useTranslation();
  return (
    <footer className={className}>
      <p>{t('footer')}</p>
    </footer>
  );
}

export default Footer;
