import React, { useState } from "react";

const blogs = [
  {
    title: "My First Blog Post",
    image: "https://dosixfigures.com/wp-content/uploads/first-blog-post.jpg", 
    description: "This is a short description of my first blog post.FD Here I share my journey into blogging and what inspired me to start.",
    date: "August 28, 2025",
    category: "Tech",
  },
  {
    title: "Learning React",
    image: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4088805%2Fcover_image%2Fregular_1708x683%2Fcover-react-context-api-dc30b2b6fe1acf1acc567087076e26d3.png",
    description: "Sharing my journey of learning React and building projects. I cover hooks, components, and state management.",
    date: "August 20, 2025",
    category: "Tech",
  },
  {
    title: "Tips for Productivity",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQFm-ENQcyKbeA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705173615286?e=1762387200&v=beta&t=zkjLwc3Zzpu-y4IGiNq53qp8bnzGGregLviwnuAXjWM",
    description: "Some useful tips to stay productive as a developer. Learn how to manage your time and tasks efficiently.",
    date: "August 10, 2025",
    category: "Productivity",
  },
  {
    title: "Traveling to the Mountains",
    image: "https://montane.com/cdn/shop/articles/Spirit-22_1024x1024.jpg?v=1670578630",
    description: "My experience traveling to the mountains. The beauty of nature and the thrill of adventure.",
    date: "July 30, 2025",
    category: "Travel",
  },
  {
    title: "Healthy Food Habits",
    image: "https://www.morelandobgyn.com/hs-fs/hubfs/Imported_Blog_Media/GettyImages-854725402-1.jpg?width=600&name=GettyImages-854725402-1.jpg",
    description: "Tips for maintaining healthy food habits. Nutrition, meal planning, and healthy recipes.",
    date: "July 15, 2025",
    category: "Food",
  },
  {
    title: "How to Start Coding",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*L_F-FzfZETb7rix8xst_Rw.jpeg",
    description: "A beginner's guide to starting coding. Resources, languages, and tips for new programmers.",
    date: "July 10, 2025",
    category: "Tech",
  },
  {
    title: "Remote Work Best Practices",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    description: "How to stay productive and healthy while working remotely. Tools, routines, and workspace setup.",
    date: "June 28, 2025",
    category: "Productivity",
  },
  {
    title: "Exploring Local Cuisine",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "Discovering the best local dishes and food experiences during my travels.",
    date: "June 15, 2025",
    category: "Food",
  },
  {
    title: "JavaScript Best Practices",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    description: "Improve your JavaScript code with these best practices and tips.",
    date: "June 1, 2025",
    category: "Tech",
  },
  {
    title: "Morning Routines for Success",
    image: "https://cdn.prod.website-files.com/63d5cc6761dbe779bd7fdbc4/677849ea4431cc666784c723_660530cdba15766969ae0432_morning-routines-of-successful-entrepreneurs.jpeg",
    description: "How a good morning routine can boost your productivity and mood.",
    date: "May 28, 2025",
    category: "Productivity",
  },
  {
    title: "Backpacking Across Europe",
    image: "https://learn.uvm.edu/wp-content/uploads/2019/02/backpacking_web-e1414157303255.jpg",
    description: "My unforgettable backpacking adventure across Europe.",
    date: "May 15, 2025",
    category: "Travel",
  },
  {
    title: "Quick & Healthy Snacks",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "Easy and healthy snack ideas for busy days.",
    date: "May 10, 2025",
    category: "Food",
  },
  {
    title: "React vs Angular",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*S3fR5kjoxRH8nLWN_Mq17A.jpeg",
    description: "A comparison between React and Angular for modern web development.",
    date: "April 28, 2025",
    category: "Tech",
  },
  {
    title: "Staying Motivated Remotely",
    image: "https://aymag.com/wp-content/uploads/2020/09/remote-learning.jpg",
    description: "Tips to stay motivated and focused while working from home.",
    date: "April 15, 2025",
    category: "Productivity",
  },
  {
    title: "Exploring Street Food",
    image: "https://livingnomads.com/wp-content/uploads/2018/07/05/Best-Street-Food-Hong-Kong-860x571.jpg",
    description: "A journey through the best street food around the world.",
    date: "April 10, 2025",
    category: "Food",
  },
  {
    title: "Solo Travel Guide",
    image: "https://cdn.prod.website-files.com/56e9debf633486e330198479/5fa2ddd04725c094db7b8c4b_Solo%20Travel%20Guide%20under30experiences-p-2000.jpg",
    description: "Everything you need to know about traveling solo.",
    date: "March 28, 2025",
    category: "Travel",
  },
  {
    title: "Healthy Breakfast Ideas",
    image: "https://healthylittlepeach.com/wp-content/uploads/2024/05/breakfastbowlsNEW12-1024x1536.jpg",
    description: "Start your day right with these healthy breakfast recipes.",
    date: "March 15, 2025",
    category: "Food",
  },
  {
    title: "Productivity Apps 2025",
    image: "https://assets.bytebytego.com/diagrams/0039-30-useful-ai-apps-that-can-help-you-in-2025.png",
    description: "Top productivity apps to try in 2025 for better workflow.",
    date: "March 10, 2025",
    category: "Productivity",
  },
];

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

const POSTS_PER_PAGE = 6;

const PersonalBlog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategory === "All" || blog.category === selectedCategory) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f7f7f7", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 900px) {
            header {
              padding: 2rem 0 1.5rem !important;
            }
            main {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
              gap: 1.2rem !important;
              padding: 0 0.5rem !important;
            }
            .category-search {
              flex-direction: column !important;
              gap: 0.7rem !important;
              align-items: stretch !important;
            }
          }
          @media (max-width: 600px) {
            header {
              padding: 1.2rem 0 1rem !important;
            }
            header img {
              width: 60px !important;
              height: 60px !important;
            }
            header h1 {
              font-size: 1.5rem !important;
            }
            header p {
              font-size: 0.95rem !important;
              max-width: 90vw !important;
            }
            main {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
              padding: 0 0.2rem !important;
            }
            .category-search input {
              min-width: 120px !important;
              font-size: 0.95rem !important;
            }
            .category-search button {
              padding: 0.5rem 1rem !important;
              font-size: 0.95rem !important;
            }
            footer {
              font-size: 0.95rem !important;
              padding: 1rem 0 0.7rem 0 !important;
            }
          }
        `}
      </style>
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(90deg, #222 0%, #4e54c8 100%)",
          color: "#fff",
          padding: "2.5rem 0 2rem",
          textAlign: "center",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          boxShadow: "0 4px 24px rgba(78,84,200,0.15)",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Avatar"
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              border: "4px solid #fff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              marginBottom: "1rem",
              objectFit: "cover",
              background: "#eee"
            }}
          />
          <h1 style={{
            margin: 0,
            fontWeight: 800,
            fontSize: "2.7rem",
            letterSpacing: "1px",
            textShadow: "0 2px 8px rgba(0,0,0,0.10)"
          }}>
            Personal Blog
          </h1>
          <p style={{
            margin: "0.7rem 0 0",
            fontWeight: 400,
            fontSize: "1.15rem",
            color: "#e0e0e0",
            maxWidth: 500,
            textShadow: "0 1px 4px rgba(0,0,0,0.08)"
          }}>
            Welcome to my personal blog! Find posts on <span style={{ color: "#ffd700", fontWeight: 600 }}>tech</span>, <span style={{ color: "#ffd700", fontWeight: 600 }}>productivity</span>, <span style={{ color: "#ffd700", fontWeight: 600 }}>travel</span>, and <span style={{ color: "#ffd700", fontWeight: 600 }}>food</span>.
          </p>
        </div>
      </header>

      {/* Category Filter & Search */}
      <div
        className="category-search"
        style={{
          maxWidth: 1000,
          margin: "2rem auto 1rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              padding: "0.6rem 1.5rem",
              borderRadius: 30,
              border: selectedCategory === cat ? "2px solid #4e54c8" : "2px solid rgba(255,255,255,0.18)",
              background: selectedCategory === cat
                ? "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)"
                : "rgba(255,255,255,0.15)",
              color: selectedCategory === cat ? "#fff" : "#222",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "0.5rem",
              boxShadow: selectedCategory === cat
                ? "0 4px 16px rgba(78,84,200,0.18)"
                : "0 2px 8px rgba(0,0,0,0.07)",
              backdropFilter: "blur(8px)",
              transition: "all 0.22s cubic-bezier(.4,2,.3,1)",
              letterSpacing: "0.5px",
              outline: "none",
              position: "relative",
            }}
            onClick={() => handleCategory(cat)}
            onMouseEnter={e => {
              if (selectedCategory !== cat) {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(78,84,200,0.10)";
                (e.currentTarget as HTMLButtonElement).style.color = "#4e54c8";
              }
            }}
            onMouseLeave={e => {
              if (selectedCategory !== cat) {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLButtonElement).style.color = "#222";
              }
            }}
          >
            {cat}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={handleSearch}
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: 30,
            border: "2px solid #4e54c8",
            outline: "none",
            minWidth: 200,
            fontSize: "1rem",
            background: "rgba(255,255,255,0.18)",
            color: "#222",
            fontWeight: 500,
            boxShadow: "0 2px 8px rgba(78,84,200,0.10)",
            marginLeft: "0.5rem",
            transition: "border 0.2s",
          }}
        />
      </div>

      {/* Blog Cards */}
      <main
        style={{
          flex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
          padding: "0 1rem"
        }}
      >
        {paginatedBlogs.length === 0 ? (
          <div style={{ color: "#888", fontSize: "1.2rem", marginTop: "2rem", gridColumn: "1/-1" }}>
            No blog posts found.
          </div>
        ) : (
          paginatedBlogs.map((blog, idx) => (
            <div
              key={idx}
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: 16,
                boxShadow: "0 4px 18px rgba(78,84,200,0.10)",
                border: "1px solid #e3e8ee",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.02)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(78,84,200,0.18)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "none";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 18px rgba(78,84,200,0.10)";
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  background: "#eee",
                  display: "block"
                }}
                onError={e => (e.currentTarget.src = "https://via.placeholder.com/300x180?text=No+Image")}
              />
              <div style={{ padding: "1.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ margin: "0 0 0.5rem", fontWeight: 700, color: "#222" }}>{blog.title}</h3>
                <span style={{ fontSize: "0.95rem", color: "#4e54c8", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {blog.category} &bull; {blog.date}
                </span>
                <p style={{ color: "#444", margin: "0 0 1rem", flex: 1, fontSize: "1.05rem" }}>{blog.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                  <span style={{ fontSize: "0.9rem", color: "#888" }}>{blog.date}</span>
                  <span style={{ fontSize: "0.85rem", color: "#aaa" }}>
                    Category: {blog.category}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </main>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              borderRadius: 20,
              border: "none",
              background: "#222",
              color: "#fff",
              cursor: page === 1 ? "not-allowed" : "pointer",
              opacity: page === 1 ? 0.5 : 1,
            }}
          >
            Prev
          </button>
          <span style={{ alignSelf: "center", fontWeight: 500 }}>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            style={{
              padding: "0.5rem 1rem",
              marginLeft: "1rem",
              borderRadius: 20,
              border: "none",
              background: "#222",
              color: "#fff",
              cursor: page === totalPages ? "not-allowed" : "pointer",
              opacity: page === totalPages ? 0.5 : 1,
            }}
          >
            Next
          </button>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(90deg, #222 0%, #4e54c8 100%)",
          color: "#fff",
          textAlign: "center",
          padding: "2rem 0 1.2rem 0",
          marginTop: "2rem",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          boxShadow: "0 -2px 16px rgba(78,84,200,0.10)",
        }}
      >
        <div style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.5px" }}>
          &copy; {new Date().getFullYear()} Personal Blog &mdash; Made by <span style={{ color: "#ffd700" }}>Syed Kaleem Shah</span>
        </div>
        <div style={{
          fontSize: "1.05rem",
          color: "#e0e0e0",
          marginTop: "0.7rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem"
        }}>
          <span>Connect:</span>
          <a href="https://github.com/KaleemShahG" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }} title="GitHub">
            🐙
          </a>
          <a href="https://www.linkedin.com/in/syedkaleemshah/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }} title="LinkedIn">
            💼
          </a>
          <a href="shahkaleem269@gmail.com" style={{ color: "#fff", textDecoration: "none", fontSize: "1.5rem" }} title="Email">
            ✉️
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PersonalBlog;
