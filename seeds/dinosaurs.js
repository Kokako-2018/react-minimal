
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dinosaurs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinosaurs').insert([
        {id: 1, name: 'diplodocus', image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,h_1000,f_auto/diplodocus_whole_amzt6e.jpg', favouriteFood: 'peanut butter'},
        {id: 2, name: 'spinosaurus', image: 'https://vignette.wikia.nocookie.net/walkingwith/images/a/aa/SpinosaurusInfobox.png/revision/latest?cb=20131217214946', favouriteFood: 'TRexz'},
        {id: 3, name: 'velociraptor', image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Velociraptor_u4hjbq.jpg', favouriteFood: 'other dinosaurs'},
        {id: 4, name: 'dilophosaurus', image: 'https://vignette.wikia.nocookie.net/jurassicpark/images/4/47/Jurasisc-world-lights-sounds-figure-dilophosaurus.jpg/revision/latest?cb=20150213175505', favouriteFood: 'lost tourists'},
        {id: 5, name: 'iguanodon', image: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2f/IguanodonInfobox.jpg/revision/latest?cb=20151027225451', favouriteFood: 'chives'},
        {id: 6, name: 'stegosaurus', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqg2mesX3cSI5aN_k14zEXIRN_SOEgv4_xQgfsczlLosCx338t', favouriteFood: 'sausage rolls'},
        {id: 7, name: 'Tyrannosaurus', image: 'https://i.ebayimg.com/images/g/edsAAOSwNkJaJaqp/s-l300.jpg', favouriteFood: 'Ben'},
        {id: 8, name: 'Brachiosaurus', image: 'https://vignette.wikia.nocookie.net/walkingwith/images/1/1c/WWDBook_Brachiosaurus.jpg/revision/latest?cb=20131221214942', favouriteFood: 'fingers'},
        {id: 9, name: 'Triceratops', image: 'http://www.dododex.com/media/creature/triceratops.png', favouriteFood: 'crunchy bugs'},
        {id: 10, name: 'Liopleurodon', image: 'http://images.dinosaurpictures.org/liopleurodon_f0a6.jpg', favouriteFood: 'Mark'},
        {id: 11, name: 'Brontosaurus', image: 'https://cdna.artstation.com/p/assets/images/images/000/643/096/large/mikel-izaguirre-brontosaurus.jpg?1429606623', favouriteFood: 'tree stars'},

      ]);
    });
};
