import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ contacts: { items } }) => ({
  contactsLenght: items.length,
});

export default connect(mapStateToProps, null)(App);
