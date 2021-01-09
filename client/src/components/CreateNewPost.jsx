import React from "react";

const CreateNewPost = () => {
	return (
		<>
			<form>
				<h1>Create New Post</h1>
				<input type="text" placeHolder="title" size="37" required></input>
				<br />
				<br />
				<textarea placeHolder="text" rows="8" cols="41" required></textarea>
				<br />
				<br />
				<button>Create Post</button>
			</form>
		</>
	);
};
export default CreateNewPost;