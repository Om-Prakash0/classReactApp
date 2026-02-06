
function Footer(props) {
  return (
    <footer className="footer">
      <p>©{props.year[0]} My React Website {props.name} est. Year {props.y}</p>
    </footer>
  );
}

export default Footer;
