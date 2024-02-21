import * as React from "react";
import SEO from "./SEO";

const servicesData = [
  {
    title: "Basic House Cleaning",
    description:
      "Our comprehensive home cleaning service is crafted to meet the unique needs of your living space, with a particular emphasis on key areas such as the kitchen, living room, bathroom, and bedroom. Our meticulous approach involves skillful mopping, thorough vacuuming, detailed dusting, precise polishing, and attentive sweeping. Executed by our dedicated team, this thorough cleaning process ensures every corner is spotless, creating a welcoming and beautifully maintained home environment.In delivering this tailored service, we prioritize not only cleanliness but also the aesthetics and overall ambiance of your home. With a commitment to excellence, our team ensures that each cleaning task, from mopping to polishing, contributes to a spotless and inviting living space that reflects our dedication to meticulous care and maintenance.",
    image:
      "https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Deep Cleaning/Spring Cleaning",
    description:
      "Our advanced cleaning service stands out with its meticulous methodology, going beyond standard practices to include intricate tasks such as handwashing cabinets, vacuuming upholstery, and deep-cleaning the oven. We address often overlooked areas like ceiling fan blades, ensuring a comprehensive approach to cleanliness. For clients who haven't utilized professional cleaning services in a while, we strongly recommend opting for a deep clean. This transformative service not only revitalizes the overall home environment but also provides a lasting and thorough cleanliness that extends beyond the surface, creating a rejuvenated and welcoming space.In every aspect of our advanced cleaning service, from polishing wood surfaces to tackling neglected corners, our dedicated team ensures a meticulous and revitalizing touch. By choosing a deep clean, clients can experience the full extent of our transformative cleaning process, making their living spaces not just clean but truly refreshed and inviting.",
    image:
      "https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Sanitization Services",
    description:
      "The current trend underscores a robust demand for the sanitization of homes and offices, and Squeaky Clean House exemplifies a cleaning service proficient in meeting this growing need. With a focus on specialized offerings, the company is at the forefront of ensuring comprehensive disinfection for both residential and corporate spaces.In the prevailing climate that prioritizes health and cleanliness, the surge in demand for sanitization services is unmistakable. Squeaky Clean House, as a distinguished cleaning entity, is strategically positioned to cater to this demand by providing tailored services designed to thoroughly sanitize and uphold the cleanliness standards of homes and office environments.",
    image:
      "https://images.pexels.com/photos/6195281/pexels-photo-6195281.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Office Cleaning",
    description:
      "Commercial cleaning services encompass the thorough cleaning of various workspaces, including work areas, common spaces, cubicles, restrooms, kitchens, and reception areas. The scope of tasks involved in these services ranges from routine mopping and dusting to intricate polishing, sanitization, and efficient waste removal. These services are designed to maintain a clean and organized environment within commercial settings.During slower periods, businesses specializing in window cleaning have the flexibility to focus on both residential and commercial properties. Whether catering to the needs of households or commercial establishments, window cleaning services can tailor their expertise to meet the specific requirements of different settings, showcasing adaptability and versatility in their offerings.",
    image:
      "https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Restroom Cleaning",
    description:
      "While the cleaning of restrooms is commonly integrated into both office and home cleaning routines, it has also emerged as a sought-after standalone commercial service. This specialized service extends its reach beyond traditional settings, finding high demand in diverse environments such as stadiums, schools, one-off events, and open public spaces. The standalone restroom cleaning service is tailored to address the unique challenges posed by these varied settings, emphasizing hygiene and cleanliness in shared facilities.The significance of restroom cleaning goes beyond routine maintenance, proving particularly crucial in larger venues like stadiums and schools, where a high volume of visitors necessitates meticulous sanitation. Offering this standalone commercial service allows for a targeted focus on the unique needs of diverse spaces, ensuring that restrooms in stadiums, schools, and public areas are maintained to the highest standards of cleanliness and hygiene.",
    image:
      "https://images.pexels.com/photos/4239072/pexels-photo-4239072.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "School Cleaning",
    description:
      "Providing cleaning solutions to both residential and commercial spaces involves not only maintaining overall cleanliness but also meeting the specific needs of diverse environments. This includes the crucial task of restroom cleaning, which is not only an integral part of routine office and home cleaning but also stands as a distinct and highly sought-after commercial service. From stadiums and schools to one-off events and open public spaces, there is a notable demand for standalone restroom cleaning services. Catering to these diverse settings, this specialized service ensures hygienic and pristine restroom facilities, contributing to a clean and welcoming environment.The range of cleaning services extends to educational institutions, covering both private and public schools. This comprehensive offering includes the cleaning of various areas such as floors, classrooms, desks, tables, and bathrooms. Tailored to the unique needs of schools, these services contribute to the creation of a conducive and sanitary learning environment, promoting the well-being of students and staff alike.",
    image:
      "https://images.pexels.com/photos/4108709/pexels-photo-4108709.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Medical Cleaning",
    description:
      "Ensuring the cleanliness of clinics and hospitals is paramount due to their stringent cleanliness standards, making medical cleaning a highly specialized field. This type of commercial cleaning requires the utilization of specific cleaning supplies and equipment, adhering to rigorous cleaning practices tailored to the unique demands of healthcare environments. Companies specializing in medical cleaning, such as Clean Services, exemplify expertise in maintaining the highest standards of cleanliness and hygiene crucial for healthcare facilities.In the realm of commercial cleaning services, the domain of medical cleaning stands out as a niche that demands precision and adherence to strict protocols. Achieving optimal cleanliness in clinics and hospitals requires not only the right tools and equipment but also a deep understanding of the specialized cleaning procedures essential for maintaining a sterile and safe healthcare environment. Clean Services, as an exemplar in the field, demonstrates a commitment to providing tailored solutions that meet the unique challenges of medical cleaning.",
    image:
      "https://images.pexels.com/photos/14553830/pexels-photo-14553830.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Sports Cleaning",
    description:
      "The provision of cleaning services to sports facilities, particularly gyms, is a specialized sector aimed at maintaining optimal hygiene. Given that these areas serve as potential breeding grounds for bacteria and facilitate the spread of germs, they present an ideal market for cleaning services. Within this niche, essential cleaning tasks involve the thorough cleaning and sanitization of all equipment, surfaces, and floors, contributing to a safe and sanitary environment for gym-goers.The realm of cleaning services extends its specialized focus to sports facilities, with gyms being a prime target for ensuring cleanliness and hygiene. Recognizing the heightened risk of bacterial growth and germ transmission in such environments, cleaning services play a crucial role in implementing rigorous cleaning measures. From equipment to surfaces and floors, the comprehensive cleaning tasks undertaken in gyms align with the commitment to creating a healthy and germ-free space for individuals engaging in physical activities.",
    image:
      "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function ServiceCards() {
  return (
    <div className="mt-12 w-full max-w-[1200px] m-auto  space-y-16 px-10">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`flex gap-5 h-max flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <header className="flex flex-col w-full mb-10 md:mb-0 ">
            <SEO
              title={service.title}
              description={service.description}
              url="https://jcleaning.netlify.app/services"
            />
            <div className="my-auto font-regular text-zinc-800 ">
              <h1 className="text-4xl mb-4">{service.title}</h1>
              <div className="text-base text-zinc-800 mb-6 text-justify">
                {service.description}
              </div>
            </div>
          </header>
          <div className="w-full overflow-hidden rounded-xl h-[400px]">
            <img
              loading="lazy"
              src={service.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCards;
