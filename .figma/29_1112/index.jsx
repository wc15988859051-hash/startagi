import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame3}>
      <div className={styles.main}>
        <div className={styles.bg}>
          <div className={styles.title}>
            <p className={styles.text4}>
              <span className={styles.text}>欢迎来到</span>
              <span className={styles.text2}>&nbsp;</span>
              <span className={styles.text3}>StartAGI</span>
            </p>
            <p className={styles.text5}>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
          <div className={styles.input}>
            <div className={styles.title2}>
              <p className={styles.text6}>登录</p>
              <img src="../image/mmbqbn5k-mum3g0x.svg" className={styles.lOgin} />
            </div>
            <div className={styles.frame}>
              <p className={styles.text7}>GIO 账号快捷登录</p>
            </div>
          </div>
          <p className={styles.copyright20162020}>
            Copyright© 2016-2026 startdtcom All Rights Reserved 奇点云 版权所有
          </p>
        </div>
      </div>
      <img src="../image/mmbqbn5s-0i211rj.png" className={styles.frame2} />
    </div>
  );
}

export default Component;
