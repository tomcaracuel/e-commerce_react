import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div>
      <div className="categories">
        <div className="col">
          <div className="row">
          <img
            src="https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link className='link' to='/products/l'>Sale</Link>
          </button>
          </div>
          <div className="row">
          <img
            src="https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
          <Link to='/products/1' className='link'>Sofas</Link>
          </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to='/products/2' className='link'>
              Kitchen
              </Link>
          </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
              <img
                src="https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Bedroom
                </Link>
              </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Lamps
                </Link>
              </button>
              </div>
            </div>
          </div>
          <div className="row">
          <img
            src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Interior Design
            </Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
