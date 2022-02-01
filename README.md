# A Kafka Serverless


## Getting started
```
npm install
```

To deploy just do
```
sls deploy
```

## Kafka Commands

First we need the JAVA and JAVA-SDK

```
sudo yum install java-1.8.0
```

then Download KAFKA:

```
wget https://archive.apache.org/dist/kafka/2.2.1/kafka_2.12-2.2.1.tgz
tar -xzf kafka_2.12-2.2.1.tgz
```

To see the Cluster:
```
aws kafka describe-cluster --cluster-arn "ClusterArn" --region
```

To create a Topic:
```
bin/kafka-topics.sh --create --zookeeper "ZookeeperConnectString" --replication-factor 2 --partitions 1 --topic TOPIC_NAME
```

To configure JAVA folder
```
cp /usr/lib/jvm/JDKFolder/jre/lib/security/cacerts /tmp/kafka.client.truststore.jks
```

To configure client Properties:
```
security.protocol=SSL 
ssl.truststore.location=/tmp/kafka.client.truststore.jks
```

Get Brokers: 
```
aws kafka get-bootstrap-brokers --cluster-arn ClusterArn --region
```

Producer: 
```
./kafka-console-producer.sh --broker-list BootstrapBrokerStringTls --producer.config client.properties --topic AWSKafkaTutorialTopic
```
Consumer: 
```
./kafka-console-consumer.sh --bootstrap-server BootstrapBrokerStringTls --consumer.config client.properties --topic AWSKafkaTutorialTopic --from-beginning
```