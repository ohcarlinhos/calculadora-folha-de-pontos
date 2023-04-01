import { useEffect, useState } from 'react';
import { ScoreLineItem } from '../util/types';
import ScoreLine from './ScoreLine';

const ScoreCard = ({
  scoreLines,
  addScoreLine,
  deleteScoreLine,
  updateValues,
  updateExtraHour,
  extraHour,
}: {
  scoreLines: ScoreLineItem[];
  addScoreLine: (postion: number) => void;
  deleteScoreLine: (id: string) => void;
  updateValues: (type: string, id: string, value: string) => void;
  updateExtraHour: (hour: string) => void;
  extraHour: string;
}) => {
  const [inputExtraHour, setInputExtraHour] = useState('');

  useEffect(() => {
    setInputExtraHour(extraHour);
  }, [extraHour]);

  return (
    <div
      className="card flex-col max-w-lg w-full m-3"
      title="Calculadora de Folha de Pontos"
    >
      <h2 className="title">Calculadora de Folha de Pontos</h2>

      <div className="mt-5">
        <div className="grid grid-cols-12 gap-2">
          <div className="grid col-span-8 grid-cols-2 gap-2 dark:text-white">
            <p>Ponto Inicial</p>
            <p>Ponto Final</p>
          </div>
        </div>
        {scoreLines.map((line, index) => (
          <ScoreLine
            key={line.id}
            lineIndex={index}
            line={line}
            addScoreLine={() => addScoreLine(index + 1)}
            deleteScoreLine={() => deleteScoreLine(line.id)}
            updateValues={updateValues}
            firstLine={index === 0}
          />
        ))}
        <label htmlFor="extra-minutes">Hora Extra:</label>
        <input
          type="time"
          id="extra-minutes"
          className="text-field col-span-1"
          value={inputExtraHour}
          onChange={(event) => {
            setInputExtraHour(event.target.value);
            updateExtraHour(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ScoreCard;
