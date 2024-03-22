import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.webp";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.webp";
import img5 from "./assets/5.webp";
import img6 from "./assets/6.webp";
export default function FormData() {
  const slide=React.useRef(0);
  const [formData, setFormData] = React.useState({
    marks: null,
    date: null,
    fruits1: null,
    fruits2: null,
  });
  const [mark, setMark] = React.useState(50);
  function handleChange(e) {
    setMark(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    const fruits1 = [];
    const fruits2 = [];
    for (let i = 0; i < 7; i++) {
      if (e.target[i].checked) {
        fruits2.push(e.target[i].value);
      }
    }

    for (let i = 0; i < 3; i++) {
      if (e.target[2].options[i].selected) {
        fruits1.push(e.target[2][i].value);
      }
    }

    setFormData({
      marks: e.target[0].value,
      date: e.target[1].value,
      fruits1,
      fruits2,
    });
    console.log(formData);
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:true,
    autoplay:true,
    autoplaySpeed:1000,
    // centerMode:true,
    // centerPadding:"30%",
    // pauseOnDotsHover:true
  };
  function prev(){
  slide.current.slickPrev();
  }
  function next(){
    slide.current.slickNext();

    
  }
  function play(){
    slide.current.slickPlay();
      
  }
    function pause(){
  slide.current.slickPause();
        
  }
  return (
    <div className="form-container">
      <div>
    <Slider {...settings} ref={slide}>
    <div ><img src={img1} /></div>
    <div><img src={img2} /></div>
    <div><img src={img3} /></div>
    <div><img src={img4} /></div>
    <div><img src={img5} /></div>
    <div><img src={img6} /></div>
      </Slider>
     
      </div>
      <div style={{margin:"50px",justifyContent:"space-around",textAlign:"center",display:"flex"}}>
    <button type="button" onClick={prev} className="btn">PREV</button>
    <button type="button" onClick={play} className="btn">PLAY</button>
    <button type="button" onClick={pause} className="btn">PAUSE</button>
    <button type="button" onClick={next} className="btn">NEXT</button>

      </div>
      <form onSubmit={handleClick}>
        <div className="form-group">
          {mark}
          <input
            type="range"
            name="slider"
            min={0}
            max={100}
            onChange={handleChange}
            className="form-range-input"
          />
        </div>
        <div className="form-group">
          <input type="date" name="datepicker" className="form-date-input" />
        </div>
        <div className="form-group">
          <select multiple className="form-select">
            <option value="mango">Mango</option>
            <option value="Banana">Banana</option>
            <option value="Grapes">Grapes</option>
          </select>
        </div>
        <div className="form-group form-checkbox-group">
          <div>
            <label htmlFor="orange">ORANGE</label>
            <input
                type="checkbox"
                id="orange"
                value="orange"
                className="form-checkbox-input"
              />
          </div>

          <div>
            <label htmlFor="kiwi">KIWI</label>
            <input type="checkbox" id="kiwi" value="kiwi" />
          </div>

          <div>
            <label htmlFor="grape">GRAPE</label>
            <input type="checkbox" id="grape" value="grape" />
          </div>
          <div>
            <label htmlFor="mango">MANGO</label>
            <input type="checkbox" id="mango" value="mango" />
          </div>
        </div>
        <button className="btn" >SUBMIT</button>
      </form>
      <div>Marks : {formData.marks}</div>
      <div>Date : {formData.date}</div>
      <div>
        Fruits 1 :{" "}
        {formData.fruits1 &&
          formData.fruits1.length != 0 &&
          formData.fruits1.map((data) => {
            return data + " ";
          })}
      </div>
      <div>
        Fruits 2 :{" "}
        {formData.fruits2 &&
          formData.fruits2.length != 0 &&
          formData.fruits2.map((data) => {
            return data + " ";
          })}
      </div>
    </div>
  );
}
