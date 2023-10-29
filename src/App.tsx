// src/App.tsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { sepolia, goerli, mainnet, arbitrum, optimism } from 'wagmi/chains';

const projectId = '2a64b400e3b8ddc7897981e71598c85c'
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons:['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [sepolia, goerli, mainnet, arbitrum, optimism]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  const [count, setCount] = useState(0);
  return (
    <WagmiConfig config={wagmiConfig}>
      <Box>
      <w3m-button></w3m-button>
        <Typography variant="h1" sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Vite + React
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => setCount(count => count + 1)}
            sx={{ marginBottom: '20px' }}
          >
            Count is {count}
          </Button>
          <Typography variant="body1">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Click here to learn more
        </Typography>
      </Box>
    </WagmiConfig>
  );
}

export default App;
