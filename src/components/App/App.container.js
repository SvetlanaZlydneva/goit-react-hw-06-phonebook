import { connect } from 'react-redux';
import selectors from '../../redux/contacts/selectors';
import App from './App';

const mapStateToProps = state => ({
  contactsLenght: selectors.getTotalCountContacts(state),
});

export default connect(mapStateToProps, null)(App);
