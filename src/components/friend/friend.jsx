import Button from "../../utils/buttons/button";
import PropTypes from "prop-types";

// import React from "react";

const Friend = ({ friend, selectFriend, selectedFriend }) => {
	const isSelected = selectedFriend?.id === friend.id;
	return (
		<li className={isSelected ? "selected" : ""}>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance < 0 && (
				<p className="red">
					You owe {friend.name} {Math.abs(friend.balance)} 💶
				</p>
			)}
			{friend.balance > 0 && (
				<p className="green">
					{friend.name} owes you {Math.abs(friend.balance)} 💶
				</p>
			)}
			{friend.balance === 0 && <p>You and {friend.name} are even. 💶</p>}
			<Button onClick={() => selectFriend(friend)}>
				{isSelected ? "Close" : "Select"}
			</Button>
		</li>
	);
};

Friend.propTypes = {
	friend: PropTypes.object,
	selectFriend: PropTypes.func,
	selectedFriend: PropTypes.object
};

export default Friend;
