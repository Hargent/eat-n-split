import Button from "../../utils/buttons/button";
import PropTypes from "prop-types";
import { useState } from "react";

const BillSplit = ({ selectedFriend, handleSplitBill }) => {
	// console.log(selectedFriend);
	const [bill, setBill] = useState("");
	const [userSplit, setUserSplit] = useState("");
	const [whoDeyPay, setWhoDyPay] = useState("user");
	const friendSplit = bill ? bill - userSplit : "";

	const handleSubmit = e => {
		e.preventDefault();

		if (!bill || !userSplit) return;

		handleSplitBill(whoDeyPay === "user" ? friendSplit : -userSplit);
	};
	return (
		<form action="" className="form-split-bill" onSubmit={handleSubmit}>
			<h2>SPlit the bill with {selectedFriend.name}</h2>

			<label htmlFor="">💰 Bill value</label>
			<input
				type="text"
				value={bill}
				onChange={e => setBill(Number(e.target.value))}
			/>
			<label htmlFor="">🕴️ Your expenses</label>
			<input
				type="text"
				value={userSplit}
				onChange={e =>
					setUserSplit(
						Number(e.target.value) > bill
							? userSplit
							: Number(e.target.value)
					)
				}
			/>
			<label htmlFor="">🧑‍🤝‍🧑 {selectedFriend.name}&apos;s expenses</label>
			<input type="text" disabled value={friendSplit} />
			<label htmlFor="">Who is paying the bill</label>
			<select
				name=""
				id=""
				value={whoDeyPay}
				onChange={e => setWhoDyPay(e.target.value)}>
				<option value="user">You</option>
				<option value={selectedFriend.name}>
					{selectedFriend.name}
				</option>
			</select>
			<input type="text" disabled />
			<Button>Split Bill</Button>
		</form>
	);
};

BillSplit.propTypes = {
	selectedFriend: PropTypes.object,
	handleSplitBill: PropTypes.func
};

export default BillSplit;
