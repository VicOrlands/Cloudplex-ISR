import AWSLogo from "@/assets/backup/aws.png";
import GoogleLogo from "@/assets/backup/google.png";
import AzureLogo from "@/assets/backup/azure.png";
import Image from "next/image";

function Modules() {
  return (
    <section className="modules" id="backup-services">
      <div className="ml-md-3">
        <h3 className="title">Data Backup & Recovery</h3>
        <p className="modules-text">
          Backing up your data is a crucial to be safe from Ransomware.
          CloudPlexo Backup and Recovery solution provides an automated
          backup and recovery solution for Desktops, laptops,
          think-clients, servers and also data stored in the cloud. Backup
          and restore is secure both at rest or in transit.
        </p>
      </div>

      <div className="modules-cloud">
        <h3 className="title">Cloud Modules</h3>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={AWSLogo}
              className="img-fluid"
              alt="Backup For AWS"
            />
            <p className="ml-3">Backup For AWS</p>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={AzureLogo}
              className="img-fluid"
              alt="Backup For Microsoft Azure"
            />
            <p className="ml-3">Backup For Microsoft Azure</p>
          </div>
          <div className="d-flex  gap-2 align-items-center">
            <Image
              src={GoogleLogo}
              className="img-fluid"
              alt="Backup For Google Cloud"
            />
            <p className="ml-3">Backup For Google Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modules;
