export function generateAtualDate() {
    const options = {
        timezone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }

    const brazilDate = new Date().toLocaleDateString("en-GB", options);
    return brazilDate;
}