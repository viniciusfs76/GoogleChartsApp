import Sheets from 'node-sheets';
export function teste() 
{
  const gs = new Sheets('1qFTfGF-TUGoIHBMwXIt1Jukokh4WYPDSYsPilDgE-24');
  const authData = { client_email:'googlechartsapp@molten-complex-353811.iam.gserviceaccount.com',private_key:'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRUuWCcbaj3J5V\nJmvdMrNCjLzUMsc7RFrZIDFhfBNrkv3V1pJdbMi8PhL5nG5riba1C9r0wGxNu6xu\nF0VfxccBxLnMO7Z5dVMTB0S2ufwQCVLrQJIAoG/yw6MZ7ip6SExwXsy5USqJgL0U\nXAxHHtpSs7QbDX/rEt1o85znW7LUVbNxQraV9yMzI1znkGQWI44M4Er34DPj0Y4e\nVVit3Lj5Fh4yNdpaGslpjXmubqJpqhqUF61yehz0uxeoXhjCbqfVDAxIpJgvDp9y\nnhWdkaPVXQZekgH9541GNHEmw4V2XCdxmsY6TVY1yfyMLEgL0VQGi+Iyh2rvK/jC\n6FLCBdcfAgMBAAECggEANnOFI3dQI93KRcV7rQoOOOVa63eLRx25nJl/ZzOCY1BU\nZAdeGDtmi4IGwhhnF0wmdXfXttVSv12OokF98QC+LF917pyBJslbM0oJ6R2O4MNd\nmmA7VJjI2YGMX27p45+rZH9g3h8XfSYLstE6mHtq+ony9h/8yivrYiPFqrqlKwHR\nCU/RHuhsim1zSzX/ArrgV9QQuWt5mh15QiHFW2Dt6pRYPsEi91Op3zBdxvsryb/8\nsYNBGfrkdupNU9mP4jUmtue20vIs5/mr3RXnfOdkJSyB4Ox2h66McsbEkD/HPgVe\nabpEnegdBN5DnQRaDAaqStdC5uZeuuSFPWr81F+HIQKBgQDDF0uv3545knLFVgh9\nyVuIc7deZq4BwfJRRaK5RB9Ov4qXcqmCgh3iUpa5ppNsm94vHrLcJOiXlXFm9145\nbxt1yDHlP/WSrhKokL98lR/ENZyCtEIVGAmKrY+fyz0IhH7aR0WCwXm9xMkfvZOq\ncjh1+21XLfWtS4mMiEvLA/PGSwKBgQC+sfG/ICrW1SuMmCXWnOkERwFi2zZq9CLX\nRJZa4xCYGb7fPw3jk90H64e7qK+FUT08jPSIRbqSEnJN1qquSbkaJ7lGPWytaOVn\n8hKXq1bMhO6FHCFkqRkj5rcsRmvYwDFS2JfAZ7jAYV+Ek3cOcBj9OEPOIh8sF0cu\nMy+1vrE9/QKBgHxAfggJmDB6wXZFkSrr78w8RvFs3C5qY/a3Lyhn5ri07YP/l05z\nqKzYhP7AxOxLaXsBRlFHgIvqtksqCWzzAr5FPuIPlkxRabjKV+r030KMEp58SAo/\nQPR+Dhdrzfd6y4AiHHdm2i6vApmgmEfab3NVKxJ3Rx2UGorS09L9NWl5AoGAbw2F\n8X40NIRUJj582qzqbplDT2TGHicrGx5QSYGuqkVkCPLZjc0QjYo2s6ya+xLCjL6x\nsaKZ8nNXqcj4ASPh7j9wAF3JKnvKDWzGMxmPJO/NUCt/rvVjNKspxVkFeWcD0nFc\nfqpox3BthfGzBe92PhFEO4lXif/MbjVU9Yyl/6kCgYEAsVkBcqujN3yIzZn1ePQ2\n9TEckJ85yvZmzYksH3B6SoQ4L4LA8EFWdV4nxOQpRuj2CqEhE/y5by3qQpvIvIPQ\nwBz9Si4iZsKBtL1QdFURnbnE/On35vWtMw/YKXTjCGOC1UbPOarlghWBjpL6//7z\n1x4BLQatewPOZnhOTXwhFv8=\n' }
  gs.authorizeJWT(authData)
  .then(() => gs.tables('Formats!A1:E3'))
  .then((table) => {
    console.log(table.headers);
    console.log(table.formats);
    console.log(table.rows);
  })
  .catch((err) => {
    console.error(err);
  });
}