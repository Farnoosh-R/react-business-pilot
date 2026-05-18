import SwiperCustomersSlider from "../ui/Slider/SwiperCustomersSlider";
import customer1 from "../../../src/assets/images/layout/customer1.png"
import customer2 from "../../../src/assets/images/layout/customer2.png"
import customer3 from "../../../src/assets/images/layout/customer3.png"
import customer4 from "../../../src/assets/images/layout/customer4.png"
import customer5 from "../../../src/assets/images/layout/customer5.png"

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
      image: customer5,
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
