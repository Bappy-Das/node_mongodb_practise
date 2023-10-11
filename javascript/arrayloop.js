const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < userIds.length; i++) {
    // if (userIds[i] !== 2) {
    //     console.log("for each loop", userIds[i]);
    // }
    const userID = userIds[i];
    // console.log(userID);
    console.log(userIds[i]);

}

// for (let item of userIds) {
//     console.log("for of loop", item);
// }


// Multi Dimentional array 
const parentArray = [
    {
        "id": 1,
        "business_name": "1 Jessica Rosario",
        "address": "Aut pariatur Modi e",
        "childArray": [
            {
                "id": 11,
                "commonId": 5,
                "member": "azileHero",
                "name": "Erin Madden 11",
            },
            {
                "id": 12,
                "name": "Erin Madden 12",
            },
            {
                "id": 13,
                "name": "Erin Madden 13",
            },
        ]
    },
    {
        "id": 2,
        "business_name": "2 Jessica Rosario",
        "address": "Aut pariatur Modi e",
        "childArray": [
            {
                "id": 21,
                "member": "azileHero",
                "name": "Erin Madden 21",
            },
            {
                "id": 22,
                "commonId": 5,
                "name": "Erin Madden 22",
            },
            {
                "id": 23,
                "name": "Erin Madden 23",
            },
        ]
    },
    {
        "id": 3,
        "business_name": "3 Jessica Rosario",
        "address": "Aut pariatur Modi e",
        "childArray": [
            {
                "id": 31,
                "commonId": 5,
                "member": "azileHero",
                "name": "Erin Madden 31",
            },
            {
                "id": 32,
                "name": "Erin Madden 32",
            },
            {
                "id": 33,
                "name": "Erin Madden 33",
            },
        ]
    },
]

for (let child of parentArray) {
    console.log("complete", child.business_name);
    for (item of child.childArray) {
        if (item.commonId === 5) {
            console.log(item);
        }
        // console.log(item);
    }
}
