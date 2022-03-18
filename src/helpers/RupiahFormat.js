export function RupiahFormat(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "decimal",
        currency: "IDR",
    }).format(number)
};