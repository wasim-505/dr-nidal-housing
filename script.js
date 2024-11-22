document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("rating-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        // Collect form data
        const name = document.getElementById("name").value;
        const rating = document.querySelector('input[name="rating"]:checked');

        if (!rating) {
            alert("من فضلك اختر تقييمًا.");
            return;
        }

        // Prepare email body
        const email = "wasim.chami5@gmail.com";
        const subject = `تقييم جديد من ${name}`;
        const body = `الاسم: ${name}%0D%0Aالتقييم: ${rating.value} نجوم`;

        // Open mailto link
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
});
