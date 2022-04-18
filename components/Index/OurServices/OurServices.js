import styles from "./OurServices.module.scss";
import {ourServicesData} from "../../../utils/dataConfig";
import Image from "next/image";
import MainTitle from "../../MainTitle/MainTitle";
import Link from "next/link";

export default function OurServices() {
  const {mainContent, title, slogan} = ourServicesData;
  return (
    <div className={styles.ourServices}>
      <div className="container">
        <div className={`${styles.ourServicesInner} section`}>
          <MainTitle slogan={slogan} title={title} />
          <div className={styles.mainContent}>
            {mainContent.map((item, index) => (
              <div className={styles.content} key={index}>
                <div className={`${styles.image} animate zoomIn`}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    layout="responsive"
                  />
                </div>
                <Link href={item.url}>
                  <a className={styles.title}>{item.title}</a>
                </Link>
                <p className={styles.description}>{item.description}</p>
                <Link href={item.url}>
                  <a className={styles.url}>Read More</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
