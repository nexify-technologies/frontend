import classes from './postHeader.module.css';

const PostHeader = props => {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <img loading='lazy' src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
