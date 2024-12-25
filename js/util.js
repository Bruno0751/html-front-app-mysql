function formatTimestampToBR(sqlTimestamp) {
    if (!sqlTimestamp) return "";
    const dia = sqlTimestamp.substring(8, 10);
    const mes = sqlTimestamp.substring(5, 7);
    const ano = sqlTimestamp.substring(0, 4);
    const timePart = sqlTimestamp.substring(11); 
    return `${dia}/${mes}/${ano} ${timePart}`;
}