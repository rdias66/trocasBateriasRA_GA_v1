const dueNextArray = equipJsonArray => { // returns array built with filter with equips changes due next month
    return equipJsonArray.filter(checkEquipDueNext);
}

const changeExpiredArray = equipJsonArray => { // returns array built with filter with late equips, only will be needed to run once , in the first run?
    return equipJsonArray.filter(checkEquipLate);
}

const checkEquipDueNext = equipJson => { //checks if there will be exchanges expiring in the next month, made for filter usage
    const expirationDateValue = new Date(equipJson.data_proxima_troca).getTime(); 
    const today = new Date();
    const limitForInaction = today.getTime() + oneMonthValue();
    if(expirationDateValue<=limitForInaction && expirationDateValue > today.getTime()){
        return equipJson;
    } 
}

const checkEquipLate = equipJson => { //checks if there are expired exchanges, made for filter usage
    const expirationDateValue = new Date(equipJson.data_proxima_troca).getTime();
    const today = new Date();
    if(expirationDateValue < today.getTime()){
        return equipJson;
    }
}

const oneMonthValue = () => { //static method for fixed month value in ms
    return new Date("2023-02-01").getTime() - new Date("2023-01-01").getTime();//1 month difference in milliseconds
}

export {dueNextArray, changeExpiredArray}
