import { connect } from 'react-redux';
import { UserComponent } from "client/components/user.component";
import { getViewerAction } from "client/actions/user";
import { selector } from './user.selector';

const UserContainer = connect(
	selector,
	{
		onGetViewer: getViewerAction
	}
)(UserComponent);

export {
	UserContainer,
};