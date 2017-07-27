const data = [  
    {  
        "name":"Cheese - Cheddar, Medium",
        "sku":"a38b3dd0-f5e2-4876-981f-aa87fc149cef",
        "price":"$19.47",
        "features":[  
            "convallis eget eleifend luctus",
            "id",
            "orci"
        ]
    },
    {  
        "name":"Radish",
        "sku":"c2b9bd57-7854-4140-ac93-ae533a6d4560",
        "price":"$80.19",
        "features":[  
            "blandit nam nulla integer pede",
            "vulputate ut ultrices vel",
            "nibh ligula nec"
        ]
    },
    {  
        "name":"Pear - Halves",
        "sku":"20116ba1-f5f1-433a-bee4-049d4894a1a1",
        "price":"$16.47",
        "features":[  
            "nunc vestibulum ante",
            "nunc nisl duis bibendum",
            "lectus in"
        ]
    }
];

const DataService = new Promise((resolve, reject) => {
    setTimeout(() => (
        resolve(data)
    ), Math.random() * 1000);
});


export default DataService;