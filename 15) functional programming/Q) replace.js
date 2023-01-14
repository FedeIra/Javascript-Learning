let fede = 'fede';

console.log(fede); //fede

fede = fede.replace('f', 'F');

console.log(fede); // Fede

let description =
  'Velocibox is a twitch-heavy action game crafted for the hardcore audience.<br/><br/><ul>Flip, spin and dodge your way through more than 70 deviously designed patterns.<br/></li>Features an insanely difficult Super Velocibox mode for the uber-hardcore.<br/></li>So addictive the developer has been called a filthy drug dealer.</li></ul>Popular YouTube FeaturesFeatured in popular YouTube Let\'s Plays such as UberHaxorNova, jacksepticeye, Markiplier and more!<br/><br/><ul>"One of the hardest ******* games I think I\'ve ever played." - UberHaxorNova<br/></li>"This is a whole \'nother realm of twisty-nipple-freshness!" - jackcepticeye<br/></li>"Yoo-ba-do-bi. Ha-ba-da-bubu. Ha-ba-fu-biii! Haaa! Ha-ba-ja-foo-boo!" - Markiplier</li></ul>Important Updates<ul>Party pooping frame rate dependency bug has been fixed.</li></ul>';

// replace anything between <> with nothing:
description = description.replace(/<[^>]*>/g, '');

console.log(description);
