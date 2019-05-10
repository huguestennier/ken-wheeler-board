import React from 'react';
import Face from '../Face/Face';
import Sound from '../Sound/Sound';

function handleClick(e) {
  var sound = e.target.nextSibling;
  sound.play();
}

const Wheeler = props => {
  return (
    <div>
      <Face onClick={handleClick} />
      <Sound sound={props.sound} />
    </div>
  );
};

export default Wheeler;
