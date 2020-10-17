const cassandra = require('cassandra-driver');
const { v4: uuidv4 } =  require('uuid');

const client = new cassandra.Client({
    contactPoints: ['localhost:9043'],
    localDataCenter: 'dc1',
    keyspace: 'timur',
    credentials: {
        username: 'cassandra',
        password: 'cassandra'
    }
});

function randomElement(items) {
    return items[Math.floor(Math.random() * items.length)];
}

const DEPTS = ['HR', 'Java Developer', 'React Developer', 'Vue Developer', 'Devops', 'Go Developer'];
const NAMES = ['Ivan', 'Timur', 'Razil', 'Emil', 'Maxim', 'Azat'];



(async () => {
    let index = 0
    while (index < 1000000) {
        const queries = []
        for (let i = 0; i < 500; i++) {
            queries.push({
                query: 'INSERT INTO task4 (id, dept_name, name) VALUES (?, ?, ?)',
                params: [index, randomElement(DEPTS), randomElement(NAMES)]
            })
            index++
        }
        await client.batch(queries, { prepare: true });
        console.log('progress: ' + index)
    }
    console.log('done')
    process.exit(0)
})()

