import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
            src="https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmlzfGVufDB8fDB8fHww" 
            alt="hotel1"
            className="featuredImg" />
            <div className="featuredTitles">
                <h1>Paris</h1>
                <h2>12 Properties</h2>
            </div>
        </div>

        {/* //dva */}

        <div className="featuredItem">
            <img 
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="hotel2" 
            className="featuredImg" />
            <div className="featuredTitles">
                <h1>Hawaii</h1>
                <h2>8 Properties</h2>
            </div>
        </div>


        {/* tri */}

        <div className="featuredItem">
            <img 
            src="https://images.unsplash.com/photo-1577628512137-65f825ee2906?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="hotel3"
            className="featuredImg" />
            <div className="featuredTitles">
                <h1>Milano</h1>
                <h2>10 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
