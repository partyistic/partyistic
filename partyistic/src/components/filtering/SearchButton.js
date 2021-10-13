/** @format */

export default function SearchButton(props) {
  return (
    <div className='col'>
      <button
        style={{
          background: 'transparent',
          color: '#fff',
          borderBlockColor: 'black',
          fontFamily: "'Dancing Script', cursive",
          fontSize: '30px',
        }}
        variant='primary'
        onClick={props.filtering}>
        SEARCH
      </button>
    </div>
  );
}
