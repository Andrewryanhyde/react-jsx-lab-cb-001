import React from 'react';

class RegistrationForm extends React.Component{
  render() {
    return (
      <form>
        <input type="text" name="name"/>
        <input type="password" name="password"/>
        <button type="submit" value="Submit"/>
      </form>
    );
  }
}

export default RegistrationForm;
