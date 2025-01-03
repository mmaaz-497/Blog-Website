import Image from "next/image";

export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
      Bike Details

      </h1>

      {/* Featured Image */}
      {/* <Image
        src={""}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      /> */}
       <img
            className="lg:h-[700px] md:h-36 w-full object-cover object-center"
            src="https://images.91wheels.com/news/wp-content/uploads/2021/03/2021-Hero-Passion-Pro-Pros-and-Cons-1.png"
            alt="blog"
            width={500}
            height={500}
          />
      <div className="flex gap-[200px]">
      <section>
        <h1 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">Introduction:</h1>
        <ul className="mt-4">
          <li><b>Name:</b> Honda CBR 600RR</li>
          <li><b>Model:</b> 2024</li>
        </ul>
      </section>
      <section>
        <h1 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">Design and Build:</h1>
        <ul className="mt-4">
          <li><b>Body:</b>Carbon Fiber</li>
          <li><b>Color schemes:</b>White,Black,Red,Blue</li>
        </ul>
      </section>
      <section>
        <h1 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">Engine and Performance:</h1>
        <ul className="mt-4">
          <li><b>Engine Type:</b>Twin-cylinder</li>
          <li><b>Fuel Economy: </b>40 Kilometer per litter</li>
        </ul>
      </section>
      <section>
        <h1 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">Features and Technology:</h1>
        <ul className="mt-4">
          <li><b>Lighting:</b>LED lights, projector headlights</li>
          <li><b>Technology:</b>Bluetooth connectivity, GPS navigation, or smartphone integration.</li>
        </ul>
      </section>
      </div>










      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
        Summary:
      </h2>
      <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">

The **Honda CBR 600RR** is a high-performance sports bike designed for experienced riders who seek agility, speed, and precision. Featuring a **599cc inline-4 engine**, it delivers an impressive **118hp** and a top speed of **160 mph**, making it ideal for both track and road use. The bike's **aerodynamic design** is complemented by a **lightweight aluminum frame**, ensuring both speed and maneuverability.

Equipped with **advanced suspension** and **dual disc brakes with ABS**, the CBR 600RR excels in handling and safety, offering exceptional cornering ability and stability. The **digital instrument cluster** with **LED headlights** and **cornering lights** enhances the riding experience, especially at night. 

With a **fuel efficiency of 45 mpg**, it offers decent mileage for a sports bike, though its **price tag of $12,999** places it in the higher end of the market. While the bike is fantastic in terms of performance and handling, its **cost** might be a drawback for some riders.

Overall, the **Honda CBR 600RR** is a top choice for those seeking a blend of power, design, and performance in the sports bike segment.
      </p>
      </section>

      {/* Author Section (Image & Bio) */}
      

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
         Master Nextjs with our comprehensive full course playlist! This stepbystep series covers 
      everything you need to build dynamic and highperformance web applications From the basics
       of installation and setup to advanced features like serverside rendering API integration 
       and deployment—this course has it all! Perfect for beginners and experienced developers 
       looking to enhance their skills Start learning today and take your web development 
       to the next level!
      </p>
    </article>
  );
}
