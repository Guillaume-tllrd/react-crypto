import React from 'react';

const ToTop = () => {
    return (
        // pour renvoyer au plus haut de la page on utilise scrollTo(0,0), on peut mettre en paramètre un élément sur lequel on peut scroller, ne pas oublier html scroll behavior smooth dans le css
       <div className="top" onClick={() => window.scrollTo(0,0)}>
        <img src="./assets/arrow-icon.svg" alt="arrow" />
       </div>
    );
};
// Je met cette flèche tout en bas de App.jsx
export default ToTop;