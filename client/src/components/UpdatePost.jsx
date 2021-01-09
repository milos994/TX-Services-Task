import React from "react";

const UpdatePost = () => {
	return (
		<>
			<form>
				<h1>Update Post</h1>
				<input type="text" placeholder="title" size="37" required></input>
				<br />
				<br />
				<textarea placeholder="text" rows="8" cols="41" required></textarea>
				<br />
				<br />
				<button>Update Post</button>
			</form>
		</>
	);
};
export default UpdatePost;