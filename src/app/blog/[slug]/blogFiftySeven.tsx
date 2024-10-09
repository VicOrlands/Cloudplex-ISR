import React from "react";
import Image from "next/image";
import FeatherIcon from "feather-icons-react";
import styles from "./styles.module.css";
import Img1 from "@/assets/blog/blog57/1.png";
import Img2 from "@/assets/blog/blog57/2.png";
import Img3 from "@/assets/blog/blog57/3.png";

export default function BlogFiftySeven() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li>Share</li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/the-ultimate-guide-to-building-generative-ai-apps-with-amazon-partyrock"
            target="blank"
          >
            <FeatherIcon icon="facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/the-ultimate-guide-to-building-generative-ai-apps-with-amazon-partyrock"
            target="blank"
          >
            <FeatherIcon icon="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/the-ultimate-guide-to-building-generative-ai-apps-with-amazon-partyrock"
            target="blank"
          >
            <FeatherIcon icon="linkedin" />
          </a>
        </li>
      </ul>

      <div className={styles["main-content"]}>
        <h1>AWS SNS and SQS - How To Build A Robust Event Bus Architecture</h1>

        <p>
          For certain types of large-scale or complex systems, creating a
          scalable and decoupled event-driven architecture can provide
          significant benefits in terms of flexibility, maintainability, and
          performance. Amazon Web Services (AWS) offers two powerful services
          that, when combined, can form the backbone of an efficient event bus:
          Simple Notification Service (SNS) and Simple Queue Service (SQS).
        </p>

        <p>
          This article will explore how these services work individually and how
          they can be integrated to create a robust event bus architecture.
        </p>

        <h2>SNS and SQS</h2>

        <h3>Amazon Simple Notification Service (SNS)</h3>
        <p>
          SNS is a fully managed pub/sub messaging service. It allows you to
          create topics and publish messages to those topics. Subscribers can
          then receive these messages through various protocols, including
          HTTP/S, email, SMS, and more importantly for our discussion, SQS.
        </p>

        <p>Key features of SNS:</p>
        <ul>
          <li>Instantaneous, push-based delivery</li>
          <li>Simple APIs and easy integration with applications</li>
          <li>Flexible message delivery over multiple transport protocols</li>
          <li>Inexpensive, pay-as-you-go model with no upfront costs</li>
        </ul>

        <h3>Amazon Simple Queue Service (SQS)</h3>
        <p>
          SQS is a fully managed message queuing service. It enables you to
          decouple and scale microservices, distributed systems, and serverless
          applications. SQS eliminates the complexity and overhead associated
          with managing and operating message-oriented middleware.
        </p>

        <p>Key features of SQS:</p>
        <ul>
          <li>Unlimited throughput and number of messages in queue</li>
          <li>Retention of messages for up to 14 days</li>
          <li>Multiple readers and writers interacting with the same queue</li>
          <li>Message lock times ensuring a message is processed only once</li>
        </ul>

        <h2>Building an Event Bus with SNS and SQS</h2>
        <p>
          Now, let's explore how these two services can be combined to create an
          effective event bus architecture.
        </p>

        <h3>The Basic Architecture</h3>
        <ol>
          <li>
            Event Publishers: These are your applications or services that
            generate events. They publish messages to SNS topics.
          </li>
          <li>
            SNS Topics: Each topic represents a specific type of event or
            category of events.
          </li>
          <li>
            SQS Queues: These act as subscribers to the SNS topics. Each queue
            can be dedicated to a specific type of event consumer.
          </li>
          <li>
            Event Consumers: These are your applications or services that
            process the events. They poll the SQS queues for messages.
          </li>
        </ol>

        <p>Here's a diagram illustrating this basic architecture:</p>
        <Image src={Img1} alt="SNS-SQS Basic Architecture" />

        <h3>How It Works</h3>
        <ol>
          <li>An event publisher sends a message to an SNS topic.</li>
          <li>
            SNS immediately broadcasts this message to all subscribed SQS
            queues.
          </li>
          <li>
            The messages are now available in the SQS queues for processing.
          </li>
          <li>
            Event consumers poll their respective SQS queues and process the
            messages.
          </li>
        </ol>

        <p>
          Let's look at a more detailed flow of messages in this architecture:
        </p>
        <Image src={Img2} alt="SNS-SQS Message Flow" />

        <h3>Advantages of This Architecture</h3>
        <ol>
          <li>
            Decoupling: Publishers and consumers are completely decoupled.
            Publishers don't need to know who will process the events, and
            consumers don't need to know who generated them.
          </li>
          <li>
            Scalability: Both SNS and SQS can handle virtually unlimited
            throughput. You can easily add more consumers to process messages
            faster without affecting the publishers.
          </li>
          <li>
            Reliability: SQS ensures that each message is delivered at least
            once and provides features like message retention and dead-letter
            queues for handling failed processing attempts.
          </li>
          <li>
            Flexibility: You can easily add new consumers or remove existing
            ones without affecting the rest of the system. This makes it easy to
            evolve your architecture over time.
          </li>
          <li>
            Fan-out: A single SNS topic can deliver messages to multiple SQS
            queues, allowing you to process the same event in different ways for
            different purposes.
          </li>
        </ol>

        <p>
          The following diagram illustrates the concept of decoupling in this
          architecture:
        </p>
        <Image src={Img3} alt="SNS-SQS Decoupling" />

        <h2>Considerations</h2>
        <ol>
          <li>
            Message Format: Standardize your message format across all
            publishers. Consider using a schema registry to manage message
            schemas.
          </li>
          <li>
            Error Handling: Implement robust error handling in your consumers.
            Use SQS dead-letter queues to capture messages that fail processing.
          </li>
          <li>
            Monitoring: Set up monitoring and alerting for both SNS and SQS.
            Watch for metrics like queue depth, delivery delays, and error
            rates.
          </li>
          <li>
            Security: Use AWS IAM roles and policies to secure access to your
            SNS topics and SQS queues. Encrypt sensitive data in your messages.
          </li>
          <li>
            Cost Optimization: Monitor your usage and adjust your architecture
            if needed. Remember, you pay for API calls, data transfer, and (in
            the case of SQS) the duration that messages are kept in queues.
          </li>
        </ol>

        <h2>Wrap up</h2>
        <p>
          The combination of AWS SNS and SQS provides a powerful foundation for
          building a scalable, reliable, and flexible event bus architecture.
          With both combined, you can create a system that can handle high
          volumes of events, scale easily, and evolve with your changing
          business needs. As with any architectural decision, consider your
          specific use case, expected load, and requirements when implementing
          this pattern.
        </p>
      </div>
    </section>
  );
}
