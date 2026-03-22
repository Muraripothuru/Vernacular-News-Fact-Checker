async function checkFact() {
    const text = document.getElementById("news").value;

    const response = await fetch("http://localhost:5000/api/fact-check", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    const data = await response.json();

    document.getElementById("result").innerText =
        `Result: ${data.result}`;
}
