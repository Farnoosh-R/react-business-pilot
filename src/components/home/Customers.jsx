import SwiperCustomersSlider from "../ui/Slider/SwiperCustomersSlider";

const Customers = () => {
  const slides = [
    {
      id: 1,
      image: "../../src/assets/images/layout/customer1.png",
    },
    {
      id: 1,
      image: "../../src/assets/images/layout/customer2.png",
    },
    {
      id: 1,
      image: "../../src/assets/images/layout/customer3.png",
    },
    {
      id: 1,
      image: "../../src/assets/images/layout/customer4.png",
    },
    {
      id: 1,
      image: "../../src/assets/images/layout/customer5.png",
    },
        {
      id: 1,
      image: "../../src/assets/images/layout/customer5.png",
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
