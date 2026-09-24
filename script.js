const form = document.querySelector("form");
        const url = document.getElementById("url");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            let query = [];

            if (name) {
                query.push(`name=${name}`);
            }

            if (year) {
                query.push(`year=${year}`);
            }

            if (query.length > 0) {
                url.textContent = `https://localhost:8080/?${query.join("&")}`;
            } else {
                url.textContent = "https://localhost:8080/";
            }
        });