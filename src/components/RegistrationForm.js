class RegistrationForm extends React.Component{
  render() {
    return (
      <div>
        <form>
          <input type="text" name="name">
          <input type="password" name="password">
          <buton type="submit" value="Submit">
        </form>
      </div>
    );
  }
}
