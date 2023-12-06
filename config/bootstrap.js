/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
  return;
  }
  
  await User.createEach([
  { emailAddress: 'markus.eiglsperger@htwg-konstanz.de', fullName: 'Markus Eiglsperger', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('123abc') },
  { emailAddress: 'werner@werner.de', fullName: 'Werner', isSuperAdmin: false, password: await sails.helpers.passwords.hashPassword('123abc') },
  ]);
  await Category.createEach([
    { name: 'Vorspeisen', ordernumber: 10}, { name: 'Warme Mahlzeiten', ordernumber: 20}  ,
  ]);

  let categoryVorspeisen = await Category.findOne({name: "Vorspeisen"})
  let categoryWarm = await Category.findOne({name: "Warme Mahlzeiten"})

  await Meal.createEach([
    { name: 'Gemischter Salat', price: 5, description: "Regionales Gemüße", category: categoryVorspeisen.id}, 
    { name: 'Schnitzel', price: 12, description: "Mit Pommes und Salat", category: categoryWarm.id},
    { name: 'Pommes', price: 4, description: "Mit Ketchup und Majo", category: categoryWarm.id},
  ]);

};