import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import ContactList from './ContactList';

const getVisibleTodos = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) => name.includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
