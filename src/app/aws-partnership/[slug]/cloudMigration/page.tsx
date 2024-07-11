import Migration from "./Migration";
import CloudData from "./CloudData";

export async function generateStaticParams() {
  return [{
    slug: "cloud-migration"
  }]
}

function CloudMigration() {
  return (
    <>
      <Migration />
      <CloudData />
    </>
  );
}

export default CloudMigration;
