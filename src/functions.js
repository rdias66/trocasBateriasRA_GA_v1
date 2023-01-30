const dueNext = (equipJsonArray) => { // array buider with filter
    return equipJsonArray.filter(checkEquipDueNext);
}

const changeExpired = (equipJsonArray) => { // array builder with filter
    return equipJsonArray.filter(checkEquipLate);
}

const checkEquipDueNext = (equipJson) => { //checks if there will be exchanges expiring in the next month, made for filter usage
    const expirationDateValue = equipJson.data_proxima_troca.getTime(); // needs data handled first
    const today = new Date();
    const todayValue = today.getTime();
    const limitForInaction = todayValue + oneMonthValue();
    if(limitForInaction <= expirationDateValue){
        return equipJson;
    } 
}

const checkEquipLate = (equipJson) => { //checks if there are expired exchanges, made for filter usage
    const expirationDateValue = equipJson.data_proxima_troca.getTime(); // needs data handled first
    const today = new Date();
    const todayValue = today.getTime();
    if(expirationDateValue < todayValue){
        return equipJson;
    }
}

const oneMonthValue = () => { //static method for fixed value
    const date1 = new Date("2020-01-01");
    const date1MonthLater = new Date("2020-02-01");
    const date1Value = date1.getTime();
    const date1MonthLaterValue = date1MonthLater.getTime();
    const oneMonthValue = date1MonthLaterValue - date1Value;
    return oneMonthValue;
}
