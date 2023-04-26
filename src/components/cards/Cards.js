import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (

    <div className='cards-products'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://f.fcdn.app/imgs/1eb02f/menpi.uy/menpuy/0c8e/original/catalogo/GK9076-0-1/2000-2000/buzo-adidas-entrenamiento-hombre-negro-blanco-s-c.jpg" alt='Description image' />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          Description about the product.
        </Card.Text>
        <Button variant="primary">Add cart</Button>
      </Card.Body>
    </Card>
    </div>

  );}

export default Cards;