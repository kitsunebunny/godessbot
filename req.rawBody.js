 const signature = req.get('X-Signature-Ed25519');
 const timestamp = req.get('X-Signature-Timestamp');
 const isValidRequest = verifyKey(req.rawBody, signature, timestamp, 'MY_CLIENT_PUBLIC_KEY');
 if (!isValidRequest) {
   return res.status(401).end('Bad request signature');
 }
