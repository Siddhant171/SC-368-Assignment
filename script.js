document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            alert(`Blog Added!\n\nTitle: ${title}\nContent: ${content}`);
        });
    }
});
