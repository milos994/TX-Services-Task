# API Docs for TX Blog App

### Blog Post Routes:
```http
GET /posts
```
##### Response:
```json
[
    {
        "id": "7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14",
        "title": "Blog Post Title 1",
        "text": "Blog Post Text 1",
        "commentsCount": 2
    }
]
```
---

```http
GET /posts/:postId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `postId` | `string` | *Required*. Unique post id. |

##### Response:
```json
{
	"id": "7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14",
	"title": "Blog Post Title 1",
	"text": "Blog Post Text 1"
}
```
---

```http
POST /posts
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | *Required*. Post title. |
| `text` | `string` | Post text. |

##### Response:
```json
{
	"id": "7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14",
	"title": "Blog Post Title 1",
	"text": "Blog Post Text 1"
}
```
---

```http
PUT /posts/:postId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `postId` | `string` | *Required*. Post id. |
| `title` | `string` | *Required*. Post title. |
| `text` | `string` | Post text. |

##### Response:
```json
{
	"id": "7d4c6ff6-e992-4950-ad15-6eeb7fbe7e14",
	"title": "Updated Blog Post Title 1",
	"text": "Updated Blog Post Text 1"
}
```
---

```http
DELETE /posts/:postId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `postId` | `string` | *Required*. Post id. |

##### Response:
```json
{
	"message": "Resource deleted"
}
```

---

### Comments Routes:
```http
GET /posts/:postId/comments
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `postId` | `string` | *Required*. Post id. |

##### Response:
```json
[
    {
        "id": "e8087771-39f9-4d0c-a792-5a565bb478eb",
        "postId": "2766c31b-f2e2-4322-9f2d-3e2096d3db26",
        "name": "Blog Post Comment Name 1",
        "text": "Comment text 1..."
    }
]
```
---

```http
POST /posts/:postId/comments
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `postId` | `string` | *Required*. Post id. |
| `text` | `string` | *Required*. Comment text. |
| `name` | `string` | Comment name. |

##### Response:
```json
{
	"id": "e8087771-39f9-4d0c-a792-5a565bb478eb",
	"postId": "2766c31b-f2e2-4322-9f2d-3e2096d3db26",
	"name": "Blog Post Comment Name 1",
	"text": "Comment text 1..."
}
```

---

```http
GET /comments/:commentId
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `commentId` | `string` | *Required*. Comment id. |
##### Response:
```json
{
	"id": "e8087771-39f9-4d0c-a792-5a565bb478eb",
	"postId": "2766c31b-f2e2-4322-9f2d-3e2096d3db26",
	"name": "Blog Post Comment Name 1",
	"text": "Comment text 1..."
}
```
---

```http
PUT /comments/:commentId
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `commentId` | `string` | *Required*. Comment id. |
| `text` | `string` | Comment text. |
| `name` | `string` | Comment name. |
##### Response:
```json
{
	"id": "e8087771-39f9-4d0c-a792-5a565bb478eb",
	"postId": "2766c31b-f2e2-4322-9f2d-3e2096d3db26",
	"name": "Updated Blog Post Comment Name 1",
	"text": "Updated Comment text 1..."
}
```
---

```http
DELETE /comments/:commentId
```
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `commentId` | `string` | *Required*. Comment id. |
##### Response:
```json
{
	"message": "Resource deleted"
}
```