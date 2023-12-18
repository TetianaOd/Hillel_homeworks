//1


function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Початковий масив:", arr);

myBlend(arr);
console.log("Перемішаний масив:", arr);




//2



const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyObject, companyName) {
    if (companyObject.name === companyName) {
        return companyObject;
    }

    if (companyObject.clients) {
        for (const client of companyObject.clients) {
            const result = findValueByKey(client, companyName);
            if (result) {
                return result;
            }
        }
    }

    if (companyObject.partners) {
        for (const partner of companyObject.partners) {
            const result = findValueByKey(partner, companyName);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

const companyName = 'Клієнт 1.2.3';
const companyInfo = findValueByKey(company, companyName);

if (companyInfo) {
    console.log(`Компанію знайдено - ${companyName}:`);
    console.log(companyInfo);
} else {
    console.log(`Компанію ${companyName} не знайдено.`);
}

