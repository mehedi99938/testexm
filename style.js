
    function updateDateTime() {
        const now = new Date();
        document.getElementById("datetime").textContent = now.toLocaleString();
        document.getElementById("year").textContent = now.getFullYear();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);