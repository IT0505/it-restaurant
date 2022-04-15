import styles from './/UsefulLinkContent.module.scss';
import Link from 'next/link';

export default function UsefulLinkContent({ data }) {
  const { url, text } = data;
  return (
    <Link href={url}>
      <a className={styles.usefulLinkContent}>{text}</a>
    </Link>
  );
}
