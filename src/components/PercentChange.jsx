import React, { useEffect, useState } from 'react';


const PercentChange = ({percent}) => {
    {/* on va prendre une var sass grace au export dans le _settings.scss et on crée une var ici */}
    const [color, setColor] = useState('');

    useEffect(() => {
        // si il y a un pourcentage: et qu'il est supp ou égal à 0 alors tu vas chercher colors grâce à l'import et le green sinoon red; Si pas de pourcentage alors tu seras un tiret blanc
        if(percent){
            if(percent >= 0){
                // comme je n'ai pas pu importer les couleurs depuis le dossier sass, je les met manuellement
                setColor('rgb(2, 172, 81)')
            } else {
                setColor('rgb(255, 111, 86)')
            }
        } else {
            setColor('rgb(219, 217, 217)')
        }
    },[percent])
    // ne pas oublier de mettre percent dans le dependencie a chaque fois que tu reçois le percent tu te met à jour
    return (
        // on n'oublie pas la var color pour le style
        <p className="percent-change-container" style={{color}}>
            {percent ? percent.toFixed(1) + "%" : "-"}
        </p>
    );
};

export default PercentChange;