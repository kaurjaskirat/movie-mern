import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:7000/foods/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);

  }


  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>

      <div><Navbar /></div>
      <div>


        <div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" id='carousel'>
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                  <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                </div>
                <div className="carousel-item">
                  <img src="https://source.unsplash.com/random/900×700/?theatre" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                </div>
              </div>
              <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/900×700/?projector" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900×700/?theatre" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://source.unsplash.com/random/900×700/?popcorn" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>

      <div className='container'>{
        foodCat !== []
          ? foodCat.map((data) => {
            return (<div className="row mb-4">
              <div key={data._id} className="fs-3 m-3">{data.category}</div>
              <hr />

              <div >
                <ul className="pagination pagination-lg ">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                </ul>
              </div>

              {foodItem !== [] ? foodItem.filter((item) => (item.category === data.category) && (item.category.toLowerCase().includes(search.toLocaleLowerCase())))
                .map(filterItems => {
                  return (
                    <div key={(filterItems._id)} className='col-12 col-md-6 col-lg-3'>
                      <Card foodName={filterItems.name}
                        foodCat={filterItems.category}
                        imgSrc={filterItems.img}
                        deS={filterItems.description}
                      ></Card>
                    </div>
                  )
                })



                : <div>no such data</div>}



            </div>
            )
          }) : ''}</div>

    </div>)
}

