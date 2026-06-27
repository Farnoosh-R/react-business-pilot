import SwiperCustomersSlider from "../ui/Slider/SwiperCustomersSlider";
import customer1 from "../../../src/assets/images/layout/customer1.jpg"
import customer2 from "../../../src/assets/images/layout/customer2.jpg"
import customer3 from "../../../src/assets/images/layout/customer3.jpg"
import customer4 from "../../../src/assets/images/layout/customer4.jpg"
import customer5 from "../../../src/assets/images/layout/customer5.jpg"
import customer6 from "../../../src/assets/images/layout/customer6.jpg"
import customer7 from "../../../src/assets/images/layout/customer7.jpg"
import customer8 from "../../../src/assets/images/layout/customer8.jpg"

const Customers = () => {
  const slides = [
    {
      id: 1,
      image: customer1,
    },
    {
      id: 1,
      image: customer2,
    },
    {
      id: 1,
      image: customer3,
    },
    {
      id: 1,
      image: customer4,
    },
    {
      id: 1,
      image: customer5,
    },
        {
      id: 1,
      image: customer6,
    },
          {
      id: 1,
      image: customer7,
    },
          {
      id: 1,
      image: customer8,
    },
  ];
  return (
    <section id="customers">
      <div className="app-container">
        <SwiperCustomersSlider items={slides}/>
      </div>
    </section>
  );
};
export default Customers;
