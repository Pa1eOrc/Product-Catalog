import { ChangeEvent } from 'react';
import './Option.scss';
import classNames from 'classnames';

type Props = {
  capacityAvailable: string[],
  colorsAvailable: string[],
  isCapacity: string,
  setIsCapacity: (isCapacity: string) => void,
  isColor: string,
  setIsColor: (isColor: string) => void,
};

export const Option: React.FC<Props> = ({
  capacityAvailable,
  colorsAvailable,
  isCapacity,
  setIsCapacity,
  isColor,
  setIsColor,
}) => {
  const handleCapacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCapacity(e.target.value);
  };

  const handleColorCahange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsColor(e.target.value);
  };

  return (
    <div className="options">
      <div className="options__container">
        <p className="text text--small text--gray">
          Available colors
        </p>
        <div className="options__select-container">
          {colorsAvailable.map(color => {
            const transformedColor = color.replace(/\s/g, '');

            return (
              <label
                key={color}
                className={classNames(
                  'options__color-label',
                  { 'options__color-label--selected': isColor === color },
                )}
              >
                <input
                  type="radio"
                  name="color"
                  value={color}
                  title={color}
                  className="options__input"
                  onChange={handleColorCahange}
                />
                <span
                  className={classNames(
                    'options__color',
                    `options__color--${transformedColor}`,
                  )}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="options__container options__container--capacity">
        <p className="text text--small text--gray">
          Select capacity
        </p>
        <div className="options__select-container">
          {capacityAvailable.map(capacity => (
            <label
              key={capacity}
              className={classNames(
                'options__capacity',
                'text',
                { 'options__capacity--selected': isCapacity === capacity },
              )}
            >
              <input
                className="options__input"
                type="radio"
                name="capacity"
                value={capacity}
                onChange={handleCapacityChange}
              />
              {`${capacity}`}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
