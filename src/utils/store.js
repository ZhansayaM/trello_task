const cards = [
{
    id: 'card-1',
    content: 'Learning how to code',
},
{
    id: 'card-2',
    content: 'Making a website',
},
{
    id: 'card-3',
    content: 'Cleaning from bugs',
}
];

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'To do',
            cards,
        },
    },
    listIds: ['list-1'],
};

export default data;