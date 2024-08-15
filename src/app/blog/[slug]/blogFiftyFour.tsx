"use client"
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"
import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import badge from "@/assets/blog/blog54/Building an image analyzer with react and amazon rekognition.webp";
import Img1 from "@/assets/blog/blog54/one.png";
import Img2 from "@/assets/blog/blog54/two.png";
import Img3 from "@/assets/blog/blog54/third.png";
import Img4 from "@/assets/blog/blog54/four.png";
import { CopyBlock, a11yDark } from "react-code-blocks";

const code1 = `
npx create-react-app image-analyzer
cd image-analyzer
npm install aws-sdk axios react-dropzone
`;

const code2 = `
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-west-2', // Replace with your preferred region
  credentials: new AWS.Credentials(
    process.env.REACT_APP_AWS_ACCESS_KEY,
    process.env.REACT_APP_AWS_SECRET_KEY
  )
});

export const rekognition = new AWS.Rekognition();
`

const code3 = `
REACT_APP_AWS_ACCESS_KEY=your_access_key_here
REACT_APP_AWS_SECRET_KEY=your_secret_key_here`

const code4 = `
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { rekognition } from './aws-config';

function App() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
    setResults(null);
  };

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop, 
    accept: 'image/*', 
    multiple: false 
  });

  // ... (analyzeImage function and JSX will be added later)
}
`

const code5 = `
const analyzeImage = async () => {
  if (!image) return;

  setLoading(true);
  const reader = new FileReader();
  reader.onload = async (event) => {
    const imageBytes = new Uint8Array(event.target.result);

    try {
      const labelData = await rekognition.detectLabels({
        Image: { Bytes: imageBytes },
        MaxLabels: 10,
        MinConfidence: 70
      }).promise();

      const textData = await rekognition.detectText({
        Image: { Bytes: imageBytes }
      }).promise();

      setResults({ labels: labelData.Labels, text: textData.TextDetections });
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('Error analyzing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  reader.readAsArrayBuffer(image);
};
`

const code6 = `
return (
  <div className="App">
    <h1>Image Analyzer</h1>
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drag & drop an image here, or click to select one</p>
    </div>
    {image && (
      <div>
        <img 
          src={URL.createObjectURL(image)} 
          alt="Uploaded" 
          className="uploaded-image" 
        />
        <button onClick={analyzeImage} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Image'}
        </button>
      </div>
    )}
    {results && (
      <div className="results">
        <h2>Analysis Results:</h2>
        <h3>Labels:</h3>
        <ul>
          {results.labels.map((label, index) => (
            <li key={index}>
              {label.Name} - Confidence: {label.Confidence.toFixed(2)}%
            </li>
          ))}
        </ul>
        <h3>Detected Text:</h3>
        <ul>
          {results.text
            .filter(item => item.Type === 'LINE')
            .map((textItem, index) => (
              <li key={index}>{textItem.DetectedText}</li>
            ))}
        </ul>
      </div>
    )}
  </div>
);
`
const example1 = `[{Name: "Cat", Confidence: 99.15 }, ...]`
const example2 = `[{DetectedText: "Hello", Type: "LINE", Confidence: 98.43 }, ...]`

export default class BlogFiftyFour extends Component {
    render() {
        return (
            <section className={styles["blog"]}>
                <ul className={styles["socials"]}>
                    <li>Share</li>
                    <li>
                        <Link
                            href="https://www.facebook.com/sharer/sharer.php?u=https://cloudplexo.com/building-an-image-analyzer-with-react-and-amazon-rekognition"
                            target="blank"
                        >
                            <FeatherIcon
                                icon="facebook"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://twitter.com/intent/tweet?url=https://cloudplexo.com/building-an-image-analyzer-with-react-and-amazon-rekognition"
                            target="blank"
                        >
                            <FeatherIcon
                                icon="twitter"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/shareArticle?mini=true&url=https://cloudplexo.com/building-an-image-analyzer-with-react-and-amazon-rekognition"
                            target="blank"
                        >
                            <FeatherIcon
                                icon="linkedin"
                            />
                        </Link>
                    </li>
                </ul>

                <div className={styles["main-content"]}>
                    <h1>Building an Image Analyzer with React and Amazon Rekognition</h1>
                    <br />
                    <Image src={badge} alt="awspartnerbadge" />
                    <br />
                    <br />

                    <h2>Introduction</h2>
                    <p>
                        In this tutorial, we'll create an Image Analyzer app using React and Amazon Rekognition. This app allows users to upload images and receive AI-powered analysis of the content, including object detection and text recognition. We'll focus on the technical implementation.
                    </p>

                    <h2>1: Setting Up the Project:</h2>
                    <ol type="a">
                        <li>First, create a new React project and install necessary dependencies:
                            <CopyBlock
                                text={code1}
                                language="javascript"
                                showLineNumbers={false}
                                theme={a11yDark}
                                wrapLongLines={true}
                            />
                            These commands set up a new React project and install:
                        </li>
                        <li>aws-sdk: For interacting with Amazon Rekognition</li>
                        <li>axios: For making HTTP requests (though we won't use it directly in this tutorial)
                        </li>
                        <li>react-dropzone: For easy file uploads</li>
                    </ol>

                    <h2>2. Configuring AWS:</h2>
                    <p>
                        Create an AWS account and set up an IAM user with permissions for Amazon Rekognition. Then, create a file named aws-config.js in your src folder:
                        <CopyBlock
                            text={code2}
                            language="javascript"
                            showLineNumbers={false}
                            theme={a11yDark}
                            wrapLongLines={true}
                        />
                    </p>

                    <p>This code configures the AWS SDK with your credentials. Make sure to create a `.env` file in your project root with your actual AWS credentials:
                        <CopyBlock
                            text={code3}
                            language="javascript"
                            showLineNumbers={false}
                            theme={a11yDark}
                            wrapLongLines={true}
                        />
                    </p>
                    <p>IMPORTANT: Never commit your .env file to version control!</p>

                    <h2>3. Building the Main Component:</h2>
                    <p>
                        In App.js, create the main structure of the application:
                        <CopyBlock
                            text={code4}
                            language="javascript"
                            showLineNumbers={false}
                            theme={a11yDark}
                            wrapLongLines={true}
                        />
                    </p>
                    <p>This sets up our component with three state variables:</p>
                    <ul>
                        <li>
                            image: Stores the uploaded image file
                        </li>
                        <li>results: Stores the analysis results from Rekognition</li>
                        <li>loading: Indicates whether an analysis is in progress</li>
                    </ul>

                    <p>The <code
                        style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                        }}
                    >onDrop</code> function updates the image state when a file is uploaded and clears any previous results.
                    </p>
                    <p>The <code
                        style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                        }}
                    >useDropzone</code> hook is configured to accept only image files and allow only single file uploads.</p>

                    <h2>4. Implementing Image Analysis:</h2>
                    <p>Add the <code
                        style={{
                            background: "grey",
                            padding: 5,
                            color: "#f0f0f0",
                            borderRadius: 6,
                        }}
                    >analyzeImage</code> function to perform the analysis using Amazon Rekognition:
                        <CopyBlock
                            text={code5}
                            language="javascript"
                            showLineNumbers={false}
                            theme={a11yDark}
                            wrapLongLines={true}
                        />
                    </p>
                    <p>This function:</p>
                    <ul>
                        <li>We define an asynchronous function named analyzeImage.
                        </li>
                        <li>It's asynchronous because we'll be performing operations that take time to complete.</li>
                    </ul>

                    <p>Initial Checks:</p>
                    <ul>
                        <li>We first check if an image exists. If not, we immediately return from the function.
                        </li>
                        <li>We set a loading state to true, indicating that analysis has begun.</li>
                    </ul>

                    <p>File Reading Setup:</p>
                    <ul>
                        <li>We create a new FileReader object. This is a built-in browser API for reading file contents.
                        </li>
                        <li>We define what should happen when the file is successfully loaded using the onload event handler.</li>
                    </ul>

                    <p>File Reading Process:</p>
                    <ul>
                        <li>inside the onload handler, we create a Uint8Array from the loaded file data.
                        </li>
                        <li>Uint8Array is used because Amazon Rekognition expects image data as a byte array.</li>
                    </ul>

                    <p> Rekognition API Calls:</p>
                    <ul>
                        <li>We make two separate calls to Amazon Rekognition services.
                        </li>
                        <li>a. detectLabels: This identifies objects, scenes, and activities in the image.</li>
                        <li>b. detectText: This recognizes and extracts any text present in the image.</li>
                        <li>Both calls are made using the promise() method to handle the asynchronous nature of the API.</li>
                    </ul>

                    <p>detectLabels Configuration:</p>
                    <ul>
                        <li>We pass the image bytes to the API.
                        </li>
                        <li>We set a maximum of 10 labels to be returned.</li>
                        <li>We set a minimum confidence threshold of 70% for the labels.</li>
                    </ul>

                    <p>detectText Configuration:</p>
                    <ul>
                        <li>We only need to pass the image bytes for this call.</li>
                    </ul>

                    <p>Handling Results:</p>
                    <ul>
                        <li>Once both API calls complete, we update our component's state with the results.
                        </li>
                        <li>We store the labels and text detections in an object.</li>
                    </ul>

                    <p>Error Handling:</p>
                    <ul>
                        <li>If any error occurs during the API calls, we catch it.</li>
                        <li>We log the error to the console for debugging.</li>
                        <li>We display an alert to the user informing them of the error.</li>
                    </ul>

                    <p>Cleanup:</p>
                    <ul>
                        <li>Whether the API calls succeed or fail, we set the loading state back to false.</li>
                    </ul>

                    <p>Example return types:</p>
                    <ul>
                        <li><code
                            style={{
                                background: "grey",
                                padding: 5,
                                color: "#f0f0f0",
                                borderRadius: 6,
                            }}
                        >labelData.Labels</code>: An array of objects like {example1}</li>
                        <li>textData.TextDetections: An array of objects like {example2}
                        </li>
                    </ul>

                    <h2>Rendering the UI:</h2>
                    <p>
                        Add the JSX to render the application:
                        <CopyBlock
                            text={code6}
                            language="javascript"
                            showLineNumbers={false}
                            theme={a11yDark}
                            wrapLongLines={true}
                        />
                    </p>
                    <p>This JSX:</p>
                    <ul>
                        <li>
                            Renders a dropzone for image uploads
                            <Image src={Img1} alt="Building an Image Analyzer with React and Amazon Rekognition" />
                        </li>
                        <li>Displays the uploaded image when available</li>
                        <li>Provides an "Analyze" button that triggers the analysis
                            <Image src={Img2} alt="Building an Image Analyzer with React and Amazon Rekognition" />
                        </li>
                        <li>Shows loading state during analysis
                            <Image src={Img3} alt="Building an Image Analyzer with React and Amazon Rekognition" />
                        </li>
                        <li>Displays the analysis results, including detected labels and text
                            <Image src={Img4} alt="Building an Image Analyzer with React and Amazon Rekognition" />
                        </li>
                    </ul>

                    <h2>Styling the Application:</h2>
                    <p>
                        Add your CSS styles in App.css. We won't go into detail about our CSS.
                    </p>
                    <p style={{ borderLeft: "3px solid grey", paddingLeft: 10 }}>Get full code here - <a href="https://github.com/Abdulmumin1/aws-demos">GitHub - Abdulmumin1/aws-demos</a></p>
                    <p>Check out our previous tutorial - <a href="https://www.cloudplexo.com/blog/building-an-email-subscription-and-broadcasting-system-with-react-and-aws-sns/">Building an Email Subscription and Broadcasting System with React and AWS SNS.</a></p>

                    <h6>Conclusion:</h6>
                    <p>You've now created a functional Image Analyzer using React and Amazon Rekognition. This app demonstrates:</p>
                    <ul>
                        <li>Integration of AWS services in a React application</li>
                        <li>Handling file uploads with react-dropzone</li>
                        <li>Asynchronous operations with loading states</li>
                        <li>Displaying the data from the AI analysis</li>
                    </ul>

                    <p>Next steps could include:</p>
                    <ul>
                        <li>Adding error handling for various scenarios (e.g., network errors, unsupported file types)</li>
                        <li>Implementing more Rekognition features (e.g., face detection, celebrity recognition)</li>
                        <li>Enhancing the UI with more detailed results or visualizations</li>
                        <li>Adding the ability to analyze multiple images or compare images</li>
                    </ul>

                    <p style={{ borderLeft: "3px solid grey", paddingLeft: 10 }}>Remember to handle your AWS credentials securely and consider implementing server-side code for production use to keep your AWS credentials private.
                    </p>

                    <p>AWS Rekognition is really powerful and it offers a wide range of image and video analysis capabilities. Its key features include:
                    </p>

                    <ol>
                        <li>Object and Scene Detection: Identifies thousands of objects, scenes, and activities in images and videos.
                        </li>
                        <li>Facial Analysis: Detects faces, analyzes facial attributes, and can perform facial comparison and recognition.</li>
                        <li>Text in Image (OCR): Recognizes and extracts text from images, supporting multiple languages.</li>
                        <li>Celebrity Recognition: Identifies celebrities in images and videos.</li>
                        <li>Content Moderation: Detects inappropriate or offensive content in images and videos.</li>
                        <li>Custom Labels: Allows you to train the service to recognize custom objects and scenes specific to your use case.</li>
                        <li>Personal Protective Equipment (PPE) Detection: Identifies if individuals in images are wearing items like face covers, hand covers, and head covers.</li>
                        <li>Video Analysis: Extends many of its image capabilities to video, including object detection, face recognition, and activity recognition.</li>
                        <li>Streaming Video Analysis: Provides real-time analysis of streaming video.</li>
                        <li>Facial Search: Allows searching and comparing faces across large collections of images.</li>
                    </ol>

                    <p>Rekognition's capabilities make it suitable for a wide range of applications, including:</p>
                    <ul>
                        <li>Content moderation for social media platforms</li>
                        <li>Automated image and video tagging for media organizations</li>
                        <li>Security and surveillance systems</li>
                        <li>User verification for financial services</li>
                        <li>Inventory management in retail</li>
                        <li>Sentiment analysis in customer service</li>
                    </ul>

                    <p>The service is designed to be easy to use, requiring no machine learning expertise to get started. It's scalable, cost-effective (you only pay for the images and videos you analyze), and continuously improving as Amazon updates its underlying models.
                    </p>

                    <p>However, it's important to note that, like all AI services, Rekognition has limitations. Its accuracy can vary depending on image quality, lighting conditions, and other factors. Also, the use of facial recognition technology raises privacy concerns that should be carefully considered in any implementation.
                    </p>

                    <p>In our Image Analyzer app, we've only scratched the surface of what Rekognition can do. There's vast potential for expanding your app's capabilities by leveraging more of Rekognition's features.</p>
                </div>
            </section >
        );
    }
}
