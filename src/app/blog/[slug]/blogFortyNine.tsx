"use client"
import Image from "next/image";
import styles from "./styles.module.css"
import FeatherIcon from "feather-icons-react";
import { CopyBlock, a11yDark } from "react-code-blocks";

import badge from "@/assets/blog/blog49/badge.webp";
import Img1 from "@/assets/blog/blog49/first.webp";
import Img2 from "@/assets/blog/blog49/second.webp";
import Img3 from "@/assets/blog/blog49/third.webp";
import Img4 from "@/assets/blog/blog49/fourth.webp";
import Img5 from "@/assets/blog/blog49/fifth.webp";
import Img6 from "@/assets/blog/blog49/sixth.webp";
import Img7 from "@/assets/blog/blog49/seventh.webp";
import Img8 from "@/assets/blog/blog49/eight.webp";
import Img9 from "@/assets/blog/blog49/ninth.webp";
import Img10 from "@/assets/blog/blog49/tenth.webp";
import Img11 from "@/assets/blog/blog49/eleventh.webp";
import Img12 from "@/assets/blog/blog49/twelvth.webp";
import Img13 from "@/assets/blog/blog49/thirteenth.webp";
import Img14 from "@/assets/blog/blog49/forteenth.webp";
import Img15 from "@/assets/blog/blog49/fifteenth.webp";

const code1 = `npx create-react-app my-amplify-app

cd my-amplify-app
`;

const code2 = "npm install -g @aws-amplify/cli";

const code3 = "amplify init";

const code4 = "amplify add auth";

const code5 = "amplify push";

const code6 = "amplify add api";

const code7 = "amplify push";

const code8 = `npm install @aws-amplify/ui-react`;

const code9 = `import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
// also import the amplify styles
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);`;

const code10 = `import React, { useState } from "react";
import {
  Button,
  PhoneNumberField,
  Flex,
  Input,
  Label,
} from "@aws-amplify/ui-react";
const ContactForm = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const addContact = (event) => {
    event.preventDefault();
    if (newContact.name && newContact.email && newContact.phone) {
      onAddContact(newContact);
      setNewContact({ name: "", email: "", phone: "" });
    }
  };
  return (
    <Flex as="form" direction="column" gap="medium" onSubmit={addContact}>
      <h1>Contact Manager</h1>
      <Flex direction="column" gap="small">
        <Label htmlFor="Default">Email</Label>
        <Input
          id="name"
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
      </Flex>
      <Flex direction="column" gap="small">
        <Label htmlFor="Default">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
          placeholder="Email"
          isRequired={true}
        />
      </Flex>
      <PhoneNumberField
        label="Phone Number"
        defaultDialCode="+1"
        id="phone"
        type="text"
        name="phone"
        value={newContact.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <Button type="submit"> + Add Contact</Button>
    </Flex>
  );
};
export default ContactForm;`;

const code11 = `import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Heading,
} from "@aws-amplify/ui-react";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <Heading level="2">Saved Contacts</Heading>
      <Table title="Table" variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Email</TableCell>
            <TableCell as="th">Phone</TableCell>
            <TableCell as="th">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Button
                  variation="primary"
                  colorTheme="error"
                  onClick={() => onDeleteContact(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default ContactList;`;

const code12 = `import React, { useState } from "react";
import { Flex } from "@aws-amplify/ui-react";

import ContactList from "./comp/list";
import ContactForm from "./comp/form";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <Flex direction="column" gap="medium" style={{ padding: 20 }}>
      <h1>Contact Manager</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </Flex>
  );
};
export default ContactManager;`;

const code13 = `npm start`;

const code14 = `import { withAuthenticator } from "@aws-amplify/ui-react";
// ....

const ContactManager = ({ signOut, user }) => {
 // ...
};
export default withAuthenticator(ContactManager);`;

const code15 = `import { Badge, Button, Flex } from "@aws-amplify/ui-react";

function User({ user, signOut }) {
  return (
    <Flex justifyContent="space-between">
      <Badge variation="success" style={{ paddingTop: 12 }}>
        {user.signInDetails.loginId}
      </Badge>
      <Button onClick={signOut} colorTheme="warning">
        SignOut
      </Button>
    </Flex>
  );
}
export default User;`;

const code16 = `import User from "./comp/userInfo";

const ContactManager = ({ signOut, user }) => {
 // ...
  <User user={user} signOut={signOut} />
 //...
};`;

const code17 = `// form.js

const ContactForm = ({ onAddContact }) => {
// ...
async function SaveToCloud(contact) {
    try {
      const restOperation = put({
        apiName: "YOUR_API_NAME", // example amplifyContactMD
        path: "/contacts",
        options: {
          body: contact,
        },
      });
      const response = await restOperation.response;
      console.log("PUT call succeeded: ", response);
      onAddContact(newContact);
      setNewContact({ name: "", email: "", phone: "" });
    } catch (e) {
      console.log("PUT call failed: ", JSON.parse(e.response.body));
    }
  }
// ...

}`;

const code18 = `const ContactList = ({ contacts, onDeleteContact }) => {
// ...
import { get } from 'aws-amplify/api';

async function getTodo() {
  try {
    const restOperation = get({ 
      apiName: "YOUR_API_NAME", // example amplifyContactMD
      path: '/contacts' 
    });
    const response = await restOperation.response;
   
  } catch (e) {
    const remoteContacts =  JSON.parse(e.response.body);
    setContacts(remoteContacts) // set the new state of contacts;
  }
}
// ...
}`;

const code19 = `amplify hosting add`;

const code20 = `amplify add api`;

const code21 = `amplify push`;

const code22 = `amplify add storage`;

const code23 = `amplify push`;

const code24 = `npm install aws-amplify @aws-amplify/ui-react`;

const code25 = `import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);`;

const code26 = `import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from './graphql/queries';

async function fetchTodos() {
  try {
    const todoData = await API.graphql(graphqlOperation(listTodos));
    console.log('todos:', todoData.data.listTodos.items);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}`;

const code27 = `import { Storage } from 'aws-amplify';

async function uploadFile(file) {
  try {
    const result = await Storage.put(file.name, file, {
      contentType: file.type,
    });
    console.log('File uploaded:', result.key);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

async function downloadFile(fileKey) {
  try {
    const result = await Storage.get(fileKey, { download: true });
    console.log('File downloaded:', result.Body);
  } catch (error) {
    console.error('Error downloading file:', error);
  }`;

export default function BlogFortyNine() {
  return (
    <section className={styles["blog"]}>
      <ul className={styles["socials"]}>
        <li className="mb-3 h6">Share</li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases"
            target="blank"
          >
            <FeatherIcon
              icon="facebook"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases"
            target="blank"
          >
            <FeatherIcon
              icon="twitter"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/building-fullstack-app-with-react-and-aws-amplify-authentication-and-databases"
            target="blank"
          >
            <FeatherIcon
              icon="linkedin"
            />
          </a>
        </li>
      </ul>

      <div className={styles["main-content"]}>
        <h1>Building Fullstack app with React and AWS Amplify - Authentication and Databases</h1>
        <br />
        <Image
          src={badge}
          loading="lazy"
          alt="awspartnerbadge"
        />
        <br />
        <br />
        <h4>Introduction</h4>
        <p>
          AWS Amplify is a powerful set of tools and services
          provided by Amazon Web Services (AWS) that simplifies the
          process of building modern web and mobile applications. It
          abstracts away much of the complexity involved in
          integrating various AWS services, such as authentication,
          API management, storage, database, and more, into your
          application.
        </p>
        <p>
          In this tutorial, we'll learn how to integrate AWS Amplify
          with a React Frontend, allowing us to leverage AWS
          services like Amazon Cognito for authentication, Restful
          APIs, and Amazon DynamodB for data storage, among others.
        </p>
        <p>
          By the end of this tutorial, you'll have a decent
          understanding of how to build scalable web application,
          with authentication flows, databases and feature-rich web
          applications using React and AWS Amplify.
        </p>
        <p
          style={{
            borderLeft: "4px solid grey",
            paddingLeft: 15,
          }}
        >
          We will first look true how easy it is to add aws services
          to your app with amplify, then we will build a fullstack
          project with these services.
        </p>
        <h4>Prerequisites</h4>
        <p>
          Before we begin, make sure you have the following
          prerequisites in place:
        </p>
        <ol>
          <li>
            <b>Node.js and npm: </b>
            You'll need to have Node.js and npm (Node Package
            Manager) installed on your machine. You can download the
            latest version of Node.js from the official website:{" "}
            <a href="https://nodejs.org/">https://nodejs.org/</a>
          </li>
          <li>
            <b>AWS Account: </b>
            You'll need an AWS account to access and use AWS
            services. If you don't have an account yet, you can
            create one for free at{" "}
            <a href="https://aws.amazon.com/">
              https://aws.amazon.com/
            </a>
          </li>
          <li>
            <b>React Development Environment: </b>
            We'll assume you already have a basic understanding of
            React and have a development environment set up for
            building React applications. If you're new to React, you
            can follow the official React documentation to set up a
            new project:{" "}
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">
              https://reactjs.org/docs/create-a-new-react-app.html
            </a>
          </li>
        </ol>
        <h4>Setting up the Work Environment</h4>
        <p>
          Follow these steps to set up your work environment for the
          tutorial:
        </p>
        <ol>
          <li>
            Create a new React application <br />
            If you don't already have a React application, you can
            create a new one using Create React App:
            <br />
            <CopyBlock
              text={code1}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
          </li>
          <li>
            Install AWS Amplify CLI
            <br />
            The AWS Amplify CLI is a toolchain that simplifies the
            process of creating, integrating, and managing AWS
            services for your application. Install it globally using
            npm:
            <br />
            <CopyBlock
              text={code2}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
          </li>
        </ol>
        <h4>
          Authentication and Storage with Amplify - Building a
          Contact Manager;
        </h4>
        <Image
          loading="lazy"
          src={Img1}
          alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
        />
        <br />
        <br />
        <ol>
          <li>
            Initialize a New Amplify Project
            <br />
            Navigate to your React project's directory and run the
            following command to initialize a new Amplify project:
            <br />
            <CopyBlock
              text={code3}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            Follow the prompts to select your project settings, such
            as the project name, environment name, editor, and type
            of app.
            <br />
            <br />
            The process will look something like this:
            <Image
              loading="lazy"
              src={Img2}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
            <br />
            <br />
            <Image
              loading="lazy"
              src={Img3}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
          </li>
          <li>
            Add Authentication to Your Project
            <br />
            Once the project is initialized, run the following
            command to add authentication to your project:
            <br />
            <CopyBlock
              text={code4}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            This command will prompt you to select the
            authentication service you want to use (e.g., Cognito
            User Pools, Cognito Identity Pools, etc.) and configure
            the necessary settings.
            <br />
            <br />
            It should look something like this:
            <br />
            <Image
              loading="lazy"
              src={Img4}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
          </li>
          <li>
            Push Your Changes to the Cloud
            <br />
            <CopyBlock
              text={code5}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            This command will create the necessary AWS resources
            (e.g., Cognito User Pool, Identity Pool, etc.) and
            update your project's AWS Amplify configuration.
            <br />
            <Image
              loading="lazy"
              src={Img5}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
          </li>
          <li>
            Add API to your project
            <br />
            We will be adding an API that allows us to fetch the
            contact list from a dynamoDB database, we will be
            setting everything up in our terminal, with just a few
            entries to show how easy this actually is:
            <br />
            Run:
            <CopyBlock
              text={code6}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            Next, you'll be prompted to choose the data source. For
            this tutorial, we'll use the Create a new datasource
            service option and select Amazon DynamoDB.
            <br />
            <br />
            Here is what the process will look like:
            <Image
              loading="lazy"
              src={Img6}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
            <br />
            <Image
              loading="lazy"
              src={Img7}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
            Once again, you need to run amplify push:
            <CopyBlock
              text={code7}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            Now that the backend process is complete, we can begin
            adding it to our React Application.
            <br />
            <br />
            You should be able to see an output like this:
            <Image
              loading="lazy"
              src={Img8}
              alt="Building Fullstack app with React
                                            and AWS Amplify - Authentication and
                                            Databases"
              style={{
                border: "1px solid #eaeaea",
              }}
            />
          </li>
          <li>
            Get Your AWS Amplify Configuration
            <br />
            After the{" "}
            <code
              style={{
                background: "grey",
                padding: 5,
                color: "#f0f0f0",
                borderRadius: 6,
              }}
            >
              amplify push{" "}
            </code>{" "}
            command completes successfully, it will generate an{" "}
            <code
              style={{
                background: "grey",
                padding: 5,
                color: "#f0f0f0",
                borderRadius: 6,
              }}
            >
              aws-exports.js{" "}
            </code>{" "}
            file in the{" "}
            <code
              style={{
                background: "grey",
                padding: 5,
                color: "#f0f0f0",
                borderRadius: 6,
              }}
            >
              src
            </code>{" "}
            directory of your React project. This file contains your
            AWS Amplify configuration, which includes the necessary
            details for your authentication service and other AWS
            resources.
            <br />
            <br />
            That's it! By following these steps, you'll be able to
            get your AWS Amplify configuration and integrate it with
            your React app for authentication and other AWS
            services.
          </li>
        </ol>
        <p>
          Install the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            @aws-amplify/ui-react
          </code>{" "}
          package
        </p>
        <CopyBlock
          text={code8}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          In your{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            index.js
          </code>{" "}
          file, import the Amplify libraries and configure them:
        </p>
        <CopyBlock
          text={code9}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>For our contact manager, let start of with this;</p>
        <p>First, our contact form,</p>
        <p
          style={{
            borderLeft: "4px solid grey",
            paddingLeft: 15,
          }}
        >
          We will be using Amplify ui-react for our components
        </p>
        <CopyBlock
          text={code10}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          This should be our Form, we can then have our contact
          list;
        </p>
        <CopyBlock
          text={code11}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          Finally we can bring all this together in our{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            App.js;
          </code>{" "}
        </p>
        <CopyBlock
          text={code12}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          We This is very Straight forward React, and you can test
          your code
        </p>
        <CopyBlock
          text={code13}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <h4>Adding Amplify Auth;</h4>
        <CopyBlock
          text={code14}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          As seen the here, we’re are exposing both the user and
          also the signOut function, which are props provided by the
          higher order{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            withAuthenticator
          </code>{" "}
          component. We will be utilizing those later in the
          tutorial.
        </p>
        <p>
          If you ran into errors, make sure to review your steps or
          check out the the{" "}
          <a href="https://docs.amplify.aws/javascript/tools/cli/start/set-up-cli/#configure-the-amplify-cli">
            Amplify documentation
          </a>{" "}
          for setting up your AWS resources and configuring your app
          correctly.
        </p>
        <p>
          If everything works correctly, you should straight up be
          hit with an auth page like this:
        </p>
        <Image
          loading="lazy"
          src={Img9}
          alt="ilearn cloud"
        />
        <br /> <br />
        You can enter in your details and it will sent a
        verification OTP;
        <Image
          loading="lazy"
          src={Img10}
          alt="ilearn cloud"
        />
        <p>
          We can throw in another component, to handle our thing
          related to our user, like signout, and displaying the user
          info.
        </p>
        <CopyBlock
          text={code15}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          We can the update our App.js, Accordingly, passing signOut
          and user as props;
        </p>
        <CopyBlock
          text={code16}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <h4>Configuring CRUD APIs</h4>
        <p>
          That will complete our authentication flow, now what is
          left is to handle user data, I.e with DynamoDB that we
          configured.
        </p>
        <p>
          First off, let include this function in our form, to save
          to cloud before appeding to the list:
        </p>
        <CopyBlock
          text={code17}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          This should work nicely, Our contact will be saved to the
          cloud database, when we enter them.
        </p>
        <Image
          loading="lazy"
          src={Img11}
          alt="ilearn cloud"
        />
        <p>
          To fetch our items from cloud, we can use the following in
          our{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            list.js
          </code>{" "}
        </p>
        <CopyBlock
          text={code18}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          This will fetch our saved content when we sign in to our
          website;
        </p>
        <Image
          loading="lazy"
          src={Img12}
          alt="ilearn cloud"
        />
        <p>
          And, That is it for this demo, we can also publish our
          website on Amplify, with is one of the advantages of using
          AWS Amplify.
        </p>
        <p
          style={{
            borderLeft: "4px solid grey",
            paddingLeft: 15,
          }}
        >
          Notice that, update and delete are left out, you can test
          yourself by implementing those on your own. You can always
          refere to the AWS Amplify build & connect backend{" "}
          <a href="https://docs.amplify.aws/javascript/build-a-backend">
            documentation
          </a>
          ;
        </p>
        <p>
          You can easily set up continuous deployment pipelines,
          where your application is automatically deployed whenever
          you push changes to your repository. This streamlines the
          deployment process and ensures that your users always have
          access to the latest version of your application.
        </p>
        <p>To publish your app, use:</p>
        <CopyBlock
          text={code19}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>You should see something like this:</p>
        <Image
          loading="lazy"
          src={Img13}
          alt="ilearn cloud"
        />
        <p>it should complete with something like this:</p>
        <Image
          loading="lazy"
          src={Img14}
          alt="ilearn cloud"
        />
        <p>And we can view our live site on the url:</p>
        <Image
          loading="lazy"
          src={Img15}
          alt="ilearn cloud"
        />
        <h4>Extending your Application</h4>
        <p>
          AWS Amplify provides a simple way to add and configure
          various AWS services for your application using the
          Amplify CLI. In this section, we'll explore in brief, how
          easy it is to add other services like, API (GraphQL), and
          storage services to your React application.
        </p>
        <h4>API Management with AWS AppSync</h4>
        <p>
          AWS AppSync is a managed GraphQL service that simplifies
          the process of building data-driven applications with
          real-time and offline capabilities. With AWS Amplify, you
          can easily integrate AWS AppSync into your React
          application.
        </p>
        <ol>
          <li>
            Add API Service
            <br />
            Run the following command to add the API service to your
            Amplify project:
            <CopyBlock
              text={code20}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            You'll be prompted to select the service provider.
            Choose GraphQL and then select Amazon Cognito User Pool
            as the authentication type.
            <br />
            <br />
            Next, you'll be prompted to choose the data source. For
            this tutorial, we'll use the Create a new datasource
            service option and select Amazon DynamoDB.
            <br />
            <br />
            Follow the prompts to configure the API and data source
            according to your requirements. You can choose to use
            the default options for simplicity.
          </li>
          <li>
            Push Changes to the Cloud
            <br />
            <CopyBlock
              text={code21}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            This command will provision the AWS AppSync GraphQL API,
            Amazon DynamoDB table, and update your local
            configuration files with the necessary connection
            details.
          </li>
        </ol>
        <h4>Storage with Amazon S3</h4>
        <p>
          Amazon Simple Storage Service (Amazon S3) is a highly
          scalable and durable object storage service. With AWS
          Amplify, you can easily integrate Amazon S3 into your
          React application for storing and retrieving files,
          images, and other media assets.
        </p>
        <ol>
          <li>
            Add Storage Service
            <br />
            <CopyBlock
              text={code22}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            You'll be prompted to select the storage service. Choose
            Content (Images, audio, video, etc.). You can use the
            default options for the rest of the configuration.
          </li>
          <li>
            Push Changes to the Cloud
            <br />
            <CopyBlock
              text={code23}
              language="javascript"
              showLineNumbers={false}
              theme={a11yDark}
              wrapLongLines={true} />
            This command will provision the Amazon S3 bucket and
            update your local configuration files with the necessary
            connection details. With these three services
            (authentication, API management, and storage) added to
            your Amplify project, you're now ready to integrate them
            into your React application.
          </li>
        </ol>
        <h4>Integrating with React</h4>
        <p>
          In this section, we'll explore how to integrate the AWS
          services you've added into your React application using
          the AWS Amplify libraries.
        </p>
        <h5>Install AWS Amplify Libraries</h5>
        <p>
          First, install the required AWS Amplify libraries for
          React:
        </p>
        <CopyBlock
          text={code24}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <h5>Configure AWS Amplify in React</h5>
        <p>
          In your React application's entry point (typically
          index.js), import and configure AWS Amplify with the cloud
          resources you provisioned earlier:
        </p>
        <CopyBlock
          text={code25}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          The{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            aws-exports.js
          </code>{" "}
          file was generated during the `amplify push` step and
          contains the configuration details for your AWS services.
        </p>
        <h5>API Management (GraphQL)</h5>
        <p>
          To interact with the AWS AppSync GraphQL API, you can use
          the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            API
          </code>
          module from{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            aws-amplify
          </code>
          :
        </p>
        <CopyBlock
          text={code26}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          In this example, we're fetching a list of todos from the
          GraphQL API using the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            listTodos
          </code>{" "}
          query defined in the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            graphql/queries
          </code>{" "}
          file.
        </p>
        <h5>Storage</h5>
        <p>
          To interact with the Amazon S3 bucket for storing and
          retrieving files, you can use the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            Storage module
          </code>{" "}
          from{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            aws-amplify
          </code>
          ;
        </p>
        <CopyBlock
          text={code27}
          language="javascript"
          showLineNumbers={false}
          theme={a11yDark}
          wrapLongLines={true} />
        <p>
          In this example, we're demonstrating how to upload a file
          to the Amazon S3 bucket using the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            Storage.put
          </code>{" "}
          method and how to download a file using the{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            Storage.get
          </code>{" "}
          method.
        </p>
        <p>
          These are just a few examples of how you can integrate AWS
          services into your React application using AWS Amplify.
          You can find more examples and documentation for various
          AWS Amplify services and components on the{" "}
          <a href="https://docs.amplify.aws/">
            AWS Amplify Documentation
          </a>{" "}
          website.
        </p>
        <h4>Conclusion</h4>
        <p>
          By integrating AWS Amplify into your React application,
          you’re Introduced to a suite of powerful set of tools and
          services that streamline the development process and
          provide robust functionality out of the box. AWS Amplify
          simplifies the integration of essential cloud services,
          such as authentication, API management, storage, and
          analytics, allowing you to focus on building compelling
          user experiences with React.
        </p>
        <p>
          One of the key advantages of using AWS Amplify with React
          is the ease of implementing authentication flows. The{" "}
          <code
            style={{
              background: "grey",
              padding: 5,
              color: "#f0f0f0",
              borderRadius: 6,
            }}
          >
            @aws-amplify/ui-react
          </code>{" "}
          library provides a pre-built, customizable UI components
          that handle user sign-in, sign-up, and sign-out processes
          seamlessly. This not only enhances security but also
          ensures a consistent and user-friendly authentication
          experience across your application.
        </p>
        <p>
          Beyond authentication, AWS Amplify offers a range of
          services that can be seamlessly integrated into your React
          application. With the Rest API and DynamoDB, you can
          easily build scalable and data-driven applications, while
          the Storage service provides a secure and reliable way to
          manage user-generated content.
        </p>
        <p>
          To learn more about the capabilities of AWS Amplify and
          how it can supercharge your React development, visit the
          official documentation:{" "}
          <a href="https://docs.amplify.aws/javascript/build-a-backend">
            here
          </a>
        </p>
        <p>
          By combining the power of React's reactive and
          component-based approach with the comprehensive set of
          services offered by AWS Amplify, you can build modern,
          scalable, and feature-rich applications that deliver
          exceptional user experiences while leveraging the
          reliability and scalability of AWS.
        </p>
        <h6>Continue Reading</h6>
        <p>
          <a href="https://cloudplexo.com/introduction-to-aws-cli-basic-commands-for-beginners">
            Introduction to AWS CLI: Basic Commands for Beginners
          </a>
        </p>
        <p>
          <a href="https://cloudplexo.com/optimizing-cloud-costs-for-businesses-with-cloudplexo">
            Optimizing Cloud Costs for Businesses: Strategies,
            Tools, and Savings with CloudPlexo
          </a>
        </p>
        <h5 className="mt-4">Comments :</h5>
        <h5 className="mt-4">Leave A Comment :</h5>
        {/* <Form className="mt-3">
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label>Your Comment</Label>
                            <div className="position-relative">
                              <textarea
                                id="message"
                                placeholder="Your Comment"
                                rows="5"
                                name="message"
                                className="form-control pl-5"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </Col>

                        <div className="col-lg-6">
                          <FormGroup>
                            <Label>
                              Name <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                className="form-control pl-5"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </div>

                        <div className="col-lg-6">
                          <FormGroup>
                            <Label>
                              Your Email <span className="text-danger">*</span>
                            </Label>
                            <div className="position-relative">
                              <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control pl-5"
                                required=""
                              />
                            </div>
                          </FormGroup>
                        </div>

                        <Col md={12}>
                          <div className="send">
                            <Button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Send Message
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form> */}
      </div>
    </section >
  )
}
