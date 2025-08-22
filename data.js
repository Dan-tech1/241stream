/* ====== Catalogue centralisé ====== */
const DATA = {
  films: [
    {
      title: "Death of a Unicorn",
      embed: "https://vidzy.org/embed-rhuysex3xn10.html",
      thumb: "https://image.tmdb.org/t/p/w300/s1q08ciejMW84z839SdwC47QK6a.jpg",
      desc: "Un père et sa fille tuent accidentellement une licorne et une multinationale tente d'exploiter ses pouvoirs.",
      flags: { top:true }
    },
    {
      title: "Devil Seed",
      embed: "https://Uqload.cx/embed-k6ougmdhes6o.html",
      thumb: "https://image.tmdb.org/t/p/w400/zjrDE4agtUL3xGEVAlN0SkCjbuk.jpg",
      desc: "Alexandra, une étudiante pétillante, retourne vivre avec ses colocataires, Jessica et Breanne, pour la rentrée universitaire. Après une nuit de fête et de débauche, Alex accepte de voir une voyante pour en savoir plus sur son avenir avec son petit-copain, Brian, mais la séance se transforme en cauchemar quand celle-ci fait des allusions à la présence d’un esprit malveillant. Quand la jeune fille se réveille le lendemain, elle ne se rappelle de rien...",
      rating:7.5,
    },
    {
      title: "Superman 2025",
      embed: "https://vidzy.org/embed-076h16h1kg5r.html",
      thumb: "https://image.tmdb.org/t/p/w300/60vQyjChlll1MwFtRQ10NWpUYmw.jpg",
      desc: "Superman doit trouver l’équilibre entre ses racines kryptoniennes et son identité humaine.",
      rating: 7.5,
      flags: { top:true }
    },
    {
      title: "The Pickup - 2025",
      embed: "https://vidzy.org/embed-j2b8g6g1jqrw.html",
      thumb: "https://image.tmdb.org/t/p/w300/vFWvWhfAvij8UIngg2Vf6JV95Cr.jpg",
      desc: "Deux chauffeurs pris en embuscade par des criminels doivent survivre à une journée chaotique.",
      flags: { top:true }
    },
    {
      title: "Maison de Miss Peregrine",
      embed: "https://vidzy.org/embed-5q5jrdf4miub.html",
      thumb: "https://image.tmdb.org/t/p/w400/CIlbMFOfYDj0MP23hsIYhFGrL6.jpg",
      desc: "Jacob découvre un monde magique avec des enfants aux pouvoirs spéciaux.",
      flags: { top:true }
    },
    {
      title: "La Main",
      embed: "https://flixeo.xyz/bigwar5/newPlayer.php?id=baaa8122-3a69-42b0-9244-21877859b16f",
      thumb: "https://image.tmdb.org/t/p/w300/yoZmZOIk35ZuH0WJoakB81ypHUH.jpg",
      desc: "Lorsqu'un groupe d'amis découvre comment conjurer les esprits à l'aide d'une mystérieuse main hantée, ils deviennent accros à ce nouveau frisson, et l’expérience fait le tour des réseaux sociaux. Une seule règle à respecter : ils ne doivent pas tenir la main plus de 90 secondes. Lorsque l’un d’entre eux l’enfreint, ils vont être rattrapés par les esprits, les obligeant à choisir : à qui se fier, aux morts ou aux vivants ?",
      flags: { top:true }
    },
    {
      title: "Ouija : Les Origines - 2016",
      embed: "https://flixeo.xyz/doood//newPlayer.php?id=ca45e3e0-0a15-4f35-9937-ae2b8a809b96",
      thumb: "https://image.tmdb.org/t/p/w400/AnKpmniPA0heKd8vR5Y9pvyy2nk.jpg",
      desc: "Un groupe d'amis utilise une planche Ouija pour communiquer avec les morts, mais libère une force maléfique.",
      flags: { new:true }
    },
    {
      title: "Hérédité",
      embed: "https://vidzy.org/embed-c5oft2hfrc28.html",
      thumb: "https://image.tmdb.org/t/p/w400/5Bz0u7xEyOUnGi4ov3rZKqKYCuH.jpg",
      desc: "Quand Ellen, la matriarche de la famille Graham, meurt, sa fille découvre un terrible secret.",
      flags: {top:true }
    },
    {
      title: "Le Cauchemar de Peter Pan - 2025",
      embed: "https://vidzy.org/embed-f4m7jz10fz7k.html",
      thumb: "https://image.tmdb.org/t/p/w300/6fGbrtWlvNYQ0iFmXiR4GsGtu6l.jpg",
      desc: "Peter Pan est un psychopathe qui piège des enfants au Pays Imaginaire.",
      flags: { new:true }
    },
    {
      title: "OBoruto : Naruto, le film",
      embed: "https://flixeo.xyz/moon2/newPlayer.php?id=fb481318-d62b-4272-a461-38db5bed1964",
      thumb: "https://image.tmdb.org/t/p/w400/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg",
      desc: "Naruto est devenu Hokage, mais Boruto, son fils, se sent délaissé.",
      flags: { top:true }
    },
    {
      title: "Jujutsu Kaisen 0",
      embed: "https://Uqload.cx/embed-ater28d6ygpu.html",
      thumb: "https://image.tmdb.org/t/p/w400/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
      desc: "Yuta Okkotsu rejoint l'école d'exorcisme après avoir été hanté par l'esprit de son amie.",
      flags: { top:true }
    },
    {
      title: "Ziam",
      embed: "https://uqload.cx/embed-nx2ys5j9jzxi.html",
      thumb: "https://image.tmdb.org/t/p/w300/yV3NsIessMyn8QjVVGextuHZCBu.jpg",
      desc: "Un ancien combattant de muay thaï affronte une armée de zombies pour sauver sa petite amie.",
      flags: { top:true }
    }
  ],

  series: [
    {
      title: "Mercredi - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w500/aamw6JjKwTy6bdviyIcFKekSD6x.jpg",
      desc:"Survivre dans un monde post-apocalyptique.",
      flags:{ top:true },
      episodes: [
        { title: "Épisode 1", embed: "https://vidzy.org/embed-13tykdejmbak.html" },
        { title: "Épisode 2", embed: "https://vidzy.org/embed-zc0f630yrsuk.html" },
        { title: "Épisode 3", embed: "https://vidzy.org/embed-kfjfu8evarnv.html" },
        { title: "Épisode 4", embed: "https://vidzy.org/embed-qmt1d3g6al4w.html" }
        
      ]
    },
    {
      title:"L'Institut - Saison 1",
      thumb:"https://image.tmdb.org/t/p/w500/7JXZdWifaa6wL0XLRi0GJOlOA8y.jpg",
      desc:"Contes et créatures revisités.",
      flags:{ new:true },
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
      title:"Sandman - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w500/py2EXGTXwBUqo8bxi8wViJw7RzB.jpg",
      desc:"Après une réunion fatale avec sa famille, Rêve des Infinis doit prendre une série de décisions impossibles pour tenter de sauver son royaume, le Monde éveillé et lui-même des conséquences de ses méfaits passés. Pour se racheter, Rêve doit affronter amis et ennemis de longue date, mais aussi dieux, monstres et mortels. Le chemin du pardon est néanmoins pavé de rebondissements inattendus, et la véritable absolution pourrait lui faire tout perdre.",
      flags:{ new:true },
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
      flags:{ new:true },
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
      title:"Sans Merci - Saison 1",
      thumb:"https://image.tmdb.org/t/p/w300/iuswhDWeD6Bf06XPgh67pDLLPu7.jpg",
      desc:"Des années après avoir coupé les liens avec son gang, un ancien truand reprend du service pour élucider la mort de son frère et assouvir son intarissable soif de vengeance.",
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

  ],

  animes: [
    {
      title:"Solo Leveling - Saison 2",
      thumb:"https://image.tmdb.org/t/p/w500/dv6OBYGvSE9qI9RjpNUvHzdvAT5.jpg",
      desc:"Le chasseur Sung Jin-Woo, devenu le plus puissant, doit affronter de nouveaux ennemis et protéger son monde.",
      flags:{ top:true },
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
      flags:{ new:true }
    },
    {
      title:"Overlord : The Sacred Kingdom - 2024",
      embed:"https://vidzy.org/embed-merkv5jvn9qt.html",
      thumb:"https://image.tmdb.org/t/p/w300/6dD9i3dOUVMry9vZ3YajWvpNYfB.jpg",
      desc:"Jaldabaoth décide d'envahir le Saint Royaume de Roble avec les demi-humains. Conscient de la menace, le Saint Royaume prévoit de faire appel à Momon pour l'aider dans cette guerre. (Pour rappel, ce film fera suite à la quatrième saison",
      flags:{ top:true }
    },
    {
      title:"Les Aventuriers de l'arche de Noé - 2024",
      embed:"https://dood.watch/e/mha2025",
      thumb:"https://image.tmdb.org/t/p/w300/l6EfcYboho6ovq7rcAjeInCati9.jpg",
      desc:"Vini et Tito, deux souris artistes de music-hall, voient leurs rêves de succès tomber à l’eau lorsque la Terre est noyée par le Déluge. Aidés par un coup de pouce du destin, ils réussissent à monter à bord de l’Arche de Noé. Propulsés au beau milieu d’un différend opposant les animaux herbivores et carnivores, Vini et Tito ont la solution parfaite pour apaiser les tensions : un concours de chansons !",
      flags:{ top:true }
    },
    {
      title:"L’Attaque Des Titans : La Dernière Attaque - 2024",
      embed:"https://vidzy.org/embed-61mwfioqmrla.html",
      thumb:"https://image.tmdb.org/t/p/w300/3oL5SWl7tPqaretovPKw9x04CXh.jpg",
      desc:"Dans un monde dystopique ravagé par des titans mangeurs d’hommes, depuis une centaine d’années, les survivants sont forcés de se barricader dans une cité forteresse. Parmi eux, Eren, qui a vu sa mère dévorée par un titan, rêve d’entrer dans le corps d’élite chargé de découvrir l’origine de ces mutants, et les détruire jusqu’au dernier. L’attaque des titans : La dernière attaque réunit les deux derniers épisodes de la série et propose un climax sur grand écran. Après son enrôlement dans un bataillon d’exploration, Eren fait face à un redoutable adversaire et en retire un pouvoir unique, qui lui révèle la vérité sur le monde. À travers celle-ci, il trouve les raisons de mener à bien un projet destiné à éradiquer toute vie sur Terre. Dans ce long métrage final, une équipe d’anciens amis et ennemis d’Eren se battront pour tenter de mettre un terme à sa funeste entreprise.",
      flags:{ top:true }
    },
    {
      title:"Mufasa : Le Roi Lion - 2024",
      embed:"https://vidzy.org/embed-ywc2ow8wako7.html",
      thumb:"https://image.tmdb.org/t/p/w300/6UHzgofq5T4NYp0ba3MelmrLwBq.jpg",
      desc:" Suivez l'épopée de l'improbable ascension du roi bien-aimé de la Terre des Lions. Mufasa est un orphelin seul et perdu jusqu'à ce qu'il rencontre Taka, héritier de sang royal. C'est le début d'un voyage épique au cours duquel ils tenteront d'échapper à un ennemi redoutable, ce qui mettra leurs liens à rude épreuve.",
      flags:{ new:true }
    },
    {
      title:"Miraculous World : Londres, la course contre le temps - 2024",
      embed:"https://vidzy.org/embed-ypfm00doz2kf.html",
      thumb:"https://image.tmdb.org/t/p/w300/imGI4R15rMl8B3wPROwkVuJDsc2.jpg",
      desc:" Afin de sauver l'avenir d'un terrible sort, Marinette devient Chronobug et fait équipe avec Bunnyx pour vaincre un mystérieux adversaire qui voyage dans le temps. Qui est ce nouveau super-méchant, et pourquoi est-il déterminé à dévoiler l'identité secrète de super-héros de Marinette ? Le seul espoir de Marinette est de vaincre son nouvel ennemi pour empêcher la fin de la Coccinelle et des temps !",
    },
     {
      title:"Moi, moche et méchant 4 - 2024",
      embed:"https://vidzy.org/embed-g8cddpx4pe5r.html",
      thumb:"https://image.tmdb.org/t/p/w300/bYovCvLV1RxB0zAR5cXu699P9P7.jpg",
      desc:" Gru, Lucy et les filles, Margo, Édith et Agnès accueillent le petit dernier de la famille, Gru Junior, qui semble n’avoir qu’une passion : faire tourner son père en bourrique. Mais Gru est confronté à un nouvel ennemi, Maxime Le Mal, qui avec l’aide de sa petite amie, la fatale Valentina, va obliger toute la famille à fuir.",
      rating: 8.5,
      flags:{ new:true }
    },
    {
      title:"Les Bad Guys 2 - 2025",
      embed:"https://vidzy.org/embed-6woxfkk6a9ji.html",
      thumb:"https://image.tmdb.org/t/p/w300/opKf1uITVUkm8nteNM54uIgJZKQ.jpg",
      desc:" Les criminels animaliers s'efforcent de se faire à leur nouvelle vie de gentils. Bientôt, ils sont tirés de leur retraite et forcés de faire un dernier travail par une équipe entièrement féminine.",
      rating: 9.5,
    },
     {
      title:"Vaiana 2 - 2024",
      embed:"https://vidzy.org/embed-orpou1z9k1g7.html",
      thumb:"https://image.tmdb.org/t/p/w300/usdwoEwm68cdeMOvGFPwSk9nLTr.jpg",
      desc:"Après avoir reçu une invitation inattendue de ses ancêtres, Vaiana entreprend un périple qui la conduira jusqu’aux eaux dangereuses situées aux confins des mers des îles du Pacifique. Elle y vivra des péripéties comme jamais vécues auparavant.",
    },
    {
      title:"Le Roi Singe - 2023",
      embed:"https://flixeo.xyz/tokyo/newPlayer.php?id=1bcdb313-c09e-41db-b043-2b5274334e97",
      thumb:"https://image.tmdb.org/t/p/w400/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
      desc:" Une comédie familiale bourrée d'action qui suit un singe charismatique et son bâton de combat magique dans une incroyable quête pour vaincre plus de 100 démons, un roi dragon excentrique et, pire encore, le propre ego de notre héros ! En chemin, il rencontrera une jeune villageoise qui lui reprochera son égocentrisme et lui montrera que même un tout petit caillou peut avoir de grands effets sur le monde.",
    }
  ]
};

