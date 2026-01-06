import { Router } from 'express';

const router = Router();

// Minimal chain metadata derived from bridge.html options
const chains = [
  { id: 16661, name: '0G Main Net', symbol: '0G' },
  { id: 43114, name: 'Avalanche C-Chain', symbol: 'AVAX' },
  { id: 8453, name: 'Base Main Net', symbol: 'ETH' },
  { id: 80094, name: 'Berachain Main Net', symbol: 'BERA' },
  { id: 200901, name: 'Bitlayer Main Net', symbol: 'BL' },
  { id: 56, name: 'BNB Smart Chain', symbol: 'BNB' },
  { id: 60808, name: 'BOB Main Net', symbol: 'BOB' },
  { id: 3637, name: 'Botanix Main Net', symbol: 'BTX' },
  { id: 484, name: 'Camp Main Net', symbol: 'CAMP' },
  { id: 11116, name: 'Core Blockchain', symbol: 'CORE' },
  { id: 1, name: 'Ethereum Main Net', symbol: 'ETH' },
  { id: 43111, name: 'Hemi Main Net', symbol: 'HEMI' },
  { id: 6985385, name: 'Humanity Main Net', symbol: 'HUM' },
  { id: 999, name: 'HyperEVM Main Net', symbol: 'HYP' },
  { id: 1776, name: 'Injective Main Net', symbol: 'INJ' },
  { id: 57073, name: 'Ink Main Net', symbol: 'INK' },
  { id: 747474, name: 'Katana Main Net', symbol: 'KAT' },
  { id: 232, name: 'Lens Main Net', symbol: 'LENS' },
  { id: 59144, name: 'Linea Main Net', symbol: 'ETH' },
  { id: 5000, name: 'Mantle Main Net', symbol: 'MNT' },
  { id: 1248816, name: 'Mitosis Main Net', symbol: 'MIT' },
  { id: 143, name: 'Monad Main Net', symbol: 'MON' },
  { id: 47763, name: 'Neo X Main Net', symbol: 'NEOX' },
  { id: 10, name: 'Optimism Main Net', symbol: 'ETH' },
  { id: 9745, name: 'Plasma Main Net', symbol: 'PLA' },
  { id: 98866, name: 'Plume Main Net', symbol: 'PLM' },
  { id: 137, name: 'Polygon Main Net', symbol: 'MATIC' },
  { id: 534352, name: 'Scroll Main Net', symbol: 'SCR' },
  { id: 5031, name: 'Somnia Main Net', symbol: 'SOM' },
  { id: 1868, name: 'Soneium Main Net', symbol: 'SON' },
  { id: 146, name: 'Sonic Main Net', symbol: 'SONIC' },
  { id: 50104, name: 'Sophon Main Net', symbol: 'SPH' },
  { id: 1514, name: 'Story Main Net', symbol: 'STORY' },
  { id: 55244, name: 'Superposition Main Net', symbol: 'SPOS' },
  { id: 167000, name: 'Taiko Alethia Main Net', symbol: 'TKO' },
  { id: 130, name: 'Unichain Main Net', symbol: 'UNI' },
  { id: 480, name: 'World Chain Main Net', symbol: 'WORLD' },
  { id: 196, name: 'X Layer Main Net', symbol: 'XL' },
  { id: 1440000, name: 'XRPL EVM Main Net', symbol: 'XRP' },
  { id: 324, name: 'zkSync Era Main Net', symbol: 'ETH' },
  { id: 7777777, name: 'Zora Main Net', symbol: 'ZORA' }
];

router.get('/', (req, res) => {
  res.json({ chains });
});

export default router;