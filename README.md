# 📝 Serverless Blog Platform (Full Stack)

This is a **fully functional serverless blog application** built with:
- **Frontend:** React.js
- **Backend:** AWS Lambda (Node.js)
- **Infra as Code:** Serverless Framework

You can **create, read, update, delete blog posts** through a clean UI and a serverless backend.

---

## 🔧 Tech Stack

| Layer      | Tech                  |
|------------|------------------------|
| Frontend   | React + Axios + Router|
| Backend    | Node.js AWS Lambda    |
| Infra      | Serverless Framework  |
| Hosting    | Local (or Vercel/S3)  |
| CI/CD      | GitHub Actions (optional) |

---

## 📁 Project Structure

```
serverless-blog-app/
├── frontend/                # React app
│   ├── pages/               # Home, Blog, Admin
│   ├── components/          # BlogCard etc.
│   └── utils/               # Axios instance
│
├── backend/                # Lambda-compatible handlers
│   └── controllers/        # CRUD: createPost, getPosts, etc.
│
├── infrastructure/         # Serverless config
│   ├── serverless.yml      # Lambda + API Gateway config
│   └── handler.js          # (for initial test)

```

---

## 🚀 Deployment Workflow

### 1. ✅ Backend: Lambda Setup

- AWS Lambda functions defined in:
  - `backend/controllers/*.js`

- Serverless config in:
  - `infrastructure/serverless.yml`

**To deploy:**
```bash
cd infrastructure
serverless deploy
```

**Result:**
```
POST - https://your-api.execute-api.eu-west-1.amazonaws.com/dev/posts
GET  - https://your-api.execute-api.eu-west-1.amazonaws.com/dev/posts
...
```

### 2. ✅ Frontend Setup

**Commands:**
```bash
cd frontend
npm install
npm start
```

**API Config:**
In `src/utils/api.js`:
```js
const API = axios.create({
  baseURL: 'https://your-api.execute-api.eu-west-1.amazonaws.com/dev'
});
```

---

## ✨ Features

- 🧠 Create, read, update, delete blog posts
- 📑 View blog post details
- 🛠 Serverless backend (no servers to manage)
- ⚡ Fast and scalable Lambda deployment
- 🔐 Ready to add Auth (e.g. Cognito)
- 🧱 Easy to plug into DynamoDB

---

## 🧪 API Endpoints (Live)

| Method | Route                          | Purpose             |
|--------|--------------------------------|----------------------|
| GET    | `/posts`                       | Fetch all posts     |
| GET    | `/posts/{id}`                  | Fetch single post   |
| POST   | `/posts`                       | Create a post       |
| PUT    | `/posts/{id}`                  | Update a post       |
| DELETE | `/posts/{id}`                  | Delete a post       |

---

## 🧰 How to Extend

- ✅ Connect to DynamoDB to make data persistent
- ✅ Add User Auth via AWS Cognito
- ✅ Deploy frontend to Vercel or S3 + CloudFront
- ✅ Add CI/CD pipeline via GitHub Actions

---

## 👨‍💻 Author
**Aman** 

Feel free to reach out if you'd like to collaborate or have feedback! 🚀
