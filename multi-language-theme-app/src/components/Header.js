import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ className }) {
  const { t } = useTranslation();
  return (
    <header className={className}>
      <h1>{t('title')}</h1>
    </header>
  );
}

export default Header;
