import { connect } from 'react-redux';
import { UserComponent } from "client/components/user/user.component";
import { getUserAction } from "client/actions/user";
import { selector } from './user.selector';

const UserContainer = connect(
	selector,
	{
		onGetUser: getUserAction
	}
)(UserComponent);

export {
	UserContainer,
};