import { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/index';
import { setLanguage } from '../../store/slices/language/languageSlice';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

interface StateProps {
  currentLanguage: 'en' | 'ru';
}

interface DispatchProps {
  setLanguage: (language: 'en' | 'ru') => void;
}

type Props = StateProps & DispatchProps;

class LanguageSwitcherContainer extends Component<Props> {
    handleLanguageChange = (language: 'en' | 'ru') => {
    this.props.setLanguage(language);
  };
  

  render() {
    return (
      <LanguageSwitcher
        currentLanguage={this.props.currentLanguage}
        onChangeLanguage={this.handleLanguageChange}
      />
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  currentLanguage: state.language.currentLanguage,
});

const mapDispatchToProps: DispatchProps = {
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcherContainer);
