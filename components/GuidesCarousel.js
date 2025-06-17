'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Guides.css'; 
import Link from 'next/link';

export default function GuidesSection() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const openModal = (guide) => setSelectedGuide(guide);
  const closeModal = () => setSelectedGuide(null);

  return (
    <div className="container">
  <h2 className="h2heading">Guides for the UAE</h2>

  <div className="controls">
    <button className="swiper-button-prev"></button>
    <button className="swiper-button-next"></button>
  </div>

      <Swiper
	  
        slidesPerView={1.1}
        spaceBetween={16}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        breakpoints={{ 768: { slidesPerView: 3 } }}
        modules={[Navigation]}
      >
        {[...Array(4)].map((_, i) => {
          const data = [
            {
              title: <> <span className="brown">GOLDEN</span> VISA </>,
              desc: "Instructions for how to stay in the UAE long-term",
              size: "1MB"
            },
            {
              title: <span className="brown">CHECKLIST</span>,
              desc: "Everything you need to know before buying property in the UAE",
              size: "903kB"
            },
            {
              title: <>BUYER&apos;S <span className="brown">GUIDE</span></>,
              desc: "Everything you should know about finding and buying a place to live in Dubai",
              size: "4MB"
            },
            {
              title: <>INVESTOR <span className="brown">GUIDE</span></>,
              desc: "Learn about UAE investment opportunities and legalities.",
              size: "2.3MB"
            }
          ][i];

          return (
            <SwiperSlide key={i}>
              <div className="card">
                <h3 className="title">{data.title}</h3>
                <p>{data.desc}</p>
                <button className="downloadBtn" onClick={() => openModal(data.title)}>
                  Download PDF, {data.size}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Modal */}
      {selectedGuide && (
        <div className="overlay" onClick={closeModal}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>×</button>
            <h3>{selectedGuide}</h3>
            <p>Leave your phone number and download the guide</p>
            <input placeholder="Phone number" />
            <button className="downloadConfirm">Download PDF</button>
            <div className="consent">
              <input type="checkbox" id="consent" defaultChecked />{' '}
              <label htmlFor="consent">
                I consent to receive materials and understand I can withdraw anytime.
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
