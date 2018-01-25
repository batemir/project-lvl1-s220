import runGame from '../engine';
import { getRandomNumber } from '..';

const solver = () => {
  const randNum = getRandomNumber(100);
  const check = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const answer = check(randNum);
  return [randNum, answer];
};
const textOfCondition = `Answer "yes" if number even otherwise answer "no".
`;
const brainEven = () => runGame(textOfCondition, 3, solver);

export default brainEven;
