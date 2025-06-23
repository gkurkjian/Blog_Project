// utils/fetchBlog.js
export async function fetchBlog({ limit = 5, page = 1, filterById = false } = {}) {
  try {
    const response = await fetch("https://jsonfakery.com/blogs", {
      cache: "no-store",
      next: { revalidate: 60 }
    });

    const data = await response.json();

    console.log("🌐 Fetched total blogs:", data.length);
    console.log("⚙️  Params → limit:", limit, "page:", page, "filterById:", filterById);

    let result = data;

    // Optional: filter only blog IDs less than or equal to limit (demo purpose)
    if (filterById) {
      result = result.filter(blog => blog.id <= limit);
      console.log("🧹 After ID filter:", result.length);
    }

    // Optional: apply pagination
    if (page !== null) {
      const start = (page - 1) * limit;
      const end = start + limit;
      result = result.slice(start, end);
      console.log(`📄 After pagination → Page ${page}:`, result.length);
    } else {
      // No pagination, just a flat limit
      result = result.slice(0, limit);
      console.log("🔢 After flat slice:", result.length);
    }

    return result;

  } catch (err) {
    console.error("❌ Fetch error:", err.message);
    return [];
  }
}
