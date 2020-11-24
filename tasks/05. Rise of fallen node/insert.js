const cassandra = require('cassandra-driver');
const {v4: uuidv4} = require('uuid');

//   ssh -L localhost:9043:ec2-35-175-120-75.compute-1.amazonaws.com:9042 ubuntu@ec2-35-175-120-75.compute-1.amazonaws.com -i "ec2.pem"
const client = new cassandra.Client({
    contactPoints: ['172.31.77.183:9042'],
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

// const DEPTS = ['HR', 'Java Developer', 'React Developer', 'Vue Developer', 'Devops', 'Go Developer'];
const NAMES = ['Ivan', 'Timur', 'Razil', 'Emil', 'Maxim', 'Azat'];


(async () => {
    let i = 1
    while (true) {
        try {
            await client.batch([
                {
                    query: 'INSERT INTO task5 (id, name) VALUES (?, ?)',
                    params: [i, randomElement(NAMES)]
                }
            ], {prepare: true});
            i++
            if (i % 1000000) console.log('Queries amount: ' + i)
        } catch (e) {
            console.log(e)
        }
    }
})()

