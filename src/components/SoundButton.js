import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import Card from "react-bootstrap/Card";
const sound = require('sound-play');

export function SoundButton({ name }) {

  const play = () => 
  {
    sound.play("/src/sounds/awkward-cricket-sound-effect.mp3")
  }
  return (
    <Button onClick={play} style={{ width: "10rem" }} className="p-3 m-2">
      <Image src="https://picsum.photos/50/30" />
      {name}
    </Button>
  );
}
