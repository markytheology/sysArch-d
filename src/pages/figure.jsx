import Figure from 'react-bootstrap/Figure';
import logo from '../image/logo.jpg';
function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={logo}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;