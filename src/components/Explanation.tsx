import React from 'react';

export function Explanation() {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
      
      <div className="space-y-4 text-gray-700">
        <p>
          Cette application permet d'explorer les intervalles qui composent différents types d'accords. 
          Sélectionnez une tonalité dans le menu déroulant pour voir les notes correspondantes pour chaque accord.
        </p>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Note sur les accords sus2 et sus4</h3>
            <p>
              Dans les accords sus2 et sus4, les chiffres 2 et 4 apparaissent dans la colonne "3" car ces accords 
              remplacent la tierce (3) par une seconde (2) ou une quarte (4) respectivement. C'est ce qui crée 
              leur sonorité caractéristique "en suspension".
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Note sur les accords avec 6th</h3>
            <p>
              Pour les accords "Major 6th" et "Minor 6th", le chiffre "6" apparaît dans la colonne "7". 
              Ceci est dû à la structure du tableau qui suit la logique des degrés des gammes (1, 3, 5, 7, 9, 11, 13).
              La sixte est placée dans la colonne "7" car elle représente une extension de l'accord de base (1, 3, 5), 
              même si elle n'est pas une septième.
            </p>
          </div>
        </div>

        <p>
          Chaque accord peut être écouté en cliquant sur le bouton de lecture qui apparaît après avoir sélectionné une tonalité.
        </p>
      </div>
    </div>
  );
}