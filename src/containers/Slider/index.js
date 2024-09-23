// import { useEffect, useState } from "react";
// import { useData } from "../../contexts/DataContext";
// import { getMonth } from "../../helpers/Date";

// import "./style.scss";

// const Slider = () => {
//   const { data } = useData();
//   const [index, setIndex] = useState(0);
//   const byDateDesc = data?.focus.sort((evtA, evtB) =>
//     // NOTE Reversed date from new/old to old/new
//     new Date(evtA.date) < new Date(evtB.date) ? 1 : -1
//   );
//   const nextCard = () => {
//     setTimeout(
//       // NOTE length - 1 to loop the carousel to 3 img not 4
//       () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
//       5000
//     );
//   };
//   useEffect(() => {
//     nextCard();
//   });
//   return (
//     <div className="SlideCardList">
//       {byDateDesc?.map((event, idx) => (
//         <>
//           <div
//             key={event.title}
//             className={`SlideCard SlideCard--${
//               index === idx ? "display" : "hide"
//             }`}
//           >
//             <img src={event.cover} alt="forum" />
//             <div className="SlideCard__descriptionContainer">
//               <div className="SlideCard__description">
//                 <h3>{event.title}</h3>
//                 <p>{event.description}</p>
//                 <div>{getMonth(new Date(event.date))}</div>
//               </div>
//             </div>
//           </div>

//           <div className="SlideCard__paginationContainer">
//             <div className="SlideCard__pagination">
//               {byDateDesc?.map((e, radioIdx) => (
//                 <input
//                 // NOTE readOnly add coz no onChange handler
//                   readOnly
//                   key={e.title}
//                   type="radio"
//                   name="radio-button"
//                   checked={index === radioIdx}
//                 />
//               ))}
//             </div>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default Slider;

import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? 1 : -1
  );

  const nextCard = () => {
    if (byDateDesc && byDateDesc.length > 0) {
      setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
        5000
      );
    }
  };

  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.id || idx} // Ensure a unique key here (use event.id if available)
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((e, radioIdx) => (
            <input
              key={e.id || radioIdx} // Ensure a unique key here too
              readOnly
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
