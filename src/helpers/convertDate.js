export function convertDate(mysqlDate) {
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const myDate = new Date(mysqlDate);
    const result = myDate.getDate() + " " + monthNames[myDate.getMonth()] + " " + myDate.getFullYear();

    return result.toString();
};