import type { Metadata } from "next";
import styles from "../terms-of-service/styles.module.css"

export const metadata: Metadata = {
    title: "CloudPlexo Cookie Policy",
    description: "Learn how CloudPlexo uses cookies and how they impact your experience on our website and services. Review our Cookie Policy for details",
    keywords: ['CloudPlexo Cookie Policy'],
    alternates: {
        canonical: 'https://www.cloudplexo.com/cookie-policy',
    },
};

const PagePrivacy = () => {
    return (
        <section className={styles["policy-page"]}>
            <h1>Cookie policy</h1>
            <p>
                This cookie policy (&quot;Policy&quot;) describes what
                cookies are and how and they&#039;re being used by the
                cloudplexo website (&quot;Website&quot; or
                &quot;Service&quot;) and any of its related products and
                services (collectively, &quot;Services&quot;). This Policy
                is a legally binding agreement between you
                (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;)
                and Cloudplexo (&quot;Cloudplexo&quot;, &quot;we&quot;,
                &quot;us&quot; or &quot;our&quot;). You should read this
                Policy so you can understand the types of cookies we use,
                the information we collect using cookies and how that
                information is used. It also describes the choices
                available to you regarding accepting or declining the use
                of cookies.
            </p>
            <h2>What are cookies?</h2>
            <p>
                Cookies are small pieces of data stored in text files that
                are saved on your computer or other devices when websites
                are loaded in a browser. They are widely used to remember
                you and your preferences, either for a single visit
                (through a &quot;session cookie&quot;) or for multiple
                repeat visits (using a &quot;persistent cookie&quot;).
            </p>
            <p>
                Session cookies are temporary cookies that are used during
                the course of your visit to the Website, and they expire
                when you close the web browser.
            </p>
            <p>
                Persistent cookies are used to remember your preferences
                within our Website and remain on your desktop or mobile
                device even after you close your browser or restart your
                computer. They ensure a consistent and efficient
                experience for you while visiting the Website and
                Services.
            </p>
            <p>
                Cookies may be set by the Website (&quot;first-party
                cookies&quot;), or by third parties, such as those who
                serve content or provide advertising or analytics services
                on the Website (&quot;third party cookies&quot;). These
                third parties can recognize you when you visit our website
                and also when you visit certain other websites
            </p>
            <h2>What type of cookies do we use?</h2>
            <h3>Necessary cookies</h3>
            <p>
                Necessary cookies allow us to offer you the best possible
                experience when accessing and navigating through our
                Website and using its features. For example, these cookies
                let us recognize that you have created an account and have
                logged into that account to access the content.
            </p>
            <h3>Functionality cookies</h3>
            <p>
                Functionality cookies let us operate the Website and
                Services in accordance with the choices you make. For
                example, we will recognize your username and remember how
                you customized the Website and Services during future
                visits.
            </p>
            <h2>What are your cookie options?</h2>
            <p>
                If you don't like the idea of cookies or certain types of
                cookies, you can change your browser's settings to delete
                cookies that have already been set and to not accept new
                cookies. To learn more about how to do this, visit{" "}
            </p>
            <h2>Changes and amendments</h2>
            <p>
                We reserve the right to modify this Policy or its terms
                relating to the Website and Services at any time,
                effective upon posting of an updated version of this
                Policy on the Website. When we do, we will post a
                notification on the main page of the Website. Continued
                use of the Website and Services after any such changes
                shall constitute your consent to such changes.
            </p>
            <h2>Acceptance of this policy</h2>
            <p>
                You acknowledge that you have read this Policy and agree
                to all its terms and conditions. By accessing and using
                the Website and Services you agree to be bound by this
                Policy. If you do not agree to abide by the terms of this
                Policy, you are not authorized to access or use the
                Website and Services.
            </p>
            <h2>Contacting us</h2>
            <p>
                If you would like to contact us to understand more about
                this Policy or wish to contact us concerning any matter
                relating to our use of cookies, you may send an email to
                &#99;&#111;&#110;t&#97;ct&#64;&#99;l&#111;&#117;dp&#108;&#101;&#120;o&#46;c&#111;&#109;.
            </p>
            <p>This document was last updated on March 17, 2021</p>
        </section >
    );
}
export default PagePrivacy;
