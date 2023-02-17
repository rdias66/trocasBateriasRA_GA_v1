const arrayWithSettedDates = (equipJsonArray) => {//returns array with valid equips with the setted expiration dates
    return equipJsonArray.filter(setExpirationDate); 
}

const setExpirationDate = (equipJson) => { //sets expiration date on valid equips and adds the invalid ones on local array
        equipJson.data_proxima_troca = new Date(equipJson.data_ultima_troca.getTime() + expirationDateValue()); //same pattern as the first date key
        const options = {
             year: "numeric",
             month: "2-digit",
             day: "2-digit"
        };
        equipJson.data_proxima_troca = equipJson.data_proxima_troca.toLocaleDateString("en-US", options);
        return equipJson;
}

const expirationDateValue = () => {
  return new Date("2023-01-01").getTime() - new Date("2020-01-01").getTime();
};


export default arrayWithSettedDates;
