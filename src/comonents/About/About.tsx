import './About.scss';

type Props = {
  description: {
    title: string;
    text: string[];
  }[];
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  capacity: string,
  camera: string,
  zoom: string,
  cell: string[],
};

export const About: React.FC<Props> = ({
  description,
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
}) => {
  return (
    <div className="about">
      <div className="about__description">
        <h2 className="about__title">
          About
        </h2>

        {description.map(element => {
          const { title, text } = element;

          return (
            <div key={element.title} className="about__description-container">
              <p className="about__description-title">{title}</p>
              <p className="about__text text">{text}</p>
            </div>
          );
        })}
      </div>

      <div className="about__tech">
        <h2 className="about__title">
          Tech space
        </h2>
        <ul className="about__tech about__tech--container">
          <li className="about__info">
            <p className="text text--gray">Screen</p>
            <p className="text">{screen}</p>
          </li>
          <li className="about__info">
            <p className="text text--gray">
              Resolution
            </p>
            <p className="text">{resolution}</p>
          </li>
          <li className="about__info">
            <p className="text text--gray">Processor</p>
            <p className="text">{processor}</p>
          </li>
          <li className="about__info">
            <p className="text text--gray">RAM</p>
            <p className="text">{ram}</p>
          </li>
          <li className="about__info">
            <p className="text text--gray">
              Built in memory
            </p>
            <p className="text">
              {capacity}
            </p>
          </li>
          <li className="about__info">
            <p className="text text--gray">Camera</p>
            <p className="text">{camera}</p>
          </li>
          <li className="about__info">
            <p className="text text--gray">Zoom</p>
            <p className="text">{zoom}</p>
          </li>
          <li className="about__info">
            <p className="text text--gray">Cell</p>
            <p className="text">{cell.slice(0, 4).join(', ')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
