import {SoundButton} from "./SoundButton";
import { Row, Col } from "react-bootstrap";

const sounds = [
  "Sound 1",
  "Sound 2",
  "Sound 3",
  "Sound 4",
  "Sound 5",
  "Sound 6",
  "Sound 7",
  "Sound 8",
  "Sound 9",
  "Sound 10",
  "Sound 1",
  "Sound 2",
  "Sound 3",
  "Sound 4",
  "Sound 5",
  "Sound 6",
  "Sound 7",
  "Sound 8",
  "Sound 9",
  "Sound 10",
  "Sound 1",
  "Sound 2",
  "Sound 3",
  "Sound 4",
  "Sound 5",
  "Sound 6",
  "Sound 7",
  "Sound 8",
  "Sound 9",
  "Sound 10",
];

export function SoundPanel() {
  return (
      <Row>
        {sounds.map((sound) => (
          <Col>
            <SoundButton name={sound}/>
          </Col>
        ))}
      </Row>
  );
}
