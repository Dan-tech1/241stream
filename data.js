/* ====== Catalogue centralisé ====== */
const DATA = {
  films: [
    {
      title: "Hunger Games : La Ballade du serpent et de l'oiseau chanteur",
      embed: "https://vidzy.org/embed-mkwda1yhmx5b.html",
      thumb: "https://image.tmdb.org/t/p/w300/q4EDvPcf956FgakWwcXiWdQEgxU.jpg",
      desc: "Le jeune Coriolanus est le dernier espoir de sa lignée, la famille Snow autrefois riche et fière est aujourd’hui tombée en disgrâce dans un Capitole d'après-guerre.",
      categorie: "action"
    },
    {
      title: "Death of a Unicorn",
      embed: "https://vidzy.org/embed-rhuysex3xn10.html",
      thumb: "https://image.tmdb.org/t/p/w300/s1q08ciejMW84z839SdwC47QK6a.jpg",
      desc: "Un père et sa fille tuent accidentellement une licorne et une multinationale tente d'exploiter ses pouvoirs.",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "Thor : Ragnarok ",
      embed: "https://vidzy.org/embed-zv30gmmpco1g.html",
      thumb: "https://image.tmdb.org/t/p/w400/jfAFkGetZEBNIwPubR0JG3k7Zkt.jpg",
      desc: "Thor est emprisonné de l’autre côté de l’univers sans son puissant marteau et se retrouve engagé dans une course contre le temps pour rejoindre Asgard et arrêter Ragnarok – la destruction de son monde natal et la fin de la civilisation Asgardienne...",
      categorie: "action",
      flags: { top:true }
    },
    {
      title: "Massacre à la tronçonneuse - 2022",
      embed: "https://uqload.cx/embed-64wtddaonodb.html",
      thumb: "https://image.tmdb.org/t/p/w400/7sKiGNWFM15WNyY7LYd5vmb3brO.jpg",
      desc: "Resté caché pendant près de 50 ans, Leatherface revient terroriser un groupe de jeunes amis idéalistes qui perturbent sans le vouloir son univers protégé dans une petite ville du Texas.",
      categorie: "horreur",
      flags: {  }
    },
    {
      title: "Captain America : Brave New World - 2025",
      embed: "https://uqload.cx/embed-49l6a88sjjyw.html",
      thumb: "https://image.tmdb.org/t/p/w300/wDRXmiAEJdhNIcuetM4016fOCx8.jpg",
      desc: " Après les événements de Avengers: Endgame, Sam Wilson, l'ancien Faucon, doit assumer le rôle de Captain America dans un monde en constante évolution.",
      categorie: "action",
      flags: {  }
    },
    {
      title: "Borderlands",
      embed: "https://uqload.cx/embed-wkuw3v39wrkq.html",
      thumb: "https://image.tmdb.org/t/p/w300/6qpvOV6CKHDJoYvWEtTLyuVIwuP.jpg",
      desc: " Dans un futur lointain, sur la planète Pandora, une chasseuse de trésors nommée Lilith fait équipe avec un groupe de marginaux pour retrouver un coffre légendaire renfermant une technologie extraterrestre aux pouvoirs inimaginables. Ensemble, ils affrontent des bandits, des créatures mutantes et des corporations sans scrupules dans une quête épique pour sauver Pandora et découvrir les secrets du coffre.",
      categorie: "comedie",
      flags: { top:true}
    },
    {
      title: "Wonka",
      embed: "https://vidzy.org/embed-urjfpce5axb7.html",
      thumb: "https://image.tmdb.org/t/p/w300/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
      desc: " L'histoire de Willy Wonka et comment il a rencontré les Oompa-Loompas sur l'île mystérieuse.",
      categorie: "comedie",
      flags: {  new:true }
    },
    {
      title: "Devil Seed",
      embed: "https://Uqload.cx/embed-k6ougmdhes6o.html",
      thumb: "https://image.tmdb.org/t/p/w400/zjrDE4agtUL3xGEVAlN0SkCjbuk.jpg",
      desc: "Alexandra, une étudiante pétillante, retourne vivre avec ses colocataires, Jessica et Breanne, pour la rentrée universitaire. Après une nuit de fête et de débauche, Alex accepte de voir une voyante pour en savoir plus sur son avenir avec son petit-copain, Brian, mais la séance se transforme en cauchemar quand celle-ci fait des allusions à la présence d’un esprit malveillant. Quand la jeune fille se réveille le lendemain, elle ne se rappelle de rien...",
      categorie: "horreur",
      flags: { new:true }
    },
    {
      title: "Superman 2025",
      embed: "https://vidzy.org/embed-076h16h1kg5r.html",
      thumb: "https://image.tmdb.org/t/p/w300/60vQyjChlll1MwFtRQ10NWpUYmw.jpg",
      desc: "Superman doit trouver l’équilibre entre ses racines kryptoniennes et son identité humaine.",
      rating: 7.5,
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "The Pickup - 2025",
      embed: "https://vidzy.org/embed-j2b8g6g1jqrw.html",
      thumb: "https://image.tmdb.org/t/p/w300/vFWvWhfAvij8UIngg2Vf6JV95Cr.jpg",
      desc: "Deux chauffeurs pris en embuscade par des criminels doivent survivre à une journée chaotique.",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "Maison de Miss Peregrine",
      embed: "https://vidzy.org/embed-5q5jrdf4miub.html",
      thumb: "https://image.tmdb.org/t/p/w400/CIlbMFOfYDj0MP23hsIYhFGrL6.jpg",
      desc: "Jacob découvre un monde magique avec des enfants aux pouvoirs spéciaux.",
      flags: { top:true },
      categorie: "fantastique"
    },
    {
      title: "La Main",
      embed: "https://flixeo.xyz/bigwar5/newPlayer.php?id=baaa8122-3a69-42b0-9244-21877859b16f",
      thumb: "https://image.tmdb.org/t/p/w300/yoZmZOIk35ZuH0WJoakB81ypHUH.jpg",
      desc: "Lorsqu'un groupe d'amis découvre comment conjurer les esprits à l'aide d'une mystérieuse main hantée, ils deviennent accros à ce nouveau frisson, et l’expérience fait le tour des réseaux sociaux. Une seule règle à respecter : ils ne doivent pas tenir la main plus de 90 secondes. Lorsque l’un d’entre eux l’enfreint, ils vont être rattrapés par les esprits, les obligeant à choisir : à qui se fier, aux morts ou aux vivants ?",
      flags: { top:true },
      categorie: "horreur"
    },
    {
      title: "Ouija : Les Origines - 2016",
      embed: "https://flixeo.xyz/doood//newPlayer.php?id=ca45e3e0-0a15-4f35-9937-ae2b8a809b96",
      thumb: "https://image.tmdb.org/t/p/w400/AnKpmniPA0heKd8vR5Y9pvyy2nk.jpg",
      desc: "Un groupe d'amis utilise une planche Ouija pour communiquer avec les morts, mais libère une force maléfique.",
      flags: { new:true },
      categorie: "horreur"
    },
    {
      title: "Hérédité",
      embed: "https://vidzy.org/embed-c5oft2hfrc28.html",
      thumb: "https://image.tmdb.org/t/p/w400/5Bz0u7xEyOUnGi4ov3rZKqKYCuH.jpg",
      desc: "Quand Ellen, la matriarche de la famille Graham, meurt, sa fille découvre un terrible secret.",
      flags: {top:true },
      categorie: "horreur"
    },
    {
      title: "Le Cauchemar de Peter Pan - 2025",
      embed: "https://vidzy.org/embed-f4m7jz10fz7k.html",
      thumb: "https://image.tmdb.org/t/p/w300/6fGbrtWlvNYQ0iFmXiR4GsGtu6l.jpg",
      desc: "Peter Pan est un psychopathe qui piège des enfants au Pays Imaginaire.",
      flags: { new:true },
      categorie: "horreur"
    },
    {
      title: "OBoruto : Naruto, le film",
      embed: "https://flixeo.xyz/moon2/newPlayer.php?id=fb481318-d62b-4272-a461-38db5bed1964",
      thumb: "https://image.tmdb.org/t/p/w400/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg",
      desc: "Naruto est devenu Hokage, mais Boruto, son fils, se sent délaissé.",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "Jujutsu Kaisen 0",
      embed: "https://Uqload.cx/embed-ater28d6ygpu.html",
      thumb: "https://image.tmdb.org/t/p/w400/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
      desc: "Yuta Okkotsu rejoint l'école d'exorcisme après avoir été hanté par l'esprit de son amie.",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "Ziam",
      embed: "https://uqload.cx/embed-nx2ys5j9jzxi.html",
      thumb: "https://image.tmdb.org/t/p/w300/yV3NsIessMyn8QjVVGextuHZCBu.jpg",
      desc: "Un ancien combattant de muay thaï affronte une armée de zombies pour sauver sa petite amie.",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "Le Roi Singe - 2023",
      embed: "https://flixeo.xyz/tokyo/newPlayer.php?id=1bcdb313-c09e-41db-b043-2b5274334e97",
      thumb: "https://image.tmdb.org/t/p/w400/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
      desc: "Une comédie familiale bourrée d'action qui suit un singe charismatique et son bâton de combat magique dans une incroyable quête pour vaincre plus de 100 démons, un roi dragon excentrique et, pire encore, le propre ego de notre héros !",
      categorie: "comedie"
    },
    {
      title: "Karate Kid: Legends - 2025",
      embed: "https://uqload.cx/embed-wck4c57mk7po.html",
      thumb: "https://image.tmdb.org/t/p/w300/vMCniu5I2obuyl1uNoUAz72UG6q.jpg",
      desc: "Li Fong, un adolescent qui fréquente l'école de kung-fu de M. Han en Chine, doit déménager à New York avec sa mère. Celle-ci souhaite que son fils intègre une école prestigieuse et qu'il mette de côté son sport de combat...",
      flags: { new:true },
      categorie: "action"
    },
    {
      title: "Thunderbolts* - 2025",
      embed: "https://uqload.cx/embed-jnqrz07f0fld.html",
      thumb: "https://image.tmdb.org/t/p/w300/zctISSBEZRgVQPG178HqRJMnc4x.jpg",
      desc: "Yelena Belova, Bucky Barnes, Red Guardian, Le Fantôme, Taskmaster et John Walker sont les Thunderbolts. Tombés dans un piège redoutable tendu par Valentina Allegra de Fontaine, ces laissés pour compte complètement désabusés...",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "M3GAN 2.0 - 2025",
      embed: "https://vidzy.org/embed-sq3jy25o3u77.html",
      thumb: "https://image.tmdb.org/t/p/w300/lHChxm7sv3gWR2qz5PwjdxcXQf7.jpg",
      desc: "Deux ans ont passé depuis la destruction de M3GAN, le prototype à la pointe de l’intelligence artificielle devenu incontrôlable lors d’un carnage aussi sanglant qu’impeccablement",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "M3GAN 2.0 - 2025",
      embed: "https://vidzy.org/embed-sq3jy25o3u77.html",
      thumb: "https://image.tmdb.org/t/p/w300/lHChxm7sv3gWR2qz5PwjdxcXQf7.jpg",
      desc: "Deux ans ont passé depuis la destruction de M3GAN, le prototype à la pointe de l’intelligence artificielle devenu incontrôlable lors d’un carnage aussi sanglant qu’impeccablement",
      flags: { new:true },
      categorie: "horreur"
    },
    {
      title: "Ziam",
      embed: "https://uqload.cx/embed-nx2ys5j9jzxi.html",
      thumb: "https://image.tmdb.org/t/p/w300/yV3NsIessMyn8QjVVGextuHZCBu.jpg",
      desc: "Un ancien combattant de muay thaï affronte une armée de zombies pour sauver sa petite amie.",
      flags: { top:true },
      categorie: "horreur"
    },
    {
      title: "The Pickup - 2025",
      embed: "https://vidzy.org/embed-j2b8g6g1jqrw.html",
      thumb: "https://image.tmdb.org/t/p/w300/vFWvWhfAvij8UIngg2Vf6JV95Cr.jpg",
      desc: "Deux chauffeurs pris en embuscade par des criminels doivent survivre à une journée chaotique.",
      flags: { new:true },
      categorie: "comedie"
    },
    {
      title: "Jusqu'en enfer",
      embed: "https://uqload.cx/embed-v502wttnvrop.html",
      thumb: "https://image.tmdb.org/t/p/w400/fdyejM5Zd6dsa0YyWa02ZAKwQzK.jpg",
      desc: "Christine Brown, spécialiste en crédit immobilier, vit à Los Angeles avec son petit ami, le Professeur Clay Dalton. Tout va pour le mieux jusqu’au jour où la mystérieuse Mme Ganush débarque à la banque...",
      flags: {top:true},
      categorie: "horreur"
      
    },
    {
      title: "Gladiator II",
      embed: "https://vidzy.org/embed-0q1jjkg9xd9b.html",
      thumb: "https://image.tmdb.org/t/p/w300/sUnGXbEdXlgHlK3EkmB5w2NiLlc.jpg",
      desc: "Des années après avoir assisté à la mort du héros vénéré Maximus aux mains de son oncle, Lucius est forcé d'entrer...",
      flags: {},
      categorie: "action"
    },
    {
      title: "The Marvels",
      embed: "https://vidzy.org/embed-xo8ms6iqfgi4.html",
      thumb: "https://image.tmdb.org/t/p/w300/mqAQO6j5gkq6iwCXNbXpzf0RXBU.jpg",
      desc: "Carol Danvers, alias Captain Marvel, a récupéré son identité auprès du tyrannique Kree et s'est vengée du renseignement suprême. Cependant, des conséquences inattendues la voient assumer le fardeau d'un univers déstabilisé.",
      flags: {},
      categorie: "action",
    },
     {
      title: "Ouija - 2014",
      embed: "https://uqload.cx/embed-yhv8dgwzm87l.html",
      thumb: "https://image.tmdb.org/t/p/w400/gwjHlGjK2xXKpjd65BWyAMwzTWC.jpg",
      desc: "Alors que Debbie meurt mystérieusement dans sa maison, cinq amis utilisent la planchette ouija pour la contacter...",
      flags: {top:true},
      categorie: "horreur"
    },
    {
      title: "War of Apes",
      embed: "https://uqload.cx/embed-31794bbep0p9.html",
      thumb: "https://image.tmdb.org/t/p/w300/i9UF3fRPEMIKGKTttJ7uwOKt7Ff.jpg",
      desc: "Un groupe de dirigeants réveille accidentellement une créature ancienne enfouie sous le plancher océanique. Pour sauver l'humanité, une alliance improbable doit se former entre un gigantesque singe et son ennemi juré mécanique, Mecha Ape MkII.",
      flags: { top:true },
      categorie: "action"
    },
    {
      title: "Descendant",
      embed: "https://vidzy.org/embed-p4plouxrah00.html",
      thumb: "https://image.tmdb.org/t/p/w300/wTNqkbWpxbfyvrn97doezYsbaff.jpg",
      desc: "gardien d'école de Los Angeles, hanté par une tragédie familiale, est confronté à d'étranges visions après l'apparition d'une mystérieuse lumière dans le ciel.",
      flags: { new:true },
      categorie: "horreur"
    },
    {
      title: "Affamé 2021",
      embed: "https://uqload.cx/embed-o7bdumtmosau.html",
      thumb: "https://image.tmdb.org/t/p/w400/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
      desc: "Une maîtresse d'école découvre qu'un de ses élèves est victime de son père et de son frère qui cultivent un secret surnaturel.",
      flags: { top:true },
      categorie: "horreur"
    },
    {
      title: "Affamés 2009",
      embed: "https://uqload.cx/embed-cd8fneha8jdq.html",
      thumb: "https://image.tmdb.org/t/p/w300/pCHga148WooVKWdrVOpKxWnHfV4.jpg",
      desc: "Cinq étrangers se réveillent piégés dans un cachot souterrain sans savoir comment ils sont arrivés là. En essayant de comprendre comment s'échapper, le groupe découvre une autre pièce contenant assez d'eau pour survivre 30 jours",
      categorie: "horreur"
    },
    {
      title: "Until Dawn : La Mort sans fin - 2025",
      embed:"https://uqload.cx/embed-89c2j17zeyd1.html",
      thumb:"https://image.tmdb.org/t/p/w300/7lX0gaDIoEn7T8p8uDn7gk5SdOn.jpg",
      desc: "n an après la mystérieuse disparition de sa sœur Mélanie, Clover et ses amis se rendent dans la vallée reculée où elle a disparu, en quête de réponses.",
      flags: { new:true },
      categorie: "horreur"
    },
    {
      title: " Terrifier 3",
      embed: "https://uqload.cx/embed-tcx4be6kzoi6.html",
      thumb: "https://image.tmdb.org/t/p/w300/fM0B5Jej3jtLqo6J1zC41VipuTy.jpg",
      desc: "Après avoir survécu au massacre d'Halloween perpétré par Art Le Clown, Sienna et son frère tentent de reconstruire leur vie.",
      flags: { top:true },
      categorie: "horreur"
    },
    {
      title: "Les Condés - 2025",
      embed: "https://uqload.cx/embed-5g408in9rpqk.html",
      thumb: "https://image.tmdb.org/t/p/w300/qt9zPUPjLJwNsBipzcLaddXYys1.jpg",
      desc: "A Marseille, la Police Nationale n’y arrive plus ! Le ministre de l’Intérieur décide donc de créer une brigade de super flics avec un super salaire pour motiver le plus possible les candidats.",
      flags: {top:true},
      categorie: "comedie"
    },
    {
      title: "Almost Cops - 2025",
      embed: "https://uqload.cx/embed-o7gyoz7sisa9.html",
      thumb: "https://image.tmdb.org/t/p/w300/7bcndiaTgu1Kj5a6qyCmsWYdtI.jpg",
      desc: "Lorsqu'un agent de quartier un peu trop zélé est obligé de faire équipe avec un ex-inspecteur casse-cou, le chaos déferle dans les rues de Rotterdam.",
      flags: { new:true },
      categorie: "comedie"
    },
    {
      title: "Minecraft, le film - 2025",
      embed: "https://vidzy.org/embed-kklkapsjvxoo.html",
      thumb: "https://image.tmdb.org/t/p/w300/cq9z69AyIXeL2H14bqHE5ukm3M9.jpg",
      desc: "Quatre mésadaptés traversent soudainement un portail mystérieux menant à la Surface : un étrange univers cubique qui évolue grâce à l’imagination. Pour rentrer chez eux, ils se lancent dans une quête magique avec Steve, un surprenant fabricateur expert.",
      flags: { new:true },
      categorie: "comedie"
    },
    {
      title: "Y2K",
      embed: "https://uqload.cx/embed-ft4msny8dtqg.html",
      thumb: "https://image.tmdb.org/t/p/w300/cFop1g8bFJ51wvpj1oRvmApXDZ3.jpg",
      desc: "Lors de la dernière nuit de 1999, deux adolescents qui s’imposent lors d’une fête du Nouvel An doivent lutter pour leur survie dans cette comédie catastrophe à la puissance 56K.",
      flags: {  },
      categorie: "comedie"
    },
    {
      title: " Avant que je change d'idée - 2024",
      embed: "https://uqload.cx/embed-56hgrmn3boih.html",
      thumb: "https://image.tmdb.org/t/p/w300/9s5f1q0m93j1nivLb9BGFUNvsvx.jpg",
      desc: "1987. Alors que les autres élèves se demandent si le nouveau Robin est un garçon ou une fille, Robin forge un lien compliqué avec la brute de l'école, faisant des choix de plus en plus dangereux pour s'intégrer",
      flags: {  },
      categorie: "comedie"
    },
    {
      title: "Sous écrous",
      embed: "https://uqload.cx/embed-7ud8og0kusp0.html",
      thumb: "https://image.tmdb.org/t/p/w300/7uuZUh6aEcDy1BaJn4IbTWGdNE0.jpg",
      desc: "Le quotidien de Sami et de Nada. Si ce dernier s'autoproclame comme le plus grand voyou de la promenade, le second découvre pour la première fois le monde carcéral.",
      flags: {  },
      categorie: "comedie"
    },
    {
       title: "Les Maudites",
       embed: "https://vidzy.org/embed-qz5z26c35dmp.html",
        thumb: "https://image.tmdb.org/t/p/w300/zWKg8YbZpw0ZLCOvlr5wmLd6uB3.jpg",
        desc: "Quelque chose hante Andrea, mais personne, pas même elle, ne peut le voir à l’œil nu. Il y a vingt ans, à dix mille kilomètres de là, la même présence terrorisait Marie...",
        flags: { new:true },
        categorie: "horreur"
    },
    {
       title: "Venom 3: The Last Dance",
       embed: "https://vidzy.org/embed-oiy05tg4lp0c.html",
        thumb: "https://image.tmdb.org/t/p/w300/c2KKN61jRS5bBcUX1zQa8BoZcHm.jpg",
        desc: " Eddie et Venom sont en cavale. Chacun est traqué par ses semblables et alors que l'étau se resserre, le duo doit prendre une décision dévastatrice qui annonce la conclusion des aventures d'Eddie et de Venom.",
        flags: { new:true },
        categorie: "action"
    },
    {
       title: "Smile 2",
       embed: "https://vidzy.org/embed-3d94l4kkaak9.html",
        thumb: "https://image.tmdb.org/t/p/w300/3mjqen3o90Q0S9Rkfg79ZqqPHKl.jpg",
        desc: "Sur le point d’entamer une nouvelle tournée mondiale, la star planétaire de la pop, Skye Riley, commence à vivre des événements de plus en plus terrifiants et inexplicables.",
        flags: { top:true },
        categorie: "horreur"
    },
    {
       title: "Deadpool & Wolverine",
       embed: "https://vidzy.org/embed-l4jod7kq8g6j.html",
        thumb: "https://image.tmdb.org/t/p/w300/hw3Gfp8xLpoVewMbFyFVRsqyGlK.jpg",
        desc: "Un Wade Wilson désabusé s'abrutit de travail dans le civil. Sa vie de mercenaire moralement flexible, Deadpool, est derrière lui. Mais quand son monde est menacé d'anéantissement, il accepte à contrecœur de reprendre le flambeau, et de convaincre un Wolverine...",
        flags: { new:true },
        categorie: "action"
    },
    {
       title: "Godzilla x Kong : Le Nouvel Empire ",
       embed: "https://vidzy.org/embed-db1t36tle2id.html",
        thumb: "https://image.tmdb.org/t/p/w400/3Po4Ln1ut9g2rIEh5PkVvb7Aoj1.jpg",
        desc: "Le surpuissant Kong et le redoutable Godzilla sont opposés à une force colossale terrée dans notre monde, qui menace leur existence et la nôtre. Godzilla x Kong : Le nouvel empire approfondit l'histoire de ces titans et leurs origines...",
        flags: { top:true },
        categorie: "action"
    },
    {
      title: "Black Adam",
      embed: "https://vidzy.org/embed-s5tetr7t2ra3.html",
      thumb: "https://image.tmdb.org/t/p/w400/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      desc: "Près de 5000 ans après avoir été doté des pouvoirs tout puissants des dieux égyptiens – et emprisonné très rapidement après – Black Adam est libéré de sa tombe terrestre, prêt à faire régner sa forme unique de justice dans le monde moderne.",
      flags: {  },
      categorie: "action"
    }
    // Ajoute la propriété "categorie" pour tous les autres films restants
  ],

  series: [
    {
      title: "Mercredi - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w500/aamw6JjKwTy6bdviyIcFKekSD6x.jpg",
      desc:"Survivre dans un monde post-apocalyptique.",
      flags:{ top:true },
      categorie: "horreur",
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-13tykdejmbak.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-zc0f630yrsuk.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-kfjfu8evarnv.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-qmt1d3g6al4w.html" }
      ]
    },
    {
      title: "Sur la Gâchette - Saison 1",
      thumb:"https://image.tmdb.org/t/p/w300/jT95rwkBadWGjY28JevTmwcOqYl.jpg",
      desc:"Alors qu’un trafic illicite menace une Corée du Sud dénuée d'armes à feu, un flic déterminé fait équipe avec un partenaire mystérieux pour éviter que le pays sombre dans le chaos",
      flags:{ top:true },
      categorie: "action",
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-54mf5r62vt4z.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-lzg1o2r138hm.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-nsjyuurrpv5w.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-d6kg9i4722i3.html" },
        { title: "épisode 5", embed: "https://vidzy.org/embed-louowgs6959l.html" },
        { title: "épisode 7", embed: "https://vidzy.org/embed-urt8iebtduld.html" },
        { title: "épisode 8", embed: "https://vidzy.org/embed-g5j7mk6zpg2s.html" },
        { title: "épisode 9", embed: "https://vidzy.org/embed-sc1x9msbbvug.html" },
        { title: "épisode 10", embed: "https://vidzy.org/embed-5rm60npgn3jn.html" },
        { title: "épisode 11", embed: "https://vidzy.org/embed-yxi1l2r94bki.html" }
      ]
    },
    {
      title:"L'Institut - Saison 1",
      thumb:"https://image.tmdb.org/t/p/w500/7JXZdWifaa6wL0XLRi0GJOlOA8y.jpg",
      desc:"Contes et créatures revisités.",
      flags:{ new:true },
      categorie: "horreur",
      episodes: [
        { title: "Épisode 1", embed:"https://vidzy.org/embed-rsl93qzrtctl.html" },
        { title: "Épisode 2", embed:"https://vidzy.org/embed-ilu674flz2tc.html" },
        { title: "Épisode 3", embed:"https://vidzy.org/embed-r6slw0ool797.html" },
        { title: "Épisode 4", embed:"https://vidzy.org/embed-x2t5l54x98g4.html" },
        { title: "Épisode 5", embed:"https://vidzy.org/embed-glf3gjsjxadc.html" },
        { title: "Épisode 6", embed:"https://vidzy.org/embed-v134t0goq5vr.html" },
        { title: "Épisode 7", embed:"https://vidzy.org/embed-ajwxdcxzaamt.html" }
      ]
    },
    {
      title:"Squid Game - Saison 3",
      thumb:"https://image.tmdb.org/t/p/w300/eqOtq5P6r6IzB1gUV4JBZ8roYpX.jpg",
      desc:"Anéanti après avoir perdu son ami, le joueur 456 reprend pourtant courage et défie les plans du maître du jeu dans l'ultime saison de la série la plus regardée au monde.",
      flags:{ top:true },
      categorie: "action",
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-2lcc098u60gz.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-gyc4uutyhevu.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-h0d7xbnwr8q2.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-fmocuhuurq28.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-sghl8rcmndi7.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-m6cw584h2prv.html" }
      ]
    },
     {
      title:"Sans Merci - Saison 1",
      thumb:"https://image.tmdb.org/t/p/w300/iuswhDWeD6Bf06XPgh67pDLLPu7.jpg",
      desc:"Des années après avoir coupé les liens avec son gang, un ancien truand reprend du service pour élucider la mort de son frère et assouvir son intarissable soif de vengeance.",
      categorie: "action",
      flags:{ top:true },
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-0wl4yp6h02li.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-5q72lnexynfj.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-9d52z1fzggc0.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-ly7aheak2zrq.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-eykojf7877ij.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-44mvtpdkan48.html" },
        { title:"Épisode 7", embed:"https://vidzy.org/embed-ns2ttqs6tbba.html" }
      ]
    },
    {
      title:"Sandman - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w500/py2EXGTXwBUqo8bxi8wViJw7RzB.jpg",
      desc:"Après une réunion fatale avec sa famille, Rêve des Infinis doit prendre une série de décisions impossibles pour tenter de sauver son royaume, le Monde éveillé et lui-même des conséquences de ses méfaits passés. Pour se racheter, Rêve doit affronter amis et ennemis de longue date, mais aussi dieux, monstres et mortels. Le chemin du pardon est néanmoins pavé de rebondissements inattendus, et la véritable absolution pourrait lui faire tout perdre.",
      categorie: "horreur",
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-xomksfdrsf8z.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-agsh6wh6w5dr.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-dhjfz3vxexkj.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-04g0c38m92b9.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-42r9pjxo6ooh.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-zqtavyfpglsw.html" },
        { title:"Épisode 7", embed:"https://vidzy.org/embed-2aaartz5jmgo.html" },
        { title:"Épisode 8", embed:"https://vidzy.org/embed-2ugzylv8soe2.html" },
        { title:"Épisode 9", embed:"https://vidzy.org/embed-hpe37scxn7y8.html" },
        { title:"Épisode 10", embed:"https://vidzy.org/embed-smfn6q5slllr.html" },
        { title:"Épisode 11", embed:"https://vidzy.org/embed-5la6b5bs065u.html" }
      ]
    },

    {
      title:"Les nouvelles aventures de Sabrina - Saison 1",
      thumb:"https://image.tmdb.org/t/p/w400/zivWnxhW9VvNvlsny0pdc608ADp.jpg",
      desc:"La magie se mêle au trouble alors que Sabrina, demi-humaine demi-sorcière, navigue entre deux mondes, sa vie d'ado mortelle et son héritage familial, l'Église de la Nuit.",
      categorie: "horreur",
      flags:{ top:true },
      episodes: [
        { title:"Épisode 1", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=329e7029-d08c-4413-8d56-ba018554fac1" },
        { title:"Épisode 2", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=1dc6d6df-f334-4896-bc4a-450b694e2a1e" },
        { title:"Épisode 3", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=af884692-befe-4542-bff9-c893daa6fb57" },
        { title:"Épisode 4", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=70d952c9-e8d9-4391-8d19-1e39a05be044" },
        { title:"Épisode 5", embed:"hhttps://flixeo.xyz/tokyo/newPlayer.php?id=5b313dc4-0dda-48f0-8864-e4e9854f6812" },
        { title:"Épisode 6", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=c8c4c8a5-5909-4d55-9df8-f4f06567d115" },
        { title:"Épisode 7", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=e9b0d303-05e1-419b-95a1-92691f44bb2f" },
        { title:"Épisode 8", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=c4e42bea-dce1-468e-b79b-139162da793c" },
        { title:"Épisode 9", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=96cc5e7b-7b5f-416b-8e79-0a1bd5b06eae" },
         { title:"Épisode 10", embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=89640df3-4eb5-4f91-80ac-1fa96ab0c0d1" }
      ]
    },
     {
      title:"Lucifer - Saison 3",
      thumb:"https://image.tmdb.org/t/p/w400/r17s6nDPV4smuHVRyDPA36tZeC3.jpg",
      desc:"Alors que Lucifer comptait révéler toute la vérité à Chloe, il se fait kidnapper et se réveille en plein milieu du désert. Lorsqu'il se relève, ses ailes se déploient et celui-ci n'a aucune explications. Au fil des enquêtes, il découvre que c'est un certain Sinnerman, un criminel qui semble s'intéresser de très près à Lucifer pour une raison inconnue et mystérieuse.",
      categorie: "action",
      flags:{ new:true },
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-h51m85lw3c3c.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-8tdog7hxqli2.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-ijpfegehw7jd.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-hekz1g89z8dn.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-8n549fhgzm2l.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-j5cyuba9xdje.html" },
        { title:"Épisode 7", embed:"https://vidzy.org/embed-znomvbe4bkdg.html" },
        { title:"Épisode 8", embed:"https://vidzy.org/embed-circovx87nbj.html" },
        { title:"Épisode 9", embed:"https://vidzy.org/embed-exrc0tqz7zo4.html" },
         { title:"Épisode 10", embed:"https://vidzy.org/embed-uuaj9ox8xl5t.html" },
        { title:"Épisode 11", embed:"https://vidzy.org/embed-yh83rpxvat2v.html" },
        { title:"Épisode 12", embed:"https://vidzy.org/embed-wt2dmid1tgn2.html" },
        { title:"Épisode 13", embed:"https://vidzy.org/embed-423oggmuolj2.html" },
        { title:"Épisode 14", embed:"https://vidzy.org/embed-hxfdoiwvpcy9.html" },
        { title:"Épisode 15", embed:"https://vidzy.org/embed-0gdqa65n6b73.html" },
        { title:"Épisode 16", embed:"https://vidzy.org/embed-5x9dq024mofc.html" }
      ]
    },
    {
      title:"Lucifer - Saison 3",
      thumb:"https://image.tmdb.org/t/p/w400/r17s6nDPV4smuHVRyDPA36tZeC3.jpg",
      desc:"Alors que Lucifer comptait révéler toute la vérité à Chloe, il se fait kidnapper et se réveille en plein milieu du désert. Lorsqu'il se relève, ses ailes se déploient et celui-ci n'a aucune explications. Au fil des enquêtes, il découvre que c'est un certain Sinnerman, un criminel qui semble s'intéresser de très près à Lucifer pour une raison inconnue et mystérieuse.",
      categorie: "horreur",
      flags:{ new:true },
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-h51m85lw3c3c.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-8tdog7hxqli2.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-ijpfegehw7jd.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-hekz1g89z8dn.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-8n549fhgzm2l.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-j5cyuba9xdje.html" },
        { title:"Épisode 7", embed:"https://vidzy.org/embed-znomvbe4bkdg.html" },
        { title:"Épisode 8", embed:"https://vidzy.org/embed-circovx87nbj.html" },
        { title:"Épisode 9", embed:"https://vidzy.org/embed-exrc0tqz7zo4.html" },
         { title:"Épisode 10", embed:"https://vidzy.org/embed-uuaj9ox8xl5t.html" },
        { title:"Épisode 11", embed:"https://vidzy.org/embed-yh83rpxvat2v.html" },
        { title:"Épisode 12", embed:"https://vidzy.org/embed-wt2dmid1tgn2.html" },
        { title:"Épisode 13", embed:"https://vidzy.org/embed-423oggmuolj2.html" },
        { title:"Épisode 14", embed:"https://vidzy.org/embed-hxfdoiwvpcy9.html" },
        { title:"Épisode 15", embed:"https://vidzy.org/embed-0gdqa65n6b73.html" },
        { title:"Épisode 16", embed:"https://vidzy.org/embed-5x9dq024mofc.html" }
      ]
    },
    {
        title:"Le Négociateur - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w300/lCgpa86zmKU1YDTFaYn3Um2MOuZ.jpg",
      desc:"Antoine Clerc fait désormais partie intégrante de l’équipe d’Hélène Bannier au RAID. Mais il va découvrir qu’Hélène est enceinte, ce qui suscite bien des interrogations",
      categorie: "action",
      flags:{ new:true },
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-y2rza97juvu5.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-7d3bxd25q6zg.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-kya5knsv313o.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-27g93ylfy0dn.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-dpc6v6cdb67l.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-6781vnvwmkhc.html" }
      ]
    },
    {
        title:"Le Négociateur - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w300/lCgpa86zmKU1YDTFaYn3Um2MOuZ.jpg",
      desc:"Antoine Clerc fait désormais partie intégrante de l’équipe d’Hélène Bannier au RAID. Mais il va découvrir qu’Hélène est enceinte, ce qui suscite bien des interrogations",
      categorie: "comedie",
      flags:{ new:true },
      episodes: [
        { title:"Épisode 1", embed:"https://vidzy.org/embed-y2rza97juvu5.html" },
        { title:"Épisode 2", embed:"https://vidzy.org/embed-7d3bxd25q6zg.html" },
        { title:"Épisode 3", embed:"https://vidzy.org/embed-kya5knsv313o.html" },
        { title:"Épisode 4", embed:"https://vidzy.org/embed-27g93ylfy0dn.html" },
        { title:"Épisode 5", embed:"https://vidzy.org/embed-dpc6v6cdb67l.html" },
        { title:"Épisode 6", embed:"https://vidzy.org/embed-6781vnvwmkhc.html" }
      ]
    },
    {
      title: "Doctor Who - Saison 2",
      thumb: "https://image.tmdb.org/t/p/w300/uPriS9WYOQ2v7XOQpEKnAR2MP0k.jpg",
      desc: "Le Docteur rencontre Belinda Chandra et commence une quête épique pour la ramener sur Terre. Mais, une mystérieuse force stoppe leur retour et la team de voyageurs temporels doit faire face à de grands dangers, des ennemis plus forts et des terreurs plus massives que jamais",
      categorie: "action",
      flags: { top:true },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-mnspanjf5ts6.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-3ntqlwxnd7i8.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-kzs1z2exryqr.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-3fnsvx9sslkn.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-pv3uc2ie95yx.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-hx0lxp3xq5bb.html" },
        { title: "Épisode 7", embed: "https://vidzy.org/embed-9glkss026j41.html" },
        { title: "Épisode 8", embed: "https://vidzy.org/embed-1tau30jwyano.html" }
      ]
    },
    {
      title: "Les Thunderman Incognito - Saison 1",
      thumb: "https://image.tmdb.org/t/p/w300/dreqcshJxCfmliC1k2f7G3HOHiK.jpg",
      desc: " Les jumeaux Phoebe et Max Thunderman se lancent dans une mission visant à atténuer la menace qui pèse sur la ville balnéaire de Secret Shores.",
      categorie: "action",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-ubylge9ncgbj.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-5lms90i20srx.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-ni26yc16ur85.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-vhnzbwxy056j.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-1wuhbnchnxyf.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-r404ev14rxs6.html" },
        { title: "Épisode 7", embed: "https://vidzy.org/embed-vftofrqdgv9l.html" },
        { title: "Épisode 8", embed: "https://vidzy.org/embed-xjzuuaiknn5d.html" },
      ]
    },
    {
      title: "Les Thunderman Incognito - Saison 1",
      thumb: "https://image.tmdb.org/t/p/w300/dreqcshJxCfmliC1k2f7G3HOHiK.jpg",
      desc: " Les jumeaux Phoebe et Max Thunderman se lancent dans une mission visant à atténuer la menace qui pèse sur la ville balnéaire de Secret Shores.",
      categorie: "comedie",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-ubylge9ncgbj.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-5lms90i20srx.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-ni26yc16ur85.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-vhnzbwxy056j.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-1wuhbnchnxyf.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-r404ev14rxs6.html" },
        { title: "Épisode 7", embed: "https://vidzy.org/embed-vftofrqdgv9l.html" },
        { title: "Épisode 8", embed: "https://vidzy.org/embed-xjzuuaiknn5d.html" },
      ]
    },
    {
      title: "Peacemaker - Saison 2",
      thumb: "https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg",
      desc: "Laissé pour mort après sa confrontation avec Bloodsport lors de leurs mission sur l'île de Corto Maltese avec la Task Force X, Christopher Smith, alias le Peacemaker, a en réalité survécu. Il est retrouvé par l'équipe d'Amanda Waller afin de lui confier de nouvelles missions.",
      categorie: "comedie",
      flags: { top:true },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-bemahga0edxf.html" },
        { title: "Épisode 2", embed: "" },
        { title: "Épisode 3", embed: "" },
        { title: "Épisode 4", embed: "" },
        { title: "Épisode 5", embed: "" },
        { title: "Épisode 6", embed: "" }
      ]
    },
    {
      title: "Une Superstar - Saison 1",
      thumb: "https://image.tmdb.org/t/p/w300/aZC1Z3OnknhYRMMCR8N1XwFVElG.jpg",
      desc: "Située dans le milieu déjanté de la télévision du début des années 2000, cette série recrée comme jamais la vie de l'icône pop Tamara et sa métamorphose en Yurena.",
      categorie: "comedie",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-hw7e6flovf1l.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-b4vpntg0ggpk.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-2t665xrkx2g2.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-h3twyid1n58v.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-e03exfnfm5uh.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-pg13rp0zk107.html" }
      ]
    },
    {
      title: "Betty la Fea : L'histoire continue - Saison 2 ",
      thumb: "https://image.tmdb.org/t/p/w500/1Os8SXTlWTiTzhm4eImqFtDng6N.jpg",
      desc: "Betty ne vit plus avec Armando depuis deux ans, après l'avoir découvert dans une situation compromettante avec Marcela. Ravie du retour de sa fille en Colombie, elle essaie de renforcer son lien avec elle, mais les pressions qui pèsent sur Ecomoda et les ennemis du passé vont tout faire pour l'éloigner de Mila et Armando.",
      categorie: "comedie",
      flags: { top:true },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-ps5qwtzloodu.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-fsslolaqqrhi.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-yeesht8oy4qe.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-x1hj30j0r1t3.html" },
        { title: "Épisode 6", embed: "" }
      ]
    },
    {
      title: "The Trades - Saison 2",
      thumb: "https://image.tmdb.org/t/p/w300/9OAc81nn6cQXqMqQfdhVs5p47lp.jpg",
      desc: "Pour la toute première fois, la raffinerie a droit à deux chars lors du défilé de la fête du Travail, déclenchant une compétition féroce pour remporter le meilleur design de char de l'Imperial Valley.",
      categorie: "comedie",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-qjucwv1vtsh4.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-0lbslq1o1m6l.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-pdu74luynfvr.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-9awxumyclc7r.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-t04feuqs5b0x.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-774t8o7lroxp.html" }
      ]
    },
    {
      title: "LOL : Qui rit, sort ! - Saison 5 ",
      thumb: "https://image.tmdb.org/t/p/w300/abbnbUT0Vy9nCN4X2KQO2Hbpfc.jpg",
      desc: "Le public suivra le groupe de dix comédiens, chacun étant bien décidé à être le dernier à craquer. Six heures durant, une seule règle comptera : qui rit perd la partie. Celui qui parviendra à rester de marbre jusqu’au bout remportera le jeu et pourra reverser ses 50 000€ de dotation à l’association caritative de son choix.",
      categorie: "comedie",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-oaak0auqrch7.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-4p75ozhdmpe5.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-p0ycdcl4h2vc.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-dntioh3aude5.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-8pp5nd7nllfx.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-kkf46kskivdf.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-g08uy0bf7i09.html" }
      ]
    },
    {
      title: "BULLET/BULLET - Saison 1",
      thumb: "https://image.tmdb.org/t/p/w300/iHhC0D1B9IhD8beyMedHPUiakVK.jpg",
      desc: " Dans un futur proche, où les armes à feu sont interdites, une unité d'élite de la police utilise des balles intelligentes pour combattre le crime dans une mégapole dystopique.",
      categorie: "horreur",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-34th0tz7nbqs.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-bqra79sdk8rd.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-knwyvz9lk4cm.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-8khiikd1u5cd.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-z34syd9uodec.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-gn3lvntx1suo.html" },
        { title: "Épisode 7", embed: "https://vidzy.org/embed-6fuecoiu1vld.html" },
        { title: "Épisode 8", embed: "https://vidzy.org/embed-fq2ea3mka9al.html" }
        
      ]
    },
    {
      title: "Alien: Earth - Saison 1",
      thumb: "https://image.tmdb.org/t/p/w500/5DoExDwDmP5aXMJYbyEaDDTnCHm.jpg",
      desc: " Après une invasion extraterrestre dévastatrice, un groupe de survivants humains lutte pour reprendre le contrôle de la Terre et repousser les envahisseurs.",
      categorie: "horreur",
      flags: { top:true },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-ltlh3m1unvpv.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-wb952pf0hkja.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-i7rbuz7mf066.html" },
        { title: "Épisode 6", embed: "" }
      ]
    },
    {
      title: "Twisted Metal - Saison 2",
      thumb: "https://image.tmdb.org/t/p/w500/zMwMClR9y7RBeVWMEmNn8LwUJHz.jpg",
      desc: "Un homme peut voir son mode de vie s'améliorer s’il accepte de livrer un colis en traversant une contrée sauvage et désolée. Seulement sur le trajet, il faudra compter sur le terrifiant Sweet Tooth et son camion, qui viendront perturber le parcours pour donner lieu à des combats entre véhicules.",
      categorie: "comedie",
      flags: {  },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-mrmrdwvlkxtv.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-t458j4zoaz6c.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-5fymaku9wgci.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-zekhex3uono5.html" },
        { title: "Épisode 5", embed: "https://vidzy.org/embed-tnydetalbafw.html" },
        { title: "Épisode 6", embed: "https://vidzy.org/embed-j033fon8k6fo.html" }
      ]
    },

    // Continue pour toutes les séries existantes avec categorie
  ],

  animes: [
    {
      title:"Solo Leveling - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w500/dv6OBYGvSE9qI9RjpNUvHzdvAT5.jpg",
      desc:"Le chasseur Sung Jin-Woo, devenu le plus puissant, doit affronter de nouveaux ennemis et protéger son monde.",
      flags:{ top:true },
      categorie: "action",
      episodes: [
        { title:"Épisode 1", embed:"https://bigwarp.io/embed-wcwjf8570fiy.html" },
        { title:"Épisode 2", embed:"https://bigwarp.io/embed-gw3u8ib0cmy4.html" },
        { title:"Épisode 3", embed:"https://bigwarp.io/embed-4wkbslq2882k.html" },
        { title:"Épisode 4", embed:"https://bigwarp.io/embed-nwlnbru3c0gj.html" },
        { title:"Épisode 5", embed:"https://bigwarp.io/embed-7pfmmeso59w9.html" },
        { title:"Épisode 6", embed:"https://bigwarp.io/embed-ayjyicx8nqkk.html" },
        { title:"Épisode 7", embed:"https://bigwarp.io/embed-3ejq49i41whr.html" },
        { title:"Épisode 8", embed:"https://bigwarp.io/embed-okzo5a8umjgu.html" },
        { title:"Épisode 9", embed:"https://bigwarp.io/embed-olet7uf4tk0p.html" },
        { title:"Épisode 10", embed:"https://bigwarp.io/embed-ev2em67ah82q.html" },
        { title:"Épisode 11", embed:"https://bigwarp.io/embed-axn5i3kw7o5q.html" },
        { title:"Épisode 12", embed:"https://bigwarp.io/embed-q1dotx99ja71.html" }
      ]
    },
    {
      title:"Kaiju No. 8: Mission Recon - 2025",
      embed:"https://vidzy.org/embed-rzhyffrdoazu.html",
      thumb:"https://image.tmdb.org/t/p/w300/7rqntwn4D6TIrw8TOcxAG6IMKsI.jpg",
      desc:"Le Japon est infesté de kaiju, et le travail de Kafka Hibino consiste à se débarrasser de leurs carcasses. Pendant ce temps, son amie d’enfance, Mina Ashiro, grimpe les échelons dans les Forces de Défense anti-kaiju. Kafka avait abandonné l’idée de les intégrer, mais décide finalement de retenter sa chance pour se rapprocher de Mina. Un seul bémol : il devient subitement le puissant Kaiju No. 8 ! Avec la complicité de Reno Ichikawa, son jeune collègue, Kafka dissimule sa transformation et passe le concours d’entrée des Forces, dans le but de réaliser son rêve de petit garçon et de se tenir aux côtés de Mina. Lorsqu’un mystérieux kaiju doté de raison attaque la base où a lieu l’épreuve, il va devoir faire un choix cornélien dans une situation critique…",
      flags:{ new:true },
      categorie: "horreur"
    },
    {
      title:"Vaiana 2 - 2024",
      embed:"https://vidzy.org/embed-orpou1z9k1g7.html",
      thumb:"https://image.tmdb.org/t/p/w300/usdwoEwm68cdeMOvGFPwSk9nLTr.jpg",
      desc:"Après avoir reçu une invitation inattendue de ses ancêtres, Vaiana entreprend un périple qui la conduira jusqu’aux eaux dangereuses situées aux confins des mers des îles du Pacifique. Elle y vivra des péripéties comme jamais vécues auparavant.",
      categorie: "action"
    },
    {
      title:"Les Bad Guys 2 - 2025",
      embed:"https://vidzy.org/embed-6woxfkk6a9ji.html",
      thumb:"https://image.tmdb.org/t/p/w300/opKf1uITVUkm8nteNM54uIgJZKQ.jpg",
      desc:" Les criminels animaliers s'efforcent de se faire à leur nouvelle vie de gentils. Bientôt, ils sont tirés de leur retraite et forcés de faire un dernier travail par une équipe entièrement féminine.",
      categorie: "comedie"
    },
    {
      title:"Moi, moche et méchant 4 - 2024",
      embed:"https://vidzy.org/embed-g8cddpx4pe5r.html",
      thumb:"https://image.tmdb.org/t/p/w300/bYovCvLV1RxB0zAR5cXu699P9P7.jpg",
      desc:" Gru, Lucy et les filles, Margo, Édith et Agnès accueillent le petit dernier de la famille, Gru Junior, qui semble n’avoir qu’une passion : faire tourner son père en bourrique. Mais Gru est confronté à un nouvel ennemi, Maxime Le Mal, qui avec l’aide de sa petite amie, la fatale Valentina, va obliger toute la famille à fuir.",
      categorie: "comedie",
      flags:{ new:true }
    },
    {
      title:"Miraculous World : Londres, la course contre le temps - 2024",
      embed:"https://vidzy.org/embed-ypfm00doz2kf.html",
      thumb:"https://image.tmdb.org/t/p/w300/imGI4R15rMl8B3wPROwkVuJDsc2.jpg",
      desc:" Afin de sauver l'avenir d'un terrible sort, Marinette devient Chronobug et fait équipe avec Bunnyx pour vaincre un mystérieux adversaire qui voyage dans le temps. Qui est ce nouveau super-méchant, et pourquoi est-il déterminé à dévoiler l'identité secrète de super-héros de Marinette ? Le seul espoir de Marinette est de vaincre son nouvel ennemi pour empêcher la fin de la Coccinelle et des temps !",
      categorie: "action"
    },
    {
      title:"Mufasa : Le Roi Lion - 2024",
      embed:"https://vidzy.org/embed-ywc2ow8wako7.html",
      thumb:"https://image.tmdb.org/t/p/w300/6UHzgofq5T4NYp0ba3MelmrLwBq.jpg",
      desc:" Suivez l'épopée de l'improbable ascension du roi bien-aimé de la Terre des Lions. Mufasa est un orphelin seul et perdu jusqu'à ce qu'il rencontre Taka, héritier de sang royal. C'est le début d'un voyage épique au cours duquel ils tenteront d'échapper à un ennemi redoutable, ce qui mettra leurs liens à rude épreuve.",
      categorie: "action",
      flags:{ new:true }
    },
    {
      title:"L’Attaque Des Titans : La Dernière Attaque - 2024",
      embed:"https://vidzy.org/embed-61mwfioqmrla.html",
      thumb:"https://image.tmdb.org/t/p/w300/3oL5SWl7tPqaretovPKw9x04CXh.jpg",
      desc:"Dans un monde dystopique ravagé par des titans mangeurs d’hommes, depuis une centaine d’années, les survivants sont forcés de se barricader dans une cité forteresse. Parmi eux, Eren, qui a vu sa mère dévorée par un titan, rêve d’entrer dans le corps d’élite chargé de découvrir l’origine de ces mutants, et les détruire jusqu’au dernier. L’attaque des titans : La dernière attaque réunit les deux derniers épisodes de la série et propose un climax sur grand écran. Après son enrôlement dans un bataillon d’exploration, Eren fait face à un redoutable adversaire et en retire un pouvoir unique, qui lui révèle la vérité sur le monde. À travers celle-ci, il trouve les raisons de mener à bien un projet destiné à éradiquer toute vie sur Terre. Dans ce long métrage final, une équipe d’anciens amis et ennemis d’Eren se battront pour tenter de mettre un terme à sa funeste entreprise.",
      categorie: "action",
      flags:{ top:true }
    },
    {
      title:"Les Aventuriers de l'arche de Noé - 2024",
      embed:"https://dood.watch/e/mha2025",
      thumb:"https://image.tmdb.org/t/p/w300/l6EfcYboho6ovq7rcAjeInCati9.jpg",
      desc:"Vini et Tito, deux souris artistes de music-hall, voient leurs rêves de succès tomber à l’eau lorsque la Terre est noyée par le Déluge. Aidés par un coup de pouce du destin, ils réussissent à monter à bord de l’Arche de Noé. Propulsés au beau milieu d’un différend opposant les animaux herbivores et carnivores, Vini et Tito ont la solution parfaite pour apaiser les tensions : un concours de chansons !",
      categorie: "comedie",
      flags:{ top:true }
    },
    {
      title:"Overlord : The Sacred Kingdom - 2024",
      embed:"https://vidzy.org/embed-merkv5jvn9qt.html",
      thumb:"https://image.tmdb.org/t/p/w300/6dD9i3dOUVMry9vZ3YajWvpNYfB.jpg",
      desc:"Jaldabaoth décide d'envahir le Saint Royaume de Roble avec les demi-humains. Conscient de la menace, le Saint Royaume prévoit de faire appel à Momon pour l'aider dans cette guerre. (Pour rappel, ce film fera suite à la quatrième saison",
      categorie: "horreur",
      flags:{ top:true }
    },
    {
      title:"Elio - 2025",
      embed:"https://vidzy.org/embed-jq7bz6l4bkpv.html",
      thumb:"https://image.tmdb.org/t/p/w300/jaKbruwD7KLlnprsse1zuOm4o2a.jpg",
      desc:"Elio, un petit garçon à l'imagination débordante, qui se retrouve téléporté par inadvertance dans le Communivers, une organisation interplanétaire composée de représentants des galaxies les plus éloignées.",
      categorie: "action",
      flags:{ top:true  },
    },
    {
      title: "Demon Slayer : Kimetsu no Yaiba - Le film : Le train de l'Infini",
      embed: "https://vidzy.org/embed-la689aavnj9y.html",
      thumb: "https://image.tmdb.org/t/p/w400/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      desc: "Le groupe de Tanjirô a terminé son entraînement de récupération au domaine des papillons et embarque à présent en vue de sa prochaine mission à bord du train de l'infini, d'où quarante personnes ont disparu en peu de temps.",
      categorie: "action",
      flags:{ top:true },
    },
    {
      title: "Demon Slayer : Kimetsu no Yaiba - Le film : Le train de l'Infini",
      embed: "https://vidzy.org/embed-la689aavnj9y.html",
      thumb: "https://image.tmdb.org/t/p/w400/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      desc: "Le groupe de Tanjirô a terminé son entraînement de récupération au domaine des papillons et embarque à présent en vue de sa prochaine mission à bord du train de l'infini, d'où quarante personnes ont disparu en peu de temps.",
      categorie: "horreur",
      flags:{ new:true },
    },
    {
      title: "Watchmen: Chapter I",
      embed: "https://vidzy.org/embed-y24ynzuyx3oe.html",
      thumb: "https://image.tmdb.org/t/p/w300/tE2vZ6HdlmKaBh0wpsvHCf7HJKo.jpg",
      desc: "Dans un monde parallèle façonné par des super-héros, les « aventuriers costumés », autrefois célébrés, ont été bannis par une société désenchantée par le vigilantisme.",
      categorie: "horreur",
      flags:{new:true },
    },
    {
      title: "Mémoires d’un Escargot - 2024",
      embed: "https://uqload.cx/embed-91lkixdsmywa.html",
      thumb: "https://image.tmdb.org/t/p/w300/h7yY9BmOWKnZW45Fg125K4W403R.jpg",
      desc: "La vie de Grace Pudel, petite fille solitaire, collectionneuse d’escargots et passionnée de lecture, a volé en éclats le jour de la mort de son père",
      categorie: "comedie",
      flags:{ top:true },
    },
    {
      title: "Les Simpson : Past & Furious - 2025",
      embed: "ttps://uqload.cx/embed-293hzc925woa.html",
      thumb: "https://image.tmdb.org/t/p/w300/riPKD3PSqdU2xBI7JnTKE0yej1L.jpg",
      desc: "Lisa se désespère du paysage stérile de Springfield et se retrouve transportée en 1923...",
      categorie: "comedie",
      flags:{ new:true },
    },
    {
      title: "Moi quand je me réincarne en Slime - le film",
      embed: "https://video.sibnet.ru/shell.php?videoid=5112638",
      thumb: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/tensei-shitara-slime-datta-ken.jpg",
      desc: " Après avoir été tué par un voleur, Satoru Mikami se réincarne dans un monde fantastique en tant que slime doté de pouvoirs uniques. Adoptant le nom de Rimuru Tempest, il décide de fonder une nouvelle nation où toutes les créatures peuvent vivre en harmonie.",
      categorie: "action",
      flags:{ top:true },
    },
    {
      title: "Seven Deadly Sins prisoners of the sky",
      embed: "https://video.sibnet.ru/shell.php?videoid=5310319",
      thumb: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/seven-deadly-sins.jpg",
      desc: " Dans un monde médiéval fantastique, les Seven Deadly Sins, un groupe de chevaliers légendaires, sont accusés à tort de trahison. Après avoir été dispersés, ils doivent se réunir pour affronter une nouvelle menace qui pèse sur le royaume de Liones.",
      categorie: "action",
      flags:{ top:true },
    },
    {
      title: " Blue Exorcist - Saison 1",
      thumb: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/blue-exorcist.jpg",
      desc: " Rin Okumura découvre qu'il est le fils de Satan et décide de devenir un exorciste pour combattre les forces démoniaques. Avec l'aide de ses amis et de son frère jumeau, Yukio, il s'inscrit à l'Académie des Exorcistes pour maîtriser ses pouvoirs et protéger le monde des démons.",
      categorie: "horreur",
      flags:{  },
      episodes:[
        { title:"Épisode 1", embed:"https://video.sibnet.ru/shell.php?videoid=4728283" },
        { title:"Épisode 2", embed:"https://video.sibnet.ru/shell.php?videoid=4728285" },
        { title:"Épisode 3", embed:"https://video.sibnet.ru/shell.php?videoid=4728287" }
      ]
    },
    {
      title: "Castlevania - Nocturne - Saison 2",
      thumb: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/castlevania.jpg",
      desc: " Dans un monde médiéval sombre, Trevor Belmont, un chasseur de vampires, s'allie à Sypha Belnades, une magicienne, et Alucard, le fils de Dracula, pour combattre les",
      categorie: "horreur",
      flags:{ new:true },
      episodes:[
        { title:"Épisode 1", embed:"https://vidmoly.net/embed-g5g92imv3vv7.html" },
        { title:"Épisode 2", embed:"https://video.sibnet.ru/shell.php?videoid=5809662" },
        { title:"Épisode 3", embed:"https://vidmoly.net/embed-zjzf27uzmw6h.html" }
      ]
    },
    {
      title: "Devilman Crybaby - Saison 1",
      embed: "https://vidmoly.net/embed-2utqq77susqd.html",
      thumb: "https://cdn.statically.io/gh/Anime-Sama/IMG/img/contenu/devilman-crybaby.jpg",
      desc: " Akira Fudo découvre qu'il peut fusionner avec un démon nommé Amon, devenant ainsi Devilman. Avec l'aide de son ami Ryo Asuka, il lutte contre les démons qui menacent l'humanité, tout en affrontant des dilemmes moraux sur la nature du bien et du mal.",
      categorie: "comedie",
      flags:{ new:true },
    },
    {
      title: "Kung Fu Panda 4",
      embed: "https://vidzy.org/embed-wkdoanxxigb0.html",
      thumb: "https://image.tmdb.org/t/p/w300/y8K9wRRv7YK1ACHqaDlMBrNebVU.jpg",
      desc: "Après trois aventures dans lesquelles le guerrier dragon Po a combattu les maîtres du mal les plus redoutables grâce à un courage et des compétences en arts martiaux inégalés, le destin va de nouveau frapper à sa porte pour l'inviter à enfin se reposer. Mais Po n'est pas du genre à se tourner les pouces, et lorsqu'une nouvelle menace surgit, il doit reprendre du service pour protéger la Vallée de la Paix.",
      categorie: "action",
      flags:{ new:true  },

    },
    {
      title: "La guerre des dieux",
      embed: "https://vidzy.org/embed-cjw3rp54cx7o.html",
      thumb: "https://image.tmdb.org/t/p/w300/tW5dFOemV4d7hxTcVI2bu4u0C9z.jpg",
      desc: "Autrefois considéré comme un dieu puissant, Yang Jian a été réduit à la condition d’un tueur à gages déchu.",
      categorie: "action",
      flags:{ new:true},
      
    },
    {
      title: "Migration",
      embed: "https://vidzy.org/embed-dn02nrpvgjov.html",
      thumb: "https://image.tmdb.org/t/p/w300/3xGLxvuVvLoPhrCxkofkczfR6R5.jpg",
      desc: "La routine règne chez les Colvert. Si papa Mack préfère garder les siens bien à l’abri dans leur étang de la Nouvelle-Angleterre, maman Pam veut changer les choses et faire découvrir le monde à leurs deux enfants, Dax l’ado et Gwen la cadette.",
      categorie: "comedie",
      flags:{ top:true },
      
    },
    {
      title: "Sonic 2, le film",
      embed: "https://vidzy.org/embed-a6cpttr8kyil.html",
      thumb: "https://image.tmdb.org/t/p/w400/7RSCL6V8BlekgVnNPok6tLW50tP.jpg",
      desc: "Bien installé dans la petite ville de Green Hills, Sonic veut maintenant prouver qu’il a l’étoffe d' un véritable héros. Un défi de taille se présente à lui quand le Dr Robotnik refait son apparition.",
      categorie: "horreur",
      flags:{  },
      
    }
    // Continue pour tous les animes existants avec categorie
  ]
};
