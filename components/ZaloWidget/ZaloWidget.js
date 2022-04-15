import styles from './ZaloWidget.module.scss';
import Script from 'next/script';

export default function ZaloWidget() {
  return (
    <>
      <div
        className={`zalo-chat-widget ${styles.zaloWidget}`}
        data-oaid='395676467856316589'
        data-welcome-message='Rất vui khi được hỗ trợ bạn!'
        data-autopopup='0'
        data-width='300'
        data-height='300'
      ></div>
      <Script src='https://sp.zalo.me/plugins/sdk.js'></Script>
    </>
  );
}
