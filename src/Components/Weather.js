import React from "react";


 
const Weather = props => {

    console.log(props.temp_feels_like)
    console.log(props.cityname)
    const style = {
        position: "relative", 
        display:"inline-block",
        margin: "30px auto",
        backgroundColor: "rgba(255, 255, 255,0.5)",
        borderRadius: "15px",
        padding: "40px",
        fontSize: "55px",
        fontWeight: "bold",
        textAlign: "center"
    };
  return (
      <div className="container">
      <div className="Card">
      <h1 className="text-white py-3" id="cityName">{props.cityname}</h1>
     {/* Get Celsius */}
        {props.temp_celsius ? (
            <div> 
                <h1 className="py-2" style={style}>
                    {props.temp_celsius}&deg;
                </h1>
                <h2 style={{fontStyle:"italic"}}> Feels Like : {props.temp_feels_like}&deg;</h2>

            </div>
        ) : null
        }
        <h4 className="py-3">
          {
          props.description.charAt(0).toUpperCase() + props.description.slice(1)
          }
        </h4>
      </div>
    </div>
  );
};

export default Weather;

// function maxminTemp(min, max) {
//   if (max && min) {
//     return (
//       <h3>
//         <span className="px-4">{min}&deg;</span>
//         <span className="px-4">{max}&deg;</span>
//       </h3>
//     );
//   }
// }