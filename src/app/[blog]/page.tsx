import Image from "next/image";

export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
      Bike Details

      </h1>
       <Image
            className="lg:h-[700px] md:h-36 w-full object-cover object-center"
            src="/images/1bike.jpg"
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
Lorem ipsum dolor sit amet consectetur adipisicing elit Reiciendis odio est laboriosam ipsa similique in quis perferendis iure expedita Nemo harum vitae repellenduprovident explicabo eius unde et asperiores nihil
      </p>
      </section>

      {/* Author Section (Image & Bio) */}
      

      {/* Main Body of Blog */}
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
   
      </p>
    </article>
  );
}
