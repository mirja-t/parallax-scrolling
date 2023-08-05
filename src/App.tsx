import { MotionValue } from 'framer-motion'
import { ScrollComponent } from './scrollcomponent/ScrollComponent'
import { ImageSegment } from './scrollcomponent/imageSegment/ImageSegment'
import { StickyContent } from './stickyContent/StickyContent'
import europe from './assets/europe.jpg'
import asia from './assets/asia.jpg'
import africa from './assets/africa.jpg'
import australia from './assets/australia.jpg'
import northAmerica from './assets/north-america.jpg'
import southAmerica from './assets/south-america.jpg'
import antarctica from './assets/antarctica.jpg'

const segments = [
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
    },
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
const SectionBg = (scrollYProgress: MotionValue<number>, count: number) => (
  <>
    { segments.map((segment, index) => (
      <ImageSegment 
        key={index}
        scrollYProgress={scrollYProgress}
        count={count}
        index={index}
        movement={ segment?.movement ? segment.movement : {
            clipPath: {
                time: [0, 0.2, 0.8, 1],
                value: ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 100% 0% 0%)'],
            },
            scale: {
              time: [0.2, 0.3, 0.7, 0.8],
              value: [0.9, 1, 1, 0.9],
            }
        }}
        className={ segment?.className ? segment.className : `img-${segment.image}` }
        image={segment.image} />))}
  </>)

function App() {

  return (
    <ScrollComponent
      renderComponent={ SectionBg }
      movement={{
          x: {
              time: [0, 0.8, 1],
              value: [0, 0, 0],
          },
          scale: {
              time: [0, 1],
              value: [1, 1],
          }
      }}
      padding="15px">
          <StickyContent>
            <div className="text-wrapper text-center">
              <h2>Europe</h2>
              <p>Europe is the second-smallest continent in terms of land area, but it is the third most populous continent in the world, after Asia and Africa. Despite its relatively small size compared to other continents, Europe is home to a diverse range of cultures, languages, and histories, making it a fascinating and vibrant place to explore.</p>
            </div>
          </StickyContent>
          <StickyContent>
            <div className="text-wrapper text-center">
              <h2>Asia</h2>
              <p>Asia is the largest and most populous continent on Earth. It covers an enormous land area of approximately 44.58 million square kilometers (17.21 million square miles), which is about 30% of the Earth's total land area. Moreover, it is home to more than half of the world's population, with over 4.6 billion people living in its diverse countries.</p>
            </div>
          </StickyContent>
          <StickyContent>
            <div className="text-wrapper text-center">
              <h2>Africa</h2>
              <p>Africa is home to 54 recognized countries, making it the continent with the highest number of sovereign nations. Moreover, Africa boasts a remarkable level of linguistic diversity, with over 2,000 different languages spoken throughout the continent. Africa's also boasts an incredibly rich and diverse ecosystem. The continent is known for its vast savannas, dense rainforests, stunning deserts, and unique wildlife. Some of the world's most iconic animals, such as lions, elephants, giraffes, and rhinoceroses, call Africa their home.</p>
            </div>
          </StickyContent>
          <StickyContent>
            <div className="text-wrapper text-center">
              <h2>Australia</h2>
              <p>Australia is the world's smallest continent and the largest island, surrounded by the Indian and Pacific Oceans. Its unique isolation has led to the evolution of diverse and fascinating wildlife, including marsupials like kangaroos and koalas. The Great Barrier Reef, located off the northeastern coast, is the world's largest coral reef system and a UNESCO World Heritage Site. Australia is known for its stunning landscapes, ranging from the vast Outback to lush rainforests, making it a popular destination for nature enthusiasts and adventure seekers.</p>
            </div>
          </StickyContent>
          <StickyContent>
            <div className="text-wrapper text-center">
              <h2>North-America</h2>
              <p>North America is known for its diverse geography, including vast plains, towering mountains, deep canyons, and expansive forests. The Great Lakes, shared by the United States and Canada, form the largest group of freshwater lakes in the world. North America has a rich cultural heritage, with a history that includes the indigenous peoples, European colonization, and the growth of modern nations. It continues to be a center of innovation, diversity, and global influence in various fields, including technology, entertainment, and politics.</p>
            </div>
          </StickyContent>
          <StickyContent>
            <div className="text-wrapper text-center">
              <h2>South-America</h2>
              <p>South America is known for its incredible biodiversity, featuring the Amazon Rainforest, which is the largest tropical rainforest in the world and home to a vast array of plant and animal species. It offers a mix of vibrant cultures, stunning landscapes, and archaeological wonders, making it a captivating destination for travelers and explorers.</p>
            </div>
          </StickyContent>
          <StickyContent>
          <div className="text-wrapper text-center">
              <h2>Antarctica</h2>
              <p>Antarctica is the southernmost continent on Earth, and it is the fifth-largest continent, covering around 14 million square kilometers (5.4 million square miles). Unlike other continents, it has no permanent human population, but it is inhabited by thousands of scientists and researchers who work in various research stations to study its unique environment. Antarctica is the coldest, driest, and windiest continent, and it contains about 70% of the world's fresh water, locked up in its massive ice sheet.</p>
            </div>
          </StickyContent>
    </ScrollComponent>
  )
}

export default App
