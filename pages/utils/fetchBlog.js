export async function fetchBlog() {
    try {
        const response = await fetch('https://api.example.com/blogs');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error.message);
        return [];
    }
}