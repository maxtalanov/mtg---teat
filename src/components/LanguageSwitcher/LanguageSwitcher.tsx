import React, { Component } from 'react';

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'ru';
  onChangeLanguage: (language: 'en' | 'ru') => void;
}

class LanguageSwitcher extends Component<LanguageSwitcherProps> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as 'en' | 'ru';
    this.props.onChangeLanguage(selectedLanguage);
  };

  render() {
    return (
      <select value={this.props.currentLanguage} onChange={this.handleLanguageChange}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    );
  }
}

export default LanguageSwitcher;
