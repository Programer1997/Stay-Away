import "./popular.css"

const Popular = () => {
  return (
    <div className="fp">
    <div className="fpItem">
      <img
        src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Stare Maestro Hotel</span>
      <span className="fpCity">Barcelona, Spain</span>
      <span className="fpPrice">Starting from $200</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Comfort Suites Airport</span>
      <span className="fpCity">San Antonio, USA</span>
      <span className="fpPrice">Starting from $140</span>
      <div className="fpRating">
        <button>9.3</button>
        <span>Exceptional</span>
      </div>
      {/* //third */}
    </div>
    <div className="fpItem">
      <img
        src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="fpImg"
      />
      <span className="fpName">The Atlas Hotel</span>
      <span className="fpCity">Marburg, Germany</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.8</button>
        <span>Excellent</span>
      </div>
    </div>
    <div className="fpItem">
      <img
        src="https://images.unsplash.com/photo-1572177215152-32f247303126?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="fpImg"
      />
      <span className="fpName">Kepinsky Hotel</span>
      <span className="fpCity">Sevilla, Spain</span>
      <span className="fpPrice">Starting from $220</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
    </div>
  </div>
  )
}

export default Popular
