const Helmet = (props) => {
  document.title = "R.D.A - " + props.title;

  return <div>{props.children}</div>;
};

export default Helmet;
