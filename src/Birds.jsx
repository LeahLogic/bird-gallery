
function Birds(props) {
  return (
    <div className="gallery">
      {props.birds.map((element) => {
        const { id, image } = element;

        return (
          <div key={id}>
            <img src={image} alt="Bird" />
          </div>
        );
      })}
    </div>
  );
}

export default Birds;


// Second way: destructuring props

/*
function Birds({ birds }) {
  return (
    <div>
      {birds.map((element) => {
        const { id, image } = element;

        return (
          <div key={id}>
            <img src={image} alt="Bird" />
          </div>
        );
      })}
    </div>
  );
}
*/
