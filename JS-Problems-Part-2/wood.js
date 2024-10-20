/**
 * Chair --> 3 cft
 * Table --> 10 cft
 * Bed --> 50 cft
 * 
 * cft--> (cubic feet)
 */

// wood/কাঠের পরিমাণ ber kora---> eksathe ekta ba koyekta table,chair,bed e wood/কাঠ kototuku lagbe oita ber korar way

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood = woodQuantity(0,4,10);
console.log('Wood needed: ', wood);