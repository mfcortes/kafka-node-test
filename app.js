const kafka = require('kafka-node')
const now = require("date-now")


const kafkaOptions = {
    kafkaHost : "localhost:9092"
}

const client = new kafka.KafkaClient(kafkaOptions)
// Consumidor 

const  consumer = new kafka.Consumer(client, [ { topic: 'test'} ])

consumer.on('message', (message)=> {
    console.log(message)
})

// Productor

const producer = new kafka.Producer(client)
producer.on('ready' , ()=>{
        setInterval( ()=>{
            producer.send([ {topic:"test", messages: `Este es un mensaje ${now()}` } ] , (err,data)=>{

            })
        },15000
        )
})