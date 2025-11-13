import { services } from './../Constants/index';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
  return (
    <section className=' max-conatainer justify-center flex flex-wrap gap-9'>
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services