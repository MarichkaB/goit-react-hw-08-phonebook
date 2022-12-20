import s from '../Container/container.module.css';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export default Container;
