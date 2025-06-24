



const bip39 = require('bip39');
const edHd = require('ed25519-hd-key');
const StellarSdk = require('stellar-sdk');

let mnemonic = 'various gold moral verify squirrel firm public release cotton rare dove strike pelican lemon exercise daring raccoon scan other rubber random meadow slogan usage';

// Convert mnemonic to lowercase and trim extra spaces
mnemonic = mnemonic.trim().toLowerCase();

(async () => {
  if (!bip39.validateMnemonic(mnemonic)) {
    console.error('❌ Invalid recovery phrase.');
    return;
  }

  const seed = await bip39.mnemonicToSeed(mnemonic);
  const derived = edHd.derivePath("m/44'/314159'/0'", seed); // Pi uses coin type 314159

  const keypair = StellarSdk.Keypair.fromRawEd25519Seed(derived.key);

  console.log('✅ Public Key (G...):', keypair.publicKey());
  console.log('🔐 Secret Key (S...):', keypair.secret());
})();
