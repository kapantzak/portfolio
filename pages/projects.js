import styles from "@/styles/Projects.module.scss";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <h1 className="pageHeading">Projects</h1>
      <div className={styles.projectWrapper}>
        <div className={styles.projectTitleWrapper}>
          <h2 className={styles.projectTitle}>Attendance Management System</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            lacus et odio fringilla pellentesque ut et lectus. Mauris massa
            nulla, consectetur vel sollicitudin vitae, efficitur a tortor. Proin
            eleifend, metus et tincidunt mattis, sem diam tempor magna, in
            accumsan ligula turpis quis ante. Vivamus vel pretium nibh. Mauris
            aliquet ac est sed aliquet. Integer vel sapien et elit volutpat
            rutrum. Quisque facilisis tempus risus, eget tincidunt nibh placerat
            ac. Sed ac nibh eget lorem semper tempor.
          </p>
        </div>
        <div className={styles.projectContents}>
          <Image
            src="/images/projects/attendanceManagement/atms_0.png"
            alt="sample"
            width={400}
            height={804}
          />
          <p style={{ padding: "15px 10vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            lacus et odio fringilla pellentesque ut et lectus. Mauris massa
            nulla, consectetur vel sollicitudin vitae, efficitur a tortor. Proin
            eleifend, metus et tincidunt mattis, sem diam tempor magna, in
            accumsan ligula turpis quis ante. Vivamus vel pretium nibh. Mauris
            aliquet ac est sed aliquet. Integer vel sapien et elit volutpat
            rutrum. Quisque facilisis tempus risus, eget tincidunt nibh placerat
            ac. Sed ac nibh eget lorem semper tempor.
          </p>
          <Image
            src="/images/projects/attendanceManagement/atms_0.png"
            alt="sample"
            width={400}
            height={804}
          />
        </div>
      </div>
      <div className={styles.projectWrapper}>
        <div className={styles.projectTitleWrapper}>
          <h2 className={styles.projectTitle}>Project #2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            lacus et odio fringilla pellentesque ut et lectus. Mauris massa
            nulla, consectetur vel sollicitudin vitae, efficitur a tortor. Proin
            eleifend, metus et tincidunt mattis, sem diam tempor magna, in
            accumsan ligula turpis quis ante. Vivamus vel pretium nibh. Mauris
            aliquet ac est sed aliquet. Integer vel sapien et elit volutpat
            rutrum. Quisque facilisis tempus risus, eget tincidunt nibh placerat
            ac. Sed ac nibh eget lorem semper tempor.
          </p>
        </div>
        <div className={styles.projectContents}>
          <Image
            src="/images/projects/attendanceManagement/atms_0.png"
            alt="sample"
            width={400}
            height={804}
          />
          <p style={{ padding: "15px 10vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            lacus et odio fringilla pellentesque ut et lectus. Mauris massa
            nulla, consectetur vel sollicitudin vitae, efficitur a tortor. Proin
            eleifend, metus et tincidunt mattis, sem diam tempor magna, in
            accumsan ligula turpis quis ante. Vivamus vel pretium nibh. Mauris
            aliquet ac est sed aliquet. Integer vel sapien et elit volutpat
            rutrum. Quisque facilisis tempus risus, eget tincidunt nibh placerat
            ac. Sed ac nibh eget lorem semper tempor.
          </p>
          <Image
            src="/images/projects/attendanceManagement/atms_0.png"
            alt="sample"
            width={400}
            height={804}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
