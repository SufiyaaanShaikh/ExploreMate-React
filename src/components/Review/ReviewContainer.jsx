import React from "react";
import ReviewBlock from "./ReviewBlock";
import mumbai from "../../images/mumbai.jpg"

const reviews = [
  {
    image: mumbai,
    location: "Mumbai, India",
    title: "A Wonderful Journey to Mumbai",
    description:
      "India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes. From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.",
  },
  {
    image: mumbai,
    location: "Mumbai, India",
    title: "A Wonderful Journey to Mumbai",
    description:
      "India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes. From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.",
  },
  {
    image: mumbai,
    location: "Mumbai, India",
    title: "A Wonderful Journey to Mumbai",
    description:
      "India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes. From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.",
  },
  {
    image: mumbai,
    location: "Mumbai, India",
    title: "A Wonderful Journey to Mumbai",
    description:
      "India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes. From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.",
  },
  {
    image: mumbai,
    location: "Mumbai, India",
    title: "A Wonderful Journey to Mumbai",
    description:
      "India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes. From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.",
  },
  // Repeat or add more reviews as needed
];

const ReviewContainer = () => (
  <div className="review-container grid">
    {reviews.map((review, index) => (
      <ReviewBlock key={index} {...review} />
    ))}
  </div>
);

export default ReviewContainer;
