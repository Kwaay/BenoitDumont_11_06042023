// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Tag from './Tag';

export default function TagsList({ tags }) {
  return (
    <ul className="tag-container">
      {tags.map((tag) => (
        <Tag key={tag} title={tag} />
      ))}
    </ul>
  );
}
TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
};
