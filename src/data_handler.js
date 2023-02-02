const invalidDates = []; //local array for invalid date equips, this must be saved on data folder

const returnInvalidDates = () =>{ //returns array of invalid date equips
    return this.invalidDates;
}

const arrayWithSettedDates = (equipJsonArray) => {//returns array with valid equips with the setted expiration dates
    return equipJsonArray.filter(setExpirationDate); 
}

const setExpirationDate = (equipJson) => { //sets expiration date on valid equips and adds the invalid ones on local array
     if(validateEquipDate(equipJson)){
        equipJson.data_proxima_troca = new Date(equipJson.data_ultima_troca.getTime() + expirationDateValue());
        const options = {
             year: "numeric",
             month: "2-digit",
             day: "2-digit"
        };
        equipJson.data_proxima_troca = equipJson.data_proxima_troca.toLocaleDateString("en-US", options);
        return equipJson;
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

const expirationDateValue = () => {
  return new Date("2023-01-01").getTime() - new Date("2020-01-01").getTime();
};


export {returnInvalidDates, arrayWithSettedDates}
