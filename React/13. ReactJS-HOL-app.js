import React, { useState } from "react";

// ---------------- Components ----------------

const BookDetails = () => {
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" },
  ];

  return (
    <div>
      <h2>Book Details</h2>
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title} - {book.author}</p>
        </div>
      ))}
    </div>
  );
};

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "JS Tips", author: "Jane" },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title} - {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

const CourseDetails = () => {
  const courses = [
    { id: 1, name: "React", level: "Beginner" },
    { id: 2, name: "Node.js", level: "Intermediate" },
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <p>{course.name} - {course.level}</p>
        </div>
      ))}
    </div>
  );
};

// ---------------- Main App ----------------

export default function App() {
  const [view, setView] = useState("book");

  // 1. IF-ELSE style rendering (inside function)
  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      {/* Buttons to change state */}
      <button onClick={() => setView("book")}>Books</button>
      <button onClick={() => setView("blog")}>Blogs</button>
      <button onClick={() => setView("course")}>Courses</button>

      <hr />

      {/* 2. Conditional Rendering (IF-ELSE result) */}
      {content}

      <hr />

      {/* 3. TERNARY rendering */}
      {view === "book" ? (
        <p>You are viewing Books</p>
      ) : (
        <p>Not viewing Books</p>
      )}

      {/* 4. Logical AND (&&) rendering */}
      {view === "blog" && <p>Blog section is active</p>}

      {/* 5. Direct component rendering switch style */}
      {view === "course" && <CourseDetails />}
    </div>
  );
}
