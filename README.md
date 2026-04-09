# 📚 Knowledge Cafe

A modern React-based blogging platform where users can discover, bookmark, and track their reading progress. Built with React and styled with Tailwind CSS for a clean, responsive user experience.

**[🌐 Live Demo](https://reactknowledgecafes.netlify.app/)**

---

## ✨ Features

- 📖 **Browse Blogs** - Explore a curated collection of technical articles and tutorials
- 🔖 **Bookmark Articles** - Save your favorite blogs for later reading
- ⏱️ **Reading Time Tracker** - Monitor your total reading time across all marked articles
- 📱 **Responsive Design** - Seamlessly works on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean and intuitive interface built with Tailwind CSS
- ⚡ **Fast Performance** - Powered by Vite for optimized build and development experience

---

## 🛠️ Technologies Used

- **React 18.2** - UI library for building interactive components
- **Vite 4.4** - Lightning-fast build tool and development server
- **Tailwind CSS 3.3** - Utility-first CSS framework for responsive design
- **React Icons 4.11** - Beautiful SVG icon library
- **PropTypes** - Runtime type checking for React props
- **ESLint** - Code quality and consistency checks

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-knowledge-cafe.git
   cd react-knowledge-cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
react-knowledge-cafe/
├── public/
│   └── blogs.json                 # Blog data
├── src/
│   ├── Component/
│   │   ├── Blog/
│   │   │   └── Blog.jsx           # Individual blog card component
│   │   ├── Blogs/
│   │   │   └── Blogs.jsx          # Blogs collection component
│   │   ├── Bookmark/
│   │   │   └── Bookmark.jsx       # Individual bookmark component
│   │   ├── Bookmarks/
│   │   │   └── Bookmarks.jsx      # Bookmarks sidebar component
│   │   └── Header/
│   │       └── Header.jsx         # Navigation header
│   ├── assets/
│   │   └── Images/                # Image assets
│   ├── App.jsx                    # Root component
│   ├── App.css                    # Global styles
│   ├── index.css                  # Base styles
│   └── main.jsx                   # Entry point
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                       # This file
```

---

## 🚀 How to Use

1. **Browse Blogs**
   - The home page displays all available articles with cover images, titles, and reading time estimates

2. **Bookmark Articles**
   - Click the bookmark icon on any blog card to save it to your bookmarks
   - Bookmarked articles appear in the right sidebar

3. **Mark as Read**
   - Click "Mark as Read" on any article to add its reading time to your total
   - Track your cumulative reading progress in the bookmarks panel

4. **View Bookmarks**
   - Access your bookmarked articles in the sidebar
   - See your total reading time summary

---

## 📊 Data Structure

### Blog Object
```json
{
  "id": 1,
  "cover": "image_url",
  "title": "Blog Title",
  "author": "Author Name",
  "author_img": "author_image_url",
  "posted_date": "Date",
  "reading_time": 5,
  "hashtags": ["tag1", "tag2"]
}
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌐 Live Demo

Visit the live application: **[https://reactknowledgecafes.netlify.app/](https://reactknowledgecafes.netlify.app/)**

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License. See the LICENSE file for more details.

---

## 👨‍💻 Author

**React Knowledge Cafe** - A modern blogging platform for developers

---

## 🙋 Support

If you have any questions or run into issues, please open an issue on the GitHub repository or contact the development team.

---

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Create and publish own blogs
- [ ] Search and filter functionality
- [ ] Dark mode support
- [ ] Blog categories and tags
- [ ] User comments and ratings
- [ ] Social sharing options

---

**Happy Reading! 📚**
