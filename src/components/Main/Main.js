import { reviews } from '../data/data';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';
import {  useState } from 'react';

function Main() {
  const datas = reviews;
  const [index, setIndex] = useState(0);


  // useEffect(() => {
  //   parent.current && autoAnimate(parent.current);
  // }, [parent]);

  return (
    <>
      <div className="row gx-0 vh-100">
        <div className="container my-auto">
          <div className=" mx-auto border col-lg-5  col-sm-8 rounded">
            <div className="d-flex align-items-center shadow card-bg rounded p-3 flex--wrap flex-nowrap">
              <button
                className="btn button-bg border"
                onClick={() =>
                  setIndex(prev => {
                    return prev === 0 ? datas.length - 1 : prev - 1;
                  })
                }
              >
                <BsArrowLeft />
              </button>
              <div className="d-flex flex-column align-items-center p-4 " >
                <div className="img-div text-center ">
                  <span className="quote-icon d-flex justify-content-center align-items-center">
                    <FaQuoteRight />
                  </span>
                  <div className="img">
                    <img src={datas[index]?.image} alt="" className="rounded-circle " />
                  </div>
                </div>
                <p className="ff-nunito-regular fw-bold mt-3">{datas[index].name.toLocaleUpperCase()}</p>
                <p className="ff-nunito-light fw-bold button-bg">{datas[index].job}</p>
                <div className="d-flex align-items-center">
                  <p className="text-center ff-nunito-light p-3">{datas[index].text}</p>
                </div>
                <div className="mt-3">
                  <button
                    className="btn bg-cl border"
                    onClick={()=>setIndex(() => {
                      console.log(Math.floor(Math.random() * (datas.length - 1)))
                      return Math.floor(Math.random() * (datas.length - 1));
                    })}
                  >
                    suprise me!
                  </button>
                </div>
              </div>
              <button
                className="btn button-bg border"
                onClick={() =>
                  setIndex(prev => {
                    return prev === datas.length - 1 ? 0 : prev + 1;
                  })
                }
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
