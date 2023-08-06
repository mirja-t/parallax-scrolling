import europe from './assets/europe.jpg'
import asia from './assets/asia.jpg'
import africa from './assets/africa.jpg'
import australia from './assets/australia.jpg'
import northAmerica from './assets/north-america.jpg'
import southAmerica from './assets/south-america.jpg'
import antarctica from './assets/antarctica.jpg'


interface MovementProps {
    time: number[];
    value: number[] | string[];
  }

interface SegmentsProps {
    image?: string;
    movement?: {
      x?: MovementProps;
      scale?: MovementProps;
      clipPath?: MovementProps;
    };
    className?: string;
    children?: JSX.Element;
  }
  
export const backgroundSegments: SegmentsProps[] = [
    {
      image: europe,
      className: '',
      movement: {
        clipPath: {
          time: [0, 0.2, 0.8, 1],
          value: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 100% 0% 0%)'],
        },
        scale: {
          time: [0.2, 0.3, 0.7, 0.8],
          value: [1, 1, 1, 0.9],
        }
      }
    },
    {
      image: asia,
      movement: {
        x: {
          time: [0, 0.2, 0.6, 1.2],
          value: ['0%', '0%', '0%', '-100%'],
        },
        clipPath: {
          time: [0, 0.2, 0.8, 1],
          value: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
        },
        scale: {
          time: [0.2, 0.3, 0.7, 0.8],
          value: [0.9, 1, 1, 1],
        }
      },
    },
    {
      image: africa,
      movement: {
        clipPath: {
          time: [0, 0.2, 0.8, 1],
          value: ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(100% 0% 0% 0%)'],
        },
        scale: {
          time: [0.2, 0.3, 0.7, 0.8],
          value: [1, 1, 1, 0.9],
        }
      },
    },
    {
      image: australia
    },
    {
      image: northAmerica,
      movement: {
        x: {
          time: [0, 0.2, 0.8, 1.2],
          value: ['0%', '0%', '0%', '-100%'],
        },
        clipPath: {
          time: [0, 0.2, 0.8, 1],
          value: ['circle(0%)', 'circle(100%)', 'circle(100%)', 'circle(100%)'],
        },
      },
    },
    {
      image: southAmerica
    },
    {
      image: antarctica,
      movement: {
        clipPath: {
          time: [0, 0.2, 0.9, 1],
          value: ['inset(0% 0% 100% 100%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
        },
      },
    }
  ]