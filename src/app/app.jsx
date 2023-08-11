import AddFriend from "../components/addfFriend/addFriend";
import BillSplit from "../components/billSplit/billSplit";
import Button from "../utils/buttons/button";
import FriendsList from "./../components/friends_list/friendsList";
import initialFriends from "./../data/data";
import { useState } from "react";
const App = () => {
	const [addFormOpen, setAddFormOpen] = useState(false);
	const [friends, setFriends] = useState(initialFriends);
	const [selectedFriend, setSelectedFriend] = useState(null);

	const openAddForm = () => {
		// console.log("called");
		setAddFormOpen(isOpen => !isOpen);
	};
	const handleSetNewFriend = newFriend => {
		// console.log(newFriend);
		setFriends(friends => [...friends, newFriend]);
		setAddFormOpen(false);
	};
	const handleSelectFriend = friend => {
		// console.log(id);
		// setSelectedFriend(friend);
		setSelectedFriend(selected =>
			selected?.id === friend.id ? null : friend
		);
		setAddFormOpen(false);
	};
	const handleSplitBill = value => {
		setFriends(friends =>
			friends.map(friend =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		// console.log(value);
		setSelectedFriend(null);
	};
	// console.log(selectedFriend);
	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList
					friends={friends}
					selectFriend={handleSelectFriend}
					selectedFriend={selectedFriend}
				/>
				{addFormOpen && (
					<AddFriend handleSetNewFriend={handleSetNewFriend} />
				)}

				<Button type="button" onClick={openAddForm}>
					{addFormOpen ? "Close" : "Add Friend"}
				</Button>
			</div>
			{selectedFriend && (
				<BillSplit
					key={selectedFriend.id}
					selectedFriend={selectedFriend}
					handleSplitBill={handleSplitBill}
				/>
			)}
		</div>
	);
};

export default App;
