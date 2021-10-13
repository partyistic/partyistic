/** @format */

import { Form } from 'react-bootstrap';

export default function CityFilter(props) {
  return (
    <div className='col'>
      <Form.Select
        style={{ backgroundColor: 'transparent', color: '#fff' }}
        id='city'
        className='col'
        onChange={props.getCityValue}
        aria-label='Default select example'>
        <option value='City' selected>
          City
        </option>
        <option style={{ color: 'black' }} value='Amman'>
          Amman
        </option>
        <option style={{ color: 'black' }} value='Zarqa'>
          Zarqa
        </option>
        <option style={{ color: 'black' }} value='Irbid'>
          Irbid
        </option>
        <option style={{ color: 'black' }} value='Al-Mafraq'>
          Al-Mafraq
        </option>
        <option style={{ color: 'black' }} value='Jarash'>
          Jarash
        </option>
        <option style={{ color: 'black' }} value='Ajloun'>
          Ajloun
        </option>
        <option style={{ color: 'black' }} value='As-Salt'>
          As-Salt
        </option>
        <option style={{ color: 'black' }} value='Madaba'>
          Madaba
        </option>
        <option style={{ color: 'black' }} value='karak'>
          Karak
        </option>
        <option style={{ color: 'black' }} value='Tafilah'>
          Tafilah
        </option>
        <option style={{ color: 'black' }} value='Maan'>
          Maan
        </option>
        <option style={{ color: 'black' }} value='Aqaba'>
          Aqaba
        </option>
      </Form.Select>
    </div>
  );
}
