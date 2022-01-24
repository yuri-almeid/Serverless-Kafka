const { Kafka } = require("kafkajs");

async function getAccess(event, context) {

	const clientId = "SCA-SNACKIN";
	const brokers = ["https://snackin-log.loca.lt"];
	const topic = "SNACKIN_IOT_LOGS";

	const kafka = new Kafka({ clientId, ssl: true, brokers });
	const producer = kafka.producer();

	var msg = "";
	try {
		await producer.connect();
		await producer.send({
			topic,
			messages: [
				{
					key: String(Math.floor(Math.random() * 100)),
					value: "Hello from lambda"
				}
			],
		});
		msg = "Message sent!";
	} catch (err) {
		msg = "could not write message " + err;
		console.error(msg);
	}
	return {
		statusCode: 200,
		body: JSON.stringify({ message: msg }),
	};
}

export const handler = getAccess;


