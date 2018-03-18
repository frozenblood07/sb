const redeemObject = {
  "www.shopback.sg": "https://www.shopback.sg",
  "www.shopback.my": "https://www.shopback.my",
  "www.shopback.co.id": "https://www.shopback.co.id",
  "www.shopback.com.tw": "https://www.shopback.com.tw",
  "www.myshopback.co.th": "https://www.myshopback.co.th",
  "www.shopback.com": "https://www.shopback.com"
};

/**
* returns the url to redirect user to redeem cashback which is
* based on domain
*
* @param (String | Array) domain
* @return String
*/
const redeem = domain => {
  domain = Array.isArray(domain) ? domain[0] : domain;

  return domain in redeemObject
    ? "Visit " + redeemObject[domain] + " to start earning cashback!"
    : "Invalid domain.";
};

module.exports = redeem;
