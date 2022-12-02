// import React, { useState } from "react";
// import './Test.css'

// const Testimontial = () => {

//     const tests = {
//         0: {
//             client: "Awsoem Client, Aceme Co",
//             test: "bbjkjhjkdjhnjkdhbnjmkjhnjklaljksjiekasjd;ajncsjcnsalam necesen necesen ne ediresen yaxsiyam sen necesennyeri get burdan agilli ola doyerem seni"
//         },
//         1: {
//             client: "Sweet Client, Aceme inc",
//             test: "bbjkjhjkdjhnjkdhbnjmkjhnjklaljksjiekasjd;ajncsjcnsalam necesen necesen ne ediresen yaxsiyam sen necesennyeri get burdan agilli ola doyerem seni"
//         },
//         2: {
//             client: "Dope Client, Aceme Co",
//             test: "bbjkjhjkdjhnjkdhbnjmkjhnjklaljksjiekasjd;ajncsjcnsalam necesen necesen ne ediresen yaxsiyam sen necesennyeri get burdan agilli ola doyerem seni"
//         },
//         3: {
//             client: "",
//             test: "bbjkjhjkdjhnjkdhbnjmkjhnjklaljksjiekasjd;ajncsjcnsalam necesen necesen ne ediresen yaxsiyam sen necesennyeri get burdan agilli ola doyerem seni"
//         },
//     }

//     const [current, setCurrent] = useState(tests[0]);

//     const [active, setActive] = useState(0)

//    const handleSetClick = (event) => {
//         setCurrent(tests[event.target,getAttribute("data-test")])
//         setActive(event.target.getAttribute("data-test"))
//    }

//     return (
//         <div className="testss">
//             <p className="testss_p">{current.test}</p>
//             <p className="testss_p">{current.client}</p>
//             <div className="testss2">
//                 {Object.keys(tests).map(index => (
//                     <span 
//                         onClick={event => handleSetClick(event)}
//                         data-test={index}
//                         key={index}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Testimontial;