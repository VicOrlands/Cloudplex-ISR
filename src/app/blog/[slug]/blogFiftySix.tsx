import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/blog56/partyrock_thumbnail_main.webp";
import Img1 from "@/assets/blog/blog56/1.webp";
import Img2 from "@/assets/blog/blog56/2.webp";
import Img3 from "@/assets/blog/blog56/3.webp";
import Img4 from "@/assets/blog/blog56/4.webp";
import Img5 from "@/assets/blog/blog56/5.webp";
import Img6 from "@/assets/blog/blog56/6.webp";
import Img7 from "@/assets/blog/blog56/7.webp";
import Img8 from "@/assets/blog/blog56/8.webp";
import Img9 from "@/assets/blog/blog56/9.webp";
import Img10 from "@/assets/blog/blog56/10.webp";
import Img11 from "@/assets/blog/blog56/11.webp";
import Img12 from "@/assets/blog/blog56/12.webp";
import Img13 from "@/assets/blog/blog56/13.webp";
import Img14 from "@/assets/blog/blog56/14.webp";
import Img15 from "@/assets/blog/blog56/15.webp";
import Img16 from "@/assets/blog/blog56/16.webp";
import Img17 from "@/assets/blog/blog56/17.webp";
import Img18 from "@/assets/blog/blog56/18.webp";
import Img19 from "@/assets/blog/blog56/19.webp";
import Img20 from "@/assets/blog/blog56/20.webp";
import Img21 from "@/assets/blog/blog56/21.webp";
import Img22 from "@/assets/blog/blog56/22.webp";
import Img23 from "@/assets/blog/blog56/23.webp";
import Img24 from "@/assets/blog/blog56/24.webp";
import Img25 from "@/assets/blog/blog56/25.webp";
import Img26 from "@/assets/blog/blog56/26.webp";
import Img27 from "@/assets/blog/blog56/27.webp";
import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogFiftySix() {
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
        <h1>
          The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock
        </h1>
        <br />
        <Image src={badge} alt="awslambdabadge" />
        <br />
        <br />
        <p>
          Amazon PartyRock is a generative AI app-building playground powered by
          Amazon Bedrock which allows users to experiment with prompt
          engineering and create fun and intuitive AI-powered apps without
          writing code.
        </p>{" "}
        <p>
          PartyRock is highly secured, highly available, has a scalable
          infrastructure, gives you access to a lot of foundational modules,
          including Lama, accessible to everyone and does not require an AWS
          account. This guide will help you understand how Amazon PartyRock
          works, help you get started and show you how to use PartyRock to suit
          your needs.
        </p>
        <h4>How Does PartyRock Work?</h4>
        <p>
          Amazon PartyRock is a free service that uses PartyRock credits. It
          works by simplifying web application development for developers, by
          providing pre-configured templates and an integrated development
          environment which can be customized using the platform’s tools. With
          PartyRock, infrastructure provisioning is automatically managed and
          scaled (servers, databases, and other resources) without requiring
          manual setup. There is also a chatbox where you can get real time
          feedback about the application you’re building.
        </p>
        <h4>The PartyRock Environment</h4>
        <p>
          The PartyRock environment is a user-friendly interface that allows
          developers to manage their applications. It includes tools for coding,
          testing, and deploying your app. The landing page has six items in the
          menu:
        </p>
        <ul>
          <li>Sign in</li>
          <li>
            Discover: Discover interesting applications you can build and also
            get inspired and lots more.{" "}
          </li>
          <li>
            Playlist: After developing several applications, they can be grouped
            into a playlist.
          </li>
          <li>
            PartyRock Guide: Amazon’s documentation to walk you through how you
            use PartyRock to build applications.
          </li>
          <li>What’s New?: Includes Release notes.</li>
          <li>
            Feedback: Here, you can directly give Amazon feedback, suggestions,
            thoughts and opinions with the PartyRock team.
          </li>
        </ul>
        <p>
          To get started with Amazon PartyRock,{" "}
          <a href="https://partyrock.aws/">click here</a> and select the sign in
          option.
        </p>
        <Image
          loading="lazy"
          src={Img1}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          There are three options to help you sign in with and you can pick one:
        </p>
        <ul>
          <li>Google</li>
          <li>Apple</li>
          <li>Amazon</li>
        </ul>
        <Image
          loading="lazy"
          src={Img2}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          For the purpose of this demo, select the Google option to sign in with
          your gmail account. Choose your preferred email address and continue.
        </p>
        <Image
          loading="lazy"
          src={Img3}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>Follow the steps below in order:</p>
        <ol>
          <li>Pick a unique username</li>
          <li>Select your country</li>
          <li>Select your city</li>
          <li>Tick the AWS privacy checkbox</li>
          <li>Submit</li>
        </ol>
        <Image
          loading="lazy"
          src={Img4}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>After signing in, you’ll notice four new items in the menu.</p>
        <ul>
          <li>Generate App</li>
          <li>Apps</li>
          <li>Snapshots and</li>
          <li>Backstage</li>
        </ul>
        <p>Now you can start building!</p>
        <p>
          The ‘Apps’ section shows you the history of apps you’ve developed and
          you can reuse them or probably share them with other developers.
        </p>
        <Image
          loading="lazy"
          src={Img5}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Snapshot is designed to help you capture and retain information or
          data of your application. With this feature, you can create a backup
          or "snapshot" of your RAG application configurations, history, or
          infrastructure setups to use later on if needed or shared to other
          developers.
        </p>
        <Image
          loading="lazy"
          src={Img6}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          The Backstage shows you the amount of usage of your PartyRock credit
          based on your input and output. Every new user is given a 100% free
          trial which reduces based on the number of applications you run.
        </p>
        <Image
          loading="lazy"
          src={Img7}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <h4>PartyRock Use Cases</h4>
        <p>Let’s see how Amazon PartyRock works with some use cases.</p>
        <h5>
          Use Case 1: <br /> Streamlining Document Management with Intelligent
          Data Extraction
        </h5>
        <p>
          AWS PartyRock can be utilized to develop a chatbot application that
          allows users to upload various documents, such as contracts, reports,
          or research papers. Using the platform's generative AI capabilities,
          the app can analyze and extract key information from these documents
          based on user prompts.
        </p>
        <h6>Demo:</h6>
        <p>
          To start building, click on the ‘Generate app’ section in the menu.
        </p>
        <Image
          loading="lazy"
          src={Img8}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          It’ll take you to the building environment where you can either enter
          your prompt or ask PartyRock to inspire you with some example prompts.
        </p>
        <Image
          loading="lazy"
          src={Img9}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Here we already have our prompt for the chatbot application so there
          is no need for the second option but you can choose the second option
          to get an example. Enter the prompt and generate.
        </p>
        <Image
          loading="lazy"
          src={Img10}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Below, our application has been created. To upload a document, click
          on ‘choose files’. Select the file you wish to upload and click the
          ‘enter key’. We'll be uploading the 2022 version of the Nigerian
          Startup Act document and entering some prompts based on the document.
        </p>
        <Image
          loading="lazy"
          src={Img11}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          The document has been uploaded successfully and we can see the total
          number of characters in the document.
        </p>
        <Image
          loading="lazy"
          src={Img12}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          In developing a tech startup company, and you seem not to really have
          much time to read through the document or hire a legal advisor to put
          you through, you can get the key information needed to start your
          company using your PartyRock application by uploading the document and
          asking for a summary.
        </p>
        <Image
          loading="lazy"
          src={Img13}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <Image
          loading="lazy"
          src={Img14}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>There’s a section above that has the following options:</p>
        <ul>
          <li>
            Remix: Allows you to customize and modify existing templates,
            configurations, or setups to suit your needs rather than starting
            from scratch.
          </li>
          <li>
            My Snapshots: To take a snapshot of your application, your app must
            be made public.
          </li>
          <li>
            Private: You have the option of making your application public,
            private or shared via a link to others.
          </li>
          <li>
            Edit button: Customize your application to suit your preference.
          </li>
          <li>Autoplay</li>
        </ul>
        <Image
          loading="lazy"
          src={Img15}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <h6>Creating a snapshot with Amazon PartyRock</h6>
        <p>
          To take a snapshot, change your application to public view. Click the
          private option as seen above and select public.
        </p>
        <Image
          loading="lazy"
          src={Img16}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Your application is now public and now, you can take your snapshot.
        </p>
        <Image
          loading="lazy"
          src={Img17}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          It’ll take some seconds to be created and then you can see your
          snapshot. This will also appear in the snapshot area of the PartyRock
          interface.
        </p>
        <Image
          loading="lazy"
          src={Img18}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <h6>Editing your App</h6>
        <p>
          Clicking on the ‘edit’ button or symbol brings you to the interface
          below where you can choose your own title, placeholder and
          foundational model.
        </p>
        <Image
          loading="lazy"
          src={Img19}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Still want more? Your Amazon PartyRock application can answer any
          question(s) you have about your uploaded document.
        </p>
        <Image
          loading="lazy"
          src={Img20}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Outcome of this use case: Enhanced document management, improved
          decision-making, document confidentiality and privacy with increased
          efficiency.
        </p>
        <h4>
          Use Case 2: <br /> Rapid Prototyping & MVP Development:
        </h4>
        <p>
          AWS PartyRock can be used to rapidly prototype and develop minimum
          viable products such as:
        </p>
        <ul>
          <li>A Social media app with AI-generated content suggestions</li>
          <li>
            A retail app offering dynamic product recommendations and pricing
            strategies
          </li>
        </ul>
        <p>
          PartyRock can also generate relevant images, hashtags and conversation
          prompts to enhance your posts.
        </p>
        <h6>Demo:</h6>
        <p>Enter the prompt and generate.</p>
        <Image
          loading="lazy"
          src={Img21}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          Type in your command and enter. PartyRock will automatically generate
          a name for your app (which you can edit and change) and execute your
          command.
        </p>
        <Image
          loading="lazy"
          src={Img22}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          The draft, image and relevant hashtags have been generated by
          PartyRock based on your command prompt.
        </p>
        <Image
          loading="lazy"
          src={Img23}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <ol>
          <li>You can save the image</li>
          <li>Regenerate another image</li>
          <li>Edit and customize the model to your taste.</li>
        </ol>
        <Image
          loading="lazy"
          src={Img24}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          <b>Outcome:</b> Accelerated product development cycles, allowing
          startups to validate their ideas quickly and efficiently with minimal
          investment.
        </p>
        <h4>Amazon PartyRock Pricing and Support</h4>
        <p>
          PartyRock is currently free tier and based on PartyRock free credits
          and its usage is based on your input tokens, output tokens and
          generated images. Amazon provides comprehensive resources available,
          including documentation, community forums and contact support for
          additional help and guidance.
        </p>
        <h4>Limitations</h4>
        <p>
          Integrating PartyRock with non-Amazon tools can be tough and might
          require extra work. Also, deep customization might require in-depth
          knowledge and expertise and since PartyRock is tightly linked to
          Amazon's ecosystem, it can be hard to switch to another provider later
          on.
        </p>
        <h4>Sharing your App</h4>
        <p>
          To share your app with others, click on the ‘public’ section and copy
          the link. This link can be shared on different platforms or sent
          directly to individuals.
        </p>
        <Image
          loading="lazy"
          src={Img25}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          The ‘url’ will have AWS PartyRock and your username as seen below.
          Alao, other users can remix your app and see it was created by you.
        </p>
        <Image
          loading="lazy"
          src={Img26}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>Now they can also use your app and execute their own commands.</p>
        <Image
          loading="lazy"
          src={Img27}
          alt="The Ultimate Guide to Building Generative AI Apps with Amazon
          PartyRock"
        />
        <br />
        <br />
        <p>
          AWS PartyRock offers a unique and accessible platform for exploring
          generative AI, allowing users to create, test, and share AI-powered
          apps with ease. it's diverse capabilities make it a valuable tool for
          various sectors, including finance, healthcare, media, fintech, and
          more. PartyRock not only provides practical tools but also serves as
          an educational resource, helping users develop foundational skills in
          generative AI.
        </p>
        <h2>Frequently asked questions about Amazon Partyrock Aws</h2>
        <ol>
          <li>
            PartyRock Guide:{" "}
            <a href="https://partyrock.aws/guide">
              https://partyrock.aws/guide
            </a>
          </li>
          <li>
            About PartyRock:{" "}
            <a href="https://aws.amazon.com/about-aws/whats-new/2023/11/partyrock-amazon-bedrock-playground">
              https://aws.amazon.com/about-aws/whats-new/2023/11/partyrock-amazon-bedrock-playground
            </a>
          </li>
          <li>
            PartyRock FAQs:{" "}
            <a href="https://partyrock.aws/guide/faq">
              https://partyrock.aws/guide/faq
            </a>
          </li>
          <li>
            What’s New with PartyRock:{" "}
            <a href="https://partyrock.aws/new">https://partyrock.aws/new</a>
          </li>
        </ol>
      </div>
    </section>
  );
}
