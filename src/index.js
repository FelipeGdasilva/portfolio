// Selecionando o checkbox do tema
const checkbox = document.getElementById("checkbox");
const body = document.body;

// 1. Verificar se o usuário já tinha uma preferência salva anteriormente
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    body.classList.add("dark");
    checkbox.checked = true; // Deixa o switch ligado
}

// 2. Escutar a mudança no checkbox
checkbox.addEventListener("change", () => {
    // Alternar a classe .dark no body
    body.classList.toggle("dark");

    // 3. Salvar a escolha do usuário no navegador (LocalStorage)
    // Isso evita que o tema resete quando a página for atualizada
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* Dica de Mentor: 
   Sempre que criar uma funcionalidade, tente pensar: 
   "E se o usuário atualizar a página?" 
   O uso do localStorage resolve isso e mostra maturidade técnica. [cite: 2026-02-15]
*/