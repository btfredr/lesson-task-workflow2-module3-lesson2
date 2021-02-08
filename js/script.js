const { default: axios } = require("axios");

async function postRequest() {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	console.log(response.data)
}

postRequest();

async function putRequest() {
	const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
		method: "PUT",
		body: JSON.stringify({
			id: 1,
			title: "foot",
			body: "bart",
			userId: 1,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	console.log(response.data)
}

putRequest();

function deleteRequest() {
	axios.get("https://jsonplaceholder.typicode.com/posts/1", {
		method: "DELETE",
	});
}

deleteRequest();
