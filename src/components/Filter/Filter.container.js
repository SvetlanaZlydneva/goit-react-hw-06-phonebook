import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import selectors from '../../redux/contacts/selectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
