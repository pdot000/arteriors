document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Footer not found");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});