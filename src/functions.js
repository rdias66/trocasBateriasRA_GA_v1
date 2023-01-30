const dueNext = (equipJsonArray) => { // array buider with filter
    let dueNext = equipJsonArray.filter(checkEquipDueNext);
    return dueNext;
}

const changeExpired = (equipJsonArray) => { // array builder with filter
    let changeDueExpired = equipJsonArray.filter(checkEquipLate);
    return changeDueExpired;
}

const checkEquipDueNext = (equipJson) => { //checks if there will be exchanges expiring in the next month, made for filter usage
    let expirationDateValue = equipJson.data_proxima_troca.getTime();
    let today = new Date();
    let todayValue = today.getTime();
    let limitForInaction = todayValue + oneMonthValue();
    if(limitForInaction <= expirationDateValue){return equipJson;} 
}

const checkEquipLate = (equipJson) => { //checks if there are expired exchanges, made for filter usage
    let expirationDateValue = equipJson.data_proxima_troca.getTime();
    let today = new Date();
    let todayValue = today.getTime();
    if(expirationDateValue < todayValue){return equipJson;}
}

const oneMonthValue = () => { //static method for fixed value
    let date1 = new Date("2020-01-01");
    let date1MonthLater = new Date("2020-02-01");
    let date1Value = date1.getTime();
    let date1MonthLaterValue = date1MonthLater.getTime();
    let oneMonthValue = date1MonthLaterValue - date1Value;
    return oneMonthValue;
}
