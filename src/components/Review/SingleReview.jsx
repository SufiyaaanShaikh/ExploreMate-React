import React from "react";
import mumbai from "../../images/mumbai.jpg";
import Header from "../Header";

function SingleReview() {
  return (
    <>
      <Header />
      {/* <!-- Main start  --> */}
      <section id="single-r" class="">
        <div class="sec">
          <h1 class="fw-700 text-center page-head ">
            A Wonderful Journey to Mumbai
          </h1>
          <div class="img-block">
            <img src={mumbai} alt="mumbai" class="h-100 w-100" />
          </div>
          <div class="content">
            <p class="para-c f-16">
              Mumbai, often known as the City of Dreams, offers a rich and
              diverse experience that captivated me during a recent city tour.
              The journey began at the iconic Gateway of India, a majestic
              colonial-era monument that stands proudly overlooking the Arabian
              Sea. This was followed by a visit to the Chhatrapati Shivaji
              Maharaj Terminus, a UNESCO World Heritage Site known for its
              stunning Victorian Gothic architecture. Strolling along Marine
              Drive, affectionately called the Queen’s Necklace, provided a
              serene contrast, with its beautiful sea views and bustling evening
              atmosphere. The tour also took me to Dhobi Ghat, the world's
              largest outdoor laundry, offering a unique glimpse into Mumbai's
              daily life and hard-working spirit. A highlight was exploring Chor
              Bazaar, a vibrant flea market filled with antiques and unique
              finds, where haggling is part of the experience. The spiritual
              visit to the Haji Ali Dargah, located on an islet in the Arabian
              Sea, offered a tranquil and breathtaking view of the cityscape.
              The tour wouldn't have been complete without sampling Mumbai's
              famed street food, including spicy Vada Pav and delicious Pav
              Bhaji, which perfectly encapsulate the city's culinary diversity.
              This tour provided an immersive experience into Mumbai's dynamic
              culture, history, and everyday life, making it an unforgettable
              adventure that showcases why the city is so beloved by its
              residents and visitors alike.
            </p>
            <p class="para-c f-16">
              My recent tour of Mumbai, the City of Dreams, was an exhilarating
              blend of cultural immersion, historical exploration, and
              contemporary experiences. The journey began at the majestic
              Gateway of India, where the view of the Arabian Sea and the
              bustling crowd set the stage for an exciting day. From there, we
              moved on to the Chhatrapati Shivaji Maharaj Terminus, a UNESCO
              World Heritage Site that showcases stunning Victorian Gothic
              architecture, capturing the essence of Mumbai's colonial past. A
              walk along Marine Drive, also known as the Queen’s Necklace,
              offered breathtaking views of the sunset over the Arabian Sea and
              a chance to experience the city's leisurely pace. The visit to
              Dhobi Ghat, the world’s largest outdoor laundry, provided a
              fascinating glimpse into the daily lives of many Mumbai residents.
              Chor Bazaar, with its vibrant scenes and eclectic mix of antiques
              and vintage items, was a treasure trove for both shoppers and
              photographers. The spiritual journey to Haji Ali Dargah, situated
              on an islet in the Arabian Sea, offered not only a moment of
              tranquility but also a stunning view of the city skyline. No tour
              of Mumbai would be complete without indulging in its famed street
              food, from spicy Vada Pav to the delightful Pav Bhaji, each bite
              offering a taste of the city's rich culinary heritage. This tour
              through Mumbai's iconic landmarks, vibrant markets, and diverse
              cuisine left me with an unforgettable experience of a city that
              seamlessly blends tradition with modernity.
            </p>
            <div class="radio-wrapper-17 star">
              <input id="rating-17-5" type="radio" name="radio-examples" />
              <label class="rating-5" for="rating-17-5"></label>
              <input id="rating-17-4" type="radio" name="radio-examples" />
              <label class="rating-4" for="rating-17-4"></label>
              <input id="rating-17-3" type="radio" name="radio-examples" />
              <label class="rating-3" for="rating-17-3"></label>
              <input id="rating-17-2" type="radio" name="radio-examples" />
              <label class="rating-2" for="rating-17-2"></label>
              <input id="rating-17-1" type="radio" name="radio-examples" />
              <label class="rating-1" for="rating-17-1"></label>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Main end  --> */}
    </>
  );
}

export default SingleReview;
