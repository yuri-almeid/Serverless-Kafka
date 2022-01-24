const { Kafka } = require("kafkajs");

async function getAccess(event, context) {

  const clientId = "SCA-SNACKIN";
  
	// const brokers = ["localhost:9092"];
	const brokers = ["https://snackin-log.loca.lt"];
  
	const topic = "SNACKIN_IOT_LOGS ";

  const kafka = new Kafka({ clientId, brokers });
  const producer = kafka.producer();

	var msg = "";
  try {
	  await producer.send({
		  topic,
		  messages: [
			  {
				  key: String(i),
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


