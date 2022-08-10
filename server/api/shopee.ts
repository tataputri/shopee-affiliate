import { sha256, sha224 } from 'js-sha256';
export default defineEventHandler(async (event) => {
  const appId = '11317240145';
  const secret = 'XFUQYZE2ZUPLZDWR2INUL7TYNSYRZ5VD';
  const timeStamp = Math.floor(new Date().getTime() / 1000);
  const jsonPayload = `{"query":"{\n  productOfferV2(keyword: \"%s\", sortType: %d,limit:%d,page:%d) {\n    nodes {\n      itemId\n      productName\n      imageUrl\n      offerLink\n      price\n      shopName\n      sales\n      commissionRate\n      periodStartTime\n      periodEndTime\n      \n    }\n  }\n}\n","variables":null,"operationName":null}`
  const signature = sha256(appId + timeStamp + JSON.stringify(jsonPayload) + secret);
  const authHeader = `SHA256 Credentials=${appId}, Timestamp=${timesStamp}, Signature=${signature}`;

console.log(jsonPayload)

});
