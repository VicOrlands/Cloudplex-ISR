import Image from "next/image";
import image from "@/assets/backup/file.png";

function Modules3() {
  return (
    <section className="modules">
      <Image
        src={image}
        alt="Prevent Data Loss Due to Failed Storage Drives"
      />

      <div>
        <h2>Prevent Data Loss Due to Failed Storage Drives</h2>
        <p>
          In the case of a data loss due to manmade or natural disasters
          that can result to a failure of a storage drive. Our secured
          and reliable Backup and Recovery tool can help prevent storage
          drive failure data loss.
        </p>
      </div>
    </section>
  );
}

export default Modules3;
