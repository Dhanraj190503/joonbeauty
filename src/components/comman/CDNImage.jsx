import PropTypes from 'prop-types';

const CdnImage = ({ src, alt, className, ImageClass }) => {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        className={ImageClass}
        loading="lazy"
      />
    </figure>
  );
};

export default CdnImage;
