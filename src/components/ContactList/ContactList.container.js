import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import selectors from '../../redux/contacts/selectors';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
