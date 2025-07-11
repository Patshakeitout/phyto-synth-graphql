// src/main.ts
const form = document.getElementById("search-form") as HTMLFormElement;
const out = document.getElementById("search-results")!;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = new FormData(form).get("q")?.toString() ?? "";

  const query = `
    query($q: String) {
      ingredients(search: $q) {
        id commonName latinName tags
      }
    }`;

  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables: { q } })
  });

  const json = await res.json();
  out.innerHTML = "<pre>" + JSON.stringify(json, null, 2) + "</pre>";
});

