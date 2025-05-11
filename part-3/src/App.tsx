import "./App.css";

//Mock data
import image1 from "./assets/images/image-1.jpeg";
import image2 from "./assets/images/image-2.jpg";
import image3 from "./assets/images/image-3.jpeg";

import Carousel from "./components/carousel/Carousel";

const data = [
  {
    title: "Product 1",
    description: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, eum? Esse asperiores aut praesentium quaerat unde iste amet, sit accusantium illum facere quia non optio
            distinctio, et reprehenderit eum vel!</p>`,
    image: image1,
  },
  {
    title: "Product 2",
    description: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, eum? Esse asperiores aut praesentium quaerat unde iste amet, sit accusantium illum facere quia non optio
            distinctio</p>`,
    image: image2,
  },
  {
    title: "Product 3",
    description: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, eum?</p>`,
    image: image3,
  },
];

function App() {
  return (
    <main className="row-start-2 flex w-full flex-col items-center sm:items-start">
      <Carousel data={data} />
    </main>
  );
}

export default App;
