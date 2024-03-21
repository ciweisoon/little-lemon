import { fetchTopReviews } from "@/app/lib/data";
import Image from "next/image";

const Testimonial = async () => {
    const reviews = await fetchTopReviews();

    const handleStar = ( num: number ) => {
        const stars = [];
        for (let i=0; i<num; i++) {
            stars.push(
                <span key={i}>
                    <svg className="w-7 h-8 text-custom-yellow lg:w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                    </svg>
                </span>
            );
        }
        return stars;
    }

    return (
        <section className="relative isolate px-10 py-10 lg:px-8 bg-custom-green my-5 hidden md:block">
            <h1 className="text-4xl text-center pb-5 text-custom-yellow">Testimoials</h1>
            {
                reviews.length === 0 ?
                <p className="text-center text-bold text-white">Waitting for reviews...</p> :
                <div className="grid grid-cols-4 gap-4 place-content-center">
                {reviews.map((review)=> {
                    return (
                        <div key={review.id} className="box-border bg-white p-4">
                            <div className="flex flex-row justify-center">
                                {handleStar(review.star)}
                            </div>
                            <Image src={review.image_url} alt="customer profile picture" width={100} height={100} className="rounded-full mx-auto my-5"/>
                            <h1 className="text-center my-2">{review.name}</h1>
                            <p className="text-center">{review.review}</p>
                        </div>
                    )
                })}
                </div>
            }
        </section>
    )
}

export default Testimonial;