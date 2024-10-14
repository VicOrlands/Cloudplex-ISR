"use client";
import React from "react";
import Image from "next/image";
import FeatherIcon from "feather-icons-react";
import styles from "./styles.module.css";

import { CodeBlock, a11yDark } from "react-code-blocks";

const code1 = `IF (host-header == 'www.example.com')
THEN
    redirect (https://example.com/#{path}?#{query})`;

const code2 = `exports.handler = async (event) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    const host = headers.host[0].value;

    if (host.startsWith('www.')) {
        const newHost = host.slice(4);
        return {
            status: '301',
            statusDescription: 'Moved Permanently',
            headers: {
                'location': [{
                    key: 'Location',
                    value: \`https://{newHost}{request.uri}\`
                }]
            }
        };
    }
    return request;
};`;

const code3 = `function handler(event) {
    var request = event.request;
    var headers = request.headers;
    var host = headers.host.value;

    if (host.startsWith('www.')) {
        var newHost = host.slice(4);
        var response = {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: https://{newHost}{request.uri} }
            }
        };
        return response;
    }

    return request;
}`;

export default function BlogFiftyEight() {
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
        <h1 id="full-guide-redirecting-www-to-non-www-in-aws">
          Full Guide: Redirecting www to non-www in AWS
        </h1>
        <p>
          Maintaining a consistent URL structure is crucial for website
          management and search engine optimization (SEO). This guide explores
          five methods to redirect the &quot;www&quot; subdomain to the root
          domain (e.g., from{" "}
          <a href="http://www.cloudplexo.com">www.cloudplexo.com</a> to
          cloudplexo.com) using AWS services.
        </p>
        <h2 id="seo-implications-of-www-vs-non-www-redirects">
          SEO Implications of www vs. non-www Redirects
        </h2>
        <p>
          The choice between www and non-www URLs, and implementing proper
          redirects, can significantly impact your website&#39;s SEO:
        </p>
        <ul>
          <li>
            <strong>Consistency</strong>: Search engines view www and non-www
            versions as separate URLs. Choosing one version and consistently
            redirecting to it prevents duplicate content issues, which can
            dilute your SEO efforts.
          </li>
          <li>
            <strong>Link equity</strong>: Proper redirection ensures that all
            link equity (ranking power) is consolidated to your preferred
            domain, rather than being split between www and non-www versions.
          </li>
          <li>
            <strong>User experience</strong>: Consistent URLs create a better
            user experience, which is a factor in SEO rankings.
          </li>
          <li>
            <strong>Canonical URLs</strong>: While using canonical tags can
            help, redirects are a stronger signal to search engines about your
            preferred domain.
          </li>
          <li>
            <strong>HTTPS considerations</strong>: If you&#39;re also moving
            from HTTP to HTTPS, implementing both changes simultaneously (e.g.,
            from{" "}
            <a href="http://www.cloudplexo.com">http://www.cloudplexo.com</a> to{" "}
            <a href="https://example.com">https://cloudplexo.com</a>) can be
            done with a single redirect, improving site speed.
          </li>
          <li>
            <strong>301 vs. 302 redirects</strong>: For SEO purposes, always use
            301 (permanent) redirects rather than 302 (temporary) redirects when
            standardizing on www or non-www. 301 redirects pass maximum link
            equity to the target URL.
          </li>
          <li>
            <strong>Crawl budget</strong>: Proper redirection helps search
            engines crawl your site more efficiently by avoiding unnecessary
            crawls of duplicate URLs.
          </li>
          <li>
            <strong>Analytics accuracy</strong>: Consistent URLs ensure more
            accurate tracking in analytics tools, providing better data for SEO
            analysis and decision-making.
          </li>
        </ul>
        <p>
          When implementing any of the following redirection methods, ensure
          they result in proper 301 redirects to maximize SEO benefits. Also,
          after implementation, update your Google Search Console and other
          webmaster tools to reflect your preferred domain.
        </p>
        <h2 id="1-amazon-s3-and-cloudfront">1. Amazon S3 and CloudFront</h2>
        <p>
          <strong>Implementation:</strong>
        </p>
        <ol>
          <li>
            Create two S3 buckets: one for the root domain (example.com) and
            another for the www subdomain (www.example.com).
          </li>
          <li>
            Configure the www bucket for static website hosting with a redirect
            to the root domain.
          </li>
          <li>Create a CloudFront distribution for the root domain.</li>
          <li>
            Set up another CloudFront distribution for the www subdomain,
            pointing to the www S3 bucket.
          </li>
          <li>
            Configure SSL certificates for both distributions using AWS
            Certificate Manager.
          </li>
        </ol>
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>Scalable and cost-effective for static websites</li>
          <li>Leverages AWS&#39;s global CDN network</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>Requires management of multiple AWS services</li>
          <li>Not ideal for dynamic websites</li>
        </ul>
        <h2 id="2-amazon-route-53-with-alias-records">
          2. Amazon Route 53 with Alias Records
        </h2>
        <p>
          <strong>Implementation:</strong>
        </p>
        <ol>
          <li>Create a hosted zone for your domain in Route 53.</li>
          <li>
            Create an A record for your root domain, pointing to your
            website&#39;s endpoint (e.g., EC2 instance or load balancer).
          </li>
          <li>
            Create another A record for the www subdomain, setting it as an
            Alias to the root domain record.
          </li>
        </ol>
        <Image
          width={100}
          height={100}
          src="https://paper-attachments.dropboxusercontent.com/s_E78C9B195B7FAB26900FBDBAD59AD5D62B3CFF37D133E559F0B9915A3CB9D15F_1728889619973_Getting+Started+with+DynamoDB1.png"
          alt=""
        />
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>Simple setup and management</li>
          <li>Integrates well with other AWS services</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>
            Doesn&#39;t provide actual redirection, just resolves both to the
            same IP
          </li>
          <li>May not be suitable for true 301 redirects needed for SEO</li>
        </ul>
        <h2 id="3-application-load-balancer-alb-">
          3. Application Load Balancer (ALB)
        </h2>
        <p>
          <strong>Implementation:</strong>
        </p>
        <ul>
          <li>Create an Application Load Balancer in your VPC.</li>
          <li>
            Set up listeners for both HTTP (port 80) and HTTPS (port 443).
          </li>
          <li>Create two target groups:</li>
          <li>One for your main website (e.g., example.com)</li>
          <li>
            Another empty target group for the www subdomain (
            <a href="http://www.example.com">www.example.com</a>)
          </li>
          <li>
            Configure listener rules: For the HTTP listener: a. Add a rule to
            redirect all HTTP traffic to HTTPS For the HTTPS listener: a. Add a
            rule to handle requests for{" "}
            <a href="http://www.example.com">www.example.com</a>:
          </li>
          <li>
            Condition: host-header equals{" "}
            <a href="http://www.example.com">www.example.com</a>
          </li>
          <li>
            Action: redirect to{" "}
            <a href="https://example.com/#%7Bpath%7D?#%7Bquery%7D">
              {`https://example.com/#{path}?#{query}`}
            </a>{" "}
            b. Add a default rule to forward requests to your main website
            target group
          </li>
        </ul>
        <p>
          <strong>Example rule:</strong>
        </p>
        <p>
          <CodeBlock
            text={code1}
            language="javascript"
            showLineNumbers={false}
            theme={a11yDark}
            wrapLongLines={true}
          />
        </p>
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>Provides true 301 redirects</li>
          <li>Highly configurable and suitable for dynamic websites</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>More expensive than S3/CloudFront for static sites</li>
          <li>Requires management of VPC and EC2 instances</li>
        </ul>
        <h2 id="4-aws-lambda-edge-with-cloudfront">
          4. AWS Lambda@Edge with CloudFront
        </h2>
        <p>
          <strong>Implementation:</strong>
        </p>
        <ol>
          <li>Create a CloudFront distribution for your website.</li>
          <li>
            Write a Lambda function to check the host header and redirect if
            necessary.
          </li>
          <li>
            Configure the Lambda function to trigger on viewer request events.
          </li>
        </ol>
        <p>
          <strong>Example Lambda function (Node.js):</strong>
        </p>
        <p>
          <CodeBlock
            text={code2}
            language="javascript"
            showLineNumbers={false}
            theme={a11yDark}
            wrapLongLines={true}
          />
        </p>
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>Highly customizable and powerful</li>
          <li>Provides low-latency redirects at the edge</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>More complex setup and management</li>
          <li>Requires JavaScript/Node.js knowledge</li>
        </ul>
        <h2 id="5-cloudfront-functions">5. CloudFront Functions</h2>
        <p>
          <strong>Implementation:</strong>
        </p>
        <ol>
          <li>Set up a CloudFront distribution for your website.</li>
          <li>Create a CloudFront Function with the following code:</li>
        </ol>
        <p>
          <CodeBlock
            text={code3}
            language="javascript"
            showLineNumbers={false}
            theme={a11yDark}
            wrapLongLines={true}
          />
        </p>
        <blockquote>
          <p>
            Associate the function with your CloudFront distribution&#39;s
            Viewer request event.
          </p>
        </blockquote>
        <Image
          width={100}
          height={100}
          src="https://paper-attachments.dropboxusercontent.com/s_E78C9B195B7FAB26900FBDBAD59AD5D62B3CFF37D133E559F0B9915A3CB9D15F_1728890930357_Screenshot+from+2024-10-14+08-28-30.png"
          alt=""
        />
        <p>
          <strong>Pros:</strong>
        </p>
        <ul>
          <li>Extremely fast execution (sub-millisecond startup times)</li>
          <li>Cost-effective for simple operations</li>
          <li>Simpler setup compared to Lambda@Edge</li>
        </ul>
        <p>
          <strong>Cons:</strong>
        </p>
        <ul>
          <li>Limited functionality compared to Lambda@Edge</li>
          <li>Only supports JavaScript</li>
          <li>
            <p>Cannot make network calls or use external libraries</p>
            <h2 id="comparison-of-edge-computing-options">
              Comparison of Edge Computing Options
            </h2>
          </li>
        </ul>
        <Image
          width={100}
          height={100}
          src="https://paper-attachments.dropboxusercontent.com/s_E78C9B195B7FAB26900FBDBAD59AD5D62B3CFF37D133E559F0B9915A3CB9D15F_1728891025026_Screenshot+2024-10-14+at+07-43-58+Full+Guide+Redirecting+www+to+non-www+in+AWS++Dropbox+Paper.png"
          alt=""
        />
        <h2 id="conclusion">Conclusion</h2>
        <p>
          Each method has its strengths and is suited to different scenarios:
        </p>
        <ul>
          <li>
            For static websites, the S3/CloudFront approach is often
            cost-effective.
          </li>
          <li>For dynamic sites, ALB provides more flexibility.</li>
          <li>
            <p>For edge-level redirects:</p>
            <ul>
              <li>
                CloudFront Functions are ideal for simple redirects like www to
                non-www.
              </li>
              <li>Lambda@Edge offers more power for complex scenarios.</li>
            </ul>
          </li>
        </ul>
        <p>
          When choosing the best approach, consider your specific needs, traffic
          patterns, performance requirements, and management capabilities.
        </p>
      </div>
    </section>
  );
}
