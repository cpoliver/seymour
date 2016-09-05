import { connect } from 'react-redux';

import AddFeed from '../components/add-feed';
import { addFeed } from '../actions/feed-action-creator';

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  onAddFeed: url => { dispatch(addFeed(url)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFeed);
