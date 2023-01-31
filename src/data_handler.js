const invalidDates = []; //local array for invalid date equips, this must be saved on data folder

const returnInvalidDates = () =>{ //returns array of invalid date equips
    return this.invalidDates;
}

const arrayWithSettedDates = (equipJsonArray) => {//returns array with valid equips with the setted expiration dates
    return equipJsonArray.filter(setExpirationDate); 
}

const setExpirationDate = (equipJson) => { //sets expiration date on valid equips and adds the invalid ones on local array
     if(validateEquipDate(equipJson)){
        equipJson.data_proxima_troca =  equipJson.data_ultima_troca.getTime() + expirationDateValue();
        return equipJson;   //not gonna work like this, value must be transformed back to date
    } else {
        invalidDates.push(equipJson);
    }   
}

const validateEquipDate = (equipJson) => { //validates if equip has a setted last Change date
    const equipLastChangeValue = equipJson.data_ultima_troca;
    if(equipLastChange !== null){ 
        return true;
    }
    return false;
}

const expirationDateValue = () => {//CHANGE THIS FOR THE SAME PATTERN IN THE ONE MONTH FUNCTION IN FUNCTIONS
    const lastChange = new Date("2020-01-01");
    const dueChange = new Date("2023-01-01");
    const lastChangeValue = lastChange.getTime();
    const dueChangeValue = dueChange.getTime();
    return dueChangeValue - lastChangeValue;
    
}

export {returnInvalidDates, arrayWithSettedDates}
