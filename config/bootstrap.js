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
  ])
};