import React from "react";
import Partners from "../../Partners";
import SEO from "../../../components/SEO";
import VideoReview from "../../VideoReview";
import data from "../../../assets/images/cloud/data.gif";
import HeroImg from "../../../assets/images/cloud/codecollaboration.png";

export default function Migration() {
  return (
    <React.Fragment>
      <SEO
        title="Efficient Cloud Migration Services | CloudPlexo"
        description="Explore CloudPlexo's cloud migration services. Ensure a smooth transition to the cloud with our expert solutions. Elevate your business efficiency today."
        keywords="cloud migration service providers, cloud migration services aws, cloud migration readiness assessment, cloud migration specialists, cloud data migration, cloud migration service, cloud cost savings, AWS server migration automation, large-scale cloud migration, agile cloud transition, cost-effective server migration"
      />

      <section className="cloud-migration">
        <div className="cloud-migration-hero-section">
          <div>
            <h1>Migrating large numbers of servers to the AWS Cloud.</h1>
            <p>
              Cloud Migration Factory automates the coordination and automation
              of large migrations to the cloud, including multiple servers, by
              automating manual processes and integrating multiple tools
              efficiently.
            </p>

            <div className="partnership-hero-btn">
              <a href="/contact-us">Contact us</a>

              <a href="#partnership">Learn more</a>
            </div>
          </div>

          <div className="partnership-hero-img">
            <img
              src={HeroImg}
              alt="CloudPlexo AWS Cloud - Expert Cloud Solutions"
            />
          </div>
        </div>

        <Partners />

        <section id="partnership" className="cloud-migration-cost">
          <div>
            <img
              src={data}
              alt="Efficient Cloud Migration Services | CloudPlexo"
              className="img-fluid d-block mx-auto cloud-migration-image-2"
            />
          </div>

          <div>
            <h2>Cloud Migration + Cost Savings = Innovation + Agility</h2>
            <p>
              Power transformational Goals that drive innovation. Reduce IT
              cost, increase innovation and become more agile by embracing cloud
              migration.
            </p>
            <p>
              The key to modern business success is agility to respond to
              ever-changing business requirements. Transition to the cloud
              provides cost savings, scalability, performance and agility.
            </p>
          </div>
        </section>

        <section className="cloud-migration-success">
          <h2>Client Success Stories</h2>
          <p id="p-header">Explore how CloudPlexo has transformed businesses</p>

          <VideoReview />
        </section>
      </section>
    </React.Fragment>
  );
}
