import classNames from 'classnames';
import styles from './_Slogan.module.scss';

const { slogan, sloganTitle } = styles;

const Slogan = () => (
  <section className={classNames('logo-light', slogan)}>
    <h1 className={sloganTitle}>
      Introducing: the next generation of online payments.
    </h1>
  </section>
);

export default Slogan;
