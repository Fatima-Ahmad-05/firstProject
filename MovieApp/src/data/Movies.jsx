
import cars3 from "../images/cars3.jpg";
import cars2 from "../images/cars2.jpg";
import kungfupanda2 from "../images/kungfupanda2.jpg";
import pussinboots from "../images/pussinboots.jpg";
import planes from "../images/planes.jpg";
import madagascar from "../images/madagascar.jpg";
import coc from "../images/coc.jpg";
import cars from "../images/cars.jpeg";
import toystory1 from "../images/toystory1.webp";
import brave from "../images/brave.jpg";
import acrossspiderverse from "../images/acrossspiderverse.jpg";
import rio from "../images/rio.jpg";
import incredibles2 from "../images/incredibles2.jpg";
import frozen2 from "../images/frozen2.jpg";
import toystory2 from "../images/toystory2.jpg";
import beemovie from "../images/beemovie.jpg";
import home from "../images/home.jpg";
import charlie from "../images/charlie.jpg";
import onward from "../images/onward.jpg";
import tinkerbell5 from "../images/tinkerbell5.jpg";
import nemo from "../images/nemo.jpg";
import legomovie2 from "../images/legomovie2.jpg";
import walle from "../images/walle.jpg";
import sing2 from "../images/sing2.jpg";
import overhedge from "../images/overhedge.jpg";
import dory from "../images/dory.jpg";
import frozen from "../images/frozen.jpg";
import epic from "../images/epic.jpeg";
import legomovie from "../images/legomovie.jpg";
import toystory3 from "../images/toystory3.jpg";
import rio2 from "../images/rio2.jpg";
import sing from "../images/sing.jpg";
import encanto from "../images/encanto.jpg";
import croods from "../images/croods.jpg";
import intospiderverse from "../images/intospiderverse.jpg";
import paddington2 from "../images/paddington 2.jpg";
import wreckitralph from "../images/wreckitralph.jpg";
import dragon from "../images/dragon.jpg";
import tangled from "../images/tangled.jpg";
import paddington from "../images/paddingon.jpg";
import bighero6 from "../images/bighero6.jpeg";
import mu from "../images/mu.jpg";
import bugslife from "../images/bugslife.jpg";
import moana from "../images/moana.jpg";
import riseofguardians from "../images/riseofguardians.jpg";
import tinkerbell2 from "../images/tinkerbell2.jpg";
import tinkerbell4 from "../images/tinkerbell4.jpg";
import incredibles1 from "../images/incredibles1.jpg";
import bolt from "../images/bolt.jpg";
import insideOut from "../images/insideOut.jpg";
import insideOut2 from "../images/insideOut2.jpg";
import tinkerbell3 from "../images/tinkerbell3.jpg";
import kungfupanda from "../images/kungfupanda.jpg";
import tintin from "../images/tintin.jpg";
import muInc from "../images/mu_inc.jpeg";
import tinkerbell6 from "../images/tinkerbell6.jpg";
import wildrobot from "../images/wildrobot.jpg";
import turbo from "../images/turbo.jpg";
import wreckitralph2 from "../images/wreckitralph2.jpg";
import storks from "../images/storks.jpg";

function Movies(){

const movies=[    //arrray of dictionaries movies
  {id:1,title:"Inside Out", release_date:2015, url:insideOut,studio:d},
  {id:2,title:"Bolt", release_date:2008, url:bolt,studio:d},
  {id:3,title:"Tinker Bell: Secret of the Wings", release_date:2012, url:tinkerbell4,studio:d},
  {id:4,title:"Tinker Bell and the Lost Treasure", release_date:2009, url:tinkerbell2,studio:d},
  {id:5,title:"Rise of the Guardians", release_date:2012, url:riseofguardians,studio:dr},
  {id:6,title:"Toy Story", release_date:1995, url:toystory1,studio:p},
  {id:7,title:"Toy Story 2", release_date:1999, url:toystory2,studio:p},
  {id:8,title:"Bee Movie", release_date:2007, url:beemovie,studio:dr},
  {id:9,title:"Inside Out 2", release_date:2024, url:insideOut2,studio:dp},
  {id:10,title:"Spider-Man: Into the Spider-Verse", release_date:2018, url:intospiderverse},
  {id:11,title:"A Bug's Life", release_date:1998, url:bugslife,studio:dp},
  {id:12,title:"Monsters University", release_date:2013, url:mu,studio:dp},
  {id:13,title:"The Lego Movie", release_date:2014, url:legomovie},
  {id:14,title:"Finding Dory", release_date:2016, url:dory,studio:dp},
  {id:15,title:"Puss in Boots", release_date:2011, url:pussinboots,studio:dr},
  {id:16,title:"Frozen", release_date:2013, url:frozen,studio:d},
  {id:17,title:"Frozen 2", release_date:2019, url:frozen2,studio:d},
  {id:18,title:"Incredibles 2", release_date:2018, url:incredibles2,studio:dp},
  {id:19,title:"Over the Hedge", release_date:2006, url:overhedge,studio:dr},
  {id:20,title:"Toy Story 3", release_date:2010, url:toystory3,studio:p},
  {id:21,title:"Tinker Bell and the Pirate Fairy", release_date:2014, url:tinkerbell5,studio:d},
  {id:22,title:"Planes", release_date:2013, url:planes,studio:d},
  {id:23,title:"Madagascar", release_date:2005, url:madagascar,studio:dr},
  {id:24,title:"Coco", release_date:2017, url:coc,studio:d},
  {id:25,title:"Cars", release_date:2006, url:cars,studio:d},
  {id:26,title:"Brave", release_date:2012, url:brave,studio:dp},
  {id:27,title:"Spider-Man: Across the Spider-Verse", release_date:2023, url:acrossspiderverse},
  {id:28,title:"Rio", release_date:2011, url:rio},
  {id:29,title:"Home", release_date:2015, url:home,studio:dr},
  {id:30,title:"Charlie & the Chocolate Factory", release_date:2005, url:charlie},
  {id:31,title:"Onward", release_date:2020, url:onward,studio:dp},
  {id:32,title:"Finding Nemo", release_date:2003, url:nemo,studio:dp},
  {id:33,title:"The Lego Movie 2: The Second Part", release_date:2019, url:legomovie2},
  {id:34,title:"WALL-E", release_date:2008, url:walle,studio:dp},
  {id:35,title:"Sing 2", release_date:2021, url:sing2},
  {id:36,title:"Epic", release_date:2013, url:epic},
  {id:37,title:"Rio 2", release_date:2014, url:rio2},
  {id:38,title:"Sing", release_date:2016,url:sing},
  {id:39,title:"Encanto", release_date:2021, url:encanto,studio:d},
  {id:40,title:"The Croods", release_date:2013, url:croods,studio:dr},
  {id:41,title:"Paddington 2", release_date:2017, url:paddington2},
  {id:42,title:"Wreck-It Ralph", release_date:2012, url:wreckitralph,studio:d},
  {id:43,title:"How to Train Your Dragon", release_date:2010, url:dragon,studio:dr},
  {id:44,title:"Tangled", release_date:2010, url:tangled,studio:d},
  {id:45,title:"Paddington", release_date:2014, url:paddington},
  {id:46,title:"Big Hero 6", release_date:2014, url:bighero6,studio:d},
  {id:47,title:"Moana", release_date:2016, url:moana,studio:d},
  {id:48,title:"The Incredibles", release_date:2004, url:incredibles1,studio:dp},
  {id:49,title:"Tinker Bell & the Great Fairy Rescue", release_date:2010, url:tinkerbell3,studio:d},
  {id:50,title:"Kung Fu Panda", release_date:2008, url:kungfupanda,studio:dr},
  {id:51,title:"The Adventures of Tintin", release_date:2011, url:tintin},
  {id:52,title:"Monsters, Inc.", release_date:2001, url:muInc},
  {id:53,title:"Incredibles",release_date:2008,url:incredibles1,studio:dp},
  {id:54, title:"Tinkerbell and the Legend of the Neverbeast",release_date:2014,url:tinkerbell6,studio:d},
  {id:55, title: "Kungfu Panda 2",release_date:2011,url:kungfupanda2,studio:dr},
  {id:56,title:"Wild Robot",release_date:2024,url:wildrobot,studio:dr},
  {id:57,title:"Ralph Wrecks the Internet",release_date:2018,url:wreckitralph2,studio:d},
  {id:58,title:"Storks",release_date:2016,url:storks},
  {id:59,title:"Cars 2",release_date:2011,url:cars2,studio:dp},
  {id:60,title:"Cars 3",release_date:2017,url:cars3,studio:dp},
  {id:61,title:"Turbo",release_date:2013,url:turbo,studio:dr}
]
}

export default Movies;