# 💊 PillSync – Medicine Management Module

PillSync is a web-based medicine management application designed to help users organize, manage, and track their medicines efficiently.

## 🚀 Features

* 📊 Dashboard for medicine overview
* 💊 Add and manage medicines
* ✏️ Edit medicine details
* 🔔 Medicine reminders and schedules
* 📈 Medicine analytics
* 📜 Medicine history
* 🗑️ Trash and deleted medicine management
* 🔍 Search and filter medicines
* 📱 Simple and user-friendly interface

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* JSX
* Tailwind CSS
* Recharts
* Lucide React

### Backend

* Node.js
* Express.js
* REST API

### Tools

* Visual Studio Code
* Git
* GitHub
* npm

## 📁 Project Structure

```text
pillsync-medicine-module/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── src/
│   │   └── server.js
│   ├── data/
│   ├── package.json
│   └── .env
│
├── public/
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## ⚙️ Installation

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the Project

```bash
cd pillsync-medicine-module
```

### Step 3: Install Frontend Dependencies

```bash
npm install
```

### Step 4: Install Backend Dependencies

```bash
cd server
npm install
```

## ▶️ How to Run

The frontend and backend should be run in separate terminals.

### 🔵 Run Backend

Open Terminal 1:

```bash
cd server
npm run dev
```

Backend:

```text
http://localhost:4000
```

### 🟢 Run Frontend

Open Terminal 2 and return to the main project folder:

```bash
cd ..
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Open the frontend URL in your browser.

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
REST API
  ↓
Node.js / Express Backend
  ↓
Medicine Data
  ↓
Dashboard / Analytics / History
```

## 📊 Main Modules

| Module        | Description                                  |
| ------------- | -------------------------------------------- |
| Dashboard     | Provides an overview of medicine information |
| Medicine List | Displays medicine records                    |
| Add Medicine  | Adds new medicine information                |
| Edit Medicine | Updates medicine details                     |
| Reminder      | Tracks medicine schedules                    |
| Analytics     | Displays medicine statistics                 |
| History       | Displays previous medicine activities        |
| Trash         | Manages deleted medicines                    |

## 🎯 Objectives

* Simplify medicine management.
* Help users organize their medicine information.
* Track medicine schedules and reminders.
* Provide useful medicine analytics.
* Maintain medicine history.
* Provide an easy-to-use interface.

## 🔮 Future Enhancements

* 📱 Mobile application
* 🔔 Push notifications
* 🤖 AI-powered medicine assistance
* ☁️ Cloud database integration
* 👨‍⚕️ Doctor and caregiver access
* 📧 Email and SMS reminders
* 📷 Medicine image/barcode scanning
* 🔐 User authentication
* 📊 Advanced analytics

## 👩‍💻 Author

**Vinayaga Sundari**

B.Tech – Artificial Intelligence

## 📄 License

This project is developed for educational and project purposes.

---

⭐ If you find this project useful, please give the repository a star!
