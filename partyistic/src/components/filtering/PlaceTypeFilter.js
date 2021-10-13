/** @format */

import { Form } from 'react-bootstrap';

export default function PlaceTypeFilter(props) {
  return (
    <div className='col'>
      <Form.Select
        style={{ backgroundColor: 'transparent', color: '#fff' }}
        className='col'
        id='type'
        onChange={props.getTypeValue}
        aria-label='Default select example'>
        <option style={{ color: 'black' }} value='All'>
          All
        </option>
        <option style={{ color: 'black' }} value='Hall'>
          Hall
        </option>
        <option style={{ color: 'black' }} value='Restaurant'>
          Restaurant
        </option>
        <option style={{ color: 'black' }} value='Farm'>
          Farm
        </option>
      </Form.Select>
    </div>
  );
}
