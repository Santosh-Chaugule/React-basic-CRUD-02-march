let requirdData =

    [
        {
            id: 1,
            name: 'santosh',
            createdAt: '1234'
        },
        {
            id: 2,
            name: 'santosh',
            createdAt: '123445'
        }
    ]




let obj = [
    {
        "id": 2,
        "attributes": {
            "name": "yogesh",
            "createdAt": "2023-03-16T05:52:07.877Z",
            "updatedAt": "2023-03-16T05:52:08.943Z",
            "publishedAt": "2023-03-16T05:52:08.941Z"
        }
    },
    {
        "id": 3,
        "attributes": {
            "name": "string",
            "createdAt": "2023-03-16T06:00:44.696Z",
            "updatedAt": "2023-03-16T06:00:44.696Z",
            "publishedAt": "2023-03-16T06:00:44.694Z"
        }
    },
    {
        "id": 4,
        "attributes": {
            "name": "string",
            "createdAt": "2023-03-16T06:00:53.467Z",
            "updatedAt": "2023-03-16T06:00:53.467Z",
            "publishedAt": "2023-03-16T06:00:53.466Z"
        }
    },
    {
        "id": 5,
        "attributes": {
            "name": "Shekhar",
            "createdAt": "2023-03-16T06:01:20.930Z",
            "updatedAt": "2023-03-16T06:01:20.930Z",
            "publishedAt": "2023-03-16T06:01:20.929Z"
        }
    },
    {
        "id": 6,
        "attributes": {
            "name": "Anu",
            "createdAt": "2023-03-16T06:03:50.449Z",
            "updatedAt": "2023-03-16T06:03:50.449Z",
            "publishedAt": "2023-03-16T06:03:50.447Z"
        }
    }
]
let newoldaoo = obj.map((cv, idx, arr) => {
    return {
        id: cv.id,
        name: cv.attributes.name,
        createdAt: cv.attributes.createdAt
    }
})
console.log(newoldaoo
)