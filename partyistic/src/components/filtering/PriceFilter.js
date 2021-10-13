/** @format */

export default function PriceFilter(props) {
  return (
    <div className='col'>
      <input
        style={{ backgroundColor: 'transparent', color: '#fff' }}
        type='text'
        onChange={props.getPrice}
        placeholder='Maximum Price'></input>
    </div>
  );
}
