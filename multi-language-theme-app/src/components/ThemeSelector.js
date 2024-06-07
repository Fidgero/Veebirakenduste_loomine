import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../ThemeContext';

function ThemeSelector() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <label>{t('theme')}: </label>
      <select
        value={theme}
        onChange={(e) => toggleTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default ThemeSelector;
