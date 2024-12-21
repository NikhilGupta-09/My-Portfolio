document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch dynamic content
    function fetchDynamicContent(url, targetElementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(targetElementId).innerHTML = data;
            })
            .catch(error => console.error('Error fetching dynamic content:', error));
    }

    // Fetch dynamic content for the featured section
    fetchDynamicContent('/api/featured-content', 'featured-content');

    // You can add more fetchDynamicContent calls for other sections or elements as needed
});
