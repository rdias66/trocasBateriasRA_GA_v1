const invalidDates = []; //local array for invalid date equips

const returnInvalidDates = () =>{ //returns array of invalid date equips
    return this.invalidDates;
}

const arrayWithSettedDates = (equipJsonArray) => {//returns array with valid equips with the setted expiration dates
    let arrayWithSettedDates = equipJsonArray.filter(setExpirationDate); 
    return arrayWithSettedDates;
}

const setExpirationDate = (equipJson) => { //sets expiration date on valid equips and adds the invalid ones on local array
     if(validateEquipDate(equipJson)){
        equipJson.data_proxima_troca =  equipJson.data_ultima_troca.getTime() + expirationDateValue();
        return equipJson;   //not gonna work like this, value must be transformed back to date
    } else {invalidDates.push(equipJson);} 
    
}

const validateEquipDate = (equipJson) => { //validates if equip has a setted last Change date
    let equipLastChangeValue = equipJson.data_ultima_troca;
    if(equipLastChange != null){ 
        return true;
    }else {return false;}
}

const expirationDateValue = () => {//static method for fixed value
    let lastChange = new Date("2020-01-01");
    let dueChange = new Date("2023-01-01");
    let lastChangeValue = lastChange.getTime();
    let dueChangeValue = dueChange.getTime();
    let expirationDateValue = dueChangeValue - lastChangeValue;
    return expirationDateValue;
}