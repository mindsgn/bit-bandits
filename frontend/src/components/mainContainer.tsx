'use client';

import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useAssets } from 'store/assets';
import { Button } from './button';
import { useDisclosure } from '@chakra-ui/react';
import AssetModal from './AddAssetModal';
import { AssetDetails } from './AssetDetails';
import { useAuth } from 'store/auth';
import { useRouter } from 'next/navigation';

const transactionHistory = [
  {
    title: "Withdraw:",
    date: new Date(),
    amount: "- R 600.00"
  },
  {
    title: "Deposit: ",
    date: new Date(),
    amount: "+ R 900.00"
  },
]

export type MainContainerProp = {};

function MainContainer({}: MainContainerProp) {
  const router = useRouter();
  const [assetModal, setAssetModal] = useState<boolean>(false);
  const [current, setCurrent] = useState<any>({
    _id: '',
    name: '',
    image: ''
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authState = useAuth();
  const state = useAssets();
  //@ts-expect-error
  const { getAssets, assets, total } = state;
  //@ts-expect-error
  const { logout, auth } = authState;


  useEffect(() => {
    if (!auth) {
      router.push('/login');
    }
  }, [auth, router]);

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <Box
      flex={1}
      display={'flex'}
      height={'95vh'}
      width={'50vw'}
      padding={4}
      marginLeft={[0, 0, 0, 4]}
      flexDirection={'column'}
    >
      <Box
        display="flex"
        flexDir={['column', 'column', 'row', 'row']}
        cursor="pointer"
      >
        <Box
          padding={2}
          borderRadius={10}
          minW={200}
          h={150}
          background='#1E1E1E'
        >
          <Text 
            fontSize={52} 
            fontFamily={'heavy'} 
            color='white'
          >
            R {total}
          </Text>
          <Text 
            marginTop={-5} 
            fontSize={20} 
            fontFamily={'bold'} 
            color={'#ddd'}
          >
            Total Value
          </Text>
        </Box>
      </Box>
      <Box>
          <Box
            marginY={4}>
            <Text
              fontSize={40} 
              fontFamily={'heavy'} 
              color="white"
            >
              Transaction History
            </Text>
          </Box>
          <Box>
            {
              transactionHistory.map((item: any) => {
                return(
                  <Box
                    marginY={2}
                    cursor='pointer'
                    background='#1E1E1E'
                    padding={2}
                    width='100%'
                  >
                    <Text 
                      fontSize={21}
                      color='white'
                      fontFamily={'heavy'}
                    >
                      {item.title}
                    </Text>
                    <Text 
                      fontSize={21} 
                      fontFamily={'heavy'}
                      color='white'
                    >
                      {item.amount}
                    </Text>
                  </Box>
                )
              })
            }
          </Box>
        </Box>
    </Box>
  );
}

export default MainContainer;
