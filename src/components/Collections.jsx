import React, { useState } from "react";
import "../styles/Collections.css";
import GalleryModal from "./GalleryModal";

import luxeFront from "../assets/luxe-front.jpg";
import luxeBack from "../assets/luxe-back.jpg";

import sleekFront from "../assets/sleek-front.jpg";
import sleekBack from "../assets/sleek-back.jpg";

import curlyFront from "../assets/curly-front.jpg";
import curlyBack from "../assets/curly-back.jpg";


const collections = [
  {
    name: "LUXE WAVY",
    description: "Soft, voluminous waves that bring elegance and movement.",
    price: "₦10,000",
    front: luxeFront,
    back: luxeBack,
  },

  {
    name: "SLEEK STRAIGHT",
    description: "Timeless, sleek and straight for a polished, sophisticated look.",
    price: "₦10,000",
    front: sleekFront,
    back: sleekBack,
  },

  {
    name: "CURLY QUEEN",
    description: "Bouncy, curly and full of life. Perfect for any occasion.",
    price: "₦12,000",
    front: curlyFront,
    back: curlyBack,
  },
];


const Collections = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [modalPrice, setModalPrice] = useState("");
  const [startIndex, setStartIndex] = useState(0);

  const openModal = (item, imgIndex = 0) => {
    setModalImages([item.front, item.back]);
    setModalTitle(item.name);
    setModalPrice(item.price);
    setStartIndex(imgIndex);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <section className="collections-section" id="collections">

      {/* HEADER */}

      <div className="collections-header">

        <p className="collections-label">
          THE COLLECTION
        </p>

        <h1>
          Our <span>Collections</span>
        </h1>

        <p className="collections-subtitle">
          Discover our carefully curated selection of luxurious ponytails.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="collections-list">

        {collections.map((item, index) => (

          <div className="collection-item" key={index}>

            {/* FRONT IMAGE */}

              <div className="collection-image" onClick={() => openModal(item, 0)} style={{cursor: 'pointer'}}>

                <img
                  src={item.front}
                  alt={`${item.name} front view`}
                />

                <span className="image-label">
                  FRONT
                </span>

              </div>


            {/* PRODUCT INFORMATION */}

            <div className="collection-info">

              <span className="collection-number">
                0{index + 1}
              </span>

              <h2>
                {item.name}
              </h2>

              <div className="collection-divider">
                <span></span>
                <span>✦</span>
                <span></span>
              </div>

              <p>
                {item.description}
              </p>

              <div className="collection-price">
                {item.price}
              </div>

              <button className="collection-button" onClick={() => openModal(item, 0)}>
                VIEW DETAILS
                <span>→</span>
              </button>

            </div>


            {/* BACK IMAGE */}

            <div className="collection-image" onClick={() => openModal(item, 1)} style={{cursor: 'pointer'}}>

              <img
                src={item.back}
                alt={`${item.name} back view`}
              />

              <span className="image-label">
                BACK
              </span>

            </div>

          </div>

        ))}

      </div>

      <GalleryModal
        open={modalOpen}
        images={modalImages}
        startIndex={startIndex}
        title={modalTitle}
        price={modalPrice}
        onClose={closeModal}
      />

    </section>
  );
};

export default Collections;
