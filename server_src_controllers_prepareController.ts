import axios from 'axios';

export async function prepareBridge(body: any) {
  // Validate required fields
  const { fromChainId, toChainId, amount, fromAddress } = body;
  if (!fromChainId || !toChainId || !amount || !fromAddress) {
    throw new Error('missing required parameters');
  }

  // For now return a minimal prepared payload for the frontend wormhole flow
  return {
    ok: true,
    prepared: {
      fromChainId,
      toChainId,
      amount,
      fromAddress,
      note: 'This is a server-prepared payload. Server does not sign or relay transactions.'
    }
  };
}