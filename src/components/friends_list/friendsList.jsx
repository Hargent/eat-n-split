import Friend from "../friend/friend";
import PropTypes from "prop-types";

// import React from "react";

const friendsList = ({ friends, selectFriend, selectedFriend }) => {
	// console.log(friends);
	return (
		<ul>
			{friends.map(friend => (
				<Friend
					friend={friend}
					key={friend.id}
					selectFriend={selectFriend}
					selectedFriend={selectedFriend}
				/>
			))}
		</ul>
	);
};

friendsList.propTypes = {
	friends: PropTypes.arrayOf(Object),
	selectedFriend: PropTypes.object,
	selectFriend: PropTypes.func
};

export default friendsList;
