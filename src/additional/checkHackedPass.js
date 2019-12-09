/*
 * Check Hacked Pass (checkHackedPass.js)
 * This plugin prevents passwords that are founded on the top 100K hacked passwords list.
 * This list was released by Britain’s National Cyber Security Center (NCSC) in collaboration with the Have I Been Pwned website.
 * Contribution made by Hacware, Inc. www.hacware.com to help website authentication prevent the use of these passwords.
 * Pre Reqs - jQuery Validation Plugin - v1.19.1 or later
 * To use add CheckPasswordBanned: true to your password rule
 */
// 100K Top hacked passwords
jQuery.validator.addMethod("CheckPasswordBanned", function(value, element) {
  //search list
  var isPassVal = true;
  if (bannedPasswordList[value])
  	   isPassVal = false;

  return this.optional(element) || isPassVal;
}, "This password is banned. Please specify a stronger password.");