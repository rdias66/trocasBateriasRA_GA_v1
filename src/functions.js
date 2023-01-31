const dueNext = (equipJsonArray) => { // returns array built with filter with equips changes due next month
    return equipJsonArray.filter(checkEquipDueNext);
}

const changeExpired = (equipJsonArray) => { // returns arraya built with filter with late equips, only will be needed to run once , in the first run?
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

const oneMonthValue = () => { //static method for fixed month value in ms
    const oneMonthInMs = 30 * 24 * 60 * 60 * 1000;
    return oneMonthInMs;
}
