export async function fetchBlog() {
    try {
        const response = await fetch('https://jsonfakery.com/blogs');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const limitedData = data.slice(0, 20);
        // console.log('Fetched blogs:', limitedData);
        return limitedData;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error.message);
        return [];
    }
}