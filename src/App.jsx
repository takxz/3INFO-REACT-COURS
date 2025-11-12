
import './App.css'
import Login from './Components/Login'
import Product from './Components/Product'
import Count from './Components/Count';

export default function App() {
  const produits = [
  {
    nom: "Clavier mécanique RGB",
    description: "Clavier gaming rétroéclairé avec switches rouges et touches programmables.",
    prix: 89.99,
    images: [
      "https://exemple.com/images/clavier1.jpg",
      "https://exemple.com/images/clavier2.jpg"
    ]
  },
  {
    nom: "Souris sans fil ergonomique",
    description: "Souris légère et silencieuse avec capteur optique haute précision.",
    prix: 39.90,
    images: [
      "https://exemple.com/images/souris1.jpg",
      "https://exemple.com/images/souris2.jpg"
    ]
  },
  {
    nom: "Écran 27 pouces Full HD",
    description: "Écran LED 27'' avec technologie anti-reflets et mode faible lumière bleue.",
    prix: 179.00,
    images: [
      "https://exemple.com/images/ecran1.jpg",
      "https://exemple.com/images/ecran2.jpg"
    ]
  },
  {
    nom: "Casque audio Bluetooth",
    description: "Casque sans fil avec réduction active du bruit et autonomie de 30 heures.",
    prix: 129.99,
    images: [
      "https://exemple.com/images/casque1.jpg",
      "https://exemple.com/images/casque2.jpg"
    ]
  },
  {
    nom: "Tapis de souris XXL",
    description: "Tapis de souris antidérapant, surface lisse adaptée aux jeux et au travail.",
    prix: 19.99,
    images: [
      "https://exemple.com/images/tapis1.jpg",
      "https://exemple.com/images/tapis2.jpg"
    ]
  }
];

  return (
<div className="welcome">
  <Count />
  <Login />
  Bienvenue sur ce site. 
  {produits.map(product => (
    <Product product={product} />
  ))}
</div>
  )
}