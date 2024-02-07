import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
  return (
    <Form className='p-2'>
      <Form.Group controlId='formEmail' className='m-2'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='you@email.com' />
      </Form.Group>
      <Form.Group controlId='formMessage' className='m-2'>
        <Form.Label>Your message</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <div className='d-flex justify-content-center'>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form >
  )
}
