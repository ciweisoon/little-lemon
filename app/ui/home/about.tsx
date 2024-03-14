import Image from "next/image";
import Adrian_Mario from "@/public/chef/mario-and-adrian.jpg";
import Mario from "@/public/chef/mario.jpg";

const About = () => {
    return (
    <section id="about" className="relative isolate px-10 py-16 lg:px-8 my-5 grid grid-cols-1 grid-rows-1 gap-4 md:grid-row-2 lg:grid-cols-2">
        <div>
            <h1 className="pb-5 font-black">Little Lemon</h1>
            <h3 className="pb-5 font-extrabold">Chicago</h3>
            <p className="break-normal text-justify">
                Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.<br />
                The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.<br />
                The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.<br />
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.<br />
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.<br />
                Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.
            </p>
        </div>
        <div className='relative pt-0 lg:pt-20'>
            <Image
                src={Adrian_Mario}
                alt="Chef Adrian and Chef Mario"
                width={400}
                className="mx-auto lg:absolute top-7 right-6"
            />
            <Image
                src={Mario}
                alt="Chef Mario"
                width={400}
                className="hidden lg:block lg:absolute bottom-7 left-6"
            />
        </div>
    </section>
    )
}

export default About;