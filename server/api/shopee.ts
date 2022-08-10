import { sha256, sha224 } from 'js-sha256';
export default defineEventHandler(async (event) => {
  const appId = '11317240145';
  const secret = 'XFUQYZE2ZUPLZDWR2INUL7TYNSYRZ5VD';
  const timeStamp = Math.floor(new Date().getTime() / 1000);
  const queryReal = `{\n  productOfferV2(keyword: \"meja makan\", sortType: 5,limit:10,page:1) {\n    nodes {\n      itemId\n      productName\n      imageUrl\n      offerLink\n      price\n      shopName\n      sales\n      commissionRate\n      periodStartTime\n      periodEndTime\n      \n    }\n  }\n}\n`;
  const jsonPayload = `{"query":"{\n  productOfferV2(keyword: \"meja makan\", sortType: 5,limit:10,page:1) {\n    nodes {\n      itemId\n      productName\n      imageUrl\n      offerLink\n      price\n      shopName\n      sales\n      commissionRate\n      periodStartTime\n      periodEndTime\n      \n    }\n  }\n}\n","variables":null,"operationName":null}`;
  const signature = sha256(
    appId + timeStamp + JSON.stringify(queryReal) + secret
  );
  const authHeader = `SHA256 Credential=${appId}, Timestamp=${timeStamp}, Signature=${signature}`;
  // SHA256 Credentials=11317240145, Timestamp=1660124794, Signature=2cb85c412cab2248ff63850d78dbece8634d80bcf501f3dec35d487598b8c058
  // SHA256 Credential=11317240145, Timestamp=1660120121, Signature=3ff88377f3c829c410a444c5192dcf07a94b16ab9169b5795c65a235820e64be
  //
  const result = await $fetch.raw(
    'https://cors.livestreamapi.xyz/https://open-api.affiliate.shopee.co.id/graphql',
    {
      method: 'POST',
      // body: jsonPayload,
      // body: JSON.stringify(jsonPayload),
      body: {
        query: queryReal,
        variables: null,
        operationName: null,
      },
      headers: {
        'content-type': 'application/json',
        authorization: authHeader,
      },
    }
  );
  return result
});
