import React from 'react';

const Sound = props => {
  const sound = `../../sounds/${props.sound}.mp3`;

  return (
    <audio>
      <source src={sound} type="audio/mpeg" />
    </audio>
  );
};

export default Sound;
