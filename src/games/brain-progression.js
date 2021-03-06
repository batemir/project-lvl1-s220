import runGame from '../engine';
import { getRandomNumber, getMissingNumInProgression } from '..';

const getTask = () => {
  const firstInSequence = getRandomNumber(100);
  const step = getRandomNumber(9, 2);
  const missingStep = getRandomNumber(8);
  let sequence = `${firstInSequence}`;
  let x = firstInSequence;
  for (let i = 0; i < 9; i += 1) {
    x += step;
    if (i === missingStep) {
      sequence += ' ..';
    } else {
      sequence += ` ${x}`;
    }
  }
  const answer = getMissingNumInProgression(firstInSequence, step, missingStep + 1);
  return [sequence, answer];
};
const textOfTask = 'What number is missing in this progression?';
const brainProgression = () => runGame(textOfTask, getTask);
export default brainProgression;
