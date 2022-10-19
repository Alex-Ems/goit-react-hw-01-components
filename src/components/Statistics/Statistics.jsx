
import PropTypes from 'prop-types';
import { Title } from './/Statistics.styled';

export default function Stats({ title, children }) {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
}

Stats.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};