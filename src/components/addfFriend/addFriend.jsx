import Button from "../../utils/buttons/button";
import PropTypes from "prop-types";
import { useState } from "react";

// import React from "react";

const AddFriend = ({ handleSetNewFriend }) => {
	const [name, setName] = useState("");
	const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");
	// console.log(name, imageUrl);
	const handleSubmit = e => {
		e.preventDefault();
		if (!name || !imageUrl) return;

		const id = crypto.randomUUID();

		const newFriend = {
			id: id,
			name: name,
			image: `${imageUrl}?u=${id}`,
			balance: 0
		};
		handleSetNewFriend(newFriend);
		setName("");
		setImageUrl("https://i.pravatar.cc/48");
	};
	return (
		<form onSubmit={handleSubmit} className="form-add-friend">
			<label htmlFor="">🧑🏼‍🤝‍🧑🏾 Friend name</label>
			<input
				type="text"
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<label htmlFor="">🧑📸 Image URL</label>
			<input
				type="text"
				value={imageUrl}
				onChange={e => {
					setImageUrl(e.target.value);
				}}
			/>
			<Button>Add</Button>
		</form>
	);
};

AddFriend.propTypes = {
	handleSetNewFriend: PropTypes.func
};

export default AddFriend;
