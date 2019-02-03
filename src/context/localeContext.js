import React, { Component } from "react";

export const { Consumer: LocaleConsumer, Provider } = React.createContext();

class localeContext extends Component {
  state = {
    locale: "en",
    changeLocale: locale => this.setState({ locale: locale })
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default localeContext;
