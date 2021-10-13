/** @format */

import { Form } from 'react-bootstrap';

export default function DateFilter(props) {
  return (
    <div className='col'>
      {/* <Form.Select
        style={{ backgroundColor: 'transparent', color: '#fff' }}
        className='col'
        id='date'
        onChange={props.getDateValue}
        aria-label='Default select example'>
        <option style={{ color: 'black' }} value='Available Date'>
          Available Date
        </option>
        <option style={{ color: 'black' }} value='Jan'>
          Jan
        </option>
        <option style={{ color: 'black' }} value='Feb'>
          Feb
        </option>
        <option style={{ color: 'black' }} value='Mar'>
          Mar
        </option>
        <option style={{ color: 'black' }} value='Apr'>
          Apr
        </option>
        <option style={{ color: 'black' }} value='May'>
          May
        </option>
        <option style={{ color: 'black' }} value='Jun'>
          Jun
        </option>
        <option style={{ color: 'black' }} value='Jul'>
          Jul
        </option>
        <option style={{ color: 'black' }} value='Aug'>
          Aug
        </option>
        <option style={{ color: 'black' }} value='Sep'>
          Sep
        </option>
        <option style={{ color: 'black' }} value='Oct'>
          Oct
        </option>
        <option style={{ color: 'black' }} value='Nov'>
          Nov
        </option>
        <option style={{ color: 'black' }} value='Dec'>
          Dec
        </option>
      </Form.Select> */}
      <Form.Group
        className='mb-3'
        controlId='date'
        style={{ backgroundColor: 'transparent', color: '#fff' }}
        onChange={props.getDateValue}
        aria-label='Default select example'>
        <Form.Control type='date' />
      </Form.Group>
    </div>
  );
}
