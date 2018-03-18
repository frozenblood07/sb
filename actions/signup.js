const signupObject = {
  "www.shopback.sg": "SGD 5",
  "www.shopback.my": "MYR 10",
  "www.shopback.co.id": "IDR 25.000",
  "www.shopback.com.tw": "TWD 1000",
  "www.myshopback.co.th": "THB 500",
  "www.myshopback.com": "USD 5"
};

/**
* returns the signup bonus which is based on domain
*
* @param (String | Array) domain
* @return String
*/
const signup = domain => {
  domain = Array.isArray(domain) ? domain[0] : domain;

  return domain in signupObject
    ? "Award bonus: " + signupObject[domain]
    : "Invalid domain.";
};

module.exports = signup;
