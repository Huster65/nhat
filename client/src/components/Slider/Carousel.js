import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              <div key={1}>
                <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-cartoon-medical-banner-poster-image_184430.jpg"></img>
              </div>
              <div key={2}>
                <img src="https://tbytmedlinks.com/wp-content/uploads/2021/08/banner.jpg"></img>
              </div>
              <div key={3}>
                <img src="https://thietbiytehathanh.vn/wp-content/uploads/2018/11/banner2.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://sieuthisuckhoe.vn/wp-content/uploads/2018/02/cua-hang-thiet-bi-y-te-gia-dinh.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cartoon-medical-banner-poster-image_184432.jpg"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
                TR??? GI?? M??A D???CH <br></br> ??u ????i v?? ?????ch
              </div>
              <div>
                cam k???t ch???t l?????ng  <br></br>  B???o h??nh 12 th??ng
              </div>
              <div>
              Thi???t b??? y t??? cao c???p<br></br>  Gi?? m???i c???c t???t
              </div>
              <div>
              Chung tay ch???ng d???ch  <br></br>  Mua ??i ch??? chi
              </div>
              <div>
              Thi???t b??? y t??? gia ????nh   <br></br>   d??? d??ng s??? d???ng
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DGt2Cmya4EM6VdAZCd24k-WZNdcs1ulGFg&usqp=CAU"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZhElV-S5ih0MaOaQklsi-bbc1eNzRKJyOQ&usqp=CAU"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE96ngHFz_lnzSJEvxQhYjA43rSyCzUFIm2g&usqp=CAU"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
