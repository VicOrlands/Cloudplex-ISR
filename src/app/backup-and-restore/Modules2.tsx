import Image from "next/image";
import image from "@/assets/backup/note.png";

function Modules2() {
  return (
    <section className="modules">
      <div>
        <h2>Remote Backup of Your Data</h2>
        <p>
          All data are remotely backed up using our secured Backup and
          Recovery Solution. A remote backup is a dedicated failsafe
          solution for backing up on premise and cloud data. Remote
          backup prevents data loss that can happen either as a result
          of logical damage to software or physical damage to hardware.
          Physical damage could be as a result of a manmade or natural
          disaster.
        </p>
      </div>

      <Image
        src={image}
        alt="Remote Backup of Your Data"
      />
    </section>
  );
}

export default Modules2;
